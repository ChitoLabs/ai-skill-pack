---
name: react-native-best-practices
description: Provides React Native performance optimization guidelines for FPS, TTI, bundle size, memory leaks, re-renders, and animations. Applies to tasks involving Hermes optimization, JS thread blocking, bridge overhead, FlashList, native modules, or debugging jank and frame drops.
license: MIT
author: Callstack
keywords: ["react-native", "expo", "performance", "optimization", "profiling"]
---

# Onboarding

## Step 1: Validate React Native Setup

Before applying performance optimizations, ensure:
- **Expo CLI** or **React Native CLI** is installed
  - Verify with: `npx expo --version` and `npx react-native --version`
- Metro bundler is running (**apply only for** bundle analysis)
- React Native DevTools is available (**apply only for** profiling)
  - Press 'j' in Metro terminal or shake device → "Open DevTools"

## Security Guardrails

- Review shell commands before running them and prefer version-pinned tooling from trusted sources.
- Do not pipe remote install scripts directly into a shell.
- Treat third-party packages as normal supply-chain dependencies that require provenance and version review.
- If using Re.Pack code splitting, only load first-party chunks from trusted HTTPS origins tied to the current release.

# When to Load Reference Files

Load specific reference files from `references/` based on the task:

## JavaScript/React Performance (`js-*`)

- **Debugging slow/janky UI or animations** → `js-measure-fps.md`
- **Investigating re-render issues** → `js-profile-react.md` → `js-react-compiler.md`
- **Optimizing list scrolling** → `js-lists-flatlist-flashlist.md`
- **Reducing re-renders with state management** → `js-atomic-state.md`
- **Using Concurrent React features** → `js-concurrent-react.md`
- **Enabling automatic memoization** → `js-react-compiler.md`
- **Optimizing animations** → `js-animations-reanimated.md`
- **Fixing TextInput lag** → `js-uncontrolled-components.md`
- **Hunting JavaScript memory leaks** → `js-memory-leaks.md`

## Native Performance (`native-*`)

- **Measuring startup time (TTI)** → `native-measure-tti.md`
- **Building native modules** → `native-turbo-modules.md`
- **Understanding native threading** → `native-threading-model.md`
- **Profiling native code** → `native-profiling.md`
- **Setting up native tooling** → `native-platform-setup.md`
- **Debugging view hierarchy** → `native-view-flattening.md`
- **Native memory patterns** → `native-memory-patterns.md`
- **Hunting native memory leaks** → `native-memory-leaks.md`
- **Choosing native SDKs vs polyfills** → `native-sdks-over-polyfills.md`
- **Fixing Android 16KB alignment** → `native-android-16kb-alignment.md`

## Bundle & App Size (`bundle-*`)

- **Analyzing bundle size** → `bundle-analyze-js.md`
- **Analyzing app size** → `bundle-analyze-app.md`
- **Fixing barrel imports** → `bundle-barrel-exports.md`
- **Enabling tree shaking** → `bundle-tree-shaking.md`
- **Android code shrinking** → `bundle-r8-android.md`
- **Optimizing Hermes bundle loading** → `bundle-hermes-mmap.md`
- **Managing native assets** → `bundle-native-assets.md`
- **Evaluating library size** → `bundle-library-size.md`
- **Code splitting** → `bundle-code-splitting.md`

## Problem → Reference Mapping

Use this quick lookup when debugging specific issues:

| Problem | Start With |
|---------|-----------|
| App feels slow/janky | `js-measure-fps.md` → `js-profile-react.md` |
| Too many re-renders | `js-profile-react.md` → `js-react-compiler.md` |
| Slow startup (TTI) | `native-measure-tti.md` → `bundle-analyze-js.md` |
| Large app size | `bundle-analyze-app.md` → `bundle-r8-android.md` |
| Memory growing | `js-memory-leaks.md` or `native-memory-leaks.md` |
| Animation drops frames | `js-animations-reanimated.md` |
| List scroll jank | `js-lists-flatlist-flashlist.md` |
| TextInput lag | `js-uncontrolled-components.md` |
| Native module slow | `native-turbo-modules.md` → `native-threading-model.md` |
| Native library alignment issue | `native-android-16kb-alignment.md` |

## Quick Reference Commands

### FPS & Re-renders
```bash
# Open React Native DevTools
# Press 'j' in Metro, or shake device → "Open DevTools"
```

Baseline runtime metrics should come from the target interaction itself:
- Capture commit timeline, re-render counts, slow components, and heaviest-commit breakdown.
- Treat component tree depth and count as supporting context only.

**Common fixes:**
- Replace ScrollView with FlatList/FlashList for lists
- Use React Compiler for automatic memoization
- Use atomic state (Jotai/Zustand) to reduce re-renders
- Use `useDeferredValue` for expensive computations

**Review guardrails:**
- Check library versions before suggesting API-specific fixes. FlashList v2 deprecates `estimatedItemSize`.
- Do not suggest `useMemo` or `useCallback` dependency changes without a reproducible correctness issue or profiling evidence.
- Do not report stale closures unless the stale read path or repro is clear.

### Analyze Bundle Size
```bash
npx react-native bundle \
  --entry-file index.js \
  --bundle-output output.js \
  --platform ios \
  --sourcemap-output output.js.map \
  --dev false --minify true

npx source-map-explorer output.js --no-border-checks
```

**Common fixes:**
- Avoid barrel imports (import directly from source)
- Remove unnecessary Intl polyfills only after checking Hermes API and method coverage
- Enable tree shaking (Expo SDK 52+ or Re.Pack)
- Enable R8 for Android native code shrinking

### Measure TTI
- Use `react-native-performance` for markers
- Only measure cold starts (exclude warm/hot/prewarm)

**Common fixes:**
- Disable JS bundle compression on Android (enables Hermes mmap)
- Use native navigation (react-native-screens)
- Preload commonly-used expensive screens before navigating to them

### Native Performance

**Profile native:**
- iOS: Xcode Instruments → Time Profiler
- Android: Android Studio → CPU Profiler

**Common fixes:**
- Use background threads for heavy native work
- Prefer async over sync Turbo Module methods
- Use C++ for cross-platform performance-critical code

## Priority Guidelines

Apply optimizations in this order:

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | FPS & Re-renders | CRITICAL | `js-*` |
| 2 | Bundle Size | CRITICAL | `bundle-*` |
| 3 | TTI Optimization | HIGH | `native-*`, `bundle-*` |
| 4 | Native Performance | HIGH | `native-*` |
| 5 | Memory Management | MEDIUM-HIGH | `js-*`, `native-*` |
| 6 | Animations | MEDIUM | `js-*` |

## Attribution

Based on "The Ultimate Guide to React Native Optimization" by Callstack.
