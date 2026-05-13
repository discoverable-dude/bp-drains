# BP Drains Redesign

_Started 2026-05-13 11:43 UTC_

---

## User



## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- scope: The best output for claude code as that's the next step
- breakpoints: Decide for me
- type_pair: Surprise me / decide for me
- red_shade: 2
- grey_tone: 2
- imagery: Subtle striped placeholders with monospace captions ('REAL TEAM PHOTO — supply')
- homepage_hero: Decide for me
- tone: Industrial-premium — heavier black structure, mechanical feel
- tweaks: Grey base tone (cool / warm / steel), Density (compact / comfortable / spacious), Type pairing
- emergency_treatment: Top utility bar across every page ('24/7 Emergency — Call 0800…')
- areas_served: https://www.bpdrainssoutheast.co.uk/margate.html
https://www.bpdrainssoutheast.co.uk/faversham.html
https://www.bpdrainssoutheast.co.uk/broadstairs.html
https://www.bpdrainssoutheast.co.uk/whitstable.html
https://www.bpdrainssoutheast.co.uk/canterbury.html
https://www.bpdrainssoutheast.co.uk/herne-bay.html
https://www.bpdrainssoutheast.co.uk/dover.html
https://www.bpdrainssoutheast.co.uk/thanet.html
https://www.bpdrainssoutheast.co.uk/ashford.html
https://www.bpdrainssoutheast.co.uk/folkestone.html
https://www.bpdrainssoutheast.co.uk/ramsgate.html
- logo: uploads/logo-1778673248892.svg

## Assistant

_[tool: view_image]_

_[tool: update_todos]_

_[tool: read_file]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: write_file]_

Good. Let me plan the system and start building. I'll go industrial-premium with:
- **Colors:** warm stone (#ECEAE7 / #6E6A65) base, near-black structure (#0E0D0B), CTA-only red #C8102E
- **Type:** Archivo (display, heavy) + IBM Plex Sans (body) + IBM Plex Mono (captions/specs)
- **Detailing:** sharp corners with 2-4px radii, registration marks, monospace metadata, striped image placeholders

Let me write all the files. Starting with tokens and shared components.Now let me write the shared components — header, footer, utility bar, icons, floating CTAs, image placeholders.

_[tool: write_file]_

Now the homepage template:

_[tool: write_file]_

Now the contact, area, service, gallery, testimonials templates plus the mobile homepage and the foundations/tokens artboards.

_[tool: write_file]_

Now Gallery, Testimonials, mobile homepage, and the foundations artboards.

_[tool: write_file]_

## Assistant

Now gallery, testimonials, mobile homepage and foundations:

_[tool: write_file]_

Now mobile and foundations:

_[tool: write_file]_

Now the main HTML that wires it all together with the design canvas and Tweaks:

_[tool: write_file]_

_[tool: show_html]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done. The BP Drains South East redesign is in **BP Drains — Website Design.html** as a pan/zoom design canvas — built for Claude Code handoff.

**What's in it**
- **00 Foundations** — palette, type scale, icon set, button states, spacing scale, plus 6 handoff notes (incl. The Red Rule)
- **01 Desktop templates** — Homepage · Contact · Area (Margate) · Service (Blocked drains) · Gallery · Testimonials
- **02 Mobile templates** — Homepage · Contact · Area · with the persistent red Call Now / Message Us floating CTAs

**System choices**
- **Colors:** warm stone (#ECEAE7 / #6E6A65) base, near-black (#0E0D0B) structure, **#C8102E** reserved strictly for CTAs
- **Type:** Archivo (display, 800/900) + IBM Plex Sans (body) + IBM Plex Mono (specs/registration marks) — industrial-premium, mechanical
- **Detailing:** 2-4px radii, registration corner marks ("BP·SE / HOMEPAGE / 01"), monospace metadata, striped image placeholders with photo briefs
- **Every page** has the 24/7 emergency utility bar across the top, sticky CTAs on the right, and consistent eyebrow-numbered sections

**Files shipped (the dev handoff)**
- `tokens.css` — all CSS custom properties + density / tone / type variants
- `components.jsx` — shared chrome (Logo, UtilityBar, SiteHeader, SiteFooter, FloatingCTAs, Icon, ImageSlot, AccreditChip, Eyebrow)
- `homepage.jsx` · `templates-1.jsx` (contact/area/service) · `templates-2.jsx` (gallery/testimonials) · `templates-mobile.jsx`

**Tweaks** (toolbar toggle): Grey tone (Warm / Cool / Steel) · Density (Compact / Comfort / Spacious) · Type pairing (3 options).

**Next steps for you**
1. Drop real photography into the labelled `<ImageSlot>` slots (each has a brief mono caption)
2. Confirm the exact logo red matches #C8102E
3. Pick a final type pairing via Tweaks before lock-down
4. Once approved, hand the project to Claude Code — the tokens + per-template files map cleanly to a Next.js/Astro build

