import { Link } from "@tanstack/react-router";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { buildWaLink } from "@/lib/whatsapp";

export function StickyMobileCTA() {
  const { t } = useLocale();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-3 py-2.5">
        <a
          href={buildWaLink("Hello, I would like a legal consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md bg-[#25D366] px-2 py-2.5 text-[11px] font-medium text-white"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          {t.nav.whatsapp}
        </a>
        <Link
          to="/consultation"
          className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md bg-navy-deep px-2 py-2.5 text-[11px] font-medium text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4 shrink-0 text-gold" />
          {t.nav.bookConsult}
        </Link>
      </div>
    </div>
  );
}
