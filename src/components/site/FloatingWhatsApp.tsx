import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWaLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildWaLink("Hello, I would like a legal consultation.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`group fixed bottom-20 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 lg:bottom-6 lg:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-navy-deep px-3 py-1.5 text-xs font-medium text-surface opacity-0 shadow-md transition-opacity group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
