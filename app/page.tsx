import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site, waLink, mainWhatsapp } from "@/lib/site";
import { services, criticalServices, specializedServices } from "@/lib/services";
import { aiImage, aiVideo } from "@/lib/images";
import { HeroMedia } from "@/components/site/hero-media";
import { ServiceCard } from "@/components/site/service-card";
import { QuoteWizard } from "@/components/site/quote-wizard";
import { BeforeAfter } from "@/components/site/before-after";
import { SectionHead } from "@/components/site/section-head";
import { Reveal } from "@/components/site/reveal";
import { Faq } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { ContactPanel } from "@/components/site/contact-panel";
import { Seal } from "@/components/site/seal";
import { Placeholder } from "@/components/site/placeholder";
import { QuickCta } from "@/components/site/quick-cta";

const facts = [
  { label: "Fundada em", value: "1990" },
  { label: "Sede", value: "Jaraguá, São Paulo" },
  { label: "Atuação", value: "Todo o Brasil" },
  { label: "Atendimento", value: "7 dias, 7h às 21h" },
];

const steps = [
  { title: "Você chama no WhatsApp", text: "Fala direto com o Sr. João, a Sra. Helena ou o Sr. Carlos. Fotos e vídeos do local ajudam a orientar o primeiro atendimento." },
  { title: "Avaliamos e enviamos o orçamento", text: "Definimos o método adequado para o caso e apresentamos o orçamento sem compromisso." },
  { title: "A equipe executa e entrega o ambiente seguro", text: "Equipe própria, com proteção individual, maquinário específico e produtos adequados e legalizados." },
];

const certificates = [
  { image: "/images/certificados/3.png", issuer: "UNIFESP · Centro de Microscopia Eletrônica" },
  { image: "/images/certificados/1.png", issuer: "Universidade Federal de São Paulo" },
  { image: "/images/certificados/2.png", issuer: "Congregação da Paixão de Jesus Cristo" },
];

const faq = [
  { q: "Vocês atendem fora de São Paulo?", a: "Sim. A base fica no Jaraguá, em São Paulo, e a equipe se desloca para atender em todo o Brasil, de segunda a domingo, das 7h às 21h." },
  { q: "Como funciona o orçamento?", a: "Você envia fotos ou vídeos do local pelo WhatsApp e descreve o que aconteceu. Com isso a equipe orienta o primeiro atendimento e apresenta o orçamento sem compromisso." },
  { q: "O que é a limpeza criogênica pós-incêndio?", a: "É o método principal da JKS para remover a fuligem: não polui, não deixa resíduos líquidos, alcança locais de difícil acesso e devolve o ambiente em condições de uso com rapidez." },
  { q: "Vocês têm comprovação técnica dos serviços?", a: "Sim. A JKS possui atestados de capacidade técnica emitidos pela Universidade Federal de São Paulo, pelo Centro de Microscopia Eletrônica da UNIFESP e pela Congregação da Paixão de Jesus Cristo." },
  { q: "Quem executa o serviço?", a: "Equipe própria da JKS Limpadora, treinada, com equipamentos de proteção individual, maquinário específico e produtos adequados e legalizados para cada situação." },
];

