import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  hint?: string;
  className?: string;
};

export const Placeholder = ({ name, hint, className }: Props) => (
  <div
    className={cn(
      "relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[inherit] border-2 border-dashed border-border bg-[radial-gradient(circle_at_30%_30%,oklch(0.97_0.06_92/0.9),transparent_55%),radial-gradient(circle_at_75%_70%,oklch(0.96_0.03_20),transparent_55%),var(--paper)] p-4 text-center",
      className,
    )}
    aria-hidden="true"
  >
    <span className="grid size-11 place-items-center rounded-full bg-white/80 text-brand shadow-soft">
      <ImageIcon className="size-5" />
    </span>
    <span className="text-xs font-bold text-ink">Imagem IA · {name}.jpg</span>
    {hint && <span className="max-w-[26ch] text-[0.7rem] leading-snug text-muted-foreground">{hint}</span>}
  </div>
);
