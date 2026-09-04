import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/services";
import { Placeholder } from "./placeholder";
import { cn } from "@/lib/utils";

type Props = { service: Service; image?: string | null; index: number; large?: boolean };

export const ServiceCard = ({ service, image, index, large = false }: Props) => (
  <Link href={`/${service.slug}`} className="group relative block overflow-hidden rounded-xl bg-ink text-white">
    <div className={cn("relative overflow-hidden", large ? "aspect-[16/11]" : "aspect-[4/5] sm:aspect-[16/12]")}>
      {image ? (
        <Image src={image} alt="" fill sizes={large ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 768px) 100vw, 300px"} className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.04]" />
      ) : (
        <Placeholder name={service.slug} className="rounded-none border-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
    </div>
    <span className="absolute top-4 left-4 text-sm font-extrabold text-sun tabular-nums">{String(index).padStart(2, "0")}</span>
    <div className="absolute inset-x-0 bottom-0 grid gap-1.5 p-5">
      <h3 className={cn("leading-[1.05] font-extrabold tracking-tight", large ? "text-2xl sm:text-3xl" : "text-xl")}>{service.title}</h3>
      <p className={cn("max-w-[42ch] text-[0.875rem] leading-snug text-white/80", !large && "line-clamp-2")}>{service.summary}</p>
    </div>
  </Link>
);