export default function Home() {
  const images = Object.fromEntries(services.map((s) => [s.slug, aiImage(s.slug)]));
  const hero = aiImage("hero");
  const team = aiImage("equipe");
  const wizardServices = services.map(({ slug, title, shortTitle, tier }) => ({ slug, title, shortTitle, tier }));

  return (
    <>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-ink text-white sm:min-h-[86vh]">
        {hero ? (
          <HeroMedia poster={hero} desktop={aiVideo("video-hero-desktop")} mobile={aiVideo("video-hero-mobile")} />
        ) : (
          <div className="absolute inset-0">
            <Placeholder name="hero" className="rounded-none border-0" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

        <div className="container-x relative grid gap-10 pt-20 pb-12 sm:pt-24 sm:pb-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="grid max-w-3xl justify-items-start gap-6">
            <p className="label-rule text-sun before:bg-sun animate-in fade-in slide-in-from-bottom-3 duration-700">Limpeza técnica · desde 1990</p>
            <h1 className="display text-[clamp(2.4rem,7vw,6rem)] animate-in fade-in slide-in-from-bottom-4 delay-75 duration-700 fill-mode-both">
              Depois do incêndio, da enchente ou da perda, o dia seguinte começa aqui.
            </h1>
            <p className="max-w-[34em] text-lg leading-relaxed text-white/85 text-pretty animate-in fade-in slide-in-from-bottom-4 delay-150 duration-700 fill-mode-both sm:text-xl">
              Equipe própria para limpeza pós-incêndio, pós-enchente, ambientes pós-morte e higienização especializada. São Paulo e todo o Brasil, todos os dias das 7h às 21h.
            </p>
            <div className="flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-4 delay-200 duration-700 fill-mode-both max-sm:w-full max-sm:*:w-full">
              <Button nativeButton={false} render={<a href={waLink(mainWhatsapp.number)} target="_blank" rel="noopener" />} size="lg" className="h-14 px-7 text-base font-bold">
                Falar com o Sr. João no WhatsApp
              </Button>
              <Button nativeButton={false} render={<Link href="#servicos" />} variant="outline" size="lg" className="h-14 border-white/40 bg-transparent px-7 text-base font-bold text-white hover:bg-white/10 hover:text-white">
                Ver serviços
              </Button>
            </div>
            <p className="text-sm font-semibold text-white/70 animate-in fade-in delay-300 duration-700 fill-mode-both">
              {mainWhatsapp.label} · {site.phones[0].label} · sem central de atendimento
            </p>
          </div>
          <Seal light className="hidden lg:grid" />
        </div>
      </section>

      <section className="border-b border-border">
        <dl className="container-x grid lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.label} className={cn("flex items-baseline justify-between gap-4 py-3.5 max-lg:border-b max-lg:border-border max-lg:last:border-b-0 lg:grid lg:gap-1 lg:py-6", i > 0 && "lg:border-l lg:border-border lg:pl-8")}>
              <dt className="text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">{f.label}</dt>
              <dd className="text-right text-base font-extrabold tracking-tight lg:text-left lg:text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="servicos" className="py-14 sm:py-28">
        <div className="container-x">
          <SectionHead label="Serviços" title="Onze especialidades para o que a limpeza comum não resolve." lead="Situações críticas exigem urgência e método. A higienização especializada é programada para manter ambientes saudáveis." />

          <Reveal className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <h3 className="text-xl font-extrabold tracking-tight">Situações críticas</h3>
            <p className="text-sm font-semibold text-muted-foreground">Atendimento com urgência e discrição</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {criticalServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} image={images[s.slug]} index={i + 1} large />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <h3 className="text-xl font-extrabold tracking-tight">Higienização especializada</h3>
            <p className="text-sm font-semibold text-muted-foreground">Residências, empresas e instituições</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {specializedServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.08}>
                <ServiceCard service={s} image={images[s.slug]} index={criticalServices.length + i + 1} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 sm:mt-14">
            <QuickCta />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-28">
        <div className="container-x">
          <SectionHead label="Antes e depois" title="Limpeza criogênica pós-incêndio." lead="Arraste para comparar. A fuligem sai por completo, sem resíduos líquidos e sem agredir a estrutura." />
          <Reveal>
            <BeforeAfter before={aiImage("antes-incendio")} after={aiImage("depois-incendio")} />
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-28">
        <div className="container-x">
          <SectionHead label="Como a JKS trabalha" title="Três passos, sempre com a mesma equipe." />
          <ol className="grid gap-10 border-t border-ink md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.1} className="grid gap-3 pt-6 md:border-r md:border-border md:pr-6 md:last:border-r-0">
                <span className="display text-6xl text-brand">{i + 1}</span>
                <h3 className="text-xl leading-tight font-extrabold tracking-tight">{s.title}</h3>
                <p className="text-[0.9875rem] leading-relaxed text-ink-2">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-ink-2">
              {team ? <Image src={team} alt="Equipe da JKS Limpadora" fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" /> : <Placeholder name="equipe" hint="Equipe uniformizada em frente ao veículo" className="border-white/20 bg-ink-2 text-white **:text-white" />}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid justify-items-start gap-6">
            <p className="label-rule text-sun before:bg-sun">Quem atende</p>
            <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)]">Quem responde é o Rei da Limpeza.</h2>
            <p className="max-w-[34em] text-lg leading-relaxed text-white/80">
              O Sr. João fundou a JKS em 1990 e até hoje atende pessoalmente pelo WhatsApp, ao lado da Sra. Helena e do Sr. Carlos. Quem orça é quem executa: equipe própria, treinada, com equipamentos de proteção e maquinário específico para cada situação.
            </p>
            <ContactPanel light className="w-full max-w-xl" />
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-28">
        <div className="container-x">
          <SectionHead label="Atestados" title="Capacidade técnica atestada por instituições federais." lead="Documentos emitidos após a execução dos serviços, exigidos em contratações públicas.">
            <Link href="/certificados-clientes" className="font-bold underline decoration-brand decoration-2 underline-offset-8 hover:text-brand">
              Ver todos os atestados
            </Link>
          </SectionHead>
          <ul className="grid gap-6 md:grid-cols-3">
            {certificates.map((c, i) => (
              <Reveal as="li" key={c.issuer} delay={i * 0.1} className="grid gap-3">
                <Image src={c.image} alt={`Atestado de capacidade técnica: ${c.issuer}`} width={750} height={750} className="w-full rounded-xl" />
                <p className="text-sm font-bold">{c.issuer}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="simular" className="bg-paper py-14 sm:py-28">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHead label="Simule seu atendimento" title="Quatro perguntas e o pedido chega pronto no WhatsApp." lead="Responda o que aconteceu, o tipo de imóvel e a urgência. Montamos a mensagem com o resumo e você só envia." className="mb-0 lg:sticky lg:top-28" />
          <Reveal delay={0.1}>
            <QuoteWizard services={wizardServices} />
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-28">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHead label="Dúvidas frequentes" title="O que perguntam antes de chamar." lead="Não achou sua dúvida? Fale com a equipe pelo WhatsApp." className="mb-0 lg:sticky lg:top-28" />
          <Reveal delay={0.1}>
            <Faq items={faq} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
