import {
  Activity,
  Droplets,
  Moon,
  ShieldAlert,
  Stethoscope,
  Zap,
  CircleAlert,
  Flame,
  Clock,
  type LucideIcon,
} from "lucide-react";

/**
 * Heurística de palabras clave → ícono contextual de lucide-react, propia de
 * este sitio (vocabulario urológico), para convertir listas con viñetas en
 * grids de tarjetas con ícono (AGENTS.md §1.2 — nunca el mismo ícono
 * repetido en toda la lista).
 */
export function iconForText(text: string): LucideIcon {
  const t = text.toLowerCase();
  if (t.includes("dolor") && t.includes("orina")) return Flame;
  if (t.includes("sangre")) return Droplets;
  if (t.includes("noct") || t.includes("noche") || t.includes("dormir")) return Moon;
  if (t.includes("urgenc") || t.includes("retención") || t.includes("retencion")) return ShieldAlert;
  if (t.includes("cólico") || t.includes("colico") || t.includes("riñón") || t.includes("rinon")) return Zap;
  if (t.includes("dificultad") || t.includes("chorro")) return Activity;
  if (t.includes("testicul")) return CircleAlert;
  if (t.includes("frecuen") || t.includes("polaquiuria")) return Clock;
  return Stethoscope;
}
