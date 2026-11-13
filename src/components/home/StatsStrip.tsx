"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Activity } from "lucide-react";
import { doctor } from "@/data";

/**
 * Franja de confianza — reemplaza el "AchievementsStrip" de la referencia,
 * cuyas cifras ("#1 en reseñas", "5.0★", "+500 pacientes") eran marketing
 * fabricado que ni siquiera coincidía entre secciones del propio sitio
 * original. Aquí solo se muestran los datos reales de `doctor.stats`
 * (verificados: 1,201 reseñas reales en Doctoralia, años desde su
 * residencia) — AGENTS.md §1.2 y la regla de nunca inventar cifras.
 */
export default function StatsStrip() {
  const items = [
    { icon: Star, value: doctor.stats?.[0]?.value ?? "—", label: doctor.stats?.[0]?.label ?? "", accent: true },
    { icon: ShieldCheck, value: "4", label: "Certificaciones médicas vigentes", accent: false },
    { icon: Activity, value: doctor.stats?.[1]?.value ?? "—", label: doctor.stats?.[1]?.label ?? "", accent: false },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#1b1f2b]">
      <div className="absolute top-0 left-1/4 h-1 w-1/2 bg-accent/50 blur-[6px]" />
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex flex-col items-center gap-3 rounded-[2rem] border p-8 text-center transition-all duration-500 ${
                  item.accent ? "border-accent/30 bg-accent/10" : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accent ? "bg-accent text-accent-foreground" : "bg-white/5 text-accent"}`}>
                  <Icon size={22} />
                </div>
                <span className={`font-heading text-3xl font-black tracking-tighter md:text-4xl ${item.accent ? "text-accent" : "text-foreground"}`}>
                  {item.value}
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
