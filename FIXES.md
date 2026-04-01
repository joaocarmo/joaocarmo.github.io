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

## MEDIUM — Done

- [x] **Replace `typography` and `typography-theme-alton`** — Deleted `setup.js`,
  removed `injectFonts` from `functions.js`. Created `_typography.scss` with
  the Alton theme styles. Added Google Fonts `<link>` to template with
  preconnect hints. Updated CSP to allow fonts.googleapis.com and
  fonts.gstatic.com. Removed both packages.
- [x] **Fix `onscroll` direct assignment in BackToTop.jsx** — Replaced
  `contentRoot.onscroll = handleOnScroll` with `addEventListener` /
  `removeEventListener`. Also removed unnecessary `useMemo` and unused
  `useMemo` import.
- [x] **Remove browser hack mixin** — Deleted the entire `browser-hack-for` mixin
  from `_mixins.scss` and its one call site in `nextbutton.scss`.
- [x] **Simplify `no-scrollbar` mixin** — Removed `-ms-overflow-style` (IE-only),
  fixed nesting selector for `::-webkit-scrollbar`.
- [x] **Remove unsafe Trusted Types passthrough** — Removed `createScriptURL` and
  `createScript` identity functions from the default policy. Only `createHTML`
  (sanitized via DOMPurify) remains.
- [x] **Remove `postcss-css-variables`** — Removed from `postcss.config.js` and
  uninstalled the package. Native CSS custom properties are preserved at
  runtime.

## LOW — Done

- [x] **Clean up `functions.js`** — Removed `/* global */` comment, declared
  `VERSION`, `BUILDTIME`, `ENVIRONMENT` in ESLint config globals instead.
  Simplified try/catch wrappers to direct returns (DefinePlugin replaces
  these at compile time).
- [x] **Replace `handlebars` + `handlebars-loader`** — Converted `index.hbs` to
  `index.ejs` (built-in html-webpack-plugin support). Inlined `no-script.hbs`
  content. Removed handlebars loader rule from webpack config. Deleted both
  packages.
- [x] **Fix duplicate `<main>` elements in Wonderland.jsx** — Changed the pages
  container from `<main>` to `<section>`. Only one `<main>` landmark remains.
