import type { Metadata } from "next";
import { services, criticalServices, specializedServices } from "@/lib/services";
import { aiImage } from "@/lib/images";
import { PageHero } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Limpeza pós-incêndio, pós-enchente, ambientes pós-morte, acumuladores, livros e bibliotecas, carpetes, sofás, colchões, divisórias, galpões industriais e pisos. JKS Limpadora, desde 1990.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  const images = Object.fromEntries(services.map((s) => [s.slug, aiImage(s.slug)]));

  return (
    <>
      <PageHero title="Onze especialidades, duas frentes de trabalho." label="Serviços" lead="Situações críticas, que exigem urgência e método, e higienização especializada, programada para manter ambientes saudáveis." crumbs={[{ label: "Serviços" }]} />

      <section className="py-12 sm:py-24">
        <div className="container-x">
          <Reveal className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <h2 className="text-2xl font-extrabold tracking-tight">Situações críticas</h2>
            <p className="text-sm font-semibold text-muted-foreground">Atendimento com urgência e discrição</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {criticalServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} image={images[s.slug]} index={i + 1} large />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <h2 className="text-2xl font-extrabold tracking-tight">Higienização especializada</h2>
            <p className="text-sm font-semibold text-muted-foreground">Residências, empresas e instituições</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specializedServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.08}>
                <ServiceCard service={s} image={images[s.slug]} index={criticalServices.length + i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
