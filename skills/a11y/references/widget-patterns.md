# ARIA Widget Keyboard Patterns

Keyboard interaction patterns for common ARIA widgets.
Based on [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/).

## Dialog (Modal)

**Roles and attributes:**

```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Action</h2>
  <!-- dialog content -->
</div>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Tab | Move focus to next focusable element within dialog |
| Shift+Tab | Move focus to previous focusable element within dialog |
| Escape | Close dialog |

**Focus management:**

- On open: move focus to first focusable element (or dialog itself)
- Trap focus within dialog (Tab wraps around)
- On close: return focus to the element that triggered the dialog

## Tabs

**Roles and attributes:**

```html
<div role="tablist" aria-label="Settings">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">General</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">Privacy</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>...</div>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Arrow Left/Right | Move between tabs (horizontal tablist) |
| Arrow Up/Down | Move between tabs (vertical tablist) |
| Tab | Move focus into the active tab panel |
| Home | Move to first tab |
| End | Move to last tab |

**Activation:** Use automatic activation (focus = select) or manual (Enter/Space to activate).

## Accordion

**Roles and attributes:**

```html
<h3>
  <button aria-expanded="true" aria-controls="section-1">Section Title</button>
</h3>
<div id="section-1" role="region" aria-labelledby="header-1">...</div>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Enter / Space | Toggle expanded/collapsed |
| Arrow Down | Move to next accordion header |
| Arrow Up | Move to previous accordion header |
| Home | Move to first accordion header |
| End | Move to last accordion header |

## Menu / Menubar

**Roles and attributes:**

```html
<ul role="menubar">
  <li role="none">
    <button role="menuitem" aria-haspopup="true" aria-expanded="false">File</button>
    <ul role="menu">
      <li role="none"><button role="menuitem">New</button></li>
      <li role="none"><button role="menuitem">Open</button></li>
    </ul>
  </li>
</ul>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Arrow Right/Left | Navigate between menubar items |
| Arrow Down | Open submenu / move to next item in menu |
| Arrow Up | Move to previous item in menu |
| Enter / Space | Activate menu item |
| Escape | Close submenu, return focus to parent |
| Home | Move to first item in menu |
| End | Move to last item in menu |

## Combobox

**Roles and attributes:**

```html
<label for="city">City</label>
<input id="city" role="combobox"
       aria-expanded="false"
       aria-autocomplete="list"
       aria-controls="city-listbox" />
<ul id="city-listbox" role="listbox" hidden>
  <li role="option" id="opt-1">Seoul</li>
  <li role="option" id="opt-2">Busan</li>
</ul>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Arrow Down | Open listbox / move to next option |
| Arrow Up | Move to previous option |
| Enter | Select focused option, close listbox |
| Escape | Close listbox without selecting |
| Home/End | Move to first/last option (when open) |

**Focus:** Visual focus moves through options via `aria-activedescendant`, actual DOM focus stays on the input.

## Disclosure (Show/Hide)

```html
<button aria-expanded="false" aria-controls="details-1">More info</button>
<div id="details-1" hidden>Additional content here.</div>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Enter / Space | Toggle visibility |

## Tooltip

```html
<button aria-describedby="tooltip-1">Settings</button>
<div id="tooltip-1" role="tooltip" hidden>Configure application settings</div>
```

**Behavior:**

- Show on focus and hover
- Hide on Escape, blur, and mouse leave
- Do not put interactive content inside tooltips
- Tooltip content must be hoverable (WCAG 1.4.13)

## Switch

```html
<button role="switch" aria-checked="false">Dark mode</button>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Enter / Space | Toggle on/off |

## Slider

```html
<label id="vol-label">Volume</label>
<div role="slider" tabindex="0"
     aria-labelledby="vol-label"
     aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
</div>
```

**Keyboard:**

| Key | Action |
| --- | --- |
| Arrow Right/Up | Increase value by one step |
| Arrow Left/Down | Decrease value by one step |
| Page Up | Increase by large step |
| Page Down | Decrease by large step |
| Home | Set to minimum |
| End | Set to maximum |

## Tree View

**Keyboard:**

| Key | Action |
| --- | --- |
| Arrow Down | Move to next visible node |
| Arrow Up | Move to previous visible node |
| Arrow Right | Expand closed node / move to first child |
| Arrow Left | Collapse open node / move to parent |
| Enter / Space | Activate node |
| Home | Move to first node |
| End | Move to last visible node |

## Resources

- [ARIA Authoring Practices Guide - Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)
