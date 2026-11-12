# Personal Portfolio

A single-page portfolio built with React + TypeScript + Vite. Clean editorial
design: warm off-white background, charcoal-navy text, one deep-teal accent,
square edges and thin borders. No dependencies beyond React.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where the content lives

Everything you may want to change is in **`src/data/profile.ts`**:

| What | Where |
|---|---|
| Name, role, intro, email, GitHub/LinkedIn/X | `person` |
| About paragraphs and the facts row | `about` |
| Skill groups | `skillGroups` |
| Projects (name, purpose, contribution, tech, links, image) | `projects` |
| Experience timeline | `experience` |
| Education & certificates | `education`, `certificates` |

Also update when you personalize:

- `index.html` — `<title>`, meta description, and Open Graph tags
- `public/favicon.svg` — aspect-ratio-safe favicon wrapper; the light/dark logo assets live in `public/favicon-light.svg` and `public/favicon-dark.svg`
- `public/cv.pdf` — keep this as your current CV
- `src/assets/projects/` — swap in your own screenshots

## Structure

```
src/
  data/profile.ts        all content (the only file to edit for copy)
  components/            Header, Hero, About, Skills, Projects,
                         Experience, Education, Contact, Footer, Section
  styles/global.css      the whole design system
  assets/projects/       project screenshots
```

## Notes

- The contact form validates input and sends through FormSubmit. The first
  submission requires confirming the activation email sent to the configured
  inbox before deliveries begin.
- The Jira Clone card intentionally has no live demo link — its deployment
  has been retired. Add `liveUrl` back in `profile.ts` when redeployed.
- Keyboard support: skip-to-content link, visible focus rings, Escape closes
  the mobile menu, form errors are announced with `role="alert"`.
