# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Erwin Rodríguez Komukai — Urología (Cirugía Laparoscópica y Endourología)
**Ciudad:** Tuxtla Gutiérrez, Chiapas

**Nota de discreción clínica:** el catálogo incluye órganos genitales y padecimientos de alta sensibilidad (próstata, testículo, pene, ITS). Todos los prompts están redactados para verse **clínicos y editoriales, nunca gráficos ni explícitos**: diagramas anatómicos esquemáticos de corte/sección (nunca genitales expuestos de forma realista/fotográfica), instrumental quirúrgico/endoscópico ordenado para procedimientos, y fotografía discreta de consulta/paciente (siempre vestido, nunca desnudo) para síntomas. Cero desnudez, cero primer plano genital realista — usar siempre representación esquemática/educativa tipo libro de texto.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud urológica y sitios web de cirugía laparoscópica/endourología de alta gama.
Tono: Preciso, técnico y de autoridad clínica — editorial y confiable, nunca gráfico ni incómodo.
Estilo: Renders 3D anatómicos esquemáticos (riñón, próstata, vejiga, testículo representados de forma educativa/no explícita, nunca genitales reales expuestos) para enfermedades; fotografía clínica de instrumental endoscópico/quirúrgico ordenado para procedimientos; fotografía discreta de consulta o vida cotidiana (paciente siempre vestido) para síntomas.
Identidad visual OBLIGATORIA (paleta real de marca del doctor): azul-pizarra oscuro (#3F465E) como fondo/tono dominante, teal médico (#70B1B5) como único acento vivo — nunca mezclar con otros acentos saturados.
Restricciones: Cero desnudez o genitales expuestos de forma realista/fotográfica — usar siempre diagramas esquemáticos o encuadres discretos. Cero nombres de medicamentos. Cero logotipos de marcas comerciales. Cero rostros de pacientes reales o reconocibles. Cero texto superpuesto en la imagen. Prohibidos hologramas, neones, HUDs futuristas.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Iluminación de estudio clínica, limpia y fría-cálida balanceada — nunca oscura ni dramática.
- Color Palette: Azul-pizarra (#3F465E), teal médico (#70B1B5), blanco cálido neutro de fondo.
- Composition: Centrada, calmada, encuadre editorial con espacio negativo generoso — nunca gráfica ni invasiva.
- Suffixes: realistic medical CGI or high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
- Negative Prompt: hologram, neon, sci-fi, text, watermark, signature, nudity, exposed genitals, graphic detail, blood, gore, real identifiable patient.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Cáncer de Próstata (`public/images/diseases/cancer-de-prostata.jpg`)
```text
Render 3D anatómico esquemático de un corte transversal de la próstata y vejiga mostrando una zona de densidad irregular, estilo educativo de libro de texto, no explícito.
Lighting: Iluminación de estudio suave y cálida.
Color Palette: Azul-pizarra (#3F465E) contorno, teal (#70B1B5) acento, blanco cálido de fondo.
Composition: Corte pélvico centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, nudity, graphic detail, blood.
```

### 2. Hiperplasia Prostática Benigna (`public/images/diseases/hiperplasia-prostatica-benigna.jpg`)
```text
Render 3D anatómico esquemático de la próstata crecida comprimiendo la uretra, corte sagital educativo, no explícito.
Lighting: Iluminación de estudio limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco cálido de fondo.
Composition: Corte centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, nudity, graphic detail.
```

### 3. Litiasis Renal (`public/images/diseases/litiasis-renal.jpg`)
```text
Render 3D anatómico esquemático del sistema renal (riñón, uréter, vejiga) mostrando un cálculo en el trayecto ureteral, estilo educativo limpio.
Lighting: Iluminación de estudio fría-cálida balanceada.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) resaltando el cálculo, blanco de fondo.
Composition: Diagrama centrado de riñón a vejiga, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, gore.
```

### 4. Infección de Vías Urinarias (`public/images/diseases/infeccion-de-vias-urinarias.jpg`)
```text
Render 3D anatómico esquemático del tracto urinario inferior mostrando inflamación/infección en la vejiga, estilo educativo discreto.
Lighting: Iluminación de estudio limpia.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) tono de alerta suave, blanco de fondo.
Composition: Diagrama centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, graphic detail.
```

### 5. Disfunción Eréctil (`public/images/diseases/disfuncion-erectil.jpg`)
```text
Fotografía editorial discreta de un hombre adulto sentado en consulta médica, expresión pensativa pero tranquila, totalmente vestido, sin ningún elemento gráfico o incómodo.
Lighting: Luz natural suave de consultorio.
Color Palette: Azul-pizarra (#3F465E) en vestuario/ambiente, teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso, composición calmada.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, explicit content, hologram, neon, text, watermark.
```

### 6. Varicocele (`public/images/diseases/varicocele.jpg`)
```text
Render 3D anatómico esquemático del cordón espermático mostrando venas dilatadas, diagrama educativo de corte, no explícito ni fotográfico.
Lighting: Iluminación de estudio limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco de fondo.
Composition: Diagrama centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, nudity, graphic detail.
```

### 7. Prostatitis (`public/images/diseases/prostatitis.jpg`)
```text
Render 3D anatómico esquemático de la próstata inflamada, corte educativo discreto, no explícito.
Lighting: Iluminación de estudio suave.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, blanco de fondo.
Composition: Diagrama centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, nudity, graphic detail.
```

### 8. Fimosis y Parafimosis (`public/images/diseases/fimosis-y-parafimosis.jpg`)
```text
Diagrama médico esquemático educativo tipo libro de texto ilustrando la anatomía del prepucio de forma abstracta/vectorial, nunca fotográfico ni realista, sin ninguna representación explícita.
Lighting: Iluminación de estudio plana, estilo ilustración médica.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5), blanco de fondo.
Composition: Diagrama vectorial centrado, espacio negativo generoso.
Suffixes: clean vector medical illustration, flat editorial style --ar 16:10 --v 6.0
Negative Prompt: nudity, explicit content, photorealistic genitals, hologram, text, watermark.
```

### 9. Cáncer de Vejiga (`public/images/diseases/cancer-de-vejiga.jpg`)
```text
Render 3D anatómico esquemático de la vejiga mostrando una lesión en la pared interna, corte educativo discreto.
Lighting: Iluminación de estudio limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco de fondo.
Composition: Corte centrado de vejiga, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, gore.
```

### 10. Infecciones de Transmisión Sexual (ITS) (`public/images/diseases/infecciones-de-transmision-sexual.jpg`)
```text
Fotografía editorial discreta de una pareja joven conversando con un médico en consultorio, ambiente de confianza y privacidad, totalmente vestidos, sin ningún elemento gráfico.
Lighting: Luz natural suave de consultorio.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros cálidos.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, explicit content, hologram, text, watermark.
```

### 11. Vejiga Hiperactiva (`public/images/diseases/vejiga-hiperactiva.jpg`)
```text
Render 3D anatómico esquemático de la vejiga con contracciones musculares resaltadas, diagrama educativo, no explícito.
Lighting: Iluminación de estudio limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco de fondo.
Composition: Diagrama centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, graphic detail.
```

### 12. Cáncer de Riñón (`public/images/diseases/cancer-de-rinon.jpg`)
```text
Render 3D anatómico esquemático del riñón mostrando una masa localizada, corte educativo discreto.
Lighting: Iluminación de estudio suave y cálida.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco de fondo.
Composition: Corte renal centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, gore.
```

### 13. Estenosis Uretral (`public/images/diseases/estenosis-uretral.jpg`)
```text
Render 3D anatómico esquemático de la uretra mostrando un segmento estrechado por tejido cicatricial, diagrama educativo de corte, no explícito.
Lighting: Iluminación de estudio limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco de fondo.
Composition: Diagrama centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, nudity, graphic detail.
```

### 14. Cáncer de Testículo (`public/images/diseases/cancer-de-testiculo.jpg`)
```text
Diagrama médico esquemático educativo tipo libro de texto del testículo mostrando una masa localizada, estilo vectorial/ilustrado, nunca fotográfico ni explícito.
Lighting: Iluminación de estudio plana, estilo ilustración médica.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco de fondo.
Composition: Diagrama vectorial centrado, espacio negativo generoso.
Suffixes: clean vector medical illustration, flat editorial style --ar 16:10 --v 6.0
Negative Prompt: nudity, explicit content, photorealistic genitals, hologram, text, watermark.
```

### 15. Enfermedad de Peyronie (`public/images/diseases/enfermedad-de-peyronie.jpg`)
```text
Diagrama médico esquemático educativo tipo libro de texto ilustrando tejido fibroso/placa de forma abstracta y vectorial, nunca fotográfico, sin representación explícita de genitales.
Lighting: Iluminación de estudio plana, estilo ilustración médica.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blanco de fondo.
Composition: Diagrama vectorial centrado, espacio negativo generoso.
Suffixes: clean vector medical illustration, flat editorial style --ar 16:10 --v 6.0
Negative Prompt: nudity, explicit content, photorealistic genitals, hologram, text, watermark.
```

---

## ⚕️ SECCIÓN 2: PROMPTS PARA SERVICIOS

### 1. Prostatectomía Radical (`public/images/services/prostatectomia-radical.jpg`)
```text
Fotografía clínica editorial de instrumental de cirugía laparoscópica ordenado sobre charola quirúrgica estéril, ambiente de quirófano limpio y moderno.
Lighting: Luz de quirófano fría-limpia, bien iluminada.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento en detalles de equipo, acero quirúrgico neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, exposed patient, hologram, text, watermark.
```

### 2. Resección Transuretral de Próstata (`public/images/services/reseccion-transuretral-de-prostata.jpg`)
```text
Fotografía clínica editorial de equipo endoscópico urológico (resectoscopio) ordenado en mesa quirúrgica, ambiente clínico limpio.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Equipo centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, hologram, text, watermark.
```

### 3. Litotripsia Extracorpórea (`public/images/services/litotripsia-extracorporea.jpg`)
```text
Fotografía clínica editorial de un equipo moderno de litotripsia por ondas de choque en sala de procedimientos, limpio y tecnológico.
Lighting: Luz clínica fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blancos neutros.
Composition: Equipo centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: exposed patient, hologram, text, watermark.
```

### 4. Ureteroscopia con Láser (`public/images/services/ureteroscopia-con-laser.jpg`)
```text
Fotografía clínica editorial de un ureteroscopio flexible y equipo láser ordenado en charola quirúrgica estéril.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, hologram, text, watermark.
```

### 5. Circuncisión (`public/images/services/circuncision.jpg`)
```text
Fotografía clínica editorial de instrumental quirúrgico menor ordenado sobre charola estéril, ambiente clínico discreto, sin ningún paciente visible.
Lighting: Luz clínica limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed patient, blood, hologram, text, watermark.
```

### 6. Varicocelectomía (`public/images/services/varicocelectomia.jpg`)
```text
Fotografía clínica editorial de instrumental microquirúrgico ordenado sobre charola estéril, ambiente de quirófano limpio.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, nudity, hologram, text, watermark.
```

### 7. Biopsia de Próstata (`public/images/services/biopsia-de-prostata.jpg`)
```text
Fotografía clínica editorial de equipo de ultrasonido y aguja de biopsia ordenados en mesa de procedimientos, ambiente clínico limpio.
Lighting: Luz clínica fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blancos neutros.
Composition: Equipo centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, exposed patient, hologram, text, watermark.
```

### 8. Vasectomía (`public/images/services/vasectomia.jpg`)
```text
Fotografía clínica editorial de instrumental quirúrgico menor ordenado sobre charola estéril en consultorio limpio y moderno.
Lighting: Luz clínica limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed patient, blood, hologram, text, watermark.
```

### 9. Cistoscopia (`public/images/services/cistoscopia.jpg`)
```text
Fotografía clínica editorial de un cistoscopio y monitor de video endoscópico ordenados en sala de procedimientos.
Lighting: Luz clínica fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blancos neutros.
Composition: Equipo centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: exposed patient, hologram, text, watermark.
```

### 10. RTU de Tumor Vesical (`public/images/services/reseccion-transuretral-de-tumor-vesical.jpg`)
```text
Fotografía clínica editorial de equipo endoscópico de resección vesical ordenado en quirófano limpio y moderno.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Equipo centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, hologram, text, watermark.
```

### 11. Nefrectomía (`public/images/services/nefrectomia.jpg`)
```text
Fotografía clínica editorial de instrumental de cirugía laparoscópica renal ordenado sobre charola estéril en quirófano.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, exposed patient, hologram, text, watermark.
```

### 12. Hidrocelectomía (`public/images/services/hidrocelectomia.jpg`)
```text
Fotografía clínica editorial de instrumental quirúrgico ambulatorio ordenado sobre charola estéril, ambiente clínico discreto.
Lighting: Luz clínica limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed patient, blood, hologram, text, watermark.
```

### 13. Orquidopexia (`public/images/services/orquidopexia.jpg`)
```text
Fotografía clínica editorial de instrumental quirúrgico pediátrico/adulto ordenado sobre charola estéril en quirófano limpio.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed patient, blood, hologram, text, watermark.
```

### 14. Colocación de Catéter Doble J (`public/images/services/colocacion-de-cateter-doble-j.jpg`)
```text
Fotografía clínica editorial de un catéter ureteral doble J real junto a instrumental endoscópico sobre charola estéril, enfoque macro técnico.
Lighting: Luz clínica limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Catéter e instrumental centrados, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, macro detail, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, exposed patient, hologram, text, watermark.
```

### 15. Cirugía de Incontinencia (`public/images/services/cirugia-de-incontinencia.jpg`)
```text
Fotografía clínica editorial de instrumental quirúrgico de soporte uretral ordenado sobre charola estéril en quirófano limpio.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, exposed patient, hologram, text, watermark.
```

### 16. Nefrolitotomía Percutánea (`public/images/services/nefrolitotomia-percutanea.jpg`)
```text
Fotografía clínica editorial de equipo de nefroscopia percutánea ordenado en quirófano moderno, ambiente técnico y limpio.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Equipo centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: blood, surgery in progress, exposed patient, hologram, text, watermark.
```

### 17. Implante de Prótesis de Pene (`public/images/services/implante-de-protesis-de-pene.jpg`)
```text
Fotografía clínica editorial discreta de instrumental quirúrgico especializado ordenado sobre charola estéril, enfoque técnico en el equipo, nunca en el paciente ni en anatomía explícita.
Lighting: Luz de quirófano fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), acero neutro.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed patient, graphic detail, hologram, text, watermark.
```

### 18. Ultrasonido de Rastreo (`public/images/services/ultrasonido-de-rastreo.jpg`)
```text
Fotografía clínica editorial de un equipo de ultrasonido moderno en sala de diagnóstico limpia, pantalla mostrando una imagen ecográfica abstracta no identificable.
Lighting: Luz clínica fría-limpia.
Color Palette: Azul-pizarra (#3F465E) y teal (#70B1B5), blancos neutros.
Composition: Equipo centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: exposed patient, identifiable patient data, hologram, text, watermark.
```

---

## 🩹 SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Dolor al Orinar (`public/images/symptoms/dolor-al-orinar.jpg`)
```text
Fotografía editorial discreta de un hombre adulto sosteniendo levemente la zona abdominal baja con gesto de incomodidad, completamente vestido, en ambiente doméstico cálido.
Lighting: Luz natural suave.
Color Palette: Azul-pizarra (#3F465E) en vestuario, teal (#70B1B5) de acento, tonos neutros cálidos.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, graphic detail, hologram, text, watermark.
```

### 2. Sangre en la Orina (`public/images/symptoms/sangre-en-la-orina.jpg`)
```text
Fotografía editorial discreta de un hombre adulto con expresión de preocupación leve conversando con su médico en consultorio, totalmente vestido.
Lighting: Luz natural suave de consultorio.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: blood visible, graphic detail, hologram, text, watermark.
```

### 3. Dificultad para Orinar (`public/images/symptoms/dificultad-para-orinar.jpg`)
```text
Fotografía editorial discreta de un hombre adulto mayor sentado con gesto reflexivo en sala de espera médica, completamente vestido.
Lighting: Luz natural suave.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros cálidos.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, graphic detail, hologram, text, watermark.
```

### 4. Dolor Testicular (`public/images/symptoms/dolor-testicular.jpg`)
```text
Fotografía editorial discreta de un hombre joven adulto con gesto de malestar leve en la zona abdominal baja, completamente vestido, sin ninguna referencia anatómica explícita.
Lighting: Luz natural suave.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, graphic detail, hologram, text, watermark.
```

### 5. Incontinencia Urinaria (`public/images/symptoms/incontinencia-urinaria.jpg`)
```text
Fotografía editorial discreta y digna de un hombre adulto mayor en una caminata al aire libre, activo y tranquilo, sin ningún elemento estigmatizante.
Lighting: Luz natural de día, cálida.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros naturales.
Composition: Plano medio en exteriores, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: stigmatizing imagery, hologram, text, watermark.
```

### 6. Problemas de Erección (`public/images/symptoms/problemas-de-ereccion.jpg`)
```text
Fotografía editorial discreta de un hombre adulto pensativo mirando por una ventana, ambiente doméstico tranquilo, totalmente vestido.
Lighting: Luz natural suave.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros cálidos.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, explicit content, hologram, text, watermark.
```

### 7. Polaquiuria (`public/images/symptoms/polaquiuria.jpg`)
```text
Fotografía editorial discreta de un hombre adulto revisando su reloj con gesto de ligera impaciencia en un entorno de oficina, completamente vestido.
Lighting: Luz natural de oficina.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: hologram, text, watermark, graphic detail.
```

### 8. Nocturia (`public/images/symptoms/nocturia.jpg`)
```text
Fotografía editorial discreta de un hombre adulto mayor despierto sentado al borde de la cama por la noche, ambiente doméstico cálido y tenue.
Lighting: Luz cálida tenue nocturna, suave.
Color Palette: Azul-pizarra (#3F465E) dominante, teal (#70B1B5) de acento sutil.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: hologram, text, watermark, dark/moody horror tone.
```

### 9. Urgencia Urinaria (`public/images/symptoms/urgencia-urinaria.jpg`)
```text
Fotografía editorial discreta de un hombre adulto caminando con paso apresurado pero digno en un espacio público, totalmente vestido.
Lighting: Luz natural de día.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: hologram, text, watermark, stigmatizing imagery.
```

### 10. Cólico Nefrítico (`public/images/symptoms/colico-nefritico.jpg`)
```text
Fotografía editorial discreta de un hombre adulto sosteniendo su costado/espalda baja con gesto de dolor agudo, completamente vestido, en ambiente clínico de urgencias.
Lighting: Luz clínica suave.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: graphic distress, hologram, text, watermark.
```

### 11. Eyaculación Precoz o Dolorosa (`public/images/symptoms/eyaculacion-precoz-o-dolorosa.jpg`)
```text
Fotografía editorial discreta de una pareja adulta conversando con calidez en ambiente doméstico íntimo pero no explícito, totalmente vestidos.
Lighting: Luz natural cálida.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros cálidos.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, explicit content, hologram, text, watermark.
```

### 12. Retención Urinaria Aguda (`public/images/symptoms/retencion-urinaria-aguda.jpg`)
```text
Fotografía editorial discreta de un hombre adulto con gesto de malestar notorio sentado en sala de urgencias, completamente vestido, ambiente clínico limpio.
Lighting: Luz clínica suave.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: graphic distress, hologram, text, watermark.
```

### 13. Secreción Uretral (`public/images/symptoms/secrecion-uretral.jpg`)
```text
Fotografía editorial discreta de un hombre adulto conversando en privado y con confianza con su médico en consultorio, totalmente vestido.
Lighting: Luz natural suave de consultorio.
Color Palette: Azul-pizarra (#3F465E), teal (#70B1B5) de acento, tonos neutros.
Composition: Plano medio, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, gentle tones --ar 16:10 --v 6.0
Negative Prompt: nudity, graphic detail, hologram, text, watermark.
```
