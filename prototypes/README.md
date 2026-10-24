# Interactive Student Prototype

This folder contains an English-language interaction prototype for the Academic Risk Platform. Its observations, chart, and request states are synthetic examples. No dataset or model is connected.

## Open the prototype

The hosted version is published with the repository through GitHub Pages.

[Open the interactive prototype](https://aruzhanimm.github.io/academic-risk-platform/)

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
| [exports/input.jpg](exports/input.jpg) | Input screen capture. |
| [exports/history.jpg](exports/history.jpg) | History and synthetic chart capture. |
| [exports/explanation.jpg](exports/explanation.jpg) | Result-availability capture. |
| [exports/data_control.jpg](exports/data_control.jpg) | Data-control capture. |
| [exports/mobile.jpg](exports/mobile.jpg) | Narrow-screen capture. |

Edit these browser-readable sources and refresh to preview changes; there is no build step. Start with shared tokens for visual changes, then component rules for individual screens. Keep validation messages and field help consistent when changing demo inputs. JPEG files are static captures, not editable interface sources; recapture them after visual changes. React remains the proposed future frontend choice, not an implemented dependency of this prototype.

The [UX specification](../docs/08_ux_prototype.md) describes flows, requirement coverage, research boundaries, and walkthrough tasks. The [user research synthesis](../docs/02_user_interviews.md) records five discussions and nine questionnaire submissions. Screenshots demonstrate appearance; they do not establish accessibility compliance, successful user testing, server performance, or predictive accuracy.

The result explanation now states that no model is connected, additional observations do not enable prediction, and an unavailable estimate is not a low or zero risk result. This revision responds to result-state ambiguity in the interview notes. A participant retest has not yet been completed.
