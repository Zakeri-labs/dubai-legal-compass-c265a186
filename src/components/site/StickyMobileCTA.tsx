import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { PHONE } from "@/i18n/dict";
import { buildWaLink } from "@/lib/whatsapp";

export function StickyMobileCTA() {
  const { t } = useLocale();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-3 gap-2 py-2.5">
        <a
          href={`tel:${PHONE}`}
          className="flex flex-col items-center justify-center gap-0.5 rounded-md border border-border py-2 text-[11px] font-medium text-foreground"
        >
          <Phone className="h-4 w-4 text-gold" />
          {t.common.callNow}
        </a>
        <a
          href={buildWaLink("Hello, I would like a legal consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-md bg-[#25D366] py-2 text-[11px] font-medium text-white"
        >
          <MessageCircle className="h-4 w-4" />
          {t.nav.whatsapp}
        </a>
        <Link
          to="/consultation"
          className="flex flex-col items-center justify-center gap-0.5 rounded-md bg-navy-deep py-2 text-[11px] font-medium text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4 text-gold" />
          {t.nav.bookConsult}
        </Link>
      </div>
    </div>
  );
}
