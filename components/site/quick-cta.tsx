import { site, waLink, mainWhatsapp } from "@/lib/site";

type Props = { text?: string };

export const QuickCta = ({ text = "Precisa de atendimento hoje?" }: Props) => (
  <div className="flex flex-col gap-4 rounded-xl bg-brand px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
    <div>
      <p className="text-xl font-extrabold tracking-tight sm:text-2xl">{text}</p>
      <p className="text-sm text-white/80">Fale direto com o Sr. João. Todos os dias, das 7h às 21h.</p>
    </div>
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <a href={site.phones[0].href} className="inline-flex h-12 items-center justify-center rounded-lg border border-white/50 px-5 text-sm font-bold whitespace-nowrap">
        {site.phones[0].label}
      </a>
      <a href={waLink(mainWhatsapp.number)} target="_blank" rel="noopener" className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-bold whitespace-nowrap text-brand">
        WhatsApp {mainWhatsapp.label}
      </a>
    </div>
  </div>
);
