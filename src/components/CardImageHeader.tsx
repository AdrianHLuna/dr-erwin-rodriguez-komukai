"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  aspect?: "video" | "16/10" | "4/3";
  /** Número de folio mostrado como tipografía gigante casi invisible en la esquina. */
  badge?: number;
}

const aspectClass: Record<NonNullable<CardImageHeaderProps["aspect"]>, string> = {
  video: "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
};

/**
 * Espacio de imagen con folio numerado como tipografía gigante y casi
 * invisible en la esquina (`0{badge}`, rescatado de ServicesSection de la
 * referencia) en vez de un sello circular — identidad de tarjeta propia de
 * este sitio (`.uro-card`, esquinas de 2.5rem+, borde que se enciende en
 * hover), distinta del resto del registro.
 */
export default function CardImageHeader({ src, alt, aspect = "16/10", badge }: CardImageHeaderProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative">
      {typeof badge === "number" && (
        <span
          className="font-heading pointer-events-none absolute -top-2 right-0 z-10 select-none text-5xl font-black text-foreground/5"
          aria-hidden="true"
        >
          0{badge}
        </span>
      )}
      {failed ? (
        <div
          className={`${aspectClass[aspect]} rounded-[1.75rem] flex items-center justify-center bg-gradient-to-br from-accent/10 to-primary/20`}
          role="img"
          aria-label={alt}
        >
          <Stethoscope className="h-10 w-10 text-accent/50" aria-hidden="true" />
        </div>
      ) : (
        <div className={`${aspectClass[aspect]} relative overflow-hidden rounded-[1.75rem] bg-muted`}>
          <Image
            src={src as string}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </div>
  );
}
