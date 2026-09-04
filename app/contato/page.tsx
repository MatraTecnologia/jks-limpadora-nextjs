import type { Metadata } from "next";
import { site, fullAddress, mapsEmbed } from "@/lib/site";
import { services } from "@/lib/services";
import { PageHero } from "@/components/site/page-hero";
import { QuoteWizard } from "@/components/site/quote-wizard";
import { ContactPanel } from "@/components/site/contact-panel";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Contato e orçamento",
  description: "Fale com a JKS Limpadora pelo WhatsApp ou telefone e receba seu orçamento. Atendimento todos os dias, das 7h às 21h. Rua Ilha da Juventude, 90, Jaraguá, São Paulo.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero title="Contato e orçamento." label="Fale com a equipe" lead="Monte seu pedido em quatro passos e envie pelo WhatsApp, ou fale direto com a equipe. Atendemos todos os dias, das 7h às 21h." crumbs={[{ label: "Contato" }]} />

      <section className="py-12 sm:py-24">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <QuoteWizard services={services.map(({ slug, title, shortTitle, tier }) => ({ slug, title, shortTitle, tier }))} />
          </Reveal>
          <Reveal delay={0.1} className="grid gap-5">
            <ContactPanel />
            <div className="border-l-4 border-brand bg-paper p-5 leading-relaxed">
              <p className="font-bold">Endereço</p>
              <p className="text-ink-2">{fullAddress}</p>
              <p className="mt-2 text-sm text-muted-foreground">{site.hours}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <iframe src={mapsEmbed} title="Mapa com a localização da JKS Limpadora" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="block h-96 w-full border-0 border-t border-border grayscale-[0.4]" />
    </>
  );
}
