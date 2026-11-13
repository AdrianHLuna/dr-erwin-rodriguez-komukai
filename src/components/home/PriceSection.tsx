"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Banknote, Landmark, ArrowRight } from "lucide-react";
import { doctor } from "@/data";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  "Tarjeta de Crédito": CreditCard,
  "Tarjeta de Débito": CreditCard,
  "Transferencia Bancaria": Landmark,
};

/**
 * Precio real único con métodos de pago/seguros a la misma jerarquía visual
 * (AGENTS.md §5) — reemplaza los "3 planes" de la referencia (Consulta
 * General $800 / Especializada $1,200 / Check-up $2,500), que eran precios
 * de marketing inventados sin respaldo en `doctor.ts` del repo fuente. Aquí
 * solo se muestra `doctor.consultationPrice` real ($900, confirmado también
 * en su perfil público de Doctoralia).
 */
export default function PriceSection() {
  return (
    <section id="costos" className="relative overflow-hidden border-t border-white/5 bg-background py-20 md:py-32">
      <UrologyPatterns />
      <div className="grid-lines opacity-10" />
      <div className="absolute left-1/2 top-0 h-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16 flex flex-col items-center space-y-6 text-center md:mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="sub-heading">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>Precio y Forma de Pago</span>
          </motion.div>
          <h2 className="font-heading max-w-3xl text-4xl font-black uppercase leading-tight tracking-tighter text-foreground md:text-6xl">
            Inversión en tu Salud con <span className="text-accent">Transparencia Total</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uro-card relative overflow-hidden p-10 shadow-3xl md:p-16"
        >
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 blur-[80px]" />
          <div className="relative z-10 flex flex-col items-center gap-10 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">Consulta Urológica</p>
              <div className="mt-3 flex items-baseline justify-center gap-3 md:justify-start">
                <span className="font-heading text-6xl font-black tracking-tighter text-accent md:text-7xl">
                  ${doctor.consultationPrice.toLocaleString("es-MX")}
                </span>
                <span className="text-xs font-black uppercase italic tracking-[0.3em] text-accent/50">MXN</span>
              </div>
            </div>
            <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} className="btn-accent py-5 px-8">
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Agendar Consulta</span>
              <div className="icon-circle h-9 w-9 bg-white/20">
                <ArrowRight size={18} />
              </div>
            </a>
          </div>

          <div className="relative z-10 mt-12 border-t border-white/5 pt-10">
            <p className="mb-5 text-center text-[10px] font-black uppercase tracking-[0.3em] text-accent/70 md:text-left">
              Métodos de Pago Aceptados
            </p>
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap">
              {doctor.paymentMethods.map((method) => {
                const Icon = paymentIcons[method] ?? CreditCard;
                return (
                  <div
                    key={method}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-xs font-black uppercase tracking-widest text-foreground"
                  >
                    <Icon size={18} className="text-accent" />
                    {method}
                  </div>
                );
              })}
              {doctor.insurances?.map((insurance) => (
                <div
                  key={insurance}
                  className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/10 px-6 py-4 text-xs font-black uppercase tracking-widest text-accent"
                >
                  <ShieldCheck size={18} />
                  {insurance}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
