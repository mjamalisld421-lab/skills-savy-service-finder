# SkillsSavy — Service Finder Platform

SkillsSavy is a responsive service-discovery experience built from a marketplace design concept. The project focuses on the part of marketplace products that frontend engineers directly own: helping people move from a broad need to a relevant professional through clear information architecture, useful filtering, and low-friction forms.

This repository is intentionally a frontend-only Version 1. Provider additions and booking requests use in-memory React state, so the interface demonstrates realistic product behavior without pretending a database, account system, or booking API exists.

**Live demo:** Add your Netlify URL here after deployment.

## Product highlights

- Responsive homepage with hero search, category highlights, featured providers, and calls to action
- Provider directory with search across names, services, bios, and skills
- Category and availability filters, result count, filter reset, and empty state
- Reusable provider cards with pricing, ratings, tags, and availability
- Detailed provider profile modal
- Validated booking request form with a local-state success flow
- Validated add-provider form that updates the in-memory directory
- Accessible labels, visible focus states, Escape-to-close modals, and mobile navigation
- Netlify SPA redirects and build configuration

## Engineering decisions

- **Typed domain model:** provider, category, and booking data share TypeScript definitions.
- **Derived search results:** filtering remains predictable by deriving results from source data and the active controls.
- **URL-backed discovery:** provider search and filters are reflected in query parameters.
- **Reusable primitives:** layout, provider, booking, and UI concerns are separated without introducing an unnecessary component framework.
- **Honest state boundaries:** submitted data lives only for the current browser session.
- **Deployment-safe routing:** Netlify rewrites direct route requests to the Vite entry point.

## Tech stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS
- React Router
- ESLint
- Local mock data and React state

## Project structure

```text
src/
  components/
    booking/
    layout/
    providers/
    ui/
  data/
  hooks/
  pages/
  types/
  utils/
  App.tsx
  main.tsx
  index.css
```

## Setup

```bash
git clone <your-repository-url>
cd skills-savy-service-finder
npm install
npm run dev
```

Open the local URL printed by Vite.

### Quality checks

```bash
npm run lint
npm run build
npm run preview
```

The production build is created in `dist/`.

## Screenshots

Create a `screenshots/` directory after deploying or running the app locally, then capture:

- `homepage.png` — hero, categories, and featured providers
- `providers.png` — populated provider directory with filters
- `booking-form.png` — booking request modal
- `add-provider.png` — local provider form

Once the files exist, add them to this section using relative Markdown image paths. Screenshot links are intentionally omitted until real images are available.

## Deploy to Netlify

### Netlify dashboard

1. Push the repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the GitHub repository.
4. Use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy the site.

The included `netlify.toml` applies the same build settings and redirects client-side routes to `index.html`.

## What I would build next

- Persist providers and booking requests behind a documented API and database
- Add provider portfolio media and richer review data
- Add sorting, pagination, favorites, and saved searches
- Introduce authenticated customer and provider dashboards
- Add email notifications and a real booking lifecycle
- Add automated component and end-to-end tests

## Current constraints

- All additions and booking requests are stored in React state and reset on page refresh
- No authentication, payments, messaging, database, or backend API
- Ratings and reviews are display-only mock data
- Availability is a simple provider flag, not a live calendar
