---
name: a11y
description: >-
  Web accessibility (a11y) guidelines based on WCAG 2.2 and WAI-ARIA 1.2.
  Covers semantic HTML, ARIA patterns, keyboard accessibility, color contrast,
  form accessibility, media alternatives, and automated testing with axe-core.
  Use when building accessible web interfaces, reviewing UI components for
  accessibility compliance, or implementing ARIA widget patterns.
license: MIT
metadata:
  author: iceflower
  version: "1.0"
  last-reviewed: "2026-03"
---

# Web Accessibility (a11y) Rules

## 1. Core Principles

Follow the WCAG 2.2 four principles (POUR):

- **Perceivable**: Content must be presentable in ways users can perceive
- **Operable**: UI components and navigation must be operable
- **Understandable**: Information and UI operation must be understandable
- **Robust**: Content must be compatible with assistive technologies

### Conformance Target

- Target **WCAG 2.2 Level AA** as the minimum standard
- Level A is the absolute minimum; Level AAA is aspirational for specific content
- All new features must meet AA before release

## 2. Semantic HTML First

Always prefer native HTML elements over ARIA. Native elements have built-in
accessibility semantics, keyboard behavior, and screen reader support.

### Rules

- Use `<button>` instead of `<div role="button">`
- Use `<a href>` instead of `<span role="link">`
- Use `<input type="checkbox">` instead of `<div role="checkbox">`
- Use `<nav>`, `<main>`, `<header>`, `<footer>`, `<aside>` for landmarks
- Use `<h1>`–`<h6>` in proper hierarchy (never skip levels)
- Use `<ul>`, `<ol>`, `<dl>` for lists
- Use `<table>` with `<th>`, `<caption>` for data tables
- Use `<label>` associated with form controls via `for`/`id`

### The Five Rules of ARIA

1. **Don't use ARIA if native HTML provides the semantics** — a `<button>` is better than `<div role="button">`
2. **Don't change native semantics** — don't add `role="heading"` to a `<h2>`
3. **All interactive ARIA controls must be keyboard operable**
4. **Don't use `role="presentation"` or `aria-hidden="true"` on focusable elements**
5. **All interactive elements must have an accessible name**

## 3. ARIA Usage Guide

### Accessible Names and Descriptions

```html
<!-- Visible label (preferred) -->
<button>Save changes</button>

<!-- aria-label: when no visible text -->
<button aria-label="Close dialog">×</button>

<!-- aria-labelledby: reference visible element -->
<h2 id="section-title">User Settings</h2>
<form aria-labelledby="section-title">...</form>

<!-- aria-describedby: supplementary description -->
<input aria-describedby="password-hint" type="password" />
<p id="password-hint">Must be at least 8 characters</p>
```

### Live Regions

Use `aria-live` to announce dynamic content changes:

```html
<!-- Polite: announced after current speech -->
<div aria-live="polite" role="status">3 results found</div>

<!-- Assertive: interrupts current speech (use sparingly) -->
<div aria-live="assertive" role="alert">Session expiring in 1 minute</div>
```

- Prefer `role="status"` (polite) and `role="alert"` (assertive) over raw `aria-live`
- The live region element must exist in the DOM before content changes
- Do not overuse assertive announcements

### Common ARIA States

| Attribute | Purpose | Example |
| --- | --- | --- |
| `aria-expanded` | Toggle state | Accordion, dropdown |
| `aria-selected` | Selection state | Tabs, listbox |
| `aria-checked` | Check state | Custom checkbox |
| `aria-disabled` | Disabled state | Non-interactive element |
| `aria-hidden` | Hide from AT | Decorative icons |
| `aria-current` | Current item | Navigation, breadcrumb |
| `aria-invalid` | Validation error | Form fields |
| `aria-required` | Required field | Form fields |

### aria-hidden Cautions

- **Never** apply `aria-hidden="true"` to focusable elements (including `tabindex="-1"`, which is programmatically focusable)
- **Never** apply it to ancestors of focusable elements
- Use it only for purely decorative content (icons with adjacent text, visual separators)

## 4. Keyboard Accessibility

### Requirements

- All interactive elements must be reachable via Tab / Shift+Tab
- All functionality must be operable with keyboard alone
- No keyboard traps (user must be able to navigate away)
- Focus order must follow logical reading order
- Focus indicator must be visible (never `outline: none` without replacement)

### Focus Management

