---
title: Upgrading React Native
impact: HIGH
tags: react-native, upgrade, routing
---

# Skill: Upgrading React Native

Router for React Native upgrade workflows. Start with core Upgrade Helper instructions, then apply focused add-ons by project shape.

## Prerequisites (All Upgrade Paths)

- Ensure the repo is clean or on a dedicated upgrade branch.
- Know which package manager the repo uses: `npm`, `yarn`, `pnpm`, or `bun`.
- Use Node.js `20.19.4+`, Java `17`, and Xcode `16.4+` with Command Line Tools, following https://reactnative.dev/docs/set-up-your-environment.
- Optionally use Xcodes to manage Xcode versions.
- Verify active versions before upgrading: `node -v`, `java -version`.
- Verify Android Studio is installed.
- For iOS, verify Xcode CLI toolchain sync with `xcode-select --print-path`, `xcodebuild -version`, and `xcrun --sdk iphoneos --show-sdk-version`.
- If Xcode mismatch is suspected, re-point and initialize with `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` and `sudo xcodebuild -runFirstLaunch`.

## Quick Start

0. Run the prerequisite checklist.
1. Set `APP_DIR` to the app folder, using `.` for single-app repos.
2. Use `monorepo-singlerepo-targeting.md` if you need help choosing `APP_DIR`.
3. Run `upgrade-helper-core.md` first to anchor changes to `rn-diff-purge`.
4. Publish a short ordered upgrade plan before making versioned edits.
5. Run `upgrading-dependencies.md` to assess risky packages and migrations.
6. Apply dependency updates in one pass and run a single install with the repo package manager.
7. Run `react.md` when `react` is upgraded.
8. Add `expo-sdk-upgrade.md` only if `expo` is present in `APP_DIR/package.json`.
9. Finish with `upgrade-verification.md`.

## Decision Map

- Need canonical React Native diff/merge workflow: `upgrade-helper-core.md`.
- Need dependency compatibility checks: `upgrading-dependencies.md`.
- Need React and React 19 alignment: `react.md`.
- Project contains Expo SDK dependencies: `expo-sdk-upgrade.md`.
- Need manual post-upgrade validation: `upgrade-verification.md`.

## Related Skills

- [native-platform-setup.md](./native-platform-setup.md) - Tooling and native dependency basics.
- `native-android-16kb-alignment.md` - Third-party library alignment for Google Play.
