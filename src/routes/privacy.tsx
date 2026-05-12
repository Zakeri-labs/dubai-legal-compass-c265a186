import { createFileRoute } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleProvider";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy · AbooAhmad" }, { name: "description", content: "Privacy policy for the Dubai Lawyers · AbooAhmad website." }] }),
  component: () => {
    const { t } = useLocale();
    return (
      <section className="container-px mx-auto max-w-3xl py-14">
        <SectionHeading title={t.privacy.heading} />
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.privacy.body}</p>
      </section>
    );
  },
});
