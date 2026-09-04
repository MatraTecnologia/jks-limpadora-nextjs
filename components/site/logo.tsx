import Link from "next/link";
import { Crown } from "./crown";
import { cn } from "@/lib/utils";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link href="/" className={cn("inline-flex items-center gap-2.5", light ? "text-white" : "text-ink")} aria-label="JKS Limpadora, página inicial">
    <span className="grid size-10 place-items-center rounded-lg bg-brand text-sun">
      <Crown className="size-5" />
    </span>
    <span className="flex flex-col leading-none">
      <span className="text-[1.35rem] font-extrabold tracking-[-0.04em]">JKS</span>
      <span className={cn("text-[0.68rem] font-bold tracking-[0.12em] uppercase", light ? "text-white/70" : "text-muted-foreground")}>Limpadora</span>
    </span>
  </Link>
);
