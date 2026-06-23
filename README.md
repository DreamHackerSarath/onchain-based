# GM Onchain — UI Clone (Clean‑Room)

A polished **UI-only** Next.js project inspired by **OnChainGM**. It recreates the look and flow without copying any proprietary code, text, or assets.

> ⚠️ **Legal note**: This project is for educational/demo purposes. Do **not** use any third‑party trademarks, logos, or copyrighted content. Replace branding and copy with your own before shipping.

## Tech
- Next.js 14 (App Router), React 18
- Tailwind CSS
- Lucide icons, Framer Motion (optional)

## Pages
- `/` Home (hero, stats, chain grid)
- `/feed` Global Feed (mock data)
- `/gm` Send GM composer + streak heatmap (UI only)
- `/leaderboard` Leaderboard table (mock data)
- `/deploy` Contract deployment UI (no logic)
- `/docs` Notes on wiring real web3 logic

## Run
```bash
npm i
npm run dev
```
Customize colors in `tailwind.config.ts` and global styles in `app/globals.css`.
Wire wallet + contract logic with your preferred stack (wagmi/viem, ethers, etc.).
