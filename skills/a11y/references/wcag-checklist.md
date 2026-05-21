# WCAG 2.2 Level AA Checklist

A practical checklist for verifying WCAG 2.2 Level AA conformance.
Based on [WebAIM WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist).

## 1. Perceivable

### 1.1 Text Alternatives

- [ ] All `<img>` elements have appropriate `alt` attributes
- [ ] Decorative images use `alt=""` or CSS backgrounds
- [ ] Complex images (charts, diagrams) have long descriptions
- [ ] Form image buttons have descriptive `alt`
- [ ] `<input type="image">` has appropriate `alt`

### 1.2 Time-Based Media

- [ ] Pre-recorded audio has text transcript
- [ ] Pre-recorded video has synchronized captions
- [ ] Pre-recorded video has audio description (if needed)
- [ ] Live video has live captions (where feasible)

### 1.3 Adaptable

- [ ] Semantic markup used (headings, landmarks, lists, tables)
- [ ] Reading/navigation order is logical and intuitive
- [ ] Instructions don't rely solely on sensory characteristics (shape, size, location, color)
- [ ] Content orientation not restricted to portrait or landscape
- [ ] Input purpose identified for common fields (autocomplete attribute)

### 1.4 Distinguishable

- [ ] Color is not the sole method of conveying information
- [ ] Text contrast ratio ≥ 4.5:1 (normal text)
- [ ] Text contrast ratio ≥ 3:1 (large text ≥ 18pt or ≥ 14pt bold)
- [ ] Page is readable and functional at 200% zoom
- [ ] No images of text (except logos)
- [ ] Content reflows at 320px width without horizontal scroll (1.4.10)
- [ ] Non-text contrast ≥ 3:1 for UI components and graphics (1.4.11)
- [ ] Text spacing adjustable without loss of content (1.4.12)
- [ ] Hover/focus additional content is dismissible, hoverable, persistent (1.4.13)

## 2. Operable

### 2.1 Keyboard Accessible

- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Single-key shortcuts can be turned off or remapped (if present)

### 2.2 Enough Time

- [ ] Time limits can be turned off, adjusted, or extended
- [ ] Auto-updating content can be paused, stopped, or hidden
- [ ] No time limits on essential activities (except real-time events)

### 2.3 Seizures and Physical Reactions

- [ ] No content flashes more than 3 times per second

### 2.4 Navigable

- [ ] Skip navigation link provided
- [ ] Pages have descriptive `<title>`
- [ ] Focus order is logical
- [ ] Link purpose clear from link text (or context)
- [ ] Multiple ways to find pages (navigation, search, sitemap)
- [ ] Headings and labels are descriptive
- [ ] Focus indicator is visible (2.4.7)
- [ ] Focus not obscured by other content (2.4.11, WCAG 2.2)

### 2.5 Input Modalities

- [ ] Multi-point gestures have single-pointer alternatives
- [ ] Pointer cancellation: down-event does not trigger action (use up-event or click)
- [ ] Accessible name includes visible label text
- [ ] Motion-activated functions have UI alternatives and can be disabled
- [ ] Dragging movements have single-pointer alternatives (2.5.7, WCAG 2.2)
- [ ] Touch targets ≥ 24×24 CSS pixels (2.5.8, WCAG 2.2)

## 3. Understandable

### 3.1 Readable

- [ ] Page `lang` attribute set (e.g., `<html lang="en">`)
- [ ] Language changes marked with `lang` attribute on elements

### 3.2 Predictable

- [ ] No context change on focus
- [ ] No context change on input (without warning)
- [ ] Consistent navigation across pages
- [ ] Consistent identification of UI components
- [ ] Help mechanisms in consistent location (3.2.6, WCAG 2.2)

### 3.3 Input Assistance

- [ ] Errors identified in text
- [ ] Labels or instructions provided for input
- [ ] Error suggestions provided when possible
- [ ] Error prevention for legal/financial data (confirm, review, reversible)
- [ ] No redundant entry required (3.3.7, WCAG 2.2)
- [ ] No cognitive function test for authentication (3.3.8, WCAG 2.2)

## 4. Robust

### 4.1 Compatible

- [ ] Elements have complete start/end tags and proper nesting
- [ ] `name`, `role`, `value` programmatically determinable for all UI components
- [ ] Status messages conveyed without focus change (via `role="status"` or `aria-live`)

## Resources

- [WCAG 2.2 Specification](https://www.w3.org/TR/WCAG22/)
- [WebAIM WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
