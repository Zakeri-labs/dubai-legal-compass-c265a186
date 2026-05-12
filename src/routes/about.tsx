import { createFileRoute, Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleProvider";
import { SectionHeading } from "@/components/site/Section";
import portrait from "@/assets/lawyer-portrait.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Abu Ahmed — Dubai Lawyers · AbooAhmad" },
      { name: "description", content: "Abu Ahmed practices under Zayed AlShehhi Advocates in Dubai. 20+ years across family, criminal, civil, commercial and arbitration matters." },
      { property: "og:title", content: "About Abu Ahmed" },
      { property: "og:description", content: "20+ years of UAE legal practice, calm and trust-focused." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLocale();
  return (
    <>
      <section className="relative -mt-16 bg-navy-grad pt-16 text-surface">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">About</div>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-surface md:text-5xl">{t.about.heading}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-surface/75 md:text-lg">{t.about.lead}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img src={portrait} alt="Abu Ahmed" width={1024} height={1280} loading="lazy" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {t.about.sections.map((s, i) => (
            <article key={i} className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="font-display text-3xl font-semibold text-gradient-gold">0{i + 1}</div>
              <h2 className="mt-3 font-display text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface-warm p-8">
          <h2 className="font-display text-xl font-semibold text-foreground">{t.common.languages} · {t.hero.cred3}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {["English", "العربية", "فارسی", "اردو"].map((l) => (
              <li key={l} className="flex items-center gap-2 text-sm text-foreground"><Check className="h-4 w-4 text-gold" /> {l}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/consultation" className="rounded-md bg-navy-deep px-6 py-3 text-center font-semibold text-primary-foreground hover:bg-navy">
            {t.nav.bookConsult}
          </Link>
          <Link to="/services" className="rounded-md border border-border px-6 py-3 text-center font-medium text-foreground hover:border-gold hover:text-gold">
            {t.nav.services}
          </Link>
        </div>
      </section>
    </>
  );
}
