"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { symptoms } from "@/data";
import { iconForText } from "@/lib/contentIcons";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

const preview = symptoms.slice(0, 3);

export default function SymptomsSection() {
  return (
    <section id="sintomas" className="relative overflow-hidden border-b border-white/5 bg-background py-16 md:py-24">
      <UrologyPatterns />
      <div className="grid-lines opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-10 md:mb-20 lg:flex-row">
          <div className="max-w-4xl space-y-6">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="sub-heading">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Escucha a tu Cuerpo</span>
            </motion.div>
            <h2 className="font-heading text-4xl font-black leading-tight tracking-tighter text-foreground md:text-6xl">
              Señales que Requieren <span className="text-accent">Atención Especializada</span>
            </h2>
          </div>
          <div className="max-w-md space-y-6 lg:text-right">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Identificar los síntomas a tiempo puede marcar la diferencia en tu salud urológica.
            </p>
            <Link href="/sintomas" className="inline-flex items-center gap-4 rounded-full p-3 text-[11px] font-black uppercase tracking-[0.2em] text-accent hover:bg-accent/5">
              Ver todos <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {preview.map((symptom, i) => {
            const Icon = iconForText(symptom.name);
            return (
              <motion.div
                key={symptom.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="uro-card group flex flex-col overflow-hidden p-8 shadow-2xl md:p-10"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon size={30} />
                  </div>
                  <h3 className="font-heading text-xl font-black leading-tight tracking-tighter text-foreground transition-colors group-hover:text-accent">
                    {symptom.name}
                  </h3>
                </div>
                <p className="mt-6 flex-grow text-base leading-relaxed text-muted-foreground">{symptom.description}</p>
                <Link
                  href={`/sintomas/${symptom.slug}`}
                  className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <span>Más información</span>
                  <div className="icon-circle h-8 w-8 bg-white/10">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
