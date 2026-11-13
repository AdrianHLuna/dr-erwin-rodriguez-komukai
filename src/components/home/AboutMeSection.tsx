"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Microscope, HeartPulse, ArrowUpRight } from "lucide-react";
import { doctor } from "@/data";
import { UrologyPatterns } from "@/components/ui/UrologyPatterns";

const highlights = [
  { icon: GraduationCap, title: "Alta Formación", desc: "UNACH y UNAM · Centro Médico Nacional La Raza." },
  { icon: ShieldCheck, title: "Certificación", desc: "Avalado por el Consejo Mexicano de Urología." },
  { icon: Microscope, title: "Experiencia", desc: "Cirugía laparoscópica y endourología." },
];

export default function AboutMeSection() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden border-b border-white/5 bg-background py-16 md:py-24">
      <UrologyPatterns />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          <div className="relative w-full lg:flex-[1.3] lg:pt-16">
            <div className="absolute -top-20 left-0 h-64 w-64 animate-pulse rounded-full bg-accent/5 blur-[100px]" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-surface shadow-2xl md:aspect-[4/6] md:rounded-[4rem]"
              >
                <Image src="/img-doctor/aboutme.jpg" alt={`${doctor.title} ${doctor.name}`} fill sizes="40vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex flex-col items-center text-center md:bottom-10">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent backdrop-blur-md md:h-12 md:w-12 md:rounded-2xl">
                    <HeartPulse size={22} />
                  </div>
                  <span className="font-heading text-lg font-black text-foreground md:text-xl">Precisión</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="group relative hidden aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-muted shadow-2xl md:mt-32 md:block md:rounded-[4rem]"
              >
                <Image src="/img-doctor/clinic-exterior.jpg" alt="Clínica" fill sizes="30vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/20 text-accent backdrop-blur-md">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="font-heading text-sm font-black text-foreground">Confianza</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="uro-card flex flex-col items-center justify-center space-y-5 p-8 text-center shadow-2xl md:col-span-2 md:mt-10 md:p-12"
              >
                <h4 className="font-heading text-2xl font-black uppercase tracking-tighter text-foreground md:text-4xl">Cirugía Laparoscópica</h4>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                  Referente en cirugía de mínima invasión y endourología en Tuxtla Gutiérrez.
                </p>
                <a
                  href={doctor.sameAs?.[0] ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-accent"
                >
                  Ver reseñas reales <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="sub-heading">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Sobre el {doctor.title} {doctor.name.split(" ")[0]}</span>
              </div>
              <h2 className="font-heading text-4xl font-black leading-tight tracking-tighter text-foreground md:text-6xl">
                Tu Salud en Manos de un <span className="text-accent">Especialista</span>
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{doctor.bio}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="uro-card flex flex-col gap-4 p-6 shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-black tracking-tighter text-foreground">{item.title}</h3>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-accent/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2.5rem] bg-surface p-8 shadow-xl md:rounded-[3rem] md:p-12">
              <p className="border-l-4 border-accent py-1 pl-6 text-lg italic leading-relaxed text-foreground md:text-xl">
                &ldquo;{doctor.philosophy}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
