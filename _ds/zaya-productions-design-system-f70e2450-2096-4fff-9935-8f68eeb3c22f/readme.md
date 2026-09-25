# Zaya Productions — Design System

Zaya Productions is a premium multidisciplinary creative house — motion design, film, visual storytelling and brand experiences. The brand behaves like a **luxury creative label**, not an agency: cinematic, editorial, minimal, slightly mysterious. Expensive without trying to look expensive.

## Sources
Provided by the user (no codebase, Figma or live site was supplied):
- `uploads/NEW Logotype.png` — serif wordmark "Zaya Productions" → `assets/logotype-*.png`
- `uploads/blk logo.png` — waveform mark → `assets/mark-*.png`
- Founders Grotesk (Light, Regular, Medium, Semibold, Semibold Italic, Bold) and ZT Bros Oskon 90s (ExtraLight, ExtraLight Italic, Light, Light Italic, Regular, Italic) `.otf` files → `fonts/`
- Written brief: accent #A83366, near-white grounds, grain/glow/fine grid, serif × sans contrast, restrained motion.

Because no product UI exists yet, the components and website UI kit are first-principles expressions of the brief, not recreations.

## Index
- `styles.css` — entry point (imports only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (layout, radius, elevation, atmosphere), `motion.css`, `base.css` (element defaults).
- `fonts/` — 12 OTF files.
- `assets/` — logotype + mark in black / white / magenta PNG; `grain.png` (256px tileable noise).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Motion, Brand).
- `components/` — React primitives, grouped by concern (below).
- `ui_kits/website/` — click-through marketing site (Home, Work, Project, Studio, Contact).
- `SKILL.md` — Agent-Skill entry point.

