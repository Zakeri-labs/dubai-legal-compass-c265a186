import { createFileRoute, Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleProvider";
import { CALCULATORS } from "@/i18n/dict";
import { SectionHeading, Disclaimer } from "@/components/site/Section";
import { Calculator, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Legal Calculators — Mehrieh, Diyeh, Tax, Penalty · AbooAhmad" },
      { name: "description", content: "Free informational calculators for mehrieh, diyeh, UAE corporate tax, and contractual penalties. Estimates only — not legal advice." },
      { property: "og:title", content: "Legal Calculators · AbooAhmad" },
      { property: "og:description", content: "Quick, mobile-friendly legal estimates for UAE matters." },
    ],
  }),
  component: CalcIndex,
});

function CalcIndex() {
  const { t } = useLocale();
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
      <SectionHeading eyebrow="Tools" title={t.calc.heading} sub={t.calc.lead} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {CALCULATORS.map((slug) => {
          const item = t.calc.items[slug];
          return (
            <Link key={slug} to="/calculators/$slug" params={{ slug }}
              className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-navy-deep text-gold"><Calculator className="h-5 w-5" /></div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.sub}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold">{t.common.getStarted} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" /></div>
            </Link>
          );
        })}
      </div>
      <Disclaimer>{t.common.estimateOnly}</Disclaimer>
    </section>
  );
}
