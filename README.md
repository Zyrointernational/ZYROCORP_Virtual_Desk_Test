# ZyroCORP Virtual Desk — Test Website

A responsive static website based on the supplied Zyro Virtual Desk reference screenshots.

## Contents
- `index.html` — one-page website
- `styles.css` — responsive layout, components and visual system
- `script.js` — mobile navigation, savings calculator, demo enquiry form and timezone clocks
- `assets/` — local SVG logo, favicon and illustrations

## Local preview
Open `index.html` in a browser. No build process or package installation is required.

## Cloudflare deployment
Deploy as a static Cloudflare Pages project. Keep `index.html`, `styles.css`, `script.js`, and the `assets` folder at the project root.

Recommended separate test project name: `zyrocorp-virtual-desk-test`.

## Important implementation notes
- All artwork is local SVG so the logo and illustrations do not depend on external image hosts.
- The savings calculator uses illustrative planning assumptions: $4,600 per in-house agent/month and $1,600 per ZyroCORP agent/month. These are not validated quotes and should be updated before public launch.
- The enquiry form uses `mailto:` and requires the visitor to review/send the email. It does not store form submissions. Connect a secure form backend before launch if submissions should be captured automatically.
- The reference's “<60s answer SLA”, “24/7/365 coverage”, “ISO 27001-aligned security” and “60%+ savings” are represented as editable marketing claims. Verify operational ability, security posture and pricing before publishing these claims.
- No admin portal or authenticated admin functionality is implemented. The Admin navigation item currently anchors to Contact and must be replaced or removed before launch.
- This is a test build. Do not connect it to the Zyro International production domain.
