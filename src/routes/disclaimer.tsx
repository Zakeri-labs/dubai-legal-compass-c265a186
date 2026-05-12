import { createFileRoute } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleProvider";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [{ title: "Legal Disclaimer · AbooAhmad" }, { name: "description", content: "Legal disclaimer for the AbooAhmad website." }] }),
  component: () => {
    const { t } = useLocale();
    return (
      <section className="container-px mx-auto max-w-3xl py-14">
        <SectionHeading title={t.disclaimer.heading} />
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.disclaimer.body}</p>
      </section>
    );
  },
});
