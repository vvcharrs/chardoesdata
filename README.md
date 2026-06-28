# CharDoesData

CharDoesData is a static-exportable Next.js publication foundation for long-form, evidence-based data journalism on fashion, beauty, retail, luxury, consumer behaviour, and culture.

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Adding Investigations

Create a new `.mdx` file in `content/investigations/`.

Required frontmatter:

```mdx
---
title: 'Investigation title'
summary: 'One or two sentence standfirst.'
date: '2026-06-28'
tags:
  - Fashion
  - Retail
coverImage: '/images/example.png'
coverAlt: 'Accessible image description.'
featured: false
---
```

The file name becomes the slug. For example, `content/investigations/why-is-blue-back-this-season.mdx` becomes `/investigations/why-is-blue-back-this-season/`.

New investigations automatically appear on the homepage, archive, related investigation blocks, and static route generation.

## MDX Components

The article template supports:

- `PullQuote`
- `ImageWithCaption`
- `ChartContainer`

Use regular Markdown headings for article sections. Second-level headings automatically populate the sticky table of contents.

## Deployment

The project is configured for static export:

```bash
npm run build
```

Next.js writes the static site to `out/`, which can be deployed to GitHub Pages.

For a user site, publish the `out/` directory from the repository configured for GitHub Pages. For a project site, set the repository Pages source to the generated static output or use a GitHub Actions workflow that builds and uploads `out/`.

## Production Notes

- Keep article copy in MDX and reusable visual systems in components.
- Store public images in `public/images/`.
- Keep chart data close to the article while prototyping; move shared datasets into `lib/` or `assets/` once multiple investigations reuse them.
- Every published investigation should include methodology, limitations, and sources.
