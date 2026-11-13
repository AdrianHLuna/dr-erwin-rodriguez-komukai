"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle } from "lucide-react";
import { symptoms } from "@/data";
import { iconForText } from "@/lib/contentIcons";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

const mainSymptoms = symptoms.slice(0, 6);
const otherSymptoms = symptoms.slice(6);

export default function SymptomsSection() {
  return (
    <section id="sintomas" className="relative overflow-hidden border-b border-white/5 bg-background py-16 md:py-24">
      <UrologyPatterns />
      <div className="grid-lines opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-5">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="sub-heading">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Escucha a tu Cuerpo</span>
            </motion.div>
            <h2 className="font-heading text-3xl font-black leading-tight tracking-tighter text-foreground md:text-5xl lg:text-6xl">
              Señales que Requieren <span className="text-accent">Atención Especializada</span>
            </h2>
          </div>
          <div className="max-w-md space-y-4 lg:text-right">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Identificar los síntomas a tiempo previene complicaciones severas y facilita tratamientos oportunos.
            </p>
            <Link href="/sintomas" className="inline-flex items-center gap-3 rounded-full py-2 text-xs font-black uppercase tracking-[0.2em] text-accent hover:gap-5 transition-all">
              Ver todos ({symptoms.length}) <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Grid de síntomas principales sin dependencia de imágenes */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainSymptoms.map((symptom, i) => {
            const Icon = iconForText(symptom.name);
            return (
              <motion.div
                key={symptom.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="uro-card group flex flex-col justify-between overflow-hidden p-7 shadow-2xl transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon size={28} />
                    </div>
                    <span
                      className="font-heading text-3xl font-black text-foreground/5 select-none"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-heading mt-5 text-xl font-black leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {symptom.name}
                  </h3>

                  {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {symptom.colloquialNames.slice(0, 2).map((name) => (
                        <span
                          key={name}
                          className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {symptom.description}
                  </p>

                  {symptom.alarmSigns && symptom.alarmSigns.length > 0 && (
                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent/5 px-3 py-2 text-xs text-accent">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span className="font-medium truncate">{symptom.alarmSigns[0]}</span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/sintomas/${symptom.slug}`}
                  className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
                >
                  <span>Orientación Médica</span>
                  <div className="icon-circle h-7 w-7 bg-white/10 group-hover:bg-accent-foreground/20">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Nube de acceso rápido para los demás síntomas */}
        {otherSymptoms.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[2.5rem] border border-white/5 bg-surface/50 p-6 md:p-8"
          >
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                  Otros síntomas urológicos frecuentes
                </span>
                <h4 className="font-heading mt-1 text-base font-bold text-foreground md:text-lg">
                  ¿Presentas alguna de estas molestias?
                </h4>
              </div>
              <Link
                href="/sintomas"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent hover:underline"
              >
                Ver catálogo completo <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherSymptoms.map((s) => {
                const QuickIcon = iconForText(s.name);
                return (
                  <Link
                    key={s.id}
                    href={`/sintomas/${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/80 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    <QuickIcon size={14} className="text-accent" />
                    <span>{s.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
          <Link
            href="/sintomas"
            className="inline-flex items-center gap-5 rounded-full px-6 py-3.5 text-xs font-black uppercase tracking-[0.3em] text-accent transition-all hover:gap-7 hover:bg-accent/5"
          >
            Ver guía completa de síntomas
            <div className="icon-circle h-10 w-10 bg-accent text-accent-foreground">
              <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
