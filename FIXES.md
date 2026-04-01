# Suggested Fixes

## HIGH — Should fix

- [x] **Remove `prop-types` package** — Deprecated since React 19. All 8 component
  files use it, two with typos (`PropTpes` in Launchpad.jsx, `PropType` in
  Accordion.jsx). Remove all PropTypes declarations and the dependency.
- [x] **Remove `defaultProps`** — Deprecated in React 19 for function components.
  Used in NavBar.jsx, Launchpad.jsx, Timeline.jsx. Replace with ES6 default
  parameters.
- [x] **Remove `smoothscroll-polyfill`** — `scrollIntoView({ behavior: 'smooth' })`
  is Baseline since 2020. The polyfill in `functions.js` is dead weight.
- [x] **Remove `core-js/stable` and `regenerator-runtime/runtime` from webpack
  entry** — Babel's `useBuiltIns: 'usage'` already injects polyfills per-file.
  Importing the full bundle in the entry point defeats the purpose and bloats
  the output. With modern browser targets, very few polyfills are needed.

## MEDIUM — Worth addressing

- [ ] **Replace `typography` and `typography-theme-alton`** — Abandoned packages
  (5+ years since last publish). `setup.js` injects Google Fonts via DOM
  manipulation. A `<link>` tag in the HTML template or `@import` in SCSS would
  be simpler and more cacheable.
- [ ] **Fix `onscroll` direct assignment in BackToTop.jsx** — Line 26 uses
  `contentRoot.onscroll = handleOnScroll` which overwrites other scroll
  handlers. Use `addEventListener`/`removeEventListener` instead.
- [ ] **Remove browser hack mixin** — `_mixins.scss` targets IE 10-11, old Edge,
  old Safari 7. Only used once in `nextbutton.scss` (hides a button for IE).
  Dead code given modern browser targets.
- [ ] **Simplify `no-scrollbar` mixin** — Remove `-ms-overflow-style` (IE-only).
  Keep `scrollbar-width: none` and `::-webkit-scrollbar`.
- [ ] **Review Trusted Types policy** — `trusted-security-policies.js` has unsafe
  passthrough for `createScriptURL` and `createScript` (returns input
  unmodified), defeating the purpose of Trusted Types.
- [ ] **Remove `postcss-css-variables`** — Compiles CSS custom properties to static
  values. Modern browsers support them natively. Removing this preserves
  runtime dynamism.

## LOW — Nice to have

- [ ] **Remove unnecessary `useMemo` in BackToTop.jsx** — Memoizing
  `isVisible ? 'visible' : 'hidden'` adds complexity for zero benefit.
- [ ] **Remove `/* global */` comment and try/catch in functions.js** — Webpack
  `DefinePlugin` globals are replaced at compile time. The comment is a
  leftover from ESLint's old format.
- [ ] **Remove `file-loader` from devDependencies** — Not used in webpack config
  (uses `asset/resource` instead). Dead dependency.
- [ ] **Replace `handlebars` + `handlebars-loader`** — Used only for a single HTML
  template. `html-webpack-plugin` supports EJS out of the box.
- [ ] **Fix duplicate `<main>` elements in Wonderland.jsx** — HTML spec allows only
  one `<main>` per page. One of the two should use a different semantic
  element.
