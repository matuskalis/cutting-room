# Cutting Room

Web design and build work by [Matúš Kališ](https://github.com/matuskalis).

**Gallery: https://matuskalis.github.io/cutting-room/**

Marketing sites, product surfaces and rebuilds. Some shipped to real traffic, some were directions a client didn't take. Both are here, labelled honestly.

## How this repo works

| | |
|---|---|
| `index.html` | the gallery, served by GitHub Pages |
| `case-studies/` | one page per entry |
| `work/` | full source, for entries where publishing it is safe |
| `assets/shots/` | screenshots |

**Client work is screenshots and write-ups only.** The content, copy and branding of a client site belong to the client, so it is not republished here.

**Where full source is included, it has been de-branded** — the client's name, copy, photography, logos and contact details are replaced with an invented company, and the entry says so on its case study page.

## Entries

| Entry | Year | Stack | Status |
|---|---|---|---|
| [Coral Brutalist](case-studies/coral-brutalist.html) | 2026 | Next.js 16, Tailwind v4, Framer Motion, GSAP | Not shipped · source included |

## Running an entry

```bash
cd work/coral-brutalist
npm install
npx next dev
```
