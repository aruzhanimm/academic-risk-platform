# ADR-004: Student Interface and Understandable States

**Status:** Proposed. **Related comparison:** TECH-D4 in the [technology comparison](../05_technology_comparison.md).

## Context

The [existing-system comparison](../04_existing_system_comparison.md) motivates concise voluntary input, personal history, and explanations addressed to the student. The first prototype must make a missing estimate understandable while avoiding diagnostic claims. React and Vue both support this workflow; there is no measured basis for claiming that either produces a more usable interface.

## Decision

Use React as the working frontend choice, subject to a small implementation review. Start with a minimal component structure for input fields, validation messages, history, result states, and data-control request status. Keep input state separate from saved records and model results so editing a form cannot leave an old estimate looking current.

The interface must distinguish loading, empty history, invalid input, unavailable model, insufficient data, available result, and operation failure. Preserve recoverable input when a request fails. Display an estimate only with its relevant input/time context; clear user-specific cached state when the authenticated account changes or signs out.

Forms need associated labels, understandable validation messages, and a logical keyboard order. Colour alone must not communicate a state. Numerical outputs and explanations must state their meaning and limits; feature contributions do not demonstrate causes of burnout. Unavailable results use explanatory text, not a zero score. These are interface requirements to evaluate, not capabilities guaranteed by React. [React input documentation](https://react.dev/reference/react-dom/components/input), [research review](../03_literature_review.md).

Data-control screens show the actual request status from the API. The initial interface does not automatically share records with advisers or university services. LMS calendars, schedules, and support-service connections remain future features requiring confirmed access and a separate sharing design.

## Alternatives and consequences

Vue's reactive components and single-file components also satisfy the scope. React remains a provisional default aligned with the current project direction; component composition and state handling establish suitability, not superiority. Actual maintainability and team proficiency should determine the choice before extensive implementation. [React Quick Start](https://react.dev/learn), [Vue Introduction](https://vuejs.org/guide/introduction.html).

A minimal setup avoids committing early to global state management, server-side rendering, or a large UI library. Routing, API handling, build tooling, and accessible visual components still need concrete choices. A static prototype can be tested with users before the framework decision is accepted.

## Validation needed

- Walk through valid and invalid entry, empty/non-empty history, unavailable estimates, and failed requests using synthetic content.
- Check labels, keyboard navigation, focus after validation, narrow screens, and whether states remain understandable without colour.
- Verify that editing observations or switching users cannot expose stale results or another user's cached content.
- Ask prospective users to explain what a displayed result means and what they can do next. Record actual observations separately; no usability study is claimed here.

## Revisit triggers

Switch to Vue if a small reviewed implementation demonstrates better maintainability for the team. Revisit interaction states when user feedback or the agreed measurement/forecasting task changes. Source documentation was checked on 23 October 2026; no frontend implementation or user-test outcome is claimed.
