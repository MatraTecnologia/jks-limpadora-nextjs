import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Item = { q: string; a: string };

export const Faq = ({ items }: { items: Item[] }) => (
  <Accordion defaultValue={["0"]} className="border-t border-border">
    {items.map((item, i) => (
      <AccordionItem key={item.q} value={String(i)} className="border-b border-border">
        <AccordionTrigger className="items-center gap-6 py-5 text-[1.0625rem] font-bold hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-brand">
          <span className="flex items-baseline gap-4">
            <span className="text-sm font-extrabold text-brand tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            {item.q}
          </span>
        </AccordionTrigger>
        <AccordionContent className="max-w-[62ch] pl-9 text-[0.9875rem] leading-relaxed text-ink-2">{item.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
