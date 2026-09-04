import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { services, getService } from "@/lib/services";
import { waLink, mainWhatsapp } from "@/lib/site";
import { aiImage } from "@/lib/images";
import { PageHero } from "@/components/site/page-hero";
import { ContactPanel } from "@/components/site/contact-panel";
import { ServiceCard } from "@/components/site/service-card";
import { SectionHead } from "@/components/site/section-head";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";

export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

type Props = { params: Promise<{ slug: string }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.seoDescription,
    alternates: { canonical: `/${service.slug}` },
    openGraph: { title: service.title, description: service.seoDescription, images: aiImage(service.slug) ? [`/images/ai/${service.slug}.jpg`] : [] },
  };
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const message = `Olá, gostaria de um orçamento para ${service.title.toLowerCase()}.`;
  const related = services.filter((s) => s.tier === service.tier && s.slug !== service.slug).slice(0, 3);
  const tierLabel = service.tier === "critico" ? "Situação crítica" : "Higienização especializada";

  return (
    <>
      <PageHero title={service.title} lead={service.lead} label={tierLabel} image={aiImage(service.slug)} crumbs={[{ label: "Serviços", href: "/servicos" }, { label: service.title }]}>
        <Button render={<a href={waLink(mainWhatsapp.number, message)} target="_blank" rel="noopener" />} size="lg" className="mt-2 h-14 px-7 text-base font-bold max-sm:w-full">
          Pedir orçamento pelo WhatsApp
        </Button>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-20">
          <Reveal className="prose-jks text-[1.0625rem] leading-relaxed">
            {service.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h2>{service.highlights.title}</h2>
            <ul>
              {service.highlights.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <aside className="grid gap-4 lg:sticky lg:top-28">
            <ContactPanel message={message} />
            <div className="border-l-4 border-brand bg-paper p-5 text-[0.9375rem] text-ink-2">
              <p className="font-bold text-ink">Envie fotos ou vídeos do local</p>
              <p>Isso permite uma orientação inicial mais precisa e agiliza o orçamento.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="container-x">
          <SectionHead label="Relacionados" title="Outros serviços." />
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} image={aiImage(s.slug)} index={services.indexOf(s) + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand message={message} />
    </>
  );
}
