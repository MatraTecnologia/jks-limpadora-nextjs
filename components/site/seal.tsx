import { cn } from "@/lib/utils";
import { Crown } from "./crown";

type Props = { className?: string; light?: boolean };

export const Seal = ({ className, light = false }: Props) => (
  <div className={cn("relative grid size-32 place-items-center", className)} aria-hidden="true">
    <svg viewBox="0 0 200 200" className={cn("absolute inset-0 animate-spin-slow", light ? "text-white" : "text-ink")}>
      <defs>
        <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <text fill="currentColor" fontSize="19" fontWeight="800" letterSpacing="3.5">
        <textPath href="#seal-circle">JKS LIMPADORA · REI DA LIMPEZA · DESDE 1990 ·</textPath>
      </text>
    </svg>
    <span className={cn("grid size-14 place-items-center rounded-full", light ? "bg-white text-brand" : "bg-brand text-sun")}>
      <Crown className="size-7" />
    </span>
  </div>
);
