"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Logo from "./Logo";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header claro flotando sobre un sitio de fondo oscuro — contraste deliberado
 * rescatado del sitio de referencia (Envato/Vercel): franja de credenciales
 * siempre visible arriba, header principal claro, y un menú móvil que se
 * convierte en panel OSCURO de pantalla completa con links numerados
 * "0X / SECCIÓN" y entrada escalonada con física de resorte — el único sitio
 * del registro cuyo header cambia de tema claro↔oscuro según el estado del
 * menú, en vez de mantenerse en un solo tema todo el tiempo.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <header className={`sticky top-0 z-[60] w-full transition-colors duration-300 ${isOpen ? "bg-[#1b1f2b]" : "bg-white"}`}>
      <div className={`hidden border-b md:block ${isOpen ? "border-white/5" : "border-slate-100"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
          <span>{formatCredentials(doctor)}</span>
          <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-accent">
            <Phone size={11} aria-hidden="true" />
            {doctor.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link href="/" aria-label={`${doctor.title} ${doctor.name}`} className="flex items-center md:hidden">
          <Logo height={34} />
        </Link>
        <div className="hidden text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 min-[420px]:block md:hidden">
          {formatCredentials(doctor)}
        </div>
        <Link href="/" aria-label={`${doctor.title} ${doctor.name}`} className="hidden items-center md:flex">
          <Logo height={44} withName nameClassName="text-sm text-slate-900" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn-accent hidden py-3 px-6 text-[10px] md:inline-flex"
        >
          <span>Agenda tu Cita</span>
          <div className="icon-circle h-7 w-7 bg-white/20">
            <ArrowRight size={14} />
          </div>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-colors md:hidden ${
            isOpen ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-900"
          }`}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[64px] z-[55] bg-black/50 md:hidden"
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-x-0 top-[64px] z-[56] flex max-h-[calc(100vh-64px)] flex-col overflow-y-auto bg-[#1b1f2b] p-8 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-end justify-between font-heading text-3xl font-black tracking-tighter text-white"
                    >
                      <span className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/80">
                          0{i + 1} / Sección
                        </span>
                        {item.label}
                      </span>
                      <ArrowRight size={28} className="text-white/20 transition-transform group-hover:translate-x-2 group-hover:text-accent" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-accent mt-10 justify-between py-5 px-8"
              >
                <span>Agendar Consulta</span>
                <div className="icon-circle h-8 w-8 bg-white/20">
                  <ArrowRight size={16} />
                </div>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
