import { createFileRoute } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleProvider";
import { SectionHeading, Disclaimer } from "@/components/site/Section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Dubai Lawyers · AbooAhmad" },
      { name: "description", content: "Frequently asked questions about consultations, languages, fees and process with Abu Ahmed in Dubai." },
      { property: "og:title", content: "FAQ · AbooAhmad" },
      { property: "og:description", content: "Quick answers before you reach out." },
    ],
  }),
  component: Faq,
});

function Faq() {
  const { t } = useLocale();
  return (
    <section className="container-px mx-auto max-w-3xl py-14">
      <SectionHeading title={t.faq.heading} sub={t.faq.lead} />
      <div className="mt-10 space-y-3">
        {t.faq.items.map((f) => (
          <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:border-gold">
            <summary className="cursor-pointer list-none font-display text-base font-semibold text-foreground">{f.q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
      <Disclaimer>{t.common.disclaimer}</Disclaimer>
    </section>
  );
}
