"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { waLink, mainWhatsapp } from "@/lib/site";
import { criticalServices, specializedServices } from "@/lib/services";
import { Logo } from "./logo";

const links = [
  { href: "/empresa", label: "Empresa" },
  { href: "/certificados-clientes", label: "Atestados" },
  { href: "/contato", label: "Contato" },
];

const groups = [
  { title: "Situações críticas", items: criticalServices },
  { title: "Higienização especializada", items: specializedServices },
];

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="container-x flex min-h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          <div className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
            <Link
              href="/servicos"
              className={cn("inline-flex h-10 items-center gap-1 text-[0.95rem] font-semibold text-ink-2 transition hover:text-ink", (isActive("/servicos") || menu) && "text-ink")}
              onFocus={() => setMenu(true)}
            >
              Serviços <ChevronDown className={cn("size-4 transition", menu && "rotate-180")} />
            </Link>
            <AnimatePresence>
              {menu && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-1/2 w-[40rem] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-2 gap-8 rounded-xl border border-border bg-white p-6 shadow-lift">
                    {groups.map((g) => (
                      <div key={g.title}>
                        <p className="label-rule mb-3">{g.title}</p>
                        <ul className="grid">
                          {g.items.map((s, i) => (
                            <li key={s.slug}>
                              <Link
                                href={`/${s.slug}`}
                                onClick={() => setMenu(false)}
                                className="flex items-baseline gap-3 border-b border-border py-2.5 text-[0.9375rem] font-semibold text-ink-2 transition last:border-0 hover:text-brand"
                              >
                                <span className="w-5 text-xs font-bold text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={cn("text-[0.95rem] font-semibold text-ink-2 transition hover:text-ink", isActive(l.href) && "text-ink underline decoration-brand decoration-2 underline-offset-8")}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button nativeButton={false} render={<a href={waLink(mainWhatsapp.number)} target="_blank" rel="noopener" />} size="lg" className="hidden h-11 px-5 text-[0.9375rem] font-bold sm:inline-flex">
            Falar com o Sr. João
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Abrir menu" />}>
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] gap-0 p-0 sm:max-w-sm">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col overflow-y-auto px-6 pt-16 pb-8">
                <Link href="/servicos" onClick={() => setOpen(false)} className="border-b border-border py-4 text-2xl font-extrabold tracking-tight">
                  Serviços
                </Link>
                {groups.map((g) => (
                  <div key={g.title} className="py-4">
                    <p className="label-rule mb-2">{g.title}</p>
                    <ul className="grid">
                      {g.items.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/${s.slug}`} onClick={() => setOpen(false)} className="block py-2 text-[0.95rem] font-semibold text-ink-2">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {links.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-t border-border py-4 text-2xl font-extrabold tracking-tight">
                    {l.label}
                  </Link>
                ))}
                <Button nativeButton={false} render={<a href={waLink(mainWhatsapp.number)} target="_blank" rel="noopener" />} size="lg" className="mt-6 h-12 font-bold">
                  Falar com o Sr. João no WhatsApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
