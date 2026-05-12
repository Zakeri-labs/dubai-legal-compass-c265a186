import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, MapPin, Languages, Award, Building2, Check } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { SERVICES } from "@/i18n/dict";
import { buildWaLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/site/Section";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { TrustTimeline } from "@/components/site/TrustTimeline";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import portrait from "@/assets/lawyer-portrait.jpg";
import * as Icons from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dubai Lawyers · AbooAhmad — Legal Counsel in the UAE" },
      { name: "description", content: "Abu Ahmed: 20+ years guiding expats and residents through family, criminal, cheque, accident and corporate matters across the UAE. Free initial family consultation." },
      { property: "og:title", content: "Dubai Lawyers · AbooAhmad" },
      { property: "og:description", content: "Calm, decisive legal counsel for life in the UAE." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLocale();
  const waMsg = "Hello, I'd like to book a legal consultation.";

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 overflow-hidden bg-navy-grad pt-16 text-surface">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 30% 20%, var(--gold), transparent 50%)" }} />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t.hero.eyebrow}
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-surface md:text-5xl lg:text-[3.75rem]">
              {t.hero.title}
              <span className="mt-2 block text-gradient-gold">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-surface/75 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-navy-deep shadow-lg shadow-black/20 transition hover:bg-gold-soft"
              >
                {t.nav.bookConsult} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {[
                { icon: Award, label: t.hero.cred1 },
                { icon: Building2, label: t.hero.cred2 },
                { icon: MapPin, label: t.hero.cred3 },
                { icon: Languages, label: t.hero.cred4 },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <dt className="text-xs font-medium text-surface/85">{label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/40 to-bronze/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy">
                <img
                  src={portrait}
                  alt="Abu Ahmed, Dubai-based lawyer"
                  width={1024}
                  height={1280}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep to-transparent p-5">
                  <div className="font-display text-lg font-semibold text-surface">Abu Ahmed</div>
                  <div className="text-xs text-gold">Lawyer · Zayed AlShehhi Advocates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeading
          eyebrow="01 — Practice"
          title={t.home.servicesHeading}
          sub={t.home.servicesSub}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((s) => ["family-divorce","criminal","travel-ban","cheque-bounced","accident-injury","immigration"].includes(s.slug)).map((s) => {
            const item = t.services.items[s.slug];
            const Icon = (Icons as unknown as Record<string, typeof Icons.Heart>)[s.icon] ?? Icons.Scale;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg hover:shadow-navy-deep/5"
              >
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-md bg-navy-deep text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.short}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold opacity-0 transition group-hover:opacity-100">
                  {t.common.learnMore} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold"
          >
            View All Services <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* TRUST TIMELINE */}
      <TrustTimeline />

      {/* PROCESS */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeading eyebrow="03 — Process" title={t.home.processHeading} />
        <ProcessTimeline steps={t.home.process} />
      </section>

      {/* FEATURED Q&A */}
      <section className="bg-surface-warm py-20" aria-label={t.home.qHeading}>
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="04 — Knowledge" title={t.home.qHeading} sub={t.home.qSub} />
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="mt-10 flex w-full flex-col gap-3"
          >
            {t.qa.items.slice(0, 4).map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-none"
              >
                <AccordionTrigger
                  className={cn(
                    "items-start gap-4 px-5 py-5 text-start hover:no-underline md:px-6 md:py-6",
                    "text-base font-normal [&>svg]:h-5 [&>svg]:w-5 [&[data-state=open]>svg]:text-gold",
                  )}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
                      {t.qa.categories[item.cat as keyof typeof t.qa.categories]}
                    </span>
                    <span className="mt-2 block font-display text-base font-semibold leading-snug text-foreground md:text-[1.05rem]">
                      {item.q}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="border-t border-border px-5 pb-6 pt-0 md:px-6">
                  <p className="pt-5 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">{item.a}</p>
                  <Link
                    to="/consultation"
                    className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-gold underline-offset-4 hover:underline"
                  >
                    {t.common.bookAboutThis} <ArrowRight className="h-3.5 w-3.5 shrink-0 rtl:rotate-180" aria-hidden />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Link
              to="/questions"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:text-gold hover:underline"
            >
              {t.home.moreQuestionsCta} <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="relative overflow-hidden rounded-2xl bg-navy-grad p-10 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-5 md:items-center">
            <div className="md:col-span-3">
              <h2 className="font-display text-3xl font-semibold leading-tight text-surface md:text-4xl">
                {t.home.ctaHeading}
              </h2>
              <p className="mt-3 max-w-lg text-base text-surface/75">{t.home.ctaBody}</p>
              <ul className="mt-6 space-y-2 text-sm text-surface/85">
                {[t.hero.cred1, t.hero.cred2, t.hero.cred4].map((x) => (
                  <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> {x}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 md:col-span-2">
              <Link to="/consultation" className="rounded-md bg-gold px-5 py-3.5 text-center font-semibold text-navy-deep hover:bg-gold-soft">
                {t.nav.bookConsult}
              </Link>
              <a href={buildWaLink(waMsg)} target="_blank" rel="noopener noreferrer"
                 className="rounded-md border border-white/20 bg-white/5 px-5 py-3.5 text-center font-medium text-surface hover:bg-white/10">
                {t.nav.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
