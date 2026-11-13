"use client";

import { useEffect } from "react";

/**
 * Widget REAL y oficial de Doctoralia/Docplanner embebido — excepción
 * explícita a la regla "nunca formularios/widgets" de AGENTS.md §7, aprobada
 * caso por caso por el usuario para este sitio (segunda excepción del
 * proyecto después de `dra-martha-llamas`). Script oficial de Docplanner,
 * no un formulario propio que capture datos del visitante.
 */
export default function DoctoraliaWidget() {
  useEffect(() => {
    if (!document.getElementById("zl-widget-s")) {
      const script = document.createElement("script");
      script.id = "zl-widget-s";
      script.src = "https://platform.docplanner.com/js/widget.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex w-full justify-center">
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.com.mx/erwin-rodriguez-komukai/urologo/tuxtla-gutierrez"
        rel="nofollow"
        data-zlw-doctor="erwin-rodriguez-komukai"
        data-zlw-type="big"
        data-zlw-opinion="true"
        data-zlw-hide-branding="true"
      >
        Erwin Rodríguez Komukai - Doctoralia.com.mx
      </a>
    </div>
  );
}
