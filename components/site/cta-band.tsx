import { ContactPanel } from "./contact-panel";
import { Reveal } from "./reveal";
import { Seal } from "./seal";

type Props = { title?: string; text?: string; message?: string };

export const CtaBand = ({
  title = "Fale agora com quem vai atender.",
  text = "Sem central de atendimento. Envie fotos ou vídeos do local pelo WhatsApp e receba a orientação inicial e o orçamento direto de quem executa o serviço.",
  message,
}: Props) => (
  <section className="bg-brand text-white">
    <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-28">
      <Reveal className="grid justify-items-start gap-6">
        <Seal light className="size-28" />
        <h2 className="display text-[clamp(2.4rem,5vw,4.2rem)]">{title}</h2>
        <p className="max-w-[36em] text-lg leading-relaxed text-white/85">{text}</p>
        <p className="text-sm font-semibold text-white/70">Atendimento todos os dias, das 7h às 21h · Todo o Brasil · Orçamento sem compromisso</p>
      </Reveal>
      <Reveal delay={0.15}>
        <ContactPanel light message={message} />
      </Reveal>
    </div>
  </section>
);
