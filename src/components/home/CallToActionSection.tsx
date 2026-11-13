"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Calendar, Activity } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

export default function CallToActionSection() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#1b1f2b] py-20 md:py-32">
      <UrologyPatterns />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-accent/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-full w-1/2 bg-accent/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="sub-heading justify-center">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Agenda Hoy Mismo</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mt-8 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-foreground md:text-7xl"
        >
          Tu Salud No Puede <br /> <span className="text-accent">Esperar Más</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Coordina una consulta con {doctor.title} {doctor.name} y recibe atención urológica de alta especialidad con la ética que tu salud merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("clic_agendar_cita", { source: "cta_final" })}
            className="btn-accent w-full py-6 px-10 text-base sm:w-auto"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Agendar vía WhatsApp</span>
            <div className="icon-circle h-11 w-11 bg-white/20">
              <MessageCircle size={20} />
            </div>
          </a>
          <a
            href={`tel:${doctor.phone}`}
            onClick={() => trackEvent("clic_llamar", { source: "cta_final" })}
            className="flex w-full items-center justify-center gap-5 rounded-[2.5rem] border border-white/10 bg-white/5 px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-foreground sm:w-auto"
          >
            <span>Llamar Directo</span>
            <div className="icon-circle h-11 w-11 bg-white/5">
              <Phone size={18} />
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-6 py-3">
            <Calendar size={16} className="text-accent" />
            Citas Disponibles Esta Semana
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-6 py-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            Atención en {doctor.city}
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-6 py-3">
            <Activity size={16} className="text-accent" />
            Cirugía de Mínima Invasión
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 left-0 w-full overflow-hidden opacity-[0.02] md:-bottom-20">
        <span className="font-heading whitespace-nowrap text-[90px] font-black uppercase leading-none tracking-tighter text-foreground md:text-[260px]">
          ADVANCED UROLOGY • ADVANCED UROLOGY •
        </span>
      </div>
    </section>
  );
}
