import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a JKS Limpadora trata as informações fornecidas por clientes e visitantes do site.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero title="Política de privacidade." label="Institucional" crumbs={[{ label: "Política de privacidade" }]} />
      <section className="py-16 sm:py-24">
        <div className="container-x prose-jks text-[1.0625rem] leading-relaxed">
          <p>
            A JKS Limpadora respeita a sua privacidade e garante o sigilo das informações que você nos fornece. Os dados compartilhados por WhatsApp, telefone ou formulário são usados exclusivamente para o atendimento da sua solicitação, elaboração de orçamento e agendamento do serviço.
          </p>
          <h2>Dados pessoais</h2>
          <p>Seus dados pessoais nunca são vendidos, enviados ou disponibilizados a terceiros. Durante a navegação no site, podem ser coletadas estatísticas anônimas sobre páginas visitadas e tempo de permanência, com o objetivo de melhorar a experiência de uso.</p>
          <h2>Comunicação</h2>
          <p>Utilizamos seu telefone e e-mail apenas para responder ao contato feito por você. Você pode solicitar a exclusão dos seus dados a qualquer momento pelos canais de atendimento.</p>
          <h2>Segurança</h2>
          <p>O site é servido por conexão segura (HTTPS) e não armazena senhas ou dados de pagamento.</p>
        </div>
      </section>
    </>
  );
}
