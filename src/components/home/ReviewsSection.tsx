"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { doctor } from "@/data";
import DoctoraliaWidget from "./DoctoraliaWidget";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

/**
 * Reemplaza el "ReviewsSection" de la referencia, que mostraba un carrusel
 * infinito de 30 capturas de pantalla falsas (`/reviews/k-1.png`…`k-30.png`,
 * archivos que nunca existieron) junto a cifras inventadas ("+10,000
 * pacientes", "4.9★", "2k+ reseñas", "99% satisfacción" — ninguna coincide
 * entre sí ni con el resto del sitio original). Aquí solo hay 2 cosas
 * reales: los 5 testimonios verbatim extraídos de su perfil verificado de
 * Doctoralia (con `sourceUrl`, AGENTS.md §9) y el widget oficial embebido
 * con sus reseñas reales en vivo.
 */
export default function ReviewsSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#1b1f2b] py-16 md:py-24">
      <UrologyPatterns />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-center space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
          </div>
          <h2 className="title-heading m-0">
            Lo que dicen nuestros <span className="text-accent">pacientes reales</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            {doctor.stats?.[0]?.value} {doctor.stats?.[0]?.label?.toLowerCase()} — verificadas públicamente en su perfil de Doctoralia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {(doctor.testimonials ?? []).slice(0, 3).map((t, i) => (
            <motion.a
              key={t.id}
              href={t.sourceUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="uro-card flex flex-col p-8 shadow-xl transition-colors hover:border-accent/30"
            >
              <Quote className="text-accent/30" size={28} />
              <p className="mt-4 flex-grow text-sm italic leading-relaxed text-foreground/90">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t.patientName}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Doctoralia</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14">
          <div className="uro-card mx-auto flex max-w-2xl flex-col items-center p-8 shadow-xl md:p-12">
            <DoctoraliaWidget />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
