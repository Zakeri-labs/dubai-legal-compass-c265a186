import { createFileRoute } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleProvider";
import { SectionHeading } from "@/components/site/Section";
import { PHONE, PHONE_DISPLAY, INSTAGRAM, THREADS } from "@/i18n/dict";
import { buildWaLink } from "@/lib/whatsapp";
import { Phone, MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dubai Lawyers · AbooAhmad" },
      { name: "description", content: "Reach Abu Ahmed by WhatsApp, phone or email. Office in Dubai, UAE. Multilingual response." },
      { property: "og:title", content: "Contact · AbooAhmad" },
      { property: "og:description", content: "Reach the office in Dubai." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLocale();
  return (
    <section className="container-px mx-auto max-w-5xl py-14">
      <SectionHeading title={t.contact.heading} sub={t.contact.lead} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{t.contact.channels}</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /><a href={`tel:${PHONE}`} dir="ltr" className="font-medium text-foreground">{PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-gold" /><a href={buildWaLink("Hello")} target="_blank" rel="noopener noreferrer" dir="ltr" className="font-medium text-foreground">{PHONE_DISPLAY} (WhatsApp)</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /><a href="mailto:contact@abooahmad.ae" className="font-medium text-foreground">contact@abooahmad.ae</a></li>
            <li className="flex items-center gap-3"><Instagram className="h-4 w-4 text-gold" /><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground">@abooahmad_official</a></li>
            <li className="flex items-center gap-3"><span className="grid h-4 w-4 place-items-center text-xs font-bold text-gold">@</span><a href={THREADS} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground">Threads</a></li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{t.contact.office}</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /><span>Zayed AlShehhi Advocates & Legal Consultants<br />Dubai, United Arab Emirates</span></li>
            <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-gold" /><span>{t.contact.hours}: Sun–Thu · 09:00–18:00</span></li>
          </ul>
          <a href="https://www.google.com/maps/search/Zayed+AlShehhi+Advocates+Dubai" target="_blank" rel="noopener noreferrer"
             className="mt-6 inline-flex rounded-md border border-border px-4 py-2 text-sm font-medium hover:border-gold hover:text-gold">
            Open in Maps
          </a>
        </div>
      </div>
    </section>
  );
}
