import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  label?: string;
  title: string;
  lead?: string;
  className?: string;
  children?: React.ReactNode;
};

export const SectionHead = ({ label, title, lead, className, children }: Props) => (
  <Reveal className={cn("mb-10 grid max-w-3xl justify-items-start gap-4 sm:mb-14", className)}>
    {label && <p className="label-rule">{label}</p>}
    <h2 className="display text-[clamp(2.1rem,4.2vw,3.4rem)]">{title}</h2>
    {lead && <p className="max-w-[36em] text-lg leading-relaxed text-ink-2 text-pretty">{lead}</p>}
    {children}
  </Reveal>
);
