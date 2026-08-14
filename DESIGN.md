# Design System

<!-- impeccable:design-schema 1 -->

## Visual World

The portfolio uses a product-instrument panel world: matte near-black surfaces, compact evidence panels, calibrated luminous green, and image-led proof. It should feel like a precise product cross-check, not a decorative creative portfolio or a dense analytics dashboard.

## Mode

Experience. The visitor is entering Guillermo's body of work, so projects, screenshots, and product judgment lead from the first viewport.

## Color

- **Deep Panel** (`#07100c`) is the page background and primary dark field.
- **Instrument Surface** (`#0f1512`) is the main card and footer surface.
- **Soft Panel** (`#17211d`) is used for inset modules and portrait framing.
- **Panel Line** (`#2b3932`) supports restrained dividers and borders.
- **Instrument Cream** (`#e8efe7`) is primary text.
- **Muted Marking** (`#b6c3b8`) is secondary text.
- **Signal Green** (`#9BFF72`) is the single accent for primary actions, active states, icons, and proof highlights.
- **Caution Amber** (`#f0b35b`) is reserved for rare caution states, not decorative accents.

## Typography

Use the sans stack in `src/index.css`: Aptos, Helvetica Neue, Arial, system UI. The voice is clear, technical, and confident. Headlines use tight tracking with controlled scale. Body copy stays direct, Spanish-first, and under roughly 65 characters per line when possible.

Avoid decorative serif display, generic portfolio poetry, section-number labels, and all-caps micro-labels above headings.

## Components

Buttons are full-pill controls with clear contrast and tactile scale feedback. Cards use a 16px to 28px radius family, low borders, and dark surfaces. Project cards must give the image real scale and keep metadata secondary. Tags should read as compact evidence, not loud badges.

The header is a dark translucent panel. On mobile it prioritizes logo and contact; on larger screens it adds project and archive navigation.

## Layout

Homepage sections use a single dark theme, max-width containment, and asymmetric composition. The hero is proof-led: short product statement, strong headline, three practice signals, actions, and a portrait/evidence panel. Projects use a mixed grid, with TrustLens spanning wider than the supporting case studies. The UI archive is a visual gallery, not a decorative infinite marquee.

The experience section translates the CV into proof panels: roles, periods, collaboration context, systems work, data-informed design, AI-assisted prototyping, and technical tools. It should feel like career evidence inside the same instrument-panel world, not a resume page pasted into the portfolio.

Case study pages use the same instrument-panel world. The detail hero pairs a constrained title block with one large evidence image, followed by role, work, and timing panels. The body reads as a sequence of product decisions: challenge, pivot, user tension, process board, visual evidence, outcomes, and validation. Keep the surface dark throughout; do not return to light editorial case-study blocks.

Mobile collapse is single-column, with global horizontal overflow hidden at `html`, `body`, `#root`, and `main`.

## Motion

Motion is restrained and purposeful: route fade, header entrance, section reveal, card lift, image scale, and modal transitions. All motion runs through Framer Motion or CSS transitions and respects `MotionConfig reducedMotion="user"` or existing reduced-motion CSS.

## Accessibility

Preserve semantic links/buttons, visible focus rings, the skip link, Escape-to-close modals, descriptive image alt text, readable contrast, and touch targets of at least 44px.

## Anti-Patterns

Do not reintroduce the custom cursor, centered badge-heavy hero, generic serif editorial system, section numbers, decorative pulsing dots, duplicated CTAs, two marquee rows, fake screenshots, invented testimonials, or unverified metrics.

For case studies, avoid drop caps, decorative quote marks, oversized badges, exact performance claims without source, emoji alerts, and all-caps process labels. If a simulator needs illustrative data, keep it clearly framed as a simulation.
