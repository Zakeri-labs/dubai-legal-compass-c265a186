import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Building2, Globe, Menu, MessageCircle, Phone, Scale, X } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { PHONE, PHONE_DISPLAY } from "@/i18n/dict";
import { buildWaLink } from "@/lib/whatsapp";

export function Header() {
  const { t, locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [heroHeaderSolid, setHeroHeaderSolid] = useState(false);
  const loc = useLocation();
  const isHeroOverlayPage = loc.pathname === "/" || loc.pathname === "/about";

  useEffect(() => {
    if (!isHeroOverlayPage) {
      setHeroHeaderSolid(false);
      return;
    }
    const onScroll = () => setHeroHeaderSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHeroOverlayPage, loc.pathname]);

  useEffect(() => {
    document.body.dataset.mobileMenuOpen = open ? "true" : "false";
    window.dispatchEvent(new CustomEvent("mobile-menu-open-change", { detail: open }));

    return () => {
      document.body.dataset.mobileMenuOpen = "false";
      window.dispatchEvent(new CustomEvent("mobile-menu-open-change", { detail: false }));
    };
  }, [open]);

  const heroTopTransparent =
    isHeroOverlayPage && !heroHeaderSolid && !open;

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/calculators", label: t.nav.calculators },
    { to: "/questions", label: t.nav.questions },
    { to: "/consultation", label: t.nav.consultation },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const primaryLinks = links.slice(0, 4);
  const secondaryLinks = links.slice(4);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b",
        open && "h-dvh lg:h-auto",
        heroTopTransparent
          ? "border-transparent bg-transparent"
          : "border-border/60 bg-background/85 backdrop-blur-md"
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-navy-deep">
            <span className="font-display text-lg font-semibold text-gradient-gold">A</span>
          </span>
          <div className="leading-tight">
            <div
              className={cn(
                "font-display text-sm font-semibold",
                heroTopTransparent ? "text-white" : "text-foreground"
              )}
            >
              AbooAhmad
            </div>
            <div
              className={cn(
                "text-[10px] uppercase tracking-[0.18em]",
                heroTopTransparent ? "text-white/65" : "text-muted-foreground"
              )}
            >
              Dubai Lawyers
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = l.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "inline-flex h-16 items-center text-sm font-medium leading-none transition-colors",
                  heroTopTransparent
                    ? active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLocale(locale === "en" ? "fa" : "en")}
            className={cn(
              "hidden items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition sm:inline-flex",
              heroTopTransparent
                ? "border-white/35 text-white hover:border-gold hover:text-gold"
                : "border-border text-foreground hover:border-gold hover:text-gold"
            )}
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "en" ? "فارسی" : "EN"}
          </button>

          <button
            onClick={() => setOpen(true)}
            className={cn(
              "rounded-md border p-2 lg:hidden",
              heroTopTransparent
                ? "border-white/35 text-white"
                : "border-border text-foreground"
            )}
            aria-label={t.nav.menu}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-navy-deep/75 backdrop-blur-sm"
          />
          <div className="absolute inset-0 flex w-full flex-col overflow-hidden bg-[#0F1726] text-surface shadow-2xl shadow-black/35">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-6">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-white/8 ring-1 ring-white/10">
                  <span className="font-display text-xl font-semibold text-gradient-gold">A</span>
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-semibold leading-tight text-surface">
                    AbooAhmad
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
                    <Scale className="h-3.5 w-3.5" />
                    Dubai Lawyers
                  </span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-surface/85 transition hover:border-gold hover:text-gold"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-surface/75">
                    {t.footer.tagline}
                  </p>
                </div>
              </div>

              <nav className="mt-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {t.footer.quickLinks}
                </div>
                <div className="mt-3 grid gap-2">
                  {primaryLinks.map((l) => {
                    const active = l.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(l.to);
                    return (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex min-h-14 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-base font-medium transition",
                          active
                            ? "border-gold/50 bg-gold/10 text-gold"
                            : "border-white/10 bg-white/[0.03] text-surface/88 hover:border-gold/50 hover:text-gold"
                        )}
                      >
                        <span>{l.label}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 opacity-55 transition group-hover:opacity-100 rtl:rotate-180" />
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {secondaryLinks.map((l) => {
                    const active = loc.pathname.startsWith(l.to);
                    return (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "min-h-12 rounded-xl border px-4 py-3 text-sm font-medium transition",
                          active
                            ? "border-gold/50 bg-gold/10 text-gold"
                            : "border-white/10 bg-white/[0.03] text-surface/75 hover:border-gold/50 hover:text-gold"
                        )}
                      >
                        {l.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>

            <div className="border-t border-white/10 bg-black/10 px-6 py-6">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold text-surface transition hover:border-gold hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  <span>{t.common.callNow}</span>
                </a>
                <a
                  href={buildWaLink("Hello")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-3 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.nav.whatsapp}</span>
                </a>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <a href={`tel:${PHONE}`} dir="ltr" className="text-xs font-medium text-surface/55">
                  {PHONE_DISPLAY}
                </a>
                <button
                  onClick={() => { setLocale(locale === "en" ? "fa" : "en"); setOpen(false); }}
                  className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs font-medium text-surface/75 transition hover:border-gold hover:text-gold"
                >
                  <Globe className="h-3.5 w-3.5" />
                  {locale === "en" ? "فارسی" : "EN"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
