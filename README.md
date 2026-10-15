# VIP Editor — Website (Next.js)

Pages: `/` (landing page with live photo editor demo), `/about`, `/privacy`, `/contact`.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- Shared components live in `app/components` (Header, Footer, Button, Section, PageHero, FeatureCard, Prose, PhotoDemo, ContactForm).
- Brand colours and fonts (Playfair Display + Poppins) are set in `app/globals.css` and `app/layout.tsx`.
- **Before launch:** the contact form only shows a confirmation and does not send anything yet (see the TODO in `ContactForm.tsx`). The email `support@vipeditor.app` is a placeholder.
