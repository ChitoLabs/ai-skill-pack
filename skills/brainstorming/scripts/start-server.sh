#!/usr/bin/env bash
set -euo pipefail

# Start the optional brainstorming server on loopback.
# Foreground is the safe default. Background requires explicit consent flags.

umask 077

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd -P)"
SERVER_SCRIPT="${SCRIPT_DIR}/server.cjs"
PROJECT_DIR=""
BACKGROUND="false"
BACKGROUND_CONSENT="false"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --project-dir)
      [[ $# -ge 2 ]] || { echo '{"error":"Missing project directory"}'; exit 1; }
      PROJECT_DIR="$2"
      shift 2
      ;;
    --foreground|--no-daemon)
      BACKGROUND="false"
      shift
      ;;
    --background)
      BACKGROUND="true"
      shift
      ;;
    --consent-background)
      BACKGROUND_CONSENT="true"
      shift
      ;;
    *)
      echo "{\"error\":\"Unsupported argument: $1\"}"
      exit 1
      ;;
  esac
done

if [[ "$BACKGROUND" == "true" && "$BACKGROUND_CONSENT" != "true" ]]; then
  echo '{"error":"Background mode requires --background and --consent-background"}'
  exit 1
fi

if [[ "$BACKGROUND" != "true" && "$BACKGROUND_CONSENT" == "true" ]]; then
  echo '{"error":"--consent-background is valid only with --background"}'
  exit 1
fi

RUN_ID="$(node -e "console.log(require('node:crypto').randomUUID())")"
SESSION_ID="$$-$(date +%s)-${RUN_ID}"
if [[ -n "$PROJECT_DIR" ]]; then
  SESSION_DIR="${PROJECT_DIR}/.brainstorm-sessions/${SESSION_ID}"
else
  SESSION_DIR="${TMPDIR:-/tmp}/brainstorm-${SESSION_ID}"
fi

STATE_DIR="${SESSION_DIR}/state"
IDENTITY_FILE="${STATE_DIR}/process.identity"
LOG_FILE="${STATE_DIR}/server.log"
mkdir -p "${SESSION_DIR}/content" "$STATE_DIR"

if [[ "$BACKGROUND" != "true" ]]; then
  echo "{\"type\":\"server-mode\",\"mode\":\"foreground\",\"run_id\":\"$RUN_ID\",\"session_dir\":\"$SESSION_DIR\"}"
  exec env BRAINSTORM_DIR="$SESSION_DIR" BRAINSTORM_HOST="127.0.0.1" BRAINSTORM_URL_HOST="localhost" node "$SERVER_SCRIPT" --brainstorm-run-id "$RUN_ID"
fi

env BRAINSTORM_DIR="$SESSION_DIR" BRAINSTORM_HOST="127.0.0.1" BRAINSTORM_URL_HOST="localhost" node "$SERVER_SCRIPT" --brainstorm-run-id "$RUN_ID" > "$LOG_FILE" 2>&1 &
SERVER_PID=$!
PROCESS_START="$(ps -p "$SERVER_PID" -o lstart= 2>/dev/null | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
PROCESS_ARGS="$(ps -p "$SERVER_PID" -o args= 2>/dev/null || true)"

if [[ -z "$PROCESS_START" || "$PROCESS_ARGS" != *"$SERVER_SCRIPT"* || "$PROCESS_ARGS" != *"$RUN_ID"* ]]; then
  echo '{"error":"Unable to establish background process identity; refusing to signal unknown process"}'
  exit 1
fi

IDENTITY_TMP="${IDENTITY_FILE}.tmp.$$"
{
  printf 'version=1\n'
  printf 'pid=%s\n' "$SERVER_PID"
  printf 'run_id=%s\n' "$RUN_ID"
  printf 'process_start=%s\n' "$PROCESS_START"
  printf 'server_script=%s\n' "$SERVER_SCRIPT"
  printf 'session_dir=%s\n' "$SESSION_DIR"
} > "$IDENTITY_TMP"
mv "$IDENTITY_TMP" "$IDENTITY_FILE"

for _ in {1..50}; do
  if grep -q "server-started" "$LOG_FILE" 2>/dev/null; then
    grep "server-started" "$LOG_FILE" | head -1
    echo "{\"type\":\"background-identity\",\"run_id\":\"$RUN_ID\",\"pid\":$SERVER_PID,\"process_start\":\"$PROCESS_START\",\"session_dir\":\"$SESSION_DIR\",\"identity_file\":\"$IDENTITY_FILE\"}"
    disown "$SERVER_PID" 2>/dev/null || true
    exit 0
  fi
  CURRENT_START="$(ps -p "$SERVER_PID" -o lstart= 2>/dev/null | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' || true)"
  CURRENT_ARGS="$(ps -p "$SERVER_PID" -o args= 2>/dev/null || true)"
  if [[ -z "$CURRENT_START" || "$CURRENT_START" != "$PROCESS_START" ||
        "$CURRENT_ARGS" != *"$SERVER_SCRIPT"* || "$CURRENT_ARGS" != *"$RUN_ID"* ]]; then
    echo '{"error":"Server exited before startup completed"}'
    exit 1
  fi
  sleep 0.1
done

CURRENT_ARGS="$(ps -p "$SERVER_PID" -o args= 2>/dev/null || true)"
CURRENT_START="$(ps -p "$SERVER_PID" -o lstart= 2>/dev/null | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' || true)"
if [[ "$CURRENT_START" == "$PROCESS_START" && "$CURRENT_ARGS" == *"$SERVER_SCRIPT"* && "$CURRENT_ARGS" == *"$RUN_ID"* ]]; then
  VERIFIED_ARGS="$(ps -p "$SERVER_PID" -o args= 2>/dev/null || true)"
  VERIFIED_START="$(ps -p "$SERVER_PID" -o lstart= 2>/dev/null | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' || true)"
  if [[ "$VERIFIED_START" == "$PROCESS_START" && "$VERIFIED_ARGS" == "$CURRENT_ARGS" ]]; then
    kill "$SERVER_PID" 2>/dev/null || true
  fi
fi
echo '{"error":"Server failed to start within 5 seconds"}'
exit 1
