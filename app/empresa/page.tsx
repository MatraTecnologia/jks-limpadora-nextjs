import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { aiImage } from "@/lib/images";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Seal } from "@/components/site/seal";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "A empresa",
  description: "A JKS Limpadora atua desde 1990 em limpeza especializada: pós-incêndio, pós-enchente, ambientes pós-morte, acumuladores, bibliotecas, carpetes, estofados e galpões. Atendimento em todo o Brasil.",
  alternates: { canonical: "/empresa" },
};

const facts = [
  { label: "Fundação", value: "1990" },
  { label: "Fundador", value: "Sr. João Passos" },
  { label: "Sede", value: "Jaraguá, São Paulo" },
  { label: "Atuação", value: "Todo o Brasil" },
  { label: "Atendimento", value: "Segunda a domingo, 7h às 21h" },
  { label: "Especialidade", value: "Limpeza criogênica pós-incêndio" },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHero title="Limpeza especializada desde 1990." label="A empresa" image={aiImage("equipe")} imageAspect="square" lead="A JKS Limpadora nasceu em São Paulo e há mais de três décadas atende clientes residenciais, comerciais e industriais em situações que a limpeza convencional não resolve." crumbs={[{ label: "A empresa" }]} />

      <section className="py-16 sm:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <Reveal className="prose-jks text-[1.0625rem] leading-relaxed">
            <p>
              A JKS Limpadora atua desde 1990 no segmento de limpeza especializada, com foco em serviços de alta qualidade para o mercado empresarial, comercial e residencial. A empresa mantém uma estrutura que oferece suporte total ao cliente, buscando satisfação e excelência em cada serviço prestado.
            </p>
            <p>
              Somos referência em limpeza criogênica pesada pós-incêndio, com remoção total da fuligem, e atendemos também situações pós-enchente, pré e pós-mudança, ambientes pós-morte e residências de acumuladores. Na higienização programada, cuidamos de livros e bibliotecas, carpetes normais e alagados, sofás, colchões, cadeiras, divisórias, pisos e galpões industriais.
            </p>
            <p>Trabalhamos com maquinário de alta qualidade para a melhor solução em cada problema, com equipe própria treinada e produtos adequados e legalizados.</p>
            <h2>Onde atendemos</h2>
            <p>A base fica no bairro do Jaraguá, em São Paulo, e a equipe se desloca para atender em todo o Brasil. O atendimento acontece de segunda a domingo, das 7h às 21h.</p>
            <h2>Atestados de capacidade técnica</h2>
            <p>
              A qualidade dos serviços é atestada por instituições como a Universidade Federal de São Paulo, o Centro de Microscopia Eletrônica da UNIFESP e a Congregação da Paixão de Jesus Cristo.{" "}
              <Link href="/certificados-clientes" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">
                Veja os atestados
              </Link>
              .
            </p>
          </Reveal>

          <aside className="grid gap-6 lg:sticky lg:top-28">
            <Reveal className="grid gap-4 rounded-xl bg-ink p-6 text-white">
              <div className="flex items-center gap-4">
                <Image src="/images/logo.png" alt="Sr. João, fundador da JKS Limpadora" width={72} height={72} className="size-18 rounded-full" />
                <div>
                  <p className="text-lg font-extrabold tracking-tight">Sr. João</p>
                  <p className="text-sm font-semibold text-sun">Fundador · Rei da Limpeza</p>
                </div>
              </div>
              <p className="text-2xl font-extrabold tracking-tight">"Limpeza é saúde e qualidade de vida."</p>
              <p className="text-sm text-white/65">Está à frente da empresa desde o início e atende pessoalmente pelo WhatsApp.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="grid border-t border-ink">
                {facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4 border-b border-border py-3 text-[0.9375rem]">
                    <dt className="font-semibold text-muted-foreground">{f.label}</dt>
                    <dd className="text-right font-bold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.2} className="flex items-center justify-between gap-4">
              <Button nativeButton={false} render={<a href={site.video} target="_blank" rel="noopener" />} variant="outline" size="lg" className="font-bold">
                Assistir ao vídeo institucional
              </Button>
              <Seal className="size-24 max-sm:hidden" />
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
