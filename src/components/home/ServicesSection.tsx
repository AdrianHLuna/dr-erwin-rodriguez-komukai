"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data";
import CardImageHeader from "@/components/CardImageHeader";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

const preview = services.slice(0, 3);

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden border-b border-white/5 bg-background py-16 md:py-24">
      <UrologyPatterns />
      <div className="grid-lines opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center space-y-6 text-center md:mb-20">
          <div className="sub-heading">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>Servicios de Especialidad</span>
          </div>
          <h2 className="font-heading mx-auto max-w-4xl text-3xl font-black uppercase leading-tight tracking-tighter text-foreground md:text-6xl">
            Soluciones Médicas para tu <span className="text-accent">Bienestar Real</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Años de experiencia clínica combinados con tecnología avanzada para tratamientos efectivos y mínimamente invasivos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {preview.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="uro-card group relative flex flex-col overflow-hidden p-6 shadow-2xl md:p-8"
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-accent/5 opacity-0 blur-[70px] transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <CardImageHeader src={service.image} alt={service.name} aspect="16/10" badge={i + 1} />
                <h3 className="font-heading mt-6 text-xl font-black uppercase tracking-tighter text-foreground transition-colors group-hover:text-accent">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="btn-accent mt-6 w-full justify-between py-3.5 px-6 text-[10px]"
                >
                  <span>Ver Información</span>
                  <div className="icon-circle h-7 w-7 bg-white/20">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 text-center">
          <Link href="/servicios" className="inline-flex items-center gap-5 rounded-full px-4 py-3 text-xs font-black uppercase tracking-[0.3em] text-accent transition-all hover:gap-7 hover:bg-accent/5">
            Ver catálogo completo de servicios
            <div className="icon-circle h-10 w-10 bg-accent text-accent-foreground">
              <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
