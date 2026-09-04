import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  lead?: string;
  label?: string;
  crumbs?: Crumb[];
  image?: string | null;
  imageAspect?: "video" | "square";
  children?: React.ReactNode;
  className?: string;
};

export const PageHero = ({ title, lead, label, crumbs = [], image, imageAspect = "video", children, className }: Props) => (
  <section className={cn("bg-paper", className)}>
    <div className={cn("container-x grid gap-10 py-12 sm:py-16", image && "lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16")}>
      <div className="grid justify-items-start gap-5">
        {crumbs.length > 0 && (
          <nav aria-label="Você está em">
            <ol className="flex flex-wrap gap-2 text-sm font-semibold text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-ink">
                  Início
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex gap-2">
                  <span aria-hidden="true">/</span>
                  {c.href ? (
                    <Link href={c.href} className="hover:text-ink">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {label && <p className="label-rule">{label}</p>}
        <h1 className="display max-w-[16ch] text-[clamp(2.6rem,5.6vw,4.6rem)]">{title}</h1>
        {lead && <p className="max-w-[36em] text-lg leading-relaxed text-ink-2 text-pretty">{lead}</p>}
        {children}
      </div>
      {image && (
        <div className={cn("relative overflow-hidden rounded-xl", imageAspect === "square" ? "aspect-square" : "aspect-[4/3]")}>
          <Image src={image} alt={title} fill priority sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
        </div>
      )}
    </div>
  </section>
);
