# YOU DON'T HATE ME

Playful friendship quiz: 10 questions, a score, a shareable result. React + Vite + TypeScript + Tailwind.

## Run
```bash
npm install
npm run dev       # local dev
npm run build     # production build -> dist/
npm run preview   # preview the build
```

## Characters (already included)
Two characters, switchable on the first question screen (Him / Her, remembered in localStorage and in result links):
```
public/assets/characters/male/   character-main|happy|sad|shocked|angry|love|confused|celebrate.png
public/assets/characters/female/ (same 8 names)
public/assets/avatars/male/      avatar-1..5.png   (avatar-1 is used in the picker)
public/assets/avatars/female/    avatar-1..5.png
```
Replace any file with your own transparent PNG (same filename) to swap art. A missing expression falls back to that character's `character-main.png`; if that is missing too, a built-in placeholder face shows.

## Edit content
- Questions: `src/data/questions.ts` (value 0-3, higher = likes you more)
- Result tiers + copy: `src/data/results.ts`
- Scoring: `src/lib/scoring.ts`
- Which face after each answer: `src/data/characters.ts`

## Shareable result links
`#/player/completed?score=87&who=female` works everywhere (`who` = male | female).

## Deploy
**GitHub Pages**: `base: './'` is already set. Push to GitHub, then Settings > Pages > Source: GitHub Actions, and add `.github/workflows/deploy.yml` (included). Or run `npm run build` and publish `dist/`.
**Vercel / Netlify**: import the repo, build command `npm run build`, output `dist`.
