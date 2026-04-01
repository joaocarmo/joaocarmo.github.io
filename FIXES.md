# Suggested Fixes

## HIGH — Done

- [x] **Remove `prop-types` package** — Removed all PropTypes declarations from 8
  components (including typos `PropTpes`, `PropType`), deleted the dependency,
  disabled `react/prop-types` ESLint rule.
- [x] **Remove `defaultProps`** — Replaced with ES6 default parameters in NavBar,
  Launchpad (Link), and Timeline (Content).
- [x] **Remove `smoothscroll-polyfill`** — Removed import from `functions.js` and
  deleted the dependency. Native `scrollIntoView` is sufficient.
- [x] **Remove `core-js` and `regenerator-runtime`** — Removed from webpack entry,
  removed `useBuiltIns`/`corejs` from babel config, deleted both dependencies.
  Bundle dropped from 622 KiB to 392 KiB.
- [x] **Remove unused `@eslint/compat` and `file-loader`** — Neither was referenced
  in any config or source file.

## MEDIUM — Summary

Six items remain. Grouped by theme:

### Dead legacy code (IE/old browser support)

The `browser-hack-for` mixin in `_mixins.scss` targets IE 10-11, old Edge 12,
and Safari 7. It's used once (`nextbutton.scss` hides a button for IE). The
`no-scrollbar` mixin includes `-ms-overflow-style` (IE-only). Both are dead
code given the modern browser targets — delete the `browser-hack-for` mixin and
its one call site, drop the IE line from `no-scrollbar`.

### Abandoned typography packages

`typography` and `typography-theme-alton` haven't been published in 5+ years.
`setup.js` uses them to inject Google Fonts via DOM manipulation
(`insertAdjacentHTML`). Replace with a `<link>` in the HTML template or
`@import` in SCSS, then remove both packages and `setup.js`.

### Event handling antipattern

`BackToTop.jsx` assigns `contentRoot.onscroll = handleOnScroll` directly, which
overwrites any other scroll listeners. Switch to
`addEventListener`/`removeEventListener`.

### Security: Trusted Types passthrough

`trusted-security-policies.js` defines `createScriptURL` and `createScript` as
identity functions (`(string) => string`), defeating the purpose of Trusted
Types. Either add proper validation or remove the passthrough handlers.

### Unnecessary PostCSS plugin

`postcss-css-variables` compiles CSS custom properties to static values. Modern
browsers support them natively, and removing this preserves runtime dynamism.
Delete from `postcss.config.js` and uninstall the package.

## LOW — Nice to have

- [ ] **Remove unnecessary `useMemo` in BackToTop.jsx** — Memoizing
  `isVisible ? 'visible' : 'hidden'` adds complexity for zero benefit.
- [ ] **Remove `/* global */` comment and try/catch in functions.js** — Webpack
  `DefinePlugin` globals are replaced at compile time. The comment is a
  leftover from ESLint's old format.
- [ ] **Replace `handlebars` + `handlebars-loader`** — Used only for a single HTML
  template. `html-webpack-plugin` supports EJS out of the box.
- [ ] **Fix duplicate `<main>` elements in Wonderland.jsx** — HTML spec allows only
  one `<main>` per page. One of the two should use a different semantic
  element.
