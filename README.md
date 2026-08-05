# Cutting Room

Web design and build work by [Matúš Kališ](https://github.com/matuskalis).

**Gallery: https://matuskalis.github.io/cutting-room/**

Marketing sites, product surfaces and data tools. Some shipped to real traffic, some were directions a client didn't take. Both are here, labelled honestly.

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

| Entry | Stack | Status |
|---|---|---|
| [Tharseo IT](case-studies/tharseo-it.html) | Next.js, GSAP, Lenis | Shipped · client |
| [LCI-SK](case-studies/lci.html) | Next.js, Leaflet | Shipped · client |
| [SPPK](case-studies/sppk.html) | Next.js | Client rebuild |
| [Vorex](case-studies/vorex.html) | Product site | Shipped |
| [matuskalis.com](case-studies/matuskalis.html) | Personal site | Shipped |
| [AI Consulting Microsite](case-studies/ai-matuskalis.html) | Microsite | Shipped |
| [Coral Brutalist](case-studies/coral-brutalist.html) | Next.js 16, Tailwind v4 | Not shipped · **source included** |
| [SoilScale](case-studies/soilscale.html) | Next.js, Three.js | Client work |
| [ShipFourteen](case-studies/shipfourteen.html) | Next.js | Shipped · own brand |
| [Birdiez 2 Go](case-studies/birdiez2go.html) | Static site | Shipped · client |
| [Awesome by Choice](case-studies/awesome-by-choice.html) | Self-contained HTML | Shipped · client |
| [Grief Guides](case-studies/grief-guide.html) | Next.js | Shipped · EN + SK |
| [SitterBolt](case-studies/sitterbolt.html) | Marketplace | Concept |
| [Learning Tools](case-studies/learning-tools.html) | Dark UI | SpeakSharp + Uni-Vise |
| [Dispatch Board](case-studies/dispecing.html) | Static app | Concept · sample data |
| [Smart Contract Archive](case-studies/legalsystems.html) | Static app | Concept · fictional data |

## Running an entry

```bash
cd work/coral-brutalist
npm install
npx next dev
```
