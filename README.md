# VIP Editor — Website (Next.js)

Pages: `/` (landing page with live photo editor demo), `/about`, `/privacy`, `/contact`.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- Shared components live in `app/components` (Header, Footer, Button, Section, PageHero, FeatureCard, Prose, PhotoDemo, ContactForm).
- Brand colours and fonts (Playfair Display + Poppins) are set in `app/globals.css` and `app/layout.tsx`.
- The contact form sends through HubForm via the server action in `app/actions/contact.ts`; set `HUB_KEY` in `.env.local` and in Vercel. Support email: `infosiddjain@gmail.com`.
