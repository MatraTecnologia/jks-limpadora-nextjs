import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = { message?: string; className?: string; light?: boolean };

export const ContactPanel = ({ message, className, light = false }: Props) => (
  <div className={cn("rounded-xl border p-6", light ? "border-white/15 bg-white/5 text-white" : "border-border bg-white", className)}>
    <p className={cn("label-rule", light && "text-sun before:bg-sun")}>Quem atende</p>
    <ul className="mt-4">
      {site.whatsapp.map((w) => (
        <li key={w.number} className={cn("flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t py-3.5", light ? "border-white/15" : "border-border")}>
          <div>
            <p className="font-bold">{w.name}</p>
            <a href={waLink(w.number, message)} target="_blank" rel="noopener" className={cn("text-xl font-extrabold tracking-tight tabular-nums transition hover:text-brand", light && "hover:text-sun")}>
              {w.label}
            </a>
          </div>
          <a
            href={waLink(w.number, message)}
            target="_blank"
            rel="noopener"
            className="inline-flex h-9 items-center rounded-md bg-wa px-3.5 text-sm font-bold text-white transition hover:brightness-95"
          >
            WhatsApp
          </a>
        </li>
      ))}
    </ul>
    <p className={cn("mt-4 border-t pt-4 text-sm", light ? "border-white/15 text-white/70" : "border-border text-muted-foreground")}>
      Fixo{" "}
      {site.phones.map((p, i) => (
        <span key={p.href}>
          <a href={p.href} className={cn("font-bold", light ? "text-white" : "text-ink")}>
            {p.label}
          </a>
          {i < site.phones.length - 1 && " · "}
        </span>
      ))}
      <br />
      {site.hours}
    </p>
  </div>
);
