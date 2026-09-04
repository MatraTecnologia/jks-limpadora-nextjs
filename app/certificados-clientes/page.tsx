import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Atestados de capacidade técnica",
  description: "Atestados de capacidade técnica da JKS Limpadora emitidos pela UNIFESP, Universidade Federal de São Paulo e Congregação da Paixão de Jesus Cristo.",
  alternates: { canonical: "/certificados-clientes" },
};

const certificates = [
  { image: "/images/certificados/3.png", issuer: "UNIFESP · Centro de Microscopia Eletrônica", text: "Atestado de capacidade técnica emitido pelo CEME, Centro de Microscopia Eletrônica da Universidade Federal de São Paulo." },
  { image: "/images/certificados/1.png", issuer: "Universidade Federal de São Paulo", text: "Atestado de capacidade técnica emitido no âmbito do Serviço Público Federal, Ministério da Educação." },
  { image: "/images/certificados/2.png", issuer: "Congregação da Paixão de Jesus Cristo", text: "Atestado de capacidade técnica emitido pela Província Getsêmani." },
];

export default function CertificadosPage() {
  return (
    <>
      <PageHero title="Atestados de capacidade técnica." label="Comprovação" lead="Documentos emitidos por instituições públicas e religiosas que atestam a qualidade e a capacidade técnica dos serviços executados pela JKS Limpadora." crumbs={[{ label: "Atestados" }]} />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <ul className="grid gap-8 md:grid-cols-3">
            {certificates.map((c, i) => (
              <Reveal as="li" key={c.issuer} delay={i * 0.1} className="grid content-start gap-3">
                <Image src={c.image} alt={`Atestado de capacidade técnica: ${c.issuer}`} width={750} height={750} className="w-full rounded-xl" />
                <h2 className="text-lg leading-snug font-extrabold tracking-tight">{c.issuer}</h2>
                <p className="text-[0.9375rem] leading-relaxed text-ink-2">{c.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="prose-jks mt-16 text-[1.0625rem] leading-relaxed">
            <h2 className="mt-0!">O que é um atestado de capacidade técnica</h2>
            <p>
              É um documento emitido pelo contratante após a execução de um serviço, confirmando que a empresa cumpriu o escopo com a qualidade esperada. Instituições públicas costumam exigi-lo em processos de contratação, o que torna cada atestado uma referência verificável do trabalho da JKS Limpadora.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
