"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1, hallazgo
 * 2026-11-07): botones cuadrados redondeados (no círculos) con anillo de
 * "ping" pulsante en el de WhatsApp, anclados abajo-DERECHA — rescatado del
 * diseño original de la referencia Envato, distinto del resto del registro
 * (ninguna otra posición/forma usa el pulso tipo radar ni la forma cuadrada).
 */
export default function FloatingButtons() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 md:bottom-10 md:right-8">
      <a
        href={whatsappLink}
        className="flex items-center gap-2 rounded-2xl bg-accent px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-accent-foreground shadow-2xl md:hidden"
        onClick={() => trackEvent("clic_agendar_cita", { source: "floating_mobile" })}
      >
        Agendar Cita
      </a>

      <a
        target="_blank"
        href={whatsappLink}
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={() => trackEvent("clic_whatsapp", { source: "floating" })}
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 md:h-[55px] md:w-[55px]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-[#25D366] opacity-60" />
        <MessageCircle size={26} className="transition-transform group-hover:rotate-12" />
      </a>

      <a
        href={`tel:${doctor.phone}`}
        aria-label="Llamar al consultorio"
        onClick={() => trackEvent("clic_llamar", { source: "floating" })}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-surface text-white shadow-xl transition-transform hover:scale-110 md:h-[55px] md:w-[55px]"
      >
        <Phone size={20} className="transition-transform group-hover:-rotate-12" />
      </a>
    </div>
  );
}
