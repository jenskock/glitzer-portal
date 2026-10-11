# Illustration Materials

This directory contains the approved style guide and reference materials for all Glitzer-Portal book illustrations.

## Files

### `style-prompt.md`
The fixed style prompt used to generate all book illustrations. This ensures visual consistency across all volumes.

### `stil-referenz-ds1.jpg`
The approved reference image showing the target illustration style. All scenes should match this aesthetic:
- Warm, inviting lighting
- Comic-style with soft shading
- Clear character expressions
- Detailed but readable backgrounds
- Child-friendly color palette

### `characters/lineup.png`
Character lineup reference showing all main characters:
- **Lotti** (pink axolotl)
- **Bruno** (brown capybara)
- **Paula** (girl with dark hair)
- **Tuko** (colorful toucan)
- **Momo** (brown sloth)
- **Fips** (green hummingbird)
- **Rudi** (gray raccoon)

## Usage

When generating new illustrations for story pages or puzzles:

1. Use the **style prompt** as the base for your image generation prompt
2. Reference **stil-referenz-ds1.jpg** for the target visual style
3. Use **characters/lineup.png** to ensure character consistency
4. Export final images as WebP format (or SVG for placeholders)
5. Place in `../images/bandN/` directory with appropriate naming:
   - Story pages: `s01-left.webp`, `s01-right.webp`, etc.
   - Puzzles: `p01-suchbild.webp`, `p02-diff-left.webp`, etc.

## Technical Format

See [`../REFACTORING_SUMMARY.md`](../REFACTORING_SUMMARY.md) for:
- Image path data format
- Hotspot coordinate system (percentage-based)
- Responsive layout requirements
- Viewport sizes (1180×820, 1366×1024)
