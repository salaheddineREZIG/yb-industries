# Brand foundation (developers only)

This document is internal. Nothing here is published on the website.

## Logo

| Item | Value |
| --- | --- |
| Path | `public/images/brand/logo.png` (served at `/images/brand/logo.png`) |
| Source | `Adobe_Express_-_file.png`, copied byte for byte, not edited |
| Format | PNG, RGBA, 830 x 830 px (square, ratio 1:1) |
| Transparency | Only outside the circle (the four corners). The disc itself is opaque white |
| Colours | Near-black ink (about `#1B1B1C`) on white. No other colour |
| Content | Circular ring, "YB" monogram, then "Y B" and "INDUSTRIE" as text |
| File size | about 630 KB (see open points) |

Component: `components/ui/logo.tsx`.

```tsx
<Logo className="w-16 md:w-24" />
```

The width comes from the caller through Tailwind classes. The height is always `h-auto`, so the 1:1 ratio is preserved. The default alt text is `Logo YB INDUSTRIES`. Pass `alt=""` only when the company name is already written in text right next to the logo.

### Usage rules

- Use the file as supplied. Do not redraw it, retype it in CSS or recolour it.
- Keep it square. Set only a width, never a width and a height.
- Keep the white disc. It is part of the logo and makes it work on light and dark backgrounds alike.
- Do not clip the ring. The outer edge of the ring touches the edge of the image, so avoid `overflow-hidden` or negative margins around it.
- Leave clear space around it of at least the thickness of the letter strokes of "YB" (about 10 % of the logo width).
- Recommended minimum displayed width: 64 px for the monogram. Below about 120 px the word "INDUSTRIE" is hard to read, so do not rely on it there.

### Prohibited treatments

- Rounded or circular containers, borders or backgrounds around the logo
- Drop shadows, glows, blur or any filter
- Gradients or tinting, including CSS `filter: invert()` or `opacity` tricks
- Stretching, skewing, rotating or cropping
- Animating the logo
- Placing it over photographs or busy backgrounds

## Colours

The logo is achromatic, so the palette is achromatic too. No blue exists in the logo, therefore no blue is defined.

| Token | Value | Use |
| --- | --- | --- |
| `background` | `#FFFFFF` | Page background. Same white as the logo disc |
| `surface` | `#F5F5F5` | Panels, table headers |
| `surface-secondary` | `#E8E8E9` | Alternate bands, hover on surfaces |
| `foreground` | `#1B1B1C` | Body text and headings. Measured logo ink colour |
| `muted-foreground` | `#5A5A5C` | Secondary text, captions |
| `border` | `#D6D6D7` | Decorative dividers, card outlines |
| `border-strong` | `#8C8C8E` | Form fields, anything that must be perceivable as a boundary |
| `primary` | `#1B1B1C` | Buttons, links, dark bands (footer), focus outline |
| `primary-hover` | `#3B3B3D` | Hover state of `primary` |
| `primary-foreground` | `#FFFFFF` | Text on `primary` |

There is no accent colour, because the logo has none.

Contrast ratios (WCAG 2.x, computed):

| Pair | Ratio |
| --- | --- |
| `foreground` on `background` | 17.2 : 1 |
| `foreground` on `surface` | 15.8 : 1 |
| `muted-foreground` on `background` | 6.9 : 1 |
| `muted-foreground` on `surface` | 6.3 : 1 |
| `muted-foreground` on `surface-secondary` | 5.6 : 1 |
| `primary-foreground` on `primary` | 17.2 : 1 |
| `primary-foreground` on `primary-hover` | 11.2 : 1 |
| `border-strong` on `background` | 3.4 : 1 (meets the 3 : 1 rule for UI boundaries) |

`border` (1.5 : 1) is decorative only. Do not use it as the only visible edge of an input or button.

### How tokens work

Tokens are defined once in `app/globals.css` (`:root` variables, exposed to Tailwind with `@theme inline`). The default Tailwind palette is disabled with `--color-*: initial`, so classes like `bg-blue-500` or `text-gray-600` do not exist. Use `bg-surface`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary-foreground` and so on. `transparent`, `current` and `inherit` still work.

To change the brand colour later (for example if the company supplies a navy), change `--primary`, `--primary-hover` and, if wanted, `--foreground`, in that one file. Check contrast again after any change.

## Visual direction

Technical, industrial, precise, restrained, trustworthy.

Preferred: flat colours, precise alignment, strong information hierarchy, restrained spacing, subtle borders, minimal shadows, small corner radii, real photography, clear typography, practical interfaces.

Prohibited: gradients, glassmorphism, blobs and decorative shapes, giant hero text, heavily rounded cards, pill-shaped controls, heavy shadows, decorative heading underlines, excessive animation, SaaS or startup visual language, invented statistics, testimonials, certifications, partners or company claims, marketing filler, lorem ipsum, em dashes in website copy.

## Open points

1. **Navy versus black.** Phase 0 assumed a dark blue direction. The supplied logo is black and white. Palette values follow the logo. If a navy is wanted for the site, it has to be supplied by the company and would be a deliberate addition, not something derived from the logo.
2. **Spelling.** The logo reads "INDUSTRIE" (no final S). The project and company name is "YB INDUSTRIES". Confirm which spelling is official. The logo file must not be edited by developers, so a corrected file would have to come from the company.
3. **Shading in the artwork.** The letters have very slight tonal variation (about `#151515` to `#1D1D1E`) and soft edges, which suggests raster artwork rather than a clean vector export. A vector version (SVG) would be better for a header at small sizes.
4. **File weight.** 630 KB is heavy for a logo. Lossless optimization or an SVG source should be handled in the performance phase.
5. **Favicon.** Not created. The Next.js default was removed in Phase 1. A favicon derived from the logo is a later decision.
