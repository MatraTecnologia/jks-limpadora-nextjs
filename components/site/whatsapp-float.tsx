import { MessageCircle } from "lucide-react";
import { waLink, mainWhatsapp } from "@/lib/site";

export const WhatsAppFloat = () => (
  <a
    href={waLink(mainWhatsapp.number)}
    target="_blank"
    rel="noopener"
    aria-label="Falar pelo WhatsApp"
    className="fixed right-5 bottom-5 z-40 hidden items-center md:inline-flex gap-2 rounded-lg bg-wa px-4 py-3 text-sm font-bold text-white shadow-lift transition hover:brightness-95"
  >
    <MessageCircle className="size-5" />
    <span className="hidden sm:inline">WhatsApp</span>
  </a>
);
