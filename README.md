# Vijay Logistics

A complete Next.js App Router and TypeScript implementation of the Vijay Logistics website. All images, the favicon, SVG icons, styles and fonts are included in the repository.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run typecheck
npm run build
npm start
```

The project can be imported directly into Vercel as a Next.js project. No environment variables or third-party API keys are required.

## Pages

| Route       | Content                                                            |
| ----------- | ------------------------------------------------------------------ |
| `/`         | Home, company overview, services and process                       |
| `/about`    | Company history and interactive photo gallery                      |
| `/services` | Transportation, warehousing, automotive and hub-and-spoke services |
| `/network`  | Coverage, infrastructure and operating locations                   |
| `/contact`  | Business contact details and quote enquiry form                    |

## Source layout

- `app/`: page components, route metadata, root layout and shared styles.
- `components/`: responsive navigation, footer, SVG icons, native dialog gallery and quote enquiry form.
- `public/assets/`: every image and favicon used on the website.
- `public/fonts/`: local DM Sans and Manrope fonts, with their SIL Open Font License files.
- `package-lock.json`: exact dependency versions for reproducible installation.

Edit company copy in the page components and global styling in `app/globals.css`. Internal navigation uses Next.js links. The mobile menu, photo gallery and enquiry form use React client components.

## Quote form

The form validates visitor input and prepares an email addressed to `admin@vijaylogisticsmail.com`. The visitor reviews and sends it through their email app; a copy-to-clipboard fallback is included. The form does not submit enquiries to a server, store personal data or send emails automatically. Service links preselect the relevant service on the contact page.

## Assets and content

Company information, fleet and team photography, the India network map and customer testimonial come from the supplied Vijay Logistics company profile. The container-yard hero photo is the Unsplash image `photo-1494412519320-aa613dfb7738`, stored locally as `public/assets/hero.jpg`. Icon paths and the brand treatment are included in the source. Fonts are self-hosted with their licenses; rendering makes no requests to Google Fonts or Unsplash.

This repository contains the custom implementation created for Vijay Logistics. It does not contain the commercial ThemeForest template source code. The original private Sites review URL remains a separate deployment.
