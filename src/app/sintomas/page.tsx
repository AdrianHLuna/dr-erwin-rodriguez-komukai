import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, AlertCircle } from "lucide-react";
import { symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import { iconForText } from "@/lib/contentIcons";

export const metadata: Metadata = {
  title: "Síntomas Urológicos Frecuentes",
  description: "Guía médica de síntomas urológicos frecuentes y cuándo acudir a consulta con el urólogo en Tuxtla Gutiérrez, Chiapas.",
  alternates: { canonical: "/sintomas" },
};

export default function SintomasPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
      <header className="mb-10 pt-4">
        <div className="sub-heading mb-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Orientación Médica al Paciente</span>
        </div>
        <h1 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-5xl">
          Síntomas Urológicos que Atendemos
        </h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground md:text-lg">
          Conoce las señales de alerta más comunes del tracto urinario y reproductor masculino, qué pueden significar y en qué momento es importante recibir atención urológica especializada.
        </p>
      </header>
      <div className="grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {symptoms.map((symptom, i) => {
          const Icon = iconForText(symptom.name);
          return (
            <article
              key={symptom.id}
              className="uro-card group flex flex-col justify-between overflow-hidden p-6 shadow-xl transition-all hover:border-accent/40"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon size={26} />
                  </div>
                  <span
                    className="font-heading text-3xl font-black text-foreground/10 select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="font-heading mt-5 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {symptom.name}
                </h2>

                {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {symptom.colloquialNames.map((name) => (
                      <span
                        key={name}
                        className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {symptom.description.slice(0, 140)}...
                </p>

                {symptom.alarmSigns && symptom.alarmSigns.length > 0 && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent/5 px-3 py-2 text-xs text-accent">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span className="font-medium truncate">{symptom.alarmSigns[0]}</span>
                  </div>
                )}
              </div>

              <Link
                href={`/sintomas/${symptom.slug}`}
                className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-xs font-semibold text-foreground transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
              >
                <span>Ver Orientación Médica</span>
                <div className="icon-circle h-7 w-7 bg-white/10">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
