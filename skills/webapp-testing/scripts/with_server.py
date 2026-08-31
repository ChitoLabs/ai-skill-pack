#!/usr/bin/env python3
"""
Start one or more servers, wait for them to be ready, run a command, then clean up.

Usage:
    # Single server
    python scripts/with_server.py --server "npm run dev" --port 5173 -- python automation.py
    python scripts/with_server.py --server "npm start" --port 3000 -- python test.py

    # Multiple servers
    python scripts/with_server.py \
      --server "cd backend && python server.py" --port 3000 \
      --server "cd frontend && npm run dev" --port 5173 \
      -- python test.py
"""

import subprocess
import socket
import time
import sys
import shlex
import argparse

UNSUPPORTED = ("||", ";", "|", ">", "<", "`", "$(", "&")


def parse_server_command(raw):
    """Split a --server string into (argv, cwd) without invoking a shell.

    Supports the two documented forms:
        "npm run dev"
        "cd backend && python server.py"

    Any other shell construct is rejected rather than handed to a shell, so the
    server command is always executed as an argument list.
    """
    text = raw.strip()
    cwd = None
    if text.startswith("cd "):
        head, sep, tail = text.partition("&&")
        if not sep:
            raise ValueError(
                "a 'cd' server command must be written as: cd <dir> && <command>"
            )
        parts = shlex.split(head.strip())
        if len(parts) != 2:
            raise ValueError("expected exactly one directory after 'cd'")
        cwd = parts[1]
        text = tail.strip()

    for token in UNSUPPORTED:
        if token in text:
            raise ValueError(
                "unsupported shell syntax {!r}; write the server command as a plain "
                "command, optionally prefixed with 'cd <dir> &&'".format(token)
            )

    argv = shlex.split(text)
    if not argv:
        raise ValueError("empty server command")
    return argv, cwd


def is_server_ready(port, timeout=30):
    """Wait for server to be ready by polling the port."""
    start_time = time.time()
    while time.time() - start_time < timeout:
        try:
            with socket.create_connection(('localhost', port), timeout=1):
                return True
        except (socket.error, ConnectionRefusedError):
            time.sleep(0.5)
    return False


def main():
    parser = argparse.ArgumentParser(description='Run command with one or more servers')
    parser.add_argument('--server', action='append', dest='servers', required=True, help='Server command (can be repeated)')
    parser.add_argument('--port', action='append', dest='ports', type=int, required=True, help='Port for each server (must match --server count)')
    parser.add_argument('--timeout', type=int, default=30, help='Timeout in seconds per server (default: 30)')
    parser.add_argument('command', nargs=argparse.REMAINDER, help='Command to run after server(s) ready')

    args = parser.parse_args()

    # Remove the '--' separator if present
    if args.command and args.command[0] == '--':
        args.command = args.command[1:]

    if not args.command:
        print("Error: No command specified to run")
        sys.exit(1)

    # Parse server configurations
    if len(args.servers) != len(args.ports):
        print("Error: Number of --server and --port arguments must match")
        sys.exit(1)

    servers = []
    for cmd, port in zip(args.servers, args.ports):
        servers.append({'cmd': cmd, 'port': port})

    server_processes = []

    try:
        # Start all servers
        for i, server in enumerate(servers):
            print(f"Starting server {i+1}/{len(servers)}: {server['cmd']}")

            # Run as an argument list: no shell, so terminate() reaches the
            # server itself instead of an intermediate shell that would leave it
            # running.
            try:
                argv, cwd = parse_server_command(server['cmd'])
            except ValueError as exc:
                raise RuntimeError(
                    "Invalid --server value {!r}: {}".format(server['cmd'], exc)
                )
            process = subprocess.Popen(
                argv,
                cwd=cwd,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
            server_processes.append(process)

            # Wait for this server to be ready
            print(f"Waiting for server on port {server['port']}...")
            if not is_server_ready(server['port'], timeout=args.timeout):
                raise RuntimeError(f"Server failed to start on port {server['port']} within {args.timeout}s")

            print(f"Server ready on port {server['port']}")

        print(f"\nAll {len(servers)} server(s) ready")

        # Run the command
        print(f"Running: {' '.join(args.command)}\n")
        result = subprocess.run(args.command)
        sys.exit(result.returncode)

    finally:
        # Clean up all servers
        print(f"\nStopping {len(server_processes)} server(s)...")
        for i, process in enumerate(server_processes):
            try:
                process.terminate()
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait()
            print(f"Server {i+1} stopped")
        print("All servers stopped")


if __name__ == '__main__':
    main()