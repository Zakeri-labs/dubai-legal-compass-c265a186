
# Dubai Lawyers | AbooAhmad — Bilingual Premium Site

A premium, mobile-first, conversion-driven legal personal-brand site in English (LTR) and Persian (RTL), with WhatsApp as primary conversion channel.

## Design system

- **Palette (oklch tokens in `src/styles.css`)**
  - Base: deep navy `#0B1B2B` / charcoal `#111827`
  - Surface: warm off-white `#F7F4EE`, warm gray `#E8E2D6`
  - Accent: muted champagne gold `#C9A36A`, bronze `#8C6B3F`
  - Text: ink `#0E1622`, muted `#5B6573`
- **Typography**
  - EN: Inter (body) + Plus Jakarta Sans (display)
  - FA: Vazirmatn (body + display)
  - Auto-swap based on `dir`/locale
- **Motion**: restrained — fade/slide on section enter, hover lift on cards. No parallax noise.
- **Components**: rounded-xl cards, hairline gold dividers, generous spacing, serif-free elegant hierarchy.

## i18n & RTL

- Lightweight in-house i18n: `src/i18n/{en,fa}.ts` dictionaries + `useT()` hook + `<LocaleProvider>` storing locale in `localStorage` and setting `<html lang dir>`.
- Locale toggle in header + footer (EN ⇄ فارسی).
- RTL handled via `dir="rtl"` on `<html>` plus Tailwind logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `text-end`).
- Mirror icons/arrows where needed.

## Routes (TanStack Start, file-based)

```
src/routes/
  __root.tsx            shell, header, footer, locale provider, sticky mobile CTA
  index.tsx             Home
  about.tsx             About
  services.tsx          Services overview
  services.$slug.tsx    Individual service page
  calculators.tsx       Legal Calculators index
  calculators.$slug.tsx Mehrieh / Diyeh / Tax / Penalty
  questions.tsx         Legal Questions Bank
  consultation.tsx      Booking form
  faq.tsx               FAQ
  contact.tsx           Contact
  privacy.tsx           Privacy Policy
  disclaimer.tsx        Legal Disclaimer
```

Each route: own `head()` with EN+locale-aware title/description/og.

## Page contents

- **Home**: Hero (real photo, untouched), credentials strip (20+ yrs, Zayed_AlShehhi firm, languages, Dubai), services grid (8 cards), "Why me" trust block, process timeline (4 steps), featured Q&A, testimonial-style quotes from public content (no fabricated reviews), CTA band → Consultation + WhatsApp.
- **About**: Personal story, philosophy (reconciliation-first, transparency), firm affiliation, jurisdictions, languages, in-office trust message.
- **Services**: Cards for Family & Divorce, Criminal, Travel Ban, Cheque Bounced / Debt Recovery, Accident & Injury, Notary & Contracts, Commercial/Corporate, Real Estate, Immigration, Arbitration. Each detail page: problem framing → process → docs needed → FAQ → CTA.
- **Calculators**: Mehrieh, Diyeh, Tax, Penalty/Fine. Each: mobile inputs, live result card, disclaimer, "Book consultation" + "Send result on WhatsApp" (pre-filled `wa.me` link).
- **Legal Questions Bank**: Search input + category chips (family, divorce, mehrieh, contracts, business, immigration, criminal, property, labor, tax). Accordion cards with short + expandable full answer + CTA. JSON-LD `FAQPage`.
- **Consultation**: Form (name, phone, WhatsApp, email, preferred language, consultation type, legal topic, description, preferred date/time, urgency, consent). Validated with Zod. On submit → builds pre-filled message → opens `https://wa.me/971551019750?text=...`. Disclaimer about no attorney-client relationship until engagement.
- **FAQ**: Top 12 cross-cutting questions, JSON-LD.
- **Contact**: Phone, WhatsApp, Instagram, Threads, office context, hours, embedded map of Dubai (static link, no API key).
- **Privacy / Disclaimer**: Standard legal pages, bilingual.

## Components (reusable)

`Header`, `MobileNav`, `LocaleSwitcher`, `WhatsAppButton`, `StickyMobileCTA`, `Hero`, `ServiceCard`, `TrustStrip`, `ProcessTimeline`, `QuestionAccordion`, `CalculatorShell`, `ResultCard`, `ConsultationForm`, `Footer`, `SectionHeading`, `Disclaimer`.

## Conversion plumbing

- WhatsApp helper `buildWaLink(message)` → `https://wa.me/971551019750?text=...`.
- Sticky bottom bar on mobile: Call / WhatsApp / Book.
- Every service, calculator, and Q&A ends with dual CTA.

## Trust & honesty guardrails

- No fabricated testimonials, awards, or guarantees.
- Quote only public messaging from the brief (reconciliation-first, transparency, etc.).
- Disclaimer on calculators and Q&A: educational estimates only.

## SEO / AEO

- Semantic HTML, single H1 per page, descriptive H2s.
- Per-route `head()` meta + OG.
- JSON-LD: `LegalService`, `Person` (Abu Ahmed), `FAQPage`, `BreadcrumbList`.
- Alt text on all images, lazy loading, `loading="lazy"`.
- `hreflang` alternate links for EN/FA.

## Technical notes

- TanStack Start + Tailwind v4 tokens.
- Validation with `zod` (already common). Add `bun add zod` if missing.
- Hero photo: use placeholder image; user supplies real photo later (face must not be altered — no AI face edits).
- No backend needed for v1 (WhatsApp handoff). Lovable Cloud not enabled unless user later wants persistent bookings.

## Out of scope (v1)

- Real CMS for Q&A (content lives in typed TS files, easy to extend).
- Payments, client portal, real auth.
- Arabic/Urdu locales (only EN + FA per spec; can add later).

Ready to build on approval.
