import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { SERVICES } from "@/i18n/dict";
import { SectionHeading } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dubai Lawyers · AbooAhmad" },
      { name: "description", content: "Family, criminal, cheque, accident, notary, commercial, real estate, immigration and arbitration legal services in Dubai and the UAE." },
      { property: "og:title", content: "Legal Services in Dubai · AbooAhmad" },
      { property: "og:description", content: "Focused, practical legal representation across the UAE." },
    ],
  }),
  component: Services,
});

function Services() {
  const { t } = useLocale();
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
      <SectionHeading eyebrow="Practice" title={t.services.heading} sub={t.services.lead} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const item = t.services.items[s.slug];
          const Icon = (Icons as unknown as Record<string, typeof Icons.Heart>)[s.icon] ?? Icons.Scale;
          return (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-navy-deep text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.short}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold">
                {t.common.learnMore} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
