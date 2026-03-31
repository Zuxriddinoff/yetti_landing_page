# YE77I TECH

Next.js landing page for YE77I TECH.

## Local Run

1. Install dependencies:

```bash
npm install
```

2. Create your local env file:

```bash
cp .env.example .env.local
```

3. Start development server:

```bash
npm run dev
```

## Environment Variables

Use these variables in `.env.local` for local development and in Vercel Project Settings for production:

```env
LEAD_BOT_URL=https://your-backend-domain.com/leads
NEXT_PUBLIC_LEAD_BOT_URL=https://your-backend-domain.com/leads
LEAD_BOT_SECRET=
```

Notes:

- `NEXT_PUBLIC_LEAD_BOT_URL` is used by the popup form in the browser.
- `LEAD_BOT_URL` is used by the internal API route at `/api/leads`.
- If your backend expects a secret header, set `LEAD_BOT_SECRET`.
- Never commit `.env.local`.

## GitHub Push

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Deploy To Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. In Vercel, open `Project Settings -> Environment Variables`.
4. Add these variables:
   - `LEAD_BOT_URL`
   - `NEXT_PUBLIC_LEAD_BOT_URL`
   - `LEAD_BOT_SECRET` if your backend requires it
5. Redeploy the project.

## Build Check

```bash
npm run build
```
# yetti_landing_page
