import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { SectionHeading, Disclaimer } from "@/components/site/Section";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/questions")({
  head: () => ({
    meta: [
      { title: "Legal Questions Bank — Dubai Lawyers · AbooAhmad" },
      { name: "description", content: "Searchable answers to common UAE legal questions: family, divorce, mehrieh, contracts, business, immigration, criminal, property, labor, tax." },
      { property: "og:title", content: "Legal Questions Bank · AbooAhmad" },
      { property: "og:description", content: "Educational answers to common UAE legal questions." },
    ],
    scripts: [],
  }),
  component: Questions,
});

function Questions() {
  const { t } = useLocale();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = t.qa.items.filter((i) =>
    (cat === "all" || i.cat === cat) &&
    (q === "" || (i.q + " " + i.a).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section className="container-px mx-auto max-w-5xl py-14">
      <SectionHeading eyebrow="Knowledge" title={t.qa.heading} sub={t.qa.lead} />

      <div className="mt-8 flex flex-col gap-3">
        <label className="relative">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.qa.search}
            className="w-full rounded-md border border-input bg-background py-3 ps-10 pe-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setCat("all")}
            className={cn("rounded-full border px-3 py-1.5 text-xs font-medium",
              cat === "all" ? "border-gold bg-gold/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground")}>
            {t.qa.allCategories}
          </button>
          {Object.entries(t.qa.categories).map(([k, label]) => (
            <button key={k} onClick={() => setCat(k)}
              className={cn("rounded-full border px-3 py-1.5 text-xs font-medium",
                cat === k ? "border-gold bg-gold/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground")}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-start"
              >
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">{t.qa.categories[it.cat as keyof typeof t.qa.categories]}</div>
                  <div className="mt-1 font-display text-base font-semibold text-foreground">{it.q}</div>
                </div>
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted-foreground transition", isOpen && "rotate-180 text-gold")} />
              </button>
              {isOpen && (
                <div className="border-t border-border p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                  <Link to="/consultation" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
                    {t.common.bookAboutThis} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
        {items.length === 0 && <div className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">—</div>}
      </div>

      <Disclaimer>{t.common.disclaimer}</Disclaimer>
    </section>
  );
}