## Components
- **brand/** — `Logo` (logotype · mark · lockup; ink/paper/magenta), `Atmosphere` (paper wash or night, grain, single glow, optional hairline grid)
- **actions/** — `Button` (primary · secondary · accent · ghost), `IconButton` (square, glyph), `TextLink` (→ / ↗)
- **forms/** — `Input` (underline; lg serif variant; textarea), `Select`, `Checkbox`, `Radio`, `Switch`
- **display/** — `SectionLabel` ((01) index strip), `Tag` (square metadata), `ProjectCard` (portfolio tile)
- **navigation/** — `NavBar`, `Tabs` (text filters with counts)
- **feedback/** — `Dialog`, `Toast`, `Tooltip`

No source inventory existed, so this is a standard set trimmed to what a creative house site needs (no Avatar, Badge counters, Card containers). `Atmosphere`, `SectionLabel` and `ProjectCard` are **intentional additions** — they carry the brand's signature layouts.

---

## CONTENT FUNDAMENTALS
**Voice:** a director speaking quietly. Confident, spare, sensory. Says less than it could. Never sells; invites.
- **We / you.** The studio is "we"; the reader is "you" — used sparingly. Never "our team of experts", never "solutions".
- **Casing:** sentence case everywhere — headlines, buttons, nav ("Start a conversation", not "Start A Conversation"). Uppercase only for small tracked labels (`SELECTED WORK`, `RUNTIME 02:14`).
- **Headlines** are short declaratives, often with one italicised word carrying the feeling: "A house for *moving* pictures." / "Have something that should be *felt?*" / "The quiet *between* frames."
- **Body** is concrete and physical — light, frames, nights, film stock, rooms — not abstract value props. "Shot on 35mm across three nights in Lisbon."
- **Labels & metadata** are terse and indexed: "(02) — Selected work", "2019 — 2026", "Lisbon — 21:04". Em dashes with spaces as separators; parentheses around index numbers.
- **CTAs:** verbs of entry, never urgency — "See the work", "Start a conversation", "View the reel", "Next project". No "Get started", "Book a call", "Learn more".
- **Numbers** appear as craft data (runtime, year, frame rate), never as vanity stats ("200+ projects", "98% satisfaction").
- **No emoji. No exclamation marks.** No buzzwords (innovative, cutting-edge, synergy, next-level, AI-powered).

## VISUAL FOUNDATIONS
**Color.** Near-white warm paper (#F6F4F1) is the canvas; warm ink (#0E0D0C) for type. Magenta #A83366 is a *precise accent*: one italic word, an active nav dot, a focus rule, an index number, a crosshair — rarely more than ~2% of a view. Never a section background, never a gradient fill across UI. "Night" (#0B0A0A) is a second world for film: project heroes, reels, footer, closing CTAs. Maximum two grounds per page (paper + night).

**Type.** ZT Bros Oskon 90s (serif) for display, headlines and editorial moments — mostly ExtraLight 200 at huge sizes (88–176px, leading 0.9, tracking −2.5%), Light 300 for headings, italic for the expressive word. Founders Grotesk (sans) for everything functional: body 17/1.5 Regular, lead 24/1.32 Light, nav 16 with +4% tracking, labels 11–12 Medium uppercase +16%. Founders runs small, so sans sizes sit a notch larger than usual. Never set sans in display sizes; never set serif below 24px.

**Space & layout.** 12-column grid, fluid gutter (20–48px), section rhythm 96–224px. Compositions are **asymmetric**: content starts on column 2 or 8, cards offset vertically (60–160px), text blocks narrow (≤34em). Negative space is the main material. Sticky header is the only fixed element.

**Backgrounds.** Paper wash (a faint radial from #FBFAF8 top-right to paper-2), a tileable film grain at 6% (multiply on paper, screen on night), and **one** soft magenta radial glow per view, positioned low and off-centre like stage light. Optional 88px hairline grid in heroes/contact. No full-bleed stock imagery; imagery is the work itself — stills and film frames, full-bleed or in generous crops.

**Imagery vibe.** Cinematic, low-key, warm shadows, deep blacks, grain present, one saturated practical light (ideally magenta/rose). Never bright, flat, or corporate. Placeholders use a dark graded gradient + grain.

**Geometry.** 1px rules (ink for section headers, 12% ink for dividers), index numbers in parentheses, small 15px magenta crosshairs as registration marks, square frames. Radius is **0** by default; 2px only if needed for inputs; circles only for dots and radio.

**Borders & cards.** There are no "cards" in the conventional sense — no shadows, no rounded containers, no fills. Content is grouped by rules and whitespace. A project tile is an image plus type underneath.

**Shadows/elevation.** Flat. `--shadow-lift` only for floating media; `--shadow-overlay` for dialogs. No inner shadows.

**Transparency & blur.** Scrim for dialogs is night at 64%, no backdrop blur. Sticky header uses paper at 94%. No glassmorphism.

**Motion.** Slow and eased: `cubic-bezier(0.22,1,0.36,1)`. Reveals fade + rise 24px over 1400ms, staggered 200ms. Hover transitions 360ms. Image zoom on hover 1.035× over 1400ms. No bounce, no spring, no parallax gimmicks, no looping decorative animation. Respect reduced-motion (durations → 0).

**Hover.** Color shifts to magenta (links, nav, outlines); primary button fill ink → magenta; arrows drift 4px; project titles turn italic; images slowly zoom. No opacity-dimming, no lifts.

**Press / focus.** No shrink. Focus is a 1px magenta outline offset 3px, or the underline turning magenta on fields.

## ICONOGRAPHY
The brand is typographic — no icon font or SVG set was supplied, and none is needed for most surfaces.
- **Unicode glyphs are the icon system:** → (next/forward), ← (back), ↗ (external), ↓ (select), × (close), + (expand), ▶ (play), ♪ (sound). Set in Founders Grotesk Light, inheriting color.
- **Brand mark:** the waveform (`assets/mark-*.png`) can act as a favicon, loader, or sign-off. Never redraw it.
- **No emoji**, no illustrated icons, no filled icon sets.
- If a real pictogram is unavoidable (e.g. a product UI), substitute **Lucide** from CDN at `stroke-width: 1.25`, 20px, currentColor — *flagged substitution*, not brand-supplied.

## Fonts
Both families are the licensed originals supplied by the user; no substitutions. Fallbacks in the stack: Cormorant Garamond/Georgia (serif), Helvetica Neue (sans).
