# Cutting Room

Web design and build work by [Matúš Kališ](https://github.com/matuskalis).

**Gallery: https://matuskalis.github.io/cutting-room/**

Marketing sites, product surfaces, data tools and motion work. Some shipped to real traffic, some were directions a client didn't take. Both are here, labelled honestly.

## How this repo works

| | |
|---|---|
| `index.html` | the gallery, served by GitHub Pages |
| `case-studies/` | one page per entry |
| `work/` | full source, for entries where publishing it is safe |
| `assets/shots/` | screenshots and video |

**Client work is screenshots and write-ups only.** The content, copy and branding of a client site belong to the client, so it is not republished here.

**Where full source is included, it has been de-branded** — the client's name, copy, photography, logos and contact details are replaced with an invented company, and the entry says so on its case study page.

## Entries

| Entry | Year | Stack | Status |
|---|---|---|---|
| [Tharseo IT](case-studies/tharseo-it.html) | 2026 | Next.js, GSAP, Lenis | Shipped · screenshots |
| [LCI-SK](case-studies/lci.html) | 2026 | Next.js, Leaflet | Shipped · screenshots |
| [Coral Brutalist](case-studies/coral-brutalist.html) | 2026 | Next.js 16, Tailwind v4, Framer Motion | Not shipped · source included |
| [SoilScale](case-studies/soilscale.html) | 2026 | Next.js, Three.js | Client work · screenshots |
| [ShipFourteen](case-studies/shipfourteen.html) | 2026 | Next.js | Shipped · own brand |
| [Birdiez 2 Go](case-studies/birdiez2go.html) | 2026 | Static site | Shipped · screenshots |
| [Awesome by Choice](case-studies/awesome-by-choice.html) | 2026 | Self-contained HTML | Shipped · screenshots |
| [Grief Guides](case-studies/grief-guide.html) | 2026 | Next.js | Shipped · EN + SK |
| [Dispatch Board](case-studies/dispecing.html) | 2026 | Static app | Concept · sample data |
| [Smart Contract Archive](case-studies/legalsystems.html) | 2026 | Static app | Concept · fictional data |
| [Domino Chain Reaction](case-studies/motion-domino.html) | 2026 | Remotion, React | Motion · video |

## Running an entry

```bash
cd work/coral-brutalist
npm install
npx next dev
```
