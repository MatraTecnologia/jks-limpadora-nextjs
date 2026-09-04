"use client";

import { useState } from "react";
import Image from "next/image";
import { Placeholder } from "./placeholder";

type Props = { before: string | null; after: string | null; label?: string };

export const BeforeAfter = ({ before, after, label = "Limpeza pós-incêndio" }: Props) => {
  const [value, setValue] = useState(50);

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-ink select-none">
      <div className="absolute inset-0">
        {after ? <Image src={after} alt={`${label}: ambiente após o serviço`} fill sizes="(max-width: 1240px) 100vw, 1240px" className="object-cover" /> : <Placeholder name="depois-incendio" className="rounded-none border-0" />}
        <span className="absolute top-4 right-4 bg-white px-2.5 py-1 text-xs font-extrabold tracking-[0.12em] text-ink uppercase">Depois</span>
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        {before ? <Image src={before} alt={`${label}: ambiente antes do serviço`} fill sizes="(max-width: 1240px) 100vw, 1240px" className="object-cover" /> : <Placeholder name="antes-incendio" className="rounded-none border-0" />}
        <span className="absolute top-4 left-4 bg-brand px-2.5 py-1 text-xs font-extrabold tracking-[0.12em] text-white uppercase">Antes</span>
      </div>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white" style={{ left: `${value}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-11 -translate-1/2 place-items-center rounded-full bg-white text-ink shadow-lift">
          <span className="flex gap-1">
            <span className="border-y-[6px] border-r-[6px] border-y-transparent border-r-ink" />
            <span className="border-y-[6px] border-l-[6px] border-y-transparent border-l-ink" />
          </span>
        </span>
      </div>

      <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} aria-label="Arraste para comparar antes e depois" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    </div>
  );
};
