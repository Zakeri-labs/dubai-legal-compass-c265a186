import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { PHONE, PHONE_DISPLAY, INSTAGRAM, THREADS, SERVICES } from "@/i18n/dict";
import { buildWaLink } from "@/lib/whatsapp";
import { SupportedLanguages } from "@/components/site/SupportedLanguages";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-24 border-t border-border bg-navy-deep text-surface/80">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-lg font-semibold text-surface">Dubai Lawyers · AbooAhmad</div>
            <p className="mt-3 max-w-xs text-sm text-surface/70">{t.footer.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/10 hover:border-gold hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={THREADS} target="_blank" rel="noopener noreferrer" aria-label="Threads"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/10 hover:border-gold hover:text-gold">
                <span className="text-xs font-bold">@</span>
              </a>
              <a href={buildWaLink("Hello")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/10 hover:border-gold hover:text-gold">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{t.footer.quickLinks}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-gold">{t.nav.about}</Link></li>
              <li><Link to="/services" className="hover:text-gold">{t.nav.services}</Link></li>
              <li><Link to="/consultation" className="hover:text-gold">{t.nav.consultation}</Link></li>
              <li><Link to="/contact" className="hover:text-gold">{t.nav.contact}</Link></li>
              <li><Link to="/faq" className="hover:text-gold">{t.nav.faq}</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{t.footer.resources}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/calculators" className="hover:text-gold">{t.nav.calculators}</Link></li>
              <li><Link to="/questions" className="hover:text-gold">{t.nav.questions}</Link></li>
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold">
                    {t.services.items[s.slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{t.footer.contact}</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href={`tel:${PHONE}`} dir="ltr">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-gold" />
                <a href={buildWaLink("Hello")} target="_blank" rel="noopener noreferrer" dir="ltr">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:contact@abooahmad.ae">contact@abooahmad.ae</a>
              </li>
              <li className="text-surface/60">Dubai, United Arab Emirates</li>
            </ul>
            <SupportedLanguages
              label={t.hero.cred4}
              className="mt-5"
              textClassName="text-surface/70"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-surface/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Dubai Lawyers · AbooAhmad. {t.footer.rights}</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold">Privacy</Link>
            <Link to="/disclaimer" className="hover:text-gold">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
