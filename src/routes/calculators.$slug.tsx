import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { CALCULATORS } from "@/i18n/dict";
import { buildWaLink } from "@/lib/whatsapp";
import { Disclaimer } from "@/components/site/Section";
import { MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/calculators/$slug")({
  beforeLoad: ({ params }) => {
    if (!CALCULATORS.includes(params.slug as (typeof CALCULATORS)[number])) throw notFound();
  },
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} calculator · AbooAhmad` },
      { name: "description", content: `Free ${params.slug} calculator for UAE legal matters. Estimates only.` },
      { property: "og:title", content: `${params.slug} calculator` },
    ],
  }),
  component: CalcPage,
});

function compute(slug: string, v: Record<string, number>): number {
  switch (slug) {
    case "mehrieh": {
      const years = Math.max(0, new Date().getFullYear() - (v.year || 0));
      return (v.amount || 0) * Math.pow(1 + (v.rate || 0) / 100, years);
    }
    case "diyeh": return ((v.base || 0) * (v.share || 0)) / 100;
    case "tax": return Math.max(0, ((v.profit || 0) - 375000) * 0.09);
    case "penalty": return ((v.principal || 0) * (v.rate || 0) / 100) * (v.days || 0);
    default: return 0;
  }
}

function CalcPage() {
  const { slug } = Route.useParams();
  const { t } = useLocale();
  const item = t.calc.items[slug as keyof typeof t.calc.items];
  const [vals, setVals] = useState<Record<string, number>>({});
  const result = useMemo(() => compute(slug, vals), [slug, vals]);
  const formatted = useMemo(() => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(result), [result]);

  const waMsg = `Hello, I used the ${item.title}. Inputs: ${JSON.stringify(vals)}. Estimated result: ${formatted}. I'd like a consultation.`;

  return (
    <section className="container-px mx-auto max-w-3xl py-14">
      <Link to="/calculators" className="text-xs font-medium text-gold hover:underline">← {t.calc.heading}</Link>
      <h1 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">{item.title}</h1>
      <p className="mt-3 text-muted-foreground">{item.description}</p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {item.fields.map((f) => (
            <label key={f.key} className="block">
              <span className="mb-1.5 block text-sm font-medium text-foreground">{f.label}</span>
              <input
                type="number"
                inputMode="decimal"
                placeholder={f.placeholder}
                onChange={(e) => setVals((p) => ({ ...p, [f.key]: parseFloat(e.target.value) || 0 }))}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-navy-grad p-6 text-surface">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{item.resultLabel}</div>
          <div className="mt-2 font-display text-3xl font-semibold text-surface md:text-4xl" dir="ltr">{formatted} <span className="text-sm text-surface/60">AED</span></div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to="/consultation" className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-deep px-5 py-3 font-semibold text-primary-foreground hover:bg-navy">
            {t.common.bookAboutThis} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
          <a href={buildWaLink(waMsg)} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-semibold text-white hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> {t.common.sendOnWhatsapp}
          </a>
        </div>
      </div>

      <Disclaimer>{t.common.estimateOnly}</Disclaimer>
    </section>
  );
}
