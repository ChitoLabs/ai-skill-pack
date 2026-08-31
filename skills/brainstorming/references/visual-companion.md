# Optional Visual Companion

Use this local server only when visual comparison materially improves brainstorming.

## Consent Gate

Before starting it:

1. Explain that it launches a local process and stores session data.
2. Obtain explicit user consent for the process and chosen data directory.
3. Use loopback only.
4. Report the selected port, URL, session directory, and stop command.

## Start

Use the available shell capability to run `../scripts/start-server.sh` in its default foreground mode. With an approved project directory, session data may persist there; otherwise the script creates an isolated temporary session.

Background mode is exceptional and requires both `--background` and `--consent-background` in the invocation. Use it only when the user explicitly consents and the runtime can retain the returned run identity for safe shutdown. Do not modify ignore files or create persistent project data without approval.

## Use

Present one focused visual question at a time. Keep written requirements and tradeoff analysis authoritative; the visual companion supports discussion but does not decide or persist workflow state.

## Stop

For an explicitly approved background run, call `scripts/stop-server.sh <session_dir>` using the returned session directory. The stop script validates the run identifier, process start signature, server command, and canonical script path before sending a graceful termination signal. It fails closed on missing, stale, or ambiguous identity. It does not force termination or recursively delete session data.

Report the final process status and retained data location. Clean up only resources created by this execution and only with separate approval.
