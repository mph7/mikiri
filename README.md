<div align="center">

# 見切り — Mikiri

### A local manga reader built for Japanese immersion learners.

[![Status](https://img.shields.io/badge/status-early%20development-orange)](#roadmap)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Made with Go](https://img.shields.io/badge/bridge-Go-00ADD8)](#tech-stack)
[![Made with Next.js](https://img.shields.io/badge/web%20app-Next.js-black)](#tech-stack)

[What it does](#what-it-does) • [How it works](#how-it-works) • [Roadmap](#roadmap) • [Tech stack](#tech-stack) • [Getting started](#getting-started)

</div>

<br>

## What it does

Mikiri reads manga from a folder on your own computer and serves it in your browser — with **Yomitan, Jiten, and every other dictionary extension working exactly like they do on any other web page.**

That last part is the whole point. Most local manga readers render pages as images, which means the text on them can't be selected, looked up, or read by an extension. Mikiri renders OCR'd manga text as real, selectable text in the page — so the tools you already use for immersion just work, with zero setup on either end.

No file uploads. No cloud account. Nothing leaves your computer.

<br>

## How it works

Mikiri is two small pieces that run on the same machine:

```
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│   Your manga      │  scan │   Mikiri Bridge   │  HTTP  │   Mikiri (web)    │
│   folder          │ ────▶│   (Go, no GUI)    │ ◀────▶ │   Next.js app     │
│                   │        │                   │        │                   │
│   Series/Volume/  │        │   serves your     │  local │   library grid    │
│     *.mokuro      │        │   library over    │  host  │   + reader        │
│     page images   │        │   localhost       │        │                   │
└──────────────────┘        └──────────────────┘        └──────────────────┘
```

- **Mikiri Bridge** — a tiny background process. Point it at a folder once. It serves your library over `localhost` and does nothing else. No window, no account, no config beyond a file path.
- **Mikiri (web app)** — the library and reader, running entirely in your browser. It only ever talks to the Bridge on your own machine, whether you're running the app locally or using the hosted version.

Because the Bridge and the browser only need to be on the same computer, your manga never has to touch a server anywhere — including Mikiri's own.

<br>

## Roadmap

Mikiri is being built in a specific order, on purpose: prove the hardest and most important part first, then build outward from it.

- [ ] **Bridge** — scans a folder, serves it over `localhost`
- [ ] **Library** — grid view with covers, series grouping, reading status
- [ ] **Reader** — renders manga pages with a real DOM text overlay
- [ ] **Extension compatibility** — verified working with Yomitan / Jiten
- [ ] **Reading experience** — RTL, dual-page spreads, zoom, keyboard navigation
- [ ] **Progress** — auto-saved, resumable per volume

Once manga is genuinely finished, not before, the same approach is meant to extend to:

- Light novels & EPUBs
- Optional cloud sync for reading across devices

This checklist is the actual build order, not a feature wishlist — it updates as milestones land.

<br>

## Tech stack

| Piece | Stack | Why |
|---|---|---|
| **Bridge** | Go | Single static binary, no runtime to install, trivial cross-platform builds |
| **Web app** | Next.js (App Router) + TypeScript + Tailwind | The whole UI, running in your browser |
| **Manga format** | [`.mokuro`](https://github.com/kha-white/mokuro) | OCR'd text blocks + page images, not the deprecated Mokuro HTML output |
| **Storage** | Local SQLite (owned by the Bridge) | Library and progress live on your machine — nothing remote by default |

<br>

## Getting started

> Early development. Full setup instructions land with the first working milestone — for now, this is the shape of it.

```bash
git clone https://github.com/mph7/mikiri.git
cd mikiri
git checkout manga-mvp
```

You'll need manga already processed into `.mokuro` files using [mokuro](https://github.com/kha-white/mokuro) before pointing Mikiri at a folder.

<br>

## Philosophy

- **Local-first.** Your files stay on your machine. No login required to read.
- **Extension-native.** If it works on a normal web page, it works in Mikiri.
- **Finished beats big.** One format, done properly, before the next one starts.

<br>

---

<div align="center">
<sub>MIT licensed · Built for people who read a lot of manga in a language they're still learning</sub>
</div>