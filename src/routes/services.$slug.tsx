import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleProvider";
import { SERVICES } from "@/i18n/dict";
import { buildWaLink } from "@/lib/whatsapp";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Disclaimer } from "@/components/site/Section";

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!SERVICES.some((s) => s.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const slug = params.slug as (typeof SERVICES)[number]["slug"];
    const titleMap: Record<string, string> = {
      "family-divorce": "Family & Divorce Law in Dubai",
      "criminal": "Criminal Defense Lawyer in Dubai",
      "travel-ban": "Travel Ban Cases — UAE Lawyer",
      "cheque-bounced": "Cheque Bounced & Debt Recovery in Dubai",
      "accident-injury": "Accident & Injury Claims in Dubai",
      "notary-contracts": "Notary & Contract Drafting in Dubai",
      "commercial-corporate": "Commercial & Corporate Lawyer in Dubai",
      "real-estate": "Real Estate Lawyer in Dubai",
      "immigration": "Immigration & Residency — Dubai Lawyer",
      "arbitration": "Arbitration Lawyer in the UAE",
    };
    const title = `${titleMap[slug] ?? "Legal Service"} · AbooAhmad`;
    return {
      meta: [
        { title },
        { name: "description", content: `${titleMap[slug]} — handled personally by Abu Ahmed under Zayed AlShehhi Advocates.` },
        { property: "og:title", content: title },
        { property: "og:description", content: `${titleMap[slug]} — Dubai, UAE.` },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const { t } = useLocale();
  const s = t.services.items[slug as keyof typeof t.services.items];
  const waMsg = `Hello, I'd like a consultation about: ${s.title}.`;

  return (
    <>
      <section className="bg-navy-grad text-surface">
        <div className="container-px mx-auto max-w-5xl py-16">
          <Link to="/services" className="text-xs font-medium text-gold hover:underline">← {t.nav.services}</Link>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-surface md:text-5xl">{s.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface/75 md:text-lg">{s.long}</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">{t.services.whoItHelps}</h2>
            <ul className="mt-4 space-y-2.5">
              {s.who.map((w) => (
                <li key={w} className="flex gap-2 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{w}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">{t.services.keyOutcomes}</h2>
            <ul className="mt-4 space-y-2.5">
              {s.outcomes.map((w) => (
                <li key={w} className="flex gap-2 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{w}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface-warm p-6 md:p-8">
          <h2 className="font-display text-lg font-semibold text-foreground">{t.services.process}</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-5">
            {s.steps.map((step, i) => (
              <li key={step} className="rounded-lg border border-border bg-card p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{i + 1}</div>
                <div className="mt-1.5 text-sm font-medium text-foreground">{step}</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">{t.services.documents}</h2>
            <ul className="mt-4 space-y-2.5">
              {s.docs.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-foreground"><span className="mt-1.5 h-1 w-1 rounded-full bg-gold" />{d}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">{t.services.serviceFaq}</h2>
            <div className="mt-4 space-y-4">
              {s.faqs.map((f) => (
                <div key={f.q}>
                  <div className="text-sm font-semibold text-foreground">{f.q}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/consultation" className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-deep px-6 py-3 font-semibold text-primary-foreground hover:bg-navy">
            {t.nav.bookConsult} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
          <a href={buildWaLink(waMsg)} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> {t.nav.whatsapp}
          </a>
        </div>

        <Disclaimer>{t.common.disclaimer}</Disclaimer>
      </section>
    </>
  );
}
