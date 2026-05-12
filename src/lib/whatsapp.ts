import { WA_NUMBER } from "@/i18n/dict";

export function buildWaLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  if (typeof window !== "undefined") {
    window.open(buildWaLink(message), "_blank", "noopener,noreferrer");
  }
}
