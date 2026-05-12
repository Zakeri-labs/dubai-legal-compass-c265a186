import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { SERVICES } from "@/i18n/dict";
import { openWhatsApp } from "@/lib/whatsapp";
import { SectionHeading, Disclaimer } from "@/components/site/Section";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Dubai Lawyers · AbooAhmad" },
      { name: "description", content: "Book a legal consultation with Abu Ahmed in Dubai. Form opens WhatsApp with your details for a fast, multilingual response." },
      { property: "og:title", content: "Book a Consultation · AbooAhmad" },
      { property: "og:description", content: "Fast, multilingual legal consultation in Dubai." },
    ],
  }),
  component: Consult,
});

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

const inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-gold/20";

function Consult() {
  const { t } = useLocale();
  const [form, setForm] = useState({
    name: "", phone: "", whatsapp: "", email: "",
    language: "en", type: "whatsapp", topic: SERVICES[0].slug as string,
    description: "", date: "", time: "", urgency: "med", consent: false,
  });
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.description) { setError("Please fill in name, phone and description."); return; }
    if (!form.consent) { setError("Please accept the consent statement."); return; }
    setError(null);
    const topicTitle = t.services.items[form.topic as (typeof SERVICES)[number]["slug"]].title;
    const lines = [
      "📩 Consultation request",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.whatsapp && `WhatsApp: ${form.whatsapp}`,
      form.email && `Email: ${form.email}`,
      `Language: ${form.language}`,
      `Type: ${form.type}`,
      `Topic: ${topicTitle}`,
      `Urgency: ${form.urgency}`,
      form.date && `Preferred date: ${form.date}`,
      form.time && `Preferred time: ${form.time}`,
      "",
      "Description:",
      form.description,
    ].filter(Boolean).join("\n");
    openWhatsApp(lines);
  };

  return (
    <section className="container-px mx-auto max-w-3xl py-14">
      <SectionHeading title={t.consult.heading} sub={t.consult.lead} />

      <form onSubmit={onSubmit} className="mt-10 rounded-xl border border-border bg-card p-6 md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.consult.fields.name.label}>
            <input className={inputCls} placeholder={t.consult.fields.name.placeholder} value={form.name} onChange={(e) => set("name", e.target.value)} maxLength={100} required />
          </Field>
          <Field label={t.consult.fields.phone.label}>
            <input className={inputCls} placeholder={t.consult.fields.phone.placeholder} value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={30} required />
          </Field>
          <Field label={t.consult.fields.whatsapp.label}>
            <input className={inputCls} placeholder={t.consult.fields.whatsapp.placeholder} value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} maxLength={30} />
          </Field>
          <Field label={t.consult.fields.email.label}>
            <input type="email" className={inputCls} placeholder={t.consult.fields.email.placeholder} value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={120} />
          </Field>
          <Field label={t.consult.fields.language.label}>
            <select className={inputCls} value={form.language} onChange={(e) => set("language", e.target.value)}>
              {t.consult.languages.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
            </select>
          </Field>
          <Field label={t.consult.fields.type.label}>
            <select className={inputCls} value={form.type} onChange={(e) => set("type", e.target.value)}>
              {t.consult.consult_types.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
            </select>
          </Field>
          <Field label={t.consult.fields.topic.label}>
            <select className={inputCls} value={form.topic} onChange={(e) => set("topic", e.target.value)}>
              {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{t.services.items[s.slug].title}</option>)}
            </select>
          </Field>
          <Field label={t.consult.fields.urgency.label}>
            <select className={inputCls} value={form.urgency} onChange={(e) => set("urgency", e.target.value)}>
              {t.consult.urgency.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
            </select>
          </Field>
          <Field label={t.consult.fields.date.label}>
            <input type="date" className={inputCls} value={form.date} onChange={(e) => set("date", e.target.value)} />
          </Field>
          <Field label={t.consult.fields.time.label}>
            <input type="time" className={inputCls} value={form.time} onChange={(e) => set("time", e.target.value)} />
          </Field>
        </div>

        <div className="mt-5">
          <Field label={t.consult.fields.description.label}>
            <textarea rows={5} className={inputCls} placeholder={t.consult.fields.description.placeholder}
              value={form.description} onChange={(e) => set("description", e.target.value)} maxLength={2000} required />
          </Field>
          <p className="mt-1.5 text-xs text-muted-foreground">{t.consult.fields.description.help}</p>
        </div>

        <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-[color:var(--gold)]" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} />
          <span>{t.consult.consent}</span>
        </label>

        {error && <div className="mt-4 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">{error}</div>}

        <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white hover:opacity-90 sm:w-auto">
          <MessageCircle className="h-4 w-4" /> {t.consult.submit}
        </button>

        <Disclaimer>{t.consult.legalNote}</Disclaimer>
      </form>
    </section>
  );
}
