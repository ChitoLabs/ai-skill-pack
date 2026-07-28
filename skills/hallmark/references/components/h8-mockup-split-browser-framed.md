### H8 * Mockup Split (real-capture framed)
Headline left, real product screenshot right, the capture tilted 1-3° for life. Browser chrome is allowed only when it is already part of the captured pixels. Otherwise use a minimal hairline or floating no-frame figure.
`recipe-exception: h8-real-capture`
*Use when:* you're selling a web app and you have a clean, well-lit screenshot.
*Don't confuse with:* H7 Clipped-Edge (which extends past the viewport) or H2 Split Diptych (which uses photography or proof column, not a product mockup).

```html
<section class="hero-mock">
  <div>
    <h1>The studio's new mute button.</h1>
    <p>Press <kbd>⌘ M</kbd> from anywhere.</p>
  </div>
  <figure class="mock">
    <img src="product-capture.png" alt="The product interface showing the mute control">
  </figure>
</section>
```
```css
.hero-mock  { display: grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-2xl); align-items: center; }
.mock       { transform: rotate(1.5deg); border: var(--rule-hair) solid var(--color-rule); overflow: hidden; box-shadow: 0 24px 60px -20px var(--color-shadow); }
.mock img   { display: block; inline-size: 100%; block-size: auto; }
```

Do not draw URL pills, traffic-light dots, toolbars, or window controls in HTML, CSS, or SVG.
