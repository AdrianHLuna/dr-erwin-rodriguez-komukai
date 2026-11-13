import { Activity, ShieldCheck, Microscope, FlaskConical, HeartPulse } from "lucide-react";

/**
 * Fondo ambiental de íconos médicos gigantes casi invisibles + ondas
 * orgánicas — rescatado literalmente del sitio de referencia (Envato),
 * reutilizado en cada sección como textura de marca (AGENTS.md §1: motivo
 * decorativo con micro-movimiento continuo, no solo animación de entrada).
 */
export function UrologyPatterns() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.06]" aria-hidden="true">
      <div className="absolute top-20 left-10 rotate-12 text-accent">
        <Activity size={120} strokeWidth={0.5} />
      </div>
      <div className="animate-slow-spin absolute top-1/4 right-[10%] text-accent/50">
        <FlaskConical size={180} strokeWidth={0.3} />
      </div>
      <div className="absolute bottom-20 left-[20%] text-accent">
        <Microscope size={150} strokeWidth={0.4} />
      </div>
      <div className="absolute top-1/2 right-[20%] -rotate-45 text-accent">
        <ShieldCheck size={200} strokeWidth={0.2} />
      </div>
      <div className="absolute top-[10%] left-[40%] text-accent/30">
        <HeartPulse size={80} strokeWidth={0.5} />
      </div>
      <svg className="absolute top-0 right-0 h-full w-full opacity-40" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-accent" />
        <path d="M0,550 C200,450 300,650 500,550 C700,450 800,650 1000,550" stroke="currentColor" fill="none" strokeWidth="0.3" className="text-accent opacity-50" />
      </svg>
    </div>
  );
}
