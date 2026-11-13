"use client";

import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1): barra inset casi
 * a ras del borde (`inset-1.5`, no centrada con margen amplio como otros
 * sitios del registro), vidrio esmerilado sobre fondo oscuro, CTA dominante
 * 7/9 del ancho + ícono de WhatsApp 2/9 — proporción asimétrica distinta de
 * la barra 50/50 o del dock centrado de 3 botones usados en sitios previos.
 */
export default function StickyBottomNav() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div
      className="fixed inset-x-1.5 bottom-1.5 z-50 flex gap-1.5 overflow-hidden rounded-2xl border border-white/10 bg-surface/90 p-1.5 shadow-2xl backdrop-blur-2xl md:hidden"
      style={{ paddingBottom: "calc(0.375rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={whatsappLink}
        className="btn-accent flex-[7] justify-center rounded-xl py-3 text-sm"
        onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_bottom" })}
      >
        Agendar Cita
        <ArrowRight size={14} />
      </a>
      <a
        href={`tel:${doctor.phone}`}
        aria-label="Llamar al consultorio"
        className="flex flex-1 items-center justify-center rounded-xl bg-white/5 text-white"
        onClick={() => trackEvent("clic_llamar", { source: "sticky_bottom" })}
      >
        <Phone size={18} />
      </a>
      <a
        target="_blank"
        href={whatsappLink}
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex flex-1 items-center justify-center rounded-xl bg-[#25D366] text-white"
        onClick={() => trackEvent("clic_whatsapp", { source: "sticky_bottom" })}
      >
        <MessageCircle size={18} />
      </a>
    </div>
  );
}
