"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import { trackEvent } from "@/lib/analytics";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

/**
 * Hero oscuro con textura médica de fondo + panel de foto real a la derecha
 * con tarjeta flotante de certificación en bob continuo — rescatado casi
 * literal de la referencia Envato (AGENTS.md §1.2: la capa de animación/
 * disposición externa se adopta, el inventario de secciones se audita).
 */
export default function HeroSection() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/5 bg-background">
      <UrologyPatterns />
      <div className="grid-lines opacity-10" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-accent/15 to-transparent" />
        <div className="absolute -bottom-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-accent/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="sub-heading">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Medicina de Precisión · {doctor.specialistTitle}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-heading text-5xl font-black leading-[0.95] tracking-tighter text-foreground md:text-7xl xl:text-8xl"
            >
              Pasión por la <br />
              <span className="text-accent">Excelencia</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Diagnósticos precisos y tratamientos de vanguardia en <span className="text-foreground">{doctor.city}</span>, enfocados en tu salud y tranquilidad integral.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent"
                  onClick={() => trackEvent("clic_agendar_cita", { source: "hero" })}
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Agenda tu Consulta</span>
                  <div className="icon-circle">
                    <ArrowRight size={18} />
                  </div>
                </a>

                {doctor.stats?.[0] && (
                  <div className="border-l border-white/10 pl-6">
                    <div className="font-heading text-lg font-black leading-none text-foreground">{doctor.stats[0].value}</div>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-widest text-accent">{doctor.stats[0].label}</p>
                  </div>
                )}
              </div>

              <p className="text-xs text-muted-foreground/70">{formatCredentials(doctor)}</p>
            </motion.div>
          </div>

          <div className="relative mt-4 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-10 rounded-full bg-accent/10 blur-[100px] transition duration-1000 group-hover:bg-accent/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 bg-surface shadow-2xl md:rounded-[5rem]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
                <Image
                  src={doctor.photo}
                  alt={`${doctor.title} ${doctor.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
                />

                <motion.div
                  className="animate-hero-float absolute inset-x-6 bottom-6 z-20 space-y-4 rounded-[2rem] border border-white/10 bg-background/50 p-6 shadow-2xl backdrop-blur-2xl md:inset-x-8 md:bottom-10 md:rounded-[3rem] md:p-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-xl md:h-20 md:w-20">
                      <Image src="/institution-logos/cmu.png" alt="CMU" width={64} height={64} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-black uppercase tracking-tighter text-foreground md:text-2xl">Certificado Elite</h4>
                      <p className="text-[9px] font-black uppercase tracking-widest text-accent md:text-[10px]">Consejo Mexicano de Urología</p>
                    </div>
                  </div>
                  <p className="text-xs italic leading-relaxed text-muted-foreground md:text-sm">
                    &ldquo;Compromiso inquebrantable con la salud del paciente e innovación constante.&rdquo;
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 opacity-50 md:flex"
      >
        <div className="h-16 w-px bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent" style={{ writingMode: "vertical-rl" }}>
          Explora
        </span>
      </motion.div>
    </section>
  );
}