```css
/* Visible focus indicator (WCAG 2.4.7, 2.4.11) */
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Remove default only when providing custom focus style */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Tab Index Rules

| Value | Behavior | Usage |
| --- | --- | --- |
| Not set | Natural tab order | Native interactive elements |
| `tabindex="0"` | Added to tab order | Custom interactive widgets |
| `tabindex="-1"` | Programmatically focusable only | Focus management targets |
| `tabindex="1+"` | **Avoid** | Creates confusing tab order |

### Widget Keyboard Patterns

For detailed keyboard interaction patterns per widget, see
[references/widget-patterns.md](references/widget-patterns.md).

Common patterns:

- **Tabs**: Arrow keys to switch tabs, Tab to move into panel
- **Menu**: Arrow keys to navigate, Enter/Space to activate, Escape to close
- **Dialog**: Tab cycles within dialog, Escape to close, return focus on close
- **Combobox**: Arrow keys to navigate options, Enter to select, Escape to close
- **Accordion**: Enter/Space to toggle, Arrow keys between headers

## 5. Color and Contrast

### Contrast Ratios (WCAG 2.2 AA)

| Element | Minimum Ratio |
| --- | --- |
| Normal text (< 18pt / < 14pt bold) | 4.5:1 |
| Large text (≥ 18pt / ≥ 14pt bold) | 3:1 |
| UI components and graphical objects | 3:1 |
| Focus indicators | 3:1 |

### Contrast Rules

- Never convey information by color alone — provide text, icons, or patterns
- Ensure links are distinguishable from surrounding text (underline or 3:1 contrast + non-color indicator on hover/focus)
- Test with color blindness simulators
- Provide sufficient contrast for placeholder text
- Custom focus indicators must meet the 3:1 contrast ratio

## 6. Form Accessibility

### Labels

- Every form control must have a visible, associated label
- Use `<label for="id">` for explicit association
- Group related controls with `<fieldset>` and `<legend>`
- Placeholder text is not a substitute for labels

### Error Handling

```html
<label for="email">Email address</label>
<input id="email" type="email"
       aria-invalid="true"
       aria-describedby="email-error"
       aria-required="true" />
<p id="email-error" role="alert">Please enter a valid email address</p>
```

- Identify errors in text (not color alone)
- Provide error suggestions when possible (WCAG 3.3.3)
- Associate error messages with `aria-describedby`
- Move focus to first error or use an error summary
- Prevent redundant entry — don't ask for the same information twice (WCAG 3.3.7)

### Authentication (WCAG 2.2)

- Do not require cognitive function tests (memorization, transcription) for login
- Support password managers (don't block paste)
- Allow copy-paste for verification codes
- Provide authentication alternatives (biometric, passkey)

## 7. Images and Media

### Alternative Text

| Image Type | alt Attribute |
| --- | --- |
| Informative | Describe content/function |
| Decorative | `alt=""` (empty) |
| Functional (link/button) | Describe the action |
| Complex (chart/graph) | Brief alt + long description |
| Text in image | Full text content |

### Media Requirements (AA)

- Pre-recorded video: synchronized captions
- Pre-recorded audio: transcript
- Live video: live captions (where feasible)
- No auto-playing media with sound (or provide pause/stop/mute within first 3 seconds)

## 8. Responsive and Adaptive

- Content must reflow at 320px width without horizontal scrolling (WCAG 1.4.10)
- Support 200% zoom without loss of content or functionality
- Text spacing adjustable without breaking layout (WCAG 1.4.12):
  - Line height: 1.5× font size
  - Paragraph spacing: 2× font size
  - Letter spacing: 0.12× font size
  - Word spacing: 0.16× font size
- Touch targets: minimum 24×24 CSS pixels (WCAG 2.5.8) — see also Section 5 for contrast requirements
- Provide alternatives for drag-based interactions (WCAG 2.5.7)

## 9. Testing

### Automated Testing with axe-core

```bash
# CLI
npm install -g @axe-core/cli
axe https://example.com

# Jest integration
npm install --save-dev jest-axe
```

```javascript
// jest-axe example
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

it("should have no accessibility violations", async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

```javascript
// Playwright integration
import AxeBuilder from "@axe-core/playwright";

test("should pass axe", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

### Testing Checklist

For the complete WCAG 2.2 AA testing checklist, see
[references/wcag-checklist.md](references/wcag-checklist.md).

Essential manual tests:

1. **Keyboard-only navigation**: Tab through entire page, operate all controls
2. **Screen reader testing**: Test with NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android)
3. **Zoom test**: 200% browser zoom, 320px viewport width
4. **Color contrast**: Automated scan + manual check for dynamic content
5. **Focus management**: Verify focus order, focus visible, no traps

### CI Integration

- Run axe-core in CI pipeline on every PR
- Set axe as a blocking check (zero violations policy for new code)
- Use `eslint-plugin-jsx-a11y` for React/JSX static analysis
- Use `eslint-plugin-vuejs-accessibility` for Vue.js static analysis
- Track accessibility coverage over time

## 10. Common Anti-Patterns

| Anti-Pattern | Problem | Fix |
| --- | --- | --- |
| `<div>` with click handler | No keyboard/AT support | Use `<button>` |
| `outline: none` globally | Invisible focus | Provide `:focus-visible` style |
| Missing alt on `<img>` | Image invisible to AT | Add descriptive alt or `alt=""` |
| Color-only error indication | Invisible to color-blind users | Add text/icon indicator |
| Autoplaying video with sound | Disorienting for users | Add mute/pause control |
| `tabindex > 0` | Unpredictable tab order | Use DOM order + `tabindex="0"` |
| `aria-label` on non-interactive `<div>` | Ignored by most AT | Use on interactive elements only |
| Nested interactive elements | Broken AT tree | Flatten the nesting |
| Missing skip navigation link | Long keyboard navigation | Add skip link to main content |
| `placeholder` as label | Disappears on input | Use visible `<label>` |
