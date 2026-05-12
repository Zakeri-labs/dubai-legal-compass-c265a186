import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

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

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/calculators", label: t.nav.calculators },
    { to: "/questions", label: t.nav.questions },
    { to: "/consultation", label: t.nav.consultation },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md",
        isHeroOverlayPage && !heroHeaderSolid && !open
          ? "border-white/10 bg-background/50"
          : "border-border/60 bg-background/85"
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-navy-deep">
            <span className="font-display text-lg font-semibold text-gradient-gold">A</span>
          </span>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold text-foreground">AbooAhmad</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Dubai Lawyers</div>
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
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
            className="hidden items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-gold hover:text-gold sm:inline-flex"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "en" ? "فارسی" : "EN"}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="rounded-md border border-border p-2 lg:hidden"
            aria-label={t.nav.menu}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-md lg:hidden">
          <div className="container-px mx-auto flex h-16 items-center justify-between">
            <span className="font-display text-base font-semibold text-surface">AbooAhmad</span>
            <button onClick={() => setOpen(false)} className="rounded-md p-2 text-surface" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-px mx-auto mt-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-lg font-medium leading-none text-surface/90 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="my-4 gold-divider" />
            <button
              onClick={() => { setLocale(locale === "en" ? "fa" : "en"); setOpen(false); }}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-base text-surface/80"
            >
              <Globe className="h-4 w-4" />
              {locale === "en" ? "فارسی" : "English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
