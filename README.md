# AgenzI — Creative Agency Website

Full-stack agency website built with Next.js 16, Tailwind CSS v4, and Sanity CMS. Inspired by [Arpeggio](https://arpeggio.framer.website).

## Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Framework  | Next.js 16 (App Router)                 |
| Styling    | Tailwind CSS v4                         |
| Animation  | Framer Motion                           |
| CMS        | Sanity v3 (embedded studio at /studio)  |
| Email      | Resend                                  |
| Forms      | React Hook Form + Zod                   |
| Icons      | Lucide React                            |
| Hosting    | Vercel                                  |

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in your values
cp .env.example .env.local

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).  
Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

## Environment Variables

| Variable                         | Description                       |
|----------------------------------|-----------------------------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Sanity project ID                 |
| `NEXT_PUBLIC_SANITY_DATASET`     | Sanity dataset (default: production) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version date           |
| `SANITY_API_TOKEN`               | Sanity read/write token           |
| `SANITY_REVALIDATE_SECRET`       | Secret for webhook revalidation   |
| `RESEND_API_KEY`                 | Resend API key for email          |
| `NEXT_PUBLIC_SITE_URL`           | Public site URL                   |
| `NEXT_PUBLIC_POLAR_CHECKOUT_CORE`| Polar.sh checkout URL (Core plan) |
| `NEXT_PUBLIC_POLAR_CHECKOUT_PRO` | Polar.sh checkout URL (Pro plan)  |

## Folder Structure

```
src/
├── app/              # Next.js App Router pages + API routes
│   ├── (site)/       # Public-facing pages (route group)
│   ├── api/          # Route handlers (contact, newsletter, revalidate)
│   └── studio/       # Embedded Sanity Studio
├── components/
│   ├── layout/       # SideNav, TopNav, Footer
│   ├── sections/     # Page section components
│   ├── ui/           # Reusable UI primitives
│   └── providers/    # Client-side context providers
├── lib/              # Sanity client, queries, Resend, utils, constants
├── sanity/schemas/   # Sanity document schemas
├── hooks/            # Custom React hooks
└── types/            # TypeScript type declarations
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

Make sure all environment variables are set in the Vercel project dashboard before deploying.
