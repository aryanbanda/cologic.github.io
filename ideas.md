# Nexus IT Consulting — Design Brainstorm

## Design Approach Options

<response>
<text>

### Approach A — "Corporate Brutalism Meets Precision Engineering"
**Design Movement:** Post-digital corporate brutalism — raw structure, deliberate asymmetry, editorial confidence.

**Core Principles:**
1. Asymmetric tension: content never sits centered unless intentional
2. Type as architecture: headlines are structural elements, not decoration
3. Controlled restraint: every element earns its place
4. Dark-light rhythm: alternating section tones create visual pulse

**Color Philosophy:**
- Deep navy #0B1F3A as the dominant authority color — communicates stability, depth, trust
- Accent green #2ECC71 used only for CTAs, key numbers, and hover states — creates a "live signal" feel
- Neutral #F5F7FA for breathing sections — not white-white, slightly warm
- Emotional intent: serious but not cold, confident but not arrogant

**Layout Paradigm:**
- Offset grid: text blocks and visuals deliberately misaligned by design
- Left-anchored navigation with right-side content bleeding
- Sections use full-bleed dark panels alternating with light panels
- Numbers and labels float outside the main column

**Signature Elements:**
1. Thin horizontal rule lines that extend past the container edge
2. Large step numbers (01, 02, 03) rendered in outline/ghost style
3. Green accent bar on left edge of key panels

**Interaction Philosophy:**
- Hover reveals: content shifts subtly to reveal depth
- Links underline from left on hover
- Buttons have a "fill sweep" transition on hover

**Animation:**
- Entrance: elements slide in from slight offset (not fade-only)
- No parallax, no heavy scroll effects
- Subtle stagger on list items

**Typography System:**
- Display: Syne (bold, geometric, confident) for H1/H2
- Body: DM Sans (clean, readable, professional) for paragraphs
- Mono: JetBrains Mono for technical labels and step numbers
- H1: 72–96px, tight tracking; H2: 48px; Body: 16–18px, relaxed line-height

</text>
<probability>0.07</probability>
</response>

<response>
<text>

### Approach B — "Structured Modernism" ← SELECTED
**Design Movement:** Swiss International Style meets modern B2B SaaS — grid discipline, editorial hierarchy, purposeful whitespace.

**Core Principles:**
1. Grid as foundation: all elements align to an invisible 8px grid
2. Hierarchy through scale: size and weight do the work, not color
3. Negative space as premium signal: generous margins communicate confidence
4. Dark sections as anchors: navy blocks provide visual weight and rhythm

**Color Philosophy:**
- Navy #0B1F3A: authority, depth, primary backgrounds for hero and CTA
- Green #2ECC71: action, growth, life — reserved for buttons and key accents only
- White + #F5F7FA: clean breathing room between dark anchors
- Emotional intent: trustworthy, expert, forward-thinking

**Layout Paradigm:**
- Split layouts: left text / right visual throughout, alternating sides per section
- Full-width dark sections break the white rhythm
- Process section: horizontal timeline with large step numbers
- Services: structured panel layout, not card grid

**Signature Elements:**
1. Thin vertical green line as section accent / left border on key callouts
2. Large outlined numbers (01, 02, 03) for process steps
3. Subtle dot-grid or circuit-line pattern in hero background

**Interaction Philosophy:**
- Clean, purposeful hover states — color shift + subtle lift
- Form fields expand slightly on focus
- Navigation items have precise underline animations

**Animation:**
- Framer Motion entrance animations: fade + translateY(20px) → 0
- Staggered children for list/grid items
- No distracting parallax

**Typography System:**
- Display: Syne Bold for H1/H2 — geometric, strong, distinctive
- Body: Inter (400/500) for body text — readable, professional
- Labels: Space Grotesk for nav, labels, captions
- H1: 64–80px; H2: 40–52px; Body: 16px/1.7

</text>
<probability>0.09</probability>
</response>

<response>
<text>

### Approach C — "Dark Intelligence"
**Design Movement:** Dark-mode-first editorial design — inspired by Bloomberg Terminal meets Figma's marketing site.

**Core Principles:**
1. Dark as default: navy/near-black backgrounds throughout
2. Data-forward aesthetic: numbers, metrics, and labels are visual elements
3. Luminous accents: green glows slightly on dark backgrounds
4. Minimal chrome: no decorative borders, let content breathe

**Color Philosophy:**
- Near-black #070F1C as base — deeper than the spec, more dramatic
- Navy #0B1F3A for elevated surfaces
- Green #2ECC71 with subtle glow effect on dark backgrounds
- Light text: pure white for headings, #94A3B8 for body

**Layout Paradigm:**
- Full dark canvas with light content
- Asymmetric hero with large type bleeding off-screen
- Metric/stat blocks as visual anchors
- Services in a horizontal scroll or tab-based layout

**Signature Elements:**
1. Subtle green glow/halo behind accent elements
2. Thin grid lines as background texture
3. Animated counter numbers on scroll

**Interaction Philosophy:**
- Hover states with green glow expansion
- Smooth page transitions
- Cursor-following subtle highlight

**Animation:**
- Counter animations for stats
- Subtle background particle or grid animation
- Smooth section transitions

**Typography System:**
- Display: Clash Display for H1 — ultra-bold, distinctive
- Body: Satoshi for readability on dark
- Mono: Fira Code for technical elements
- H1: 80–120px; tight tracking

</text>
<probability>0.06</probability>
</response>

---

## Selected Approach: **B — Structured Modernism**

Chosen for: maximum alignment with the brief's requirements (premium, structured, high-trust, visually confident, not template-like). The Swiss grid discipline ensures every section feels intentional, while the dark-light rhythm creates visual interest without noise.
