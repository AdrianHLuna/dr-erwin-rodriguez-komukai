import Image from "next/image";
import { doctor } from "@/data";

interface LogoProps {
  /** Alto del isotipo en px. El ancho se ajusta solo (proporción real 1100×900). */
  height?: number;
  className?: string;
  /** Muestra el nombre del doctor como texto HTML real junto al isotipo. */
  withName?: boolean;
  nameClassName?: string;
}

/**
 * Logo real de marca: el archivo entregado (`logo-full.png`) es una
 * composición horizontal de 4 niveles (isotipo de riñón + nombre + "Urólogo/
 * Urología Laparoscópica" + línea de credencial UNAM/La Raza), ilegible en
 * su totalidad a la altura de un header (AGENTS.md §6 — mismo problema que
 * el logo apilado de Martha, aquí en horizontal en vez de vertical).
 * Solución aplicada: se recortó SOLO el isotipo (riñón/nefrona) a
 * `public/brand/isotype-kidney.png` y el nombre se muestra como texto HTML
 * real en `.font-heading` (Outfit) junto al ícono, siempre legible sin
 * depender del tamaño de render del logo completo.
 */
export default function Logo({ height = 40, className = "", withName = false, nameClassName = "" }: LogoProps) {
  const width = Math.round((height * 1100) / 900);
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/isotype-kidney.png"
        alt={`${doctor.title} ${doctor.name}`}
        width={width}
        height={height}
        style={{ height, width: "auto" }}
        priority
      />
      {withName && (
        <span className={`font-heading leading-tight text-foreground ${nameClassName}`}>
          <span className="block font-black tracking-tight">
            {doctor.title} {doctor.name}
          </span>
        </span>
      )}
    </span>
  );
}
