"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { doctor } from "@/data";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

export default function CertificationsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-background py-16 md:py-24">
      <UrologyPatterns />
      <div className="grid-lines opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="max-w-xl flex-1">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="sub-heading">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Certificaciones Médicas</span>
              </div>
              <h2 className="font-heading text-4xl font-black uppercase leading-tight tracking-tighter text-foreground md:text-6xl">
                Instituciones que <span className="text-accent">Avalan</span> nuestra Excelencia
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {doctor.title} {doctor.name} cuenta con el respaldo de las organizaciones médicas más prestigiosas, garantizando una práctica basada en la ética y la innovación tecnológica continua.
              </p>
            </motion.div>
          </div>

          <div className="w-full flex-[1.4]">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-2">
              {doctor.certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="uro-card group flex h-44 flex-col items-center justify-center p-6 text-center shadow-xl md:h-56"
                >
                  <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-xl transition-transform duration-500 group-hover:scale-105 md:h-24 md:w-24">
                    {cert.logo ? (
                      <Image src={cert.logo} alt={cert.institution} width={64} height={64} className="h-full w-full object-contain" />
                    ) : (
                      <ShieldCheck className="text-accent" size={28} />
                    )}
                  </div>
                  <p className="text-[9px] font-black uppercase leading-relaxed tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent md:text-[10px]">
                    {cert.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 overflow-hidden opacity-[0.03] md:mt-24">
        <div className="flex gap-16 whitespace-nowrap md:gap-24">
          {[1, 2].map((n) => (
            <div key={n} className="animate-marquee flex shrink-0 items-center gap-16 font-heading text-5xl font-black uppercase tracking-tighter text-foreground md:gap-24 md:text-[120px]">
              <span>CERTIFICADO</span>
              <span className="text-accent">•</span>
              <span>EXPERTO URÓLOGO</span>
              <span className="text-accent">•</span>
              <span>ÉTICA PROFESIONAL</span>
              <span className="text-accent">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
