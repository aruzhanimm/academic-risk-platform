# Interactive Student Prototype

This folder contains an English-language interaction prototype for the Academic Risk Platform. Its observations, chart, and request states are synthetic examples. No dataset or model is connected.

## Open locally

Open [index.html](index.html) in a browser, for example by double-clicking the file. Keep it beside `styles.css` and `app.js`. No server, installation, package manager, account, or network connection is required.

Use sample values only. Added observations and request previews stay in the current page's memory; refreshing restores the initial demonstration. The prototype does not authenticate users, save to a database, export records, delete personal data, or send messages to university services.

Explore the input form, history and chart, unavailable-result view, and data-control preview. The default result is `model_unavailable`. The insufficient-data preview is a separate illustrative state, not a computation on the form. A pending demo request is not a completed export/deletion.

## Editing map and captures

| File | Role |
| --- | --- |
| [index.html](index.html) | Screen structure, static copy, field labels, and inline SVG icons. Keep element IDs and `data-*` attributes aligned with the JavaScript. |
| [styles.css](styles.css) | Shared design tokens in `:root` and component rules for colours, typography, spacing, and corner radii. Responsive `@media` sections control navigation, columns, and narrow-screen layout. |
| [app.js](app.js) | The `seed` observation array, validation rules, in-memory state, navigation, filters, dynamic status text, and rendering. The history chart's SVG is generated here. |
| [exports/input.png](exports/input.png) | Input screen capture. |
| [exports/history.png](exports/history.png) | History and synthetic chart capture. |
| [exports/explanation.png](exports/explanation.png) | Result-availability capture. |
| [exports/data_control.png](exports/data_control.png) | Data-control capture. |
| [exports/mobile.png](exports/mobile.png) | Narrow-screen capture. |

Edit these browser-readable sources and refresh to preview changes; there is no build step. Start with shared tokens for visual changes, then component rules for individual screens. Keep validation messages and field help consistent when changing demo inputs. PNG files are static captures, not editable interface sources; recapture them after visual changes. React remains the proposed future frontend choice, not an implemented dependency of this prototype.

The [UX specification](../docs/08_ux_prototype.md) describes flows, requirement coverage, research boundaries, and planned walkthrough tasks. It also provides an empty evidence record. Screenshots demonstrate appearance; they do not establish accessibility compliance, successful user testing, server performance, or predictive accuracy.
