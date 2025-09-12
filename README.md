# Homez

React + TypeScript + Vite app configured with Tailwind CSS and ready for Vercel deploy.

## Requirements

- Node.js 18+ (LTS recommended)
- npm 9+

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: type-check then build to `dist`
- `npm run preview`: preview production build
- `npm run lint`: run ESLint

## Local Development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:5173`

## Deploy on Vercel

This repo includes `vercel.json` for SPA routing.

### One‑click (recommended)

1. Create a new project on Vercel and import this repo.
2. Framework Preset: "Vite" (or "Other" with settings below).
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Root directory: project root (where `package.json` lives)
6. Click Deploy.

### Via Vercel CLI

1. Install CLI: `npm i -g vercel`
2. Login: `vercel login`
3. First deploy (and set): `vercel --prod`  
   - When asked:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Override settings: No (because `vercel.json` exists)
4. Subsequent deploys: `vercel --prod`

### SPA Routing

`vercel.json` rewrites all non-asset routes to `index.html`, ensuring React Router works on page refresh.

## Environment Variables

Add any required vars in Vercel Project Settings → Environment Variables. Locally, create `.env` files as needed and restart dev server.

## Project Structure

- `src/`: app source
- `public/`: static assets copied as‑is
- `dist/`: production build output
- `vite.config.ts`: Vite config with `@` alias to `src/`
- `vercel.json`: Vercel build and routing config
