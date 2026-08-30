#!/usr/bin/env bash
set -euo pipefail

# Stop only the background process whose complete execution identity matches.

SESSION_DIR="${1:-}"
if [[ -z "$SESSION_DIR" ]]; then
  echo '{"error":"Usage: stop-server.sh <session_dir>"}'
  exit 1
fi

STATE_DIR="${SESSION_DIR}/state"
IDENTITY_FILE="${STATE_DIR}/process.identity"
if [[ ! -f "$IDENTITY_FILE" || -L "$IDENTITY_FILE" ]]; then
  echo '{"status":"failed","error":"Missing or ambiguous process identity"}'
  exit 1
fi

mapfile -t identity_lines < "$IDENTITY_FILE"
if [[ ${#identity_lines[@]} -ne 6 ]]; then
  echo '{"status":"failed","error":"Invalid process identity record"}'
  exit 1
fi

version="${identity_lines[0]#version=}"
pid="${identity_lines[1]#pid=}"
run_id="${identity_lines[2]#run_id=}"
process_start="${identity_lines[3]#process_start=}"
server_script="${identity_lines[4]#server_script=}"
recorded_session="${identity_lines[5]#session_dir=}"

if [[ "${identity_lines[0]}" != "version=$version" || "$version" != "1" ||
      "${identity_lines[1]}" != "pid=$pid" || ! "$pid" =~ ^[0-9]+$ ||
      "${identity_lines[2]}" != "run_id=$run_id" || ! "$run_id" =~ ^[0-9a-fA-F-]{36}$ ||
      "${identity_lines[3]}" != "process_start=$process_start" || -z "$process_start" ||
      "${identity_lines[4]}" != "server_script=$server_script" || -z "$server_script" ||
      "${identity_lines[5]}" != "session_dir=$recorded_session" || "$recorded_session" != "$SESSION_DIR" ]]; then
  echo '{"status":"failed","error":"Invalid or stale process identity"}'
  exit 1
fi

if [[ ! -f "$server_script" || "$(cd "$(dirname "$server_script")" && pwd -P)/$(basename "$server_script")" != "$server_script" ]]; then
  echo '{"status":"failed","error":"Server script identity is no longer valid"}'
  exit 1
fi

current_start="$(ps -p "$pid" -o lstart= 2>/dev/null | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' || true)"
current_args="$(ps -p "$pid" -o args= 2>/dev/null || true)"
if [[ -z "$current_start" || "$current_start" != "$process_start" ||
      "$current_args" != *"$server_script"* || "$current_args" != *"$run_id"* ]]; then
  echo '{"status":"failed","error":"Process identity mismatch; refusing to signal"}'
  exit 1
fi

# Revalidate immediately before signaling to fail closed on stale or reused PIDs.
verified_start="$(ps -p "$pid" -o lstart= 2>/dev/null | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' || true)"
verified_args="$(ps -p "$pid" -o args= 2>/dev/null || true)"
if [[ "$verified_start" != "$process_start" || "$verified_args" != "$current_args" ]]; then
  echo '{"status":"failed","error":"Process changed during identity validation"}'
  exit 1
fi

kill "$pid" 2>/dev/null || {
  echo '{"status":"failed","error":"Unable to signal verified process"}'
  exit 1
}

for _ in {1..50}; do
  if ! kill -0 "$pid" 2>/dev/null; then
    rm -f "$IDENTITY_FILE"
    echo "{\"status\":\"stopped\",\"run_id\":\"$run_id\",\"session_dir\":\"$SESSION_DIR\"}"
    exit 0
  fi
  sleep 0.1
done

echo '{"status":"failed","error":"Verified process did not stop gracefully"}'
exit 1
