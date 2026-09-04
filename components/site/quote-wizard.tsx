"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { waLink, mainWhatsapp } from "@/lib/site";
import type { Service } from "@/lib/services";

type Props = { services: Pick<Service, "slug" | "title" | "shortTitle" | "tier">[] };

const properties = ["Residência", "Comércio ou escritório", "Indústria ou galpão", "Instituição pública ou religiosa"];
const urgencies = ["Hoje ou amanhã", "Esta semana", "Sem pressa, quero orçar"];

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export const QuoteWizard = ({ services }: Props) => {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [service, setService] = useState("");
  const [property, setProperty] = useState("");
  const [urgency, setUrgency] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const total = 4;
  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };
  const canNext = [Boolean(service), Boolean(property), Boolean(urgency), Boolean(name && phone)][step];

  const message = [`Olá, sou ${name} e gostaria de um orçamento.`, `Serviço: ${service}`, `Tipo de imóvel: ${property}`, `Urgência: ${urgency}`, city && `Cidade: ${city}`, `Telefone: ${phone}`].filter(Boolean).join("\n");

  const option = (active: boolean) =>
    cn(
      "flex items-center justify-between gap-3 rounded-lg border px-4 py-3.5 text-left text-[0.9375rem] font-semibold transition",
      active ? "border-brand bg-brand text-white" : "border-border bg-white hover:border-ink",
    );

  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-sm font-bold text-muted-foreground tabular-nums">
          {step + 1}/{total}
        </p>
        <div className="flex flex-1 gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <span key={i} className="h-1 flex-1 overflow-hidden bg-paper-2">
              <motion.span className="block h-full bg-brand" initial={false} animate={{ width: i <= step ? "100%" : "0%" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div key={step} custom={dir} variants={slide} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="grid gap-5">
            {step === 0 && (
              <>
                <h3 className="display text-2xl sm:text-3xl">O que aconteceu?</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {services.map((s, i) => (
                    <button key={s.slug} type="button" onClick={() => setService(s.title)} className={option(service === s.title)}>
                      {s.shortTitle}
                      <span className={cn("text-xs font-bold tabular-nums", service === s.title ? "text-white/70" : "text-muted-foreground")}>{String(i + 1).padStart(2, "0")}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h3 className="display text-2xl sm:text-3xl">Que tipo de imóvel?</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {properties.map((p) => (
                    <button key={p} type="button" onClick={() => setProperty(p)} className={option(property === p)}>
                      {p}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="display text-2xl sm:text-3xl">Para quando você precisa?</h3>
                <div className="grid gap-2">
                  {urgencies.map((u) => (
                    <button key={u} type="button" onClick={() => setUrgency(u)} className={option(urgency === u)}>
                      {u}
                    </button>
                  ))}
                </div>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Cidade (opcional)
                  <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ex.: Guarulhos, SP" className="h-11 rounded-lg" />
                </label>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="display text-2xl sm:text-3xl">Como podemos te chamar?</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-semibold">
                    Seu nome
                    <Input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="h-11 rounded-lg" />
                  </label>
                  <label className="grid gap-1.5 text-sm font-semibold">
                    Telefone
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" className="h-11 rounded-lg" />
                  </label>
                </div>
                <div className="border-l-4 border-brand bg-paper p-4 text-sm leading-relaxed text-ink-2">
                  <p className="mb-1 font-bold text-ink">Resumo que vai no WhatsApp</p>
                  <p>
                    {service} · {property} · {urgency}
                    {city && ` · ${city}`}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="ghost" size="lg" onClick={() => go(step - 1)} disabled={step === 0}>
          <ArrowLeft className="size-4" />
          Voltar
        </Button>
        {step < total - 1 ? (
          <Button size="lg" className="h-12 px-6 font-bold" onClick={() => go(step + 1)} disabled={!canNext}>
            Continuar
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <Button render={<a href={waLink(mainWhatsapp.number, message)} target="_blank" rel="noopener" />} size="lg" disabled={!canNext} className="h-12 bg-wa px-6 font-bold text-white hover:bg-wa/90">
            Enviar pelo WhatsApp
          </Button>
        )}
      </div>
    </div>
  );
};
