# Epshita Portfolio

A responsive, dark editorial-style portfolio built with React, Vite, Framer Motion, and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. In the terminal, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Personalize before publishing

Open `src/main.jsx` and update the `PROFILE` object:
- `email`: set to epshita2102@gmail.com
- `github`: your GitHub URL (currently set to the provided profile)
- `linkedin`: your LinkedIn URL (currently set to the provided profile)
- `resume`: keep `/resume.pdf` and place your PDF inside a new `public` folder, or change the path

Then update the `github` and `demo` fields for each project in `src/main.jsx` with the exact repository and deployed-site URLs. These are intentionally blank until the real links are available; no fake project links are shown. Add certificate details and credential URLs to the Certificates section once the certificates are provided. Remove any project that is not ready to showcase. In particular, replace the generic descriptions for Smart Travel Website and ABTalks with accurate feature summaries.

## Build for deployment

```bash
npm run build
```

Deploy the generated `dist` folder to Vercel or Netlify. Vite's default configuration works for a static portfolio.
