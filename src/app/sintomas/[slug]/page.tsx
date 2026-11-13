import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { diseases, symptoms } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import DetailSidebar from "@/components/DetailSidebar";
import FaqAccordion from "@/components/FaqAccordion";
import { iconForText } from "@/lib/contentIcons";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));
  const related = relatedConditions.map((d) => ({ name: d.name, href: `/enfermedades/${d.slug}` as Route }));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Síntomas", href: "/sintomas" },
          { label: symptom.name },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 lg:grid-cols-[300px_1fr]">
        <DetailSidebar related={related} />

        <article>
          <header className="mb-8 rounded-[2.5rem] border border-border bg-surface p-7 shadow-xl md:p-9">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {(() => {
                  const Icon = iconForText(symptom.name);
                  return <Icon size={32} />;
                })()}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Orientación Médica Urológica
                </span>
                <h1 className="font-heading mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                  {symptom.name}
                </h1>
              </div>
            </div>

            {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Términos frecuentes:</span>
                {symptom.colloquialNames.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-border bg-background px-3 py-1 font-medium text-foreground/80"
                  >
                    {name}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 border-t border-border/60 pt-4">
              <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              ¿Qué significa {symptom.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-muted-foreground">{symptom.description}</p>
          </section>

          <AlarmSignsSection signs={symptom.alarmSigns} />

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">Causas Posibles</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {symptom.causes.map((c, i) => (
                <li key={i} className="rounded-xl border-l-2 border-accent/40 bg-surface py-2 pl-3">
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className="uro-card mt-10 border border-accent/30 bg-surface p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">¿Por qué consultar?</h2>
            <p className="mt-2 text-muted-foreground">{symptom.whyConsult}</p>
          </section>

          {symptom.faqs && symptom.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-foreground">Preguntas Frecuentes</h2>
              <div className="mt-4">
                <FaqAccordion faqs={symptom.faqs} />
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  );
}
