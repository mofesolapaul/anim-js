# anim-js
control css animations with data-attributes (not viewport-dependent)

Anim-js is a lightweight jQuery plugin for controlling AnimateCSS-based animations applied to DOM elements, on page load, using data-attributes (and it's not viewport-dependent).

#### in simpler terms...
Remember [WOW.js](https://github.com/matthieua/WOW)? Awesome stuff, I use it all the time, but there's this issue I always came across - if the page was refreshed, all animations outside the viewport (to the top, too) wait till you scroll back to them before they fire.

This sometimes is undesirable (for me), so I wrote this little piece to help trigger animations (with the flexibility that _data-wow-duration_ and other WOW data attributes present) on pageload without the added `'in-viewport'` constraint.

Hope you find `anim-js` useful too.

# Example usage

###### CSS:
```css
.anim-js {
    visibility: hidden
}
```

###### HTML:
```html
<img src="/path/to/image" alt="football" class="anim-js bounce" data-ajs-duration="1s" data-ajs-delay="2s" data-ajs-loop="3">
```

In the example above, the 'football' would start bouncing 2 seconds after pageload, bounce three times, with each bounce lasting 1 second

> __Dependencies__
*   jQuery
*   animate.css

__ PS: _contributions are most welcome_ __