import { MessageCircle, Phone } from "lucide-react";
import { site, waLink, mainWhatsapp } from "@/lib/site";

export const MobileBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-white/95 p-2.5 backdrop-blur-md md:hidden">
    <a href={site.phones[0].href} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-ink text-sm font-bold text-ink">
      <Phone className="size-4" />
      Ligar agora
    </a>
    <a href={waLink(mainWhatsapp.number)} target="_blank" rel="noopener" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-wa text-sm font-bold text-white">
      <MessageCircle className="size-4" />
      WhatsApp
    </a>
  </div>
);
