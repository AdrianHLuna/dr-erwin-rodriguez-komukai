"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Microscope } from "lucide-react";
import { diseases, doctor } from "@/data";
import CardImageHeader from "@/components/CardImageHeader";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";
import { trackEvent } from "@/lib/analytics";

const preview = diseases.slice(0, 4);

export default function DiseasesSection() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="enfermedades" className="relative overflow-hidden border-b border-white/5 bg-background py-16 md:py-24">
      <UrologyPatterns />
      <div className="grid-lines opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:gap-16">
          <div className="flex-[1.2] space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="sub-heading">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Padecimientos que Tratamos</span>
              </div>
              <h2 className="font-heading text-4xl font-black leading-tight tracking-tighter text-foreground md:text-6xl">
                Diagnóstico de <span className="text-accent">Alta Precisión</span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Soluciones integrales para afecciones urológicas complejas, con tecnología de diagnóstico de última generación.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {preview.map((disease, i) => (
                <motion.div
                  key={disease.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="uro-card group flex flex-col p-6 shadow-xl"
                >
                  <CardImageHeader src={disease.image} alt={disease.name} aspect="video" />
                  <h3 className="font-heading mt-5 text-lg font-black tracking-tighter text-foreground transition-colors group-hover:text-accent">
                    {disease.name}
                  </h3>
                  <Link
                    href={`/enfermedades/${disease.slug}`}
                    className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent"
                  >
                    Ver detalles
                    <div className="icon-circle h-7 w-7 bg-white/5 group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href="/enfermedades" className="inline-flex items-center gap-5 text-xs font-black uppercase tracking-[0.3em] text-accent transition-all hover:gap-7">
                Ver todas las patologías
                <div className="icon-circle h-10 w-10 bg-accent text-accent-foreground">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:max-w-xl lg:flex-1">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group relative h-full">
              <div className="absolute -inset-10 rounded-full bg-accent/5 blur-[100px] transition duration-1000 group-hover:bg-accent/10" />
              <div className="relative flex h-full flex-col justify-center space-y-10 overflow-hidden rounded-[3rem] border border-white/10 bg-surface p-10 shadow-2xl md:rounded-[5rem] md:p-16">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/10 blur-[80px] transition-colors duration-700 group-hover:bg-accent/20" />
                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-accent text-accent-foreground shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <ShieldCheck size={40} />
                </div>
                <div className="space-y-5">
                  <h3 className="font-heading text-3xl font-black uppercase leading-tight tracking-tighter text-foreground md:text-4xl">
                    ¿Buscas una <span className="text-accent">Segunda Opinión?</span>
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Un diagnóstico especializado a tiempo es la base para un tratamiento exitoso.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent"><HeartPulse size={16} /></div>
                    Urgencias
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent"><Microscope size={16} /></div>
                    Mínima Invasión
                  </div>
                </div>
                <a
                  href={whatsappLink}
                  onClick={() => trackEvent("clic_agendar_cita", { source: "diseases_cta" })}
                  className="btn-accent w-full justify-between py-6 px-8 text-[10px]"
                >
                  <span>Agendar Prioritario</span>
                  <div className="icon-circle h-10 w-10 bg-white/20">
                    <ArrowRight size={20} />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
