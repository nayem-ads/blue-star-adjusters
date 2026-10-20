import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import smartQuotes from './scripts/smart-quotes.mjs';
import seoSchema from './scripts/seo-schema.mjs';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://bluestaradjusters.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Old placeholder URL for Commercial Claims (linked before Sep 2026) keeps working.
  redirects: { '/commercial-claims/': '/claims/commercial/' },
  vite: { plugins: [tailwindcss()] },
  // seoSchema runs after smartQuotes so FAQ text in JSON-LD matches the page.
  integrations: [smartQuotes(), seoSchema()],
});
