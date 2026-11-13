import Link from "next/link";
import type { Route } from "next";
import { doctor, diseases, services, symptoms } from "@/data";
import { MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import Logo from "./Logo";

const MAX_LINKS = 6;

/**
 * Footer oscuro con mapa real embebido (sin `loading="lazy"`, AGENTS.md §7)
 * en una tarjeta aparte, y redes reales con íconos correctos — rescatado del
 * footer de la referencia, con dos bugs reales de esa plantilla corregidos:
 * el mapa ahí sí llevaba `loading="lazy"` y el ícono de TikTok se sustituía
 * por un ícono de correo como placeholder (comentario literal en ese código:
 * "TikTok icon not in standard lucide? Using Mail as placeholder").
 */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  const socials = (doctor.sameAs ?? []).map((url) => {
    if (url.includes("facebook")) return { url, Icon: FaFacebook, label: "Facebook" };
    if (url.includes("instagram")) return { url, Icon: FaInstagram, label: "Instagram" };
    if (url.includes("tiktok")) return { url, Icon: FaTiktok, label: "TikTok" };
    return { url, Icon: ShieldCheck, label: "Doctoralia" };
  });

  return (
    <footer className="bg-[#1b1f2b] pb-20 pt-24 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div className="space-y-8">
            <Logo height={48} />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Innovación constante en salud urológica. Diagnósticos precisos y cirugía de mínima invasión con estándares internacionales.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ url, Icon, label }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-accent/40 hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-heading mb-6 text-2xl font-black tracking-tighter text-white">Nuestra Ubicación</h5>
            <div className="h-[300px] overflow-hidden rounded-[2rem] border border-white/10">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(doctor.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="font-heading text-2xl font-black tracking-tighter text-white">Cita Médica</h5>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">{doctor.city}, {doctor.state}</span>
              </li>
              <li className="flex gap-4">
                <Clock size={20} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-muted-foreground">{doctor.schedule}</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
              className="btn-accent w-full justify-between py-4 px-6"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Solicitar Cita</span>
              <div className="icon-circle h-8 w-8 bg-white/20">
                <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>

        <nav aria-label="Mapa del sitio" className="mt-20 grid gap-8 border-t border-white/5 pt-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="text-xs font-black uppercase tracking-[0.3em] text-accent hover:text-white">
                {col.title}
              </Link>
              <ul className="mt-4 space-y-2">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="text-sm text-muted-foreground hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="text-sm text-accent underline">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/5 pt-8 text-center md:flex-row md:justify-between md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            © 2026 {doctor.name.toUpperCase()}
          </span>
          <Link href="/aviso-de-privacidad" className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-white">
            Aviso de Privacidad
          </Link>
        </div>

        <p className="mt-8 max-w-2xl text-xs text-muted-foreground/70">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica profesional.
        </p>
      </div>
    </footer>
  );
}
