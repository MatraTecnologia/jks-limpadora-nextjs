import Link from "next/link";
import { site, fullAddress } from "@/lib/site";
import { services } from "@/lib/services";
import { Crown } from "./crown";

const institutional = [
  { href: "/empresa", label: "A empresa" },
  { href: "/certificados-clientes", label: "Atestados de capacidade técnica" },
  { href: "/contato", label: "Contato e orçamento" },
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
];

const social = [
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.facebook, label: "Facebook" },
  { href: site.social.youtube, label: "YouTube" },
  { href: site.social.linkedin, label: "LinkedIn" },
];

export const Footer = () => (
  <footer className="bg-ink text-white/80">
    <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1fr] lg:py-20">
      <div>
        <p className="flex items-center gap-2 text-white">
          <Crown className="size-5 text-sun" />
          <span className="font-extrabold tracking-tight">JKS Limpadora</span>
        </p>
        <p className="mt-4 max-w-[30em] text-[0.9375rem] leading-relaxed text-white/60">
          Limpeza técnica para situações críticas e higienização especializada. Equipe própria, atuação em todo o Brasil, todos os dias das 7h às 21h.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          {social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener" className="text-white transition hover:text-sun">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-xs font-bold tracking-[0.12em] text-white/50 uppercase">Serviços</p>
        <ul className="grid gap-2 text-[0.9375rem]">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`} className="transition hover:text-sun">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-xs font-bold tracking-[0.12em] text-white/50 uppercase">Institucional</p>
        <ul className="grid gap-2 text-[0.9375rem]">
          {institutional.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition hover:text-sun">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-xs font-bold tracking-[0.12em] text-white/50 uppercase">Atendimento</p>
        <address className="grid gap-3 text-[0.9375rem] leading-relaxed not-italic">
          <p>{fullAddress}</p>
          <p>
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="block font-semibold text-white transition hover:text-sun">
                {p.label}
              </a>
            ))}
          </p>
          <p>
            {site.whatsapp.map((w) => (
              <span key={w.number} className="block">
                <a href={`https://wa.me/${w.number}`} target="_blank" rel="noopener" className="font-semibold text-white transition hover:text-sun">
                  {w.label}
                </a>{" "}
                <span className="text-white/60">· {w.name}</span>
              </span>
            ))}
          </p>
          <p>{site.hours}</p>
        </address>
      </div>
    </div>

    <div className="container-x overflow-hidden border-t border-white/10 pt-8 pb-6">
      <p className="display text-[clamp(4rem,14vw,12rem)] leading-none text-white/[0.07] select-none" aria-hidden="true">
        Rei da Limpeza
      </p>
      <div className="mt-4 flex flex-wrap justify-between gap-2 text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} {site.name} · Desde {site.since}
        </p>
        <p>Jaraguá · São Paulo · Brasil</p>
      </div>
    </div>
  </footer>
);
