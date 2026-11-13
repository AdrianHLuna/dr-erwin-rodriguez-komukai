import type { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "d-cancer-de-prostata",
    slug: "cancer-de-prostata",
    name: "Cáncer de Próstata",
    technicalName: "Adenocarcinoma de Próstata",
    colloquialNames: ["cáncer prostático"],
    description:
      "El cáncer de próstata es el crecimiento anormal y descontrolado de células en la glándula prostática, el órgano masculino responsable de producir parte del líquido seminal. Es uno de los cánceres más frecuentes en hombres mayores de 50 años y, detectado a tiempo mediante antígeno prostático y tacto rectal, tiene tasas de curación muy altas. En etapas iniciales suele no dar síntomas, por lo que la detección oportuna depende de la revisión periódica con el urólogo, no de esperar señales de alarma.",
    symptoms: [
      "En etapas tempranas, generalmente ningún síntoma",
      "Dificultad para orinar o chorro urinario débil",
      "Necesidad de orinar con frecuencia, sobre todo de noche",
      "Sangre en la orina o en el semen en etapas avanzadas",
      "Dolor óseo en etapas metastásicas",
    ],
    causes: [
      "Mutaciones genéticas acumuladas en las células prostáticas con la edad",
      "Antecedentes familiares de cáncer de próstata",
      "Factores hormonales relacionados con la testosterona",
    ],
    riskFactors: [
      "Edad mayor de 50 años",
      "Antecedente familiar de primer grado con cáncer de próstata",
      "Ascendencia afrodescendiente",
      "Dieta alta en grasas de origen animal",
    ],
    mexicoStats:
      "El cáncer de próstata es el tumor maligno más frecuente en hombres mexicanos y una de las principales causas de mortalidad por cáncer masculino, de acuerdo con cifras difundidas por el sector salud — la detección oportuna mediante antígeno prostático después de los 50 años reduce significativamente ese riesgo.",
    complications: [
      "Metástasis a hueso y ganglios linfáticos si no se trata a tiempo",
      "Disfunción eréctil e incontinencia tras el tratamiento quirúrgico o radioterapia",
      "Obstrucción urinaria por crecimiento tumoral local",
    ],
    treatments: [
      "Vigilancia activa en tumores de bajo riesgo",
      "Prostatectomía radical (cirugía para retirar la próstata)",
      "Radioterapia",
      "Terapia hormonal en etapas avanzadas",
    ],
    faqs: [
      {
        question: "¿A qué edad debo hacerme mi primer antígeno prostático?",
        answer:
          "La recomendación general es iniciar la revisión urológica con antígeno prostático y tacto rectal a partir de los 50 años, o desde los 45 si existe un familiar de primer grado con cáncer de próstata.",
      },
      {
        question: "¿Un antígeno prostático elevado significa que tengo cáncer?",
        answer:
          "No necesariamente. El antígeno puede elevarse por hiperplasia prostática benigna, prostatitis o incluso por actividad física reciente; un valor elevado es una señal para profundizar el estudio con el urólogo, no un diagnóstico por sí mismo.",
      },
      {
        question: "¿El cáncer de próstata siempre requiere cirugía?",
        answer:
          "No. En tumores de muy bajo riesgo detectados a tiempo, la vigilancia activa con controles periódicos puede ser una opción válida en lugar de un tratamiento inmediato; la decisión depende del grado, la extensión y la edad del paciente.",
      },
    ],
    relatedServices: ["s-prostatectomia-radical", "s-biopsia-de-prostata"],
    relatedSymptoms: ["sy-dificultad-para-orinar", "sy-nocturia"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/cancer-prostata.png",
    seo: {
      title: "Cáncer de Próstata | Urólogo en Tuxtla Gutiérrez",
      description:
        "Detección y tratamiento del cáncer de próstata con el Dr. Erwin Rodríguez Komukai, Cirujano Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "cáncer de próstata Tuxtla Gutiérrez",
        "urólogo oncológico Chiapas",
        "antígeno prostático Tuxtla Gutiérrez",
      ],
    },
  },
  {
    id: "d-hiperplasia-prostatica-benigna",
    slug: "hiperplasia-prostatica-benigna",
    name: "Hiperplasia Prostática Benigna",
    technicalName: "Hiperplasia Prostática Benigna (HPB)",
    colloquialNames: ["próstata crecida", "próstata inflamada"],
    description:
      "La hiperplasia prostática benigna es el crecimiento no canceroso de la próstata que ocurre de forma natural con la edad en la mayoría de los hombres. Al crecer, la próstata rodea y comprime la uretra, lo que dificulta el paso de la orina y provoca los llamados síntomas del tracto urinario inferior. Es una condición extremadamente frecuente después de los 50 años y, aunque benigna, puede afectar de forma importante la calidad de vida si no se trata.",
    symptoms: [
      "Chorro urinario débil o intermitente",
      "Necesidad de orinar con frecuencia, especialmente de noche (nocturia)",
      "Sensación de vaciado incompleto de la vejiga",
      "Urgencia para orinar",
      "Goteo al finalizar la micción",
    ],
    causes: [
      "Cambios hormonales relacionados con el envejecimiento",
      "Crecimiento natural del tejido prostático con la edad",
    ],
    riskFactors: [
      "Edad mayor de 50 años",
      "Antecedentes familiares de hiperplasia prostática",
      "Obesidad y sedentarismo",
    ],
    mexicoStats:
      "Se estima que más de la mitad de los hombres mexicanos mayores de 60 años presentan algún grado de hiperplasia prostática benigna, siendo una de las consultas más frecuentes en urología.",
    complications: [
      "Retención urinaria aguda",
      "Infecciones urinarias de repetición",
      "Daño renal por obstrucción prolongada en casos no tratados",
      "Formación de cálculos vesicales",
    ],
    treatments: [
      "Cambios en estilo de vida (reducir líquidos antes de dormir, limitar cafeína)",
      "Tratamiento médico para relajar el músculo prostático",
      "Resección transuretral de próstata (RTU-P)",
      "Otras técnicas quirúrgicas mínimamente invasivas según el tamaño de la próstata",
    ],
    faqs: [
      {
        question: "¿La hiperplasia prostática benigna se convierte en cáncer?",
        answer:
          "No. La hiperplasia prostática benigna y el cáncer de próstata son condiciones distintas y una no se transforma en la otra, aunque ambas pueden coexistir en el mismo paciente y por eso se estudian por separado.",
      },
      {
        question: "¿Levantarme varias veces en la noche a orinar es normal con la edad?",
        answer:
          "Levantarse una o dos veces puede ser común, pero hacerlo de forma repetida y que interrumpa el descanso no es algo que deba normalizarse — es una señal típica de hiperplasia prostática que vale la pena evaluar con el urólogo.",
      },
      {
        question: "¿Toda hiperplasia prostática necesita cirugía?",
        answer:
          "No. Muchos casos se controlan bien con tratamiento médico; la cirugía se reserva para cuando los síntomas no mejoran, la próstata es muy grande, o ya existen complicaciones como retención urinaria o infecciones repetidas.",
      },
    ],
    relatedServices: ["s-rtu-prostata"],
    relatedSymptoms: ["sy-nocturia", "sy-dificultad-para-orinar", "sy-retencion-urinaria-aguda", "sy-polaquiuria"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/hiperplasia-prostatica-benigna.png",
    seo: {
      title: "Hiperplasia Prostática Benigna | Urólogo en Tuxtla Gutiérrez",
      description:
        "¿Próstata crecida? Conoce el diagnóstico y tratamiento de la hiperplasia prostática benigna con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: [
        "hiperplasia prostática benigna Tuxtla Gutiérrez",
        "próstata crecida tratamiento Chiapas",
        "RTU de próstata Tuxtla Gutiérrez",
      ],
    },
  },
  {
    id: "d-litiasis-renal",
    slug: "litiasis-renal",
    name: "Litiasis Renal",
    technicalName: "Nefrolitiasis / Urolitiasis",
    colloquialNames: ["piedras en el riñón", "cálculos renales"],
    description:
      "La litiasis renal es la formación de cálculos (piedras) dentro del riñón o las vías urinarias, originados por la cristalización de minerales y sales presentes en la orina. Es una de las urgencias urológicas más comunes: cuando un cálculo se desplaza e intenta pasar por el uréter, provoca uno de los dolores más intensos que puede experimentar una persona, conocido como cólico nefrítico. El manejo depende del tamaño, posición y composición del cálculo.",
    symptoms: [
      "Dolor intenso y repentino en el costado o la espalda baja (cólico nefrítico)",
      "Dolor que se irradia hacia la ingle",
      "Sangre en la orina",
      "Náusea y vómito asociados al dolor",
      "Necesidad urgente y frecuente de orinar",
    ],
    causes: [
      "Baja ingesta de agua que concentra la orina",
      "Dietas altas en sodio y proteína animal",
      "Alteraciones metabólicas que favorecen la cristalización de minerales",
    ],
    riskFactors: [
      "Hidratación insuficiente",
      "Antecedentes familiares de cálculos renales",
      "Climas cálidos con sudoración excesiva",
      "Antecedente personal de litiasis previa",
    ],
    mexicoStats:
      "La litiasis renal es una causa frecuente de consulta de urgencia en los hospitales mexicanos, con mayor incidencia en regiones de clima cálido donde la deshidratación favorece la formación de cálculos.",
    complications: [
      "Obstrucción urinaria completa",
      "Infección urinaria asociada al cálculo",
      "Daño renal progresivo en obstrucciones no resueltas",
    ],
    treatments: [
      "Hidratación abundante y manejo del dolor para cálculos pequeños",
      "Litotripsia extracorpórea (ondas de choque) para fragmentar el cálculo",
      "Ureteroscopia con láser para cálculos en el uréter",
      "Nefrolitotomía percutánea para cálculos grandes dentro del riñón",
    ],
    faqs: [
      {
        question: "¿Todos los cálculos renales requieren cirugía?",
        answer:
          "No. Los cálculos pequeños frecuentemente se expulsan solos con hidratación abundante y manejo del dolor; la intervención se reserva para cálculos grandes, que no avanzan, o que ya provocan obstrucción o infección.",
      },
      {
        question: "¿Por qué duele tanto un cólico renal?",
        answer:
          "El dolor se produce porque el cálculo obstruye el paso de la orina y el uréter se contrae con fuerza para intentar movilizarlo, generando un espasmo intenso — es de los dolores agudos más fuertes descritos en medicina.",
      },
      {
        question: "¿Beber más agua previene los cálculos renales?",
        answer:
          "Sí, mantener una buena hidratación diaria es la medida preventiva más efectiva, ya que diluye la orina y reduce la concentración de minerales que forman los cálculos.",
      },
    ],
    relatedServices: ["s-litotripsia", "s-ureteroscopia-laser", "s-nefrolitotomia-percutanea", "s-cateter-doble-j"],
    relatedSymptoms: ["sy-colico-nefritico", "sy-sangre-en-la-orina"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/litiasis-renal.png",
    seo: {
      title: "Litiasis Renal (Piedras en el Riñón) | Tuxtla Gutiérrez",
      description:
        "Tratamiento de cálculos renales con litotripsia, ureteroscopia y cirugía percutánea con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: [
        "piedras en el riñón Tuxtla Gutiérrez",
        "litotripsia Chiapas",
        "cólico renal urólogo Tuxtla Gutiérrez",
      ],
    },
  },
  {
    id: "d-infeccion-de-vias-urinarias",
    slug: "infeccion-de-vias-urinarias",
    name: "Infección de Vías Urinarias",
    technicalName: "Infección del Tracto Urinario (ITU)",
    colloquialNames: ["infección urinaria", "infección de orina"],
    description:
      "La infección de vías urinarias ocurre cuando bacterias, generalmente provenientes del intestino, llegan a la vejiga o los riñones y provocan inflamación e infección. Puede presentarse como un episodio aislado o volverse recurrente, en cuyo caso amerita estudio urológico más completo para descartar causas anatómicas o funcionales que favorezcan su repetición.",
    symptoms: [
      "Ardor o dolor al orinar",
      "Necesidad de orinar con mucha frecuencia y en poca cantidad",
      "Orina turbia o de olor fuerte",
      "Dolor en la parte baja del abdomen",
      "Fiebre si la infección avanza hacia el riñón",
    ],
    causes: [
      "Entrada de bacterias intestinales (principalmente E. coli) a la uretra",
      "Vaciamiento incompleto de la vejiga",
      "Obstrucción urinaria por cálculos o crecimiento prostático",
    ],
    riskFactors: [
      "Relaciones sexuales",
      "Retención prolongada de la orina",
      "Hiperplasia prostática benigna en hombres mayores",
      "Diabetes mal controlada",
    ],
    mexicoStats:
      "Las infecciones de vías urinarias están entre los motivos más frecuentes de consulta médica en México, con un repunte relevante en pacientes con hiperplasia prostática o diabetes no controlada.",
    complications: [
      "Infección renal (pielonefritis)",
      "Infección generalizada (sepsis urinaria) en casos no tratados",
      "Infecciones recurrentes si no se identifica la causa de base",
    ],
    treatments: [
      "Antibioticoterapia dirigida según urocultivo",
      "Hidratación abundante",
      "Estudio urológico si la infección es recurrente",
      "Tratamiento de la causa obstructiva de base, si existe",
    ],
    faqs: [
      {
        question: "¿Por qué las infecciones urinarias me dan una y otra vez?",
        answer:
          "Las infecciones urinarias recurrentes suelen tener una causa de fondo — como vaciamiento incompleto de la vejiga, cálculos o crecimiento prostático — que debe estudiarse con el urólogo en lugar de solo repetir antibióticos cada vez.",
      },
      {
        question: "¿Es normal que un hombre tenga infecciones urinarias?",
        answer:
          "Es menos frecuente que en mujeres, por lo que una infección urinaria en un hombre adulto generalmente amerita estudio urológico para descartar una causa obstructiva o anatómica de base.",
      },
      {
        question: "¿Debo tomar antibiótico sin acudir al médico?",
        answer:
          "No es recomendable. El tratamiento debe basarse idealmente en un urocultivo que identifique la bacteria exacta y el antibiótico al que es sensible, para evitar tratamientos incompletos o resistencia bacteriana.",
      },
    ],
    relatedServices: ["s-cistoscopia"],
    relatedSymptoms: ["sy-dolor-al-orinar", "sy-secrecion-uretral"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/infeccion-vias-urinarias.png",
    seo: {
      title: "Infección de Vías Urinarias | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento de infecciones urinarias recurrentes con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "infección urinaria Tuxtla Gutiérrez",
        "urólogo infecciones de orina Chiapas",
        "infección urinaria recurrente hombres",
      ],
    },
  },
  {
    id: "d-disfuncion-erectil",
    slug: "disfuncion-erectil",
    name: "Disfunción Eréctil",
    technicalName: "Disfunción Eréctil",
    colloquialNames: ["impotencia"],
    description:
      "La disfunción eréctil es la dificultad persistente para lograr o mantener una erección suficiente para una relación sexual satisfactoria. Puede tener un origen vascular, hormonal, neurológico, psicológico o una combinación de varios factores, y su frecuencia aumenta con la edad, aunque no debe considerarse una parte inevitable del envejecimiento. Es, además, un síntoma que en ocasiones anuncia problemas cardiovasculares antes de que estos den otras señales.",
    symptoms: [
      "Dificultad para lograr la erección",
      "Dificultad para mantener la erección durante la relación",
      "Reducción en la rigidez habitual de la erección",
      "Disminución del deseo sexual asociada",
    ],
    causes: [
      "Enfermedad vascular (aterosclerosis) que reduce el flujo sanguíneo",
      "Diabetes mellitus",
      "Alteraciones hormonales como baja testosterona",
      "Factores psicológicos: ansiedad, estrés, depresión",
    ],
    riskFactors: [
      "Diabetes e hipertensión arterial",
      "Tabaquismo",
      "Obesidad y sedentarismo",
      "Enfermedad de Peyronie o cirugía pélvica previa",
    ],
    mexicoStats:
      "La disfunción eréctil afecta a una proporción creciente de hombres mexicanos adultos, especialmente a partir de los 40 años, y se asocia con frecuencia a diabetes e hipertensión no controladas.",
    complications: [
      "Afectación emocional y de pareja",
      "Puede ser el primer signo visible de enfermedad cardiovascular no diagnosticada",
    ],
    treatments: [
      "Control de enfermedades de base (diabetes, hipertensión, colesterol)",
      "Tratamiento farmacológico oral",
      "Terapias de segunda línea (inyecciones intracavernosas, dispositivos de vacío)",
      "Implante de prótesis de pene en casos que no responden a otros tratamientos",
    ],
    faqs: [
      {
        question: "¿La disfunción eréctil es solo un problema psicológico?",
        answer:
          "No siempre. Aunque los factores emocionales influyen, en muchos hombres adultos la causa principal es vascular o metabólica (diabetes, hipertensión, colesterol elevado), por lo que la evaluación médica es importante antes de asumir un origen puramente psicológico.",
      },
      {
        question: "¿La disfunción eréctil puede ser señal de un problema cardiaco?",
        answer:
          "Sí. Las arterias del pene son más pequeñas que las del corazón, por lo que la disfunción eréctil puede aparecer antes que otros síntomas cardiovasculares — es una señal que vale la pena comentar con el urólogo, incluso si no hay otras molestias.",
      },
      {
        question: "¿Existe cura definitiva para la disfunción eréctil?",
        answer:
          "Depende de la causa: en algunos casos, controlar la enfermedad de base y ajustar hábitos mejora la función de forma significativa; en otros, el manejo es crónico con tratamiento continuo, y en casos avanzados el implante de prótesis ofrece una solución definitiva.",
      },
    ],
    relatedServices: ["s-implante-de-protesis-de-pene"],
    relatedSymptoms: ["sy-problemas-de-ereccion"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/disfuncion-erectil.png",
    seo: {
      title: "Disfunción Eréctil | Urólogo en Tuxtla Gutiérrez",
      description:
        "Evaluación y tratamiento de la disfunción eréctil con el Dr. Erwin Rodríguez Komukai, Cirujano Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "disfunción eréctil Tuxtla Gutiérrez",
        "tratamiento impotencia Chiapas",
        "urólogo disfunción eréctil",
      ],
    },
  },
  {
    id: "d-varicocele",
    slug: "varicocele",
    name: "Varicocele",
    technicalName: "Varicocele Testicular",
    colloquialNames: ["venas varicosas en el testículo"],
    description:
      "El varicocele es la dilatación anormal de las venas del cordón espermático dentro del escroto, similar a las várices que pueden aparecer en las piernas. Es más frecuente del lado izquierdo por razones anatómicas y, aunque muchos casos son asintomáticos, puede afectar la producción y calidad de los espermatozoides, siendo una de las causas tratables de infertilidad masculina.",
    symptoms: [
      "Sensación de pesadez o molestia en el escroto, que aumenta al estar de pie",
      "Venas visibles o palpables en el escroto, descritas como 'bolsa de gusanos'",
      "Testículo del lado afectado de menor tamaño con el tiempo",
      "En muchos casos, ningún síntoma evidente",
    ],
    causes: [
      "Válvulas venosas insuficientes que permiten el reflujo de sangre",
      "Factores anatómicos que predisponen más al lado izquierdo",
    ],
    riskFactors: [
      "Adolescencia y adultez temprana (edad de mayor diagnóstico)",
      "Permanecer de pie por periodos prolongados",
    ],
    mexicoStats:
      "El varicocele se identifica hasta en un 15% de la población masculina general y es una de las causas más frecuentes y tratables de infertilidad en parejas que buscan embarazo.",
    complications: [
      "Infertilidad masculina",
      "Atrofia testicular progresiva si no se trata",
      "Dolor crónico en casos sintomáticos",
    ],
    treatments: [
      "Observación en casos leves y asintomáticos",
      "Varicocelectomía (ligadura quirúrgica de las venas dilatadas)",
      "Embolización percutánea como alternativa en casos seleccionados",
    ],
    faqs: [
      {
        question: "¿El varicocele siempre afecta la fertilidad?",
        answer:
          "No en todos los casos, pero es una de las causas más comunes de infertilidad masculina tratable, por lo que si hay dificultad para lograr un embarazo, es importante descartarlo con el urólogo.",
      },
      {
        question: "¿A qué edad suele aparecer el varicocele?",
        answer:
          "Suele hacerse evidente durante la adolescencia, coincidiendo con el desarrollo puberal, aunque también puede diagnosticarse por primera vez en la edad adulta durante una revisión por molestia o estudio de infertilidad.",
      },
      {
        question: "¿Es necesario operarse si el varicocele no duele?",
        answer:
          "No siempre. Si no hay dolor, alteración en el espermatograma ni disminución del tamaño testicular, puede optarse por vigilancia periódica en lugar de cirugía inmediata.",
      },
    ],
    relatedServices: ["s-varicocelectomia"],
    relatedSymptoms: ["sy-dolor-testicular"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/varicocele.png",
    seo: {
      title: "Varicocele | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento quirúrgico del varicocele con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "varicocele Tuxtla Gutiérrez",
        "varicocelectomía Chiapas",
        "varicocele e infertilidad masculina",
      ],
    },
  },
  {
    id: "d-prostatitis",
    slug: "prostatitis",
    name: "Prostatitis",
    technicalName: "Prostatitis",
    colloquialNames: ["inflamación de la próstata"],
    description:
      "La prostatitis es la inflamación de la glándula prostática, que puede ser de origen bacteriano agudo, bacteriano crónico, o no bacteriano (el tipo más frecuente). Puede provocar dolor pélvico, molestias urinarias y, en el tipo agudo, fiebre importante que requiere atención médica inmediata. El manejo varía mucho según el tipo de prostatitis, por lo que un diagnóstico preciso es esencial.",
    symptoms: [
      "Dolor o ardor al orinar",
      "Dolor pélvico, perineal o en la zona baja de la espalda",
      "Necesidad frecuente y urgente de orinar",
      "Fiebre y malestar general en la forma bacteriana aguda",
      "Dolor durante o después de la eyaculación",
    ],
    causes: [
      "Infección bacteriana de la próstata",
      "Causas no infecciosas (inflamatorias) en la forma crónica no bacteriana",
    ],
    riskFactors: [
      "Infecciones urinarias previas",
      "Uso de sonda urinaria",
      "Estrés y tensión del piso pélvico en la forma crónica no bacteriana",
    ],
    mexicoStats:
      "La prostatitis es uno de los diagnósticos urológicos más frecuentes en hombres menores de 50 años que acuden a consulta por dolor pélvico o síntomas urinarios.",
    complications: [
      "Absceso prostático en casos bacterianos no tratados",
      "Dolor pélvico crónico",
      "Infección urinaria recurrente",
    ],
    treatments: [
      "Antibioticoterapia prolongada en la forma bacteriana",
      "Antiinflamatorios y manejo del dolor",
      "Terapia de piso pélvico en la forma crónica no bacteriana",
    ],
    faqs: [
      {
        question: "¿La prostatitis es lo mismo que la hiperplasia prostática?",
        answer:
          "No. La prostatitis es una inflamación o infección de la próstata, mientras que la hiperplasia prostática benigna es un crecimiento no canceroso del tejido; pueden coexistir, pero son condiciones distintas con tratamientos diferentes.",
      },
      {
        question: "¿La prostatitis bacteriana aguda es una urgencia?",
        answer:
          "Sí, especialmente si se acompaña de fiebre alta y malestar general — requiere atención médica pronta porque puede progresar a una infección más severa si no se trata oportunamente.",
      },
      {
        question: "¿Por qué la prostatitis crónica no bacteriana es tan difícil de tratar?",
        answer:
          "Porque no existe una bacteria identificable a la cual dirigir el antibiótico; el manejo se enfoca en controlar el dolor, la inflamación y, en muchos casos, la tensión del piso pélvico, por lo que suele requerir un abordaje más prolongado y personalizado.",
      },
    ],
    relatedServices: ["s-cistoscopia"],
    relatedSymptoms: ["sy-dolor-al-orinar", "sy-urgencia-urinaria", "sy-eyaculacion-precoz-o-dolorosa"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/prostatitis.png",
    seo: {
      title: "Prostatitis | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento de la prostatitis aguda y crónica con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "prostatitis Tuxtla Gutiérrez",
        "inflamación de próstata Chiapas",
        "dolor pélvico hombres urólogo",
      ],
    },
  },
  {
    id: "d-fimosis-y-parafimosis",
    slug: "fimosis-y-parafimosis",
    name: "Fimosis y Parafimosis",
    technicalName: "Fimosis y Parafimosis",
    colloquialNames: ["prepucio apretado"],
    description:
      "La fimosis es la imposibilidad de retraer completamente el prepucio sobre el glande, ya sea por estrechez congénita o por cicatrización tras infecciones repetidas. La parafimosis, en cambio, es una urgencia urológica que ocurre cuando el prepucio retraído queda atrapado detrás del glande y no puede regresar a su posición, provocando hinchazón dolorosa que compromete la circulación si no se resuelve rápidamente.",
    symptoms: [
      "Dificultad o imposibilidad para retraer el prepucio (fimosis)",
      "Dolor e hinchazón del glande cuando el prepucio queda atrapado (parafimosis)",
      "Infecciones recurrentes bajo el prepucio",
      "Dificultad para la higiene local",
      "Molestia durante la erección o el acto sexual",
    ],
    causes: [
      "Estrechez congénita del prepucio",
      "Cicatrización tras infecciones o inflamaciones repetidas (balanitis de repetición)",
      "Retracción forzada del prepucio que no se regresa a tiempo (parafimosis)",
    ],
    riskFactors: [
      "Higiene local inadecuada",
      "Infecciones genitales repetidas",
      "Diabetes mal controlada",
    ],
    mexicoStats:
      "La fimosis es una de las consultas urológicas más frecuentes en edad pediátrica y adulta joven; la parafimosis, al ser una urgencia, representa un porcentaje relevante de las consultas urológicas de urgencia relacionadas con genitales.",
    complications: [
      "Parafimosis con compromiso de la circulación del glande si no se resuelve a tiempo",
      "Infecciones recurrentes bajo el prepucio",
      "Dificultad o dolor durante las relaciones sexuales",
    ],
    treatments: [
      "Cremas con corticoide para fimosis leves en ciertos casos",
      "Circuncisión para resolver la fimosis de forma definitiva",
      "Reducción manual urgente en caso de parafimosis, seguida de circuncisión programada",
    ],
    faqs: [
      {
        question: "¿La parafimosis es realmente una urgencia?",
        answer:
          "Sí. Si el prepucio queda atrapado detrás del glande y no se resuelve pronto, puede comprometer la circulación de la zona y requiere atención urológica inmediata, no puede esperar a una cita programada.",
      },
      {
        question: "¿La fimosis en adultos siempre necesita cirugía?",
        answer:
          "En muchos casos la circuncisión es la solución definitiva, especialmente si hay infecciones repetidas, dolor o dificultad para la higiene; en fimosis leves sin síntomas puede valorarse manejo conservador primero.",
      },
      {
        question: "¿La circuncisión en adultos es muy diferente a la de bebés?",
        answer:
          "El procedimiento en sí es similar en concepto, pero en adultos se realiza con anestesia local o regional en un entorno quirúrgico ambulatorio y requiere un periodo de cuidado postoperatorio más consciente por parte del paciente.",
      },
    ],
    relatedServices: ["s-circuncision"],
    relatedSymptoms: ["sy-secrecion-uretral"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/fimosis-parafimosis.png",
    seo: {
      title: "Fimosis y Parafimosis | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento de fimosis y parafimosis con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "fimosis Tuxtla Gutiérrez",
        "parafimosis urgencia Chiapas",
        "circuncisión en adultos Tuxtla Gutiérrez",
      ],
    },
  },
  {
    id: "d-cancer-de-vejiga",
    slug: "cancer-de-vejiga",
    name: "Cáncer de Vejiga",
    technicalName: "Carcinoma Urotelial de Vejiga",
    colloquialNames: ["tumor de vejiga"],
    description:
      "El cáncer de vejiga se origina en las células que recubren la pared interna de la vejiga, llamadas células uroteliales. El signo más frecuente y característico es la presencia de sangre en la orina sin dolor, por lo que nunca debe minimizarse este síntoma asumiendo que se trata solo de una infección. El tabaquismo es el factor de riesgo más importante y modificable.",
    symptoms: [
      "Sangre en la orina, generalmente sin dolor",
      "Necesidad de orinar con más frecuencia de lo habitual",
      "Ardor al orinar sin infección demostrada",
      "Dolor en la espalda baja en etapas más avanzadas",
    ],
    causes: [
      "Mutaciones en las células uroteliales de la vejiga",
      "Exposición prolongada a sustancias cancerígenas eliminadas por la orina",
    ],
    riskFactors: [
      "Tabaquismo (el factor de riesgo más importante)",
      "Exposición ocupacional a químicos industriales",
      "Edad avanzada",
      "Infecciones urinarias crónicas no resueltas",
    ],
    mexicoStats:
      "El cáncer de vejiga es más frecuente en hombres que en mujeres y su incidencia está fuertemente asociada al tabaquismo, uno de los factores de riesgo modificables más relevantes en la población mexicana.",
    complications: [
      "Invasión a capas profundas de la pared vesical",
      "Metástasis a ganglios y otros órganos en etapas avanzadas",
      "Pérdida de la vejiga en casos que requieren cistectomía",
    ],
    treatments: [
      "Resección transuretral de tumor vesical (RTU-V) para diagnóstico y tratamiento inicial",
      "Instilaciones intravesicales para reducir el riesgo de recurrencia",
      "Cirugía más extensa o tratamiento oncológico combinado en etapas avanzadas",
    ],
    faqs: [
      {
        question: "¿Sangre en la orina sin dolor siempre es grave?",
        answer:
          "No siempre significa cáncer, pero sangre en la orina sin dolor es precisamente el síntoma clásico de alarma del cáncer de vejiga y debe estudiarse siempre con el urólogo, nunca ignorarse por no doler.",
      },
      {
        question: "¿Dejar de fumar reduce el riesgo si ya tengo años fumando?",
        answer:
          "Sí. El riesgo de cáncer de vejiga disminuye de forma progresiva después de dejar de fumar, aunque nunca se iguala por completo al de alguien que nunca fumó; dejarlo en cualquier momento sigue siendo beneficioso.",
      },
      {
        question: "¿El cáncer de vejiga siempre reaparece después del tratamiento?",
        answer:
          "Tiene una tasa de recurrencia relevante, por lo que requiere seguimiento cistoscópico periódico tras el tratamiento inicial, pero no todos los casos reaparecen y el pronóstico mejora mucho con vigilancia estrecha.",
      },
    ],
    relatedServices: ["s-rtu-tumor-vesical", "s-cistoscopia"],
    relatedSymptoms: ["sy-sangre-en-la-orina"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/cancer-vejiga.png",
    seo: {
      title: "Cáncer de Vejiga | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento del cáncer de vejiga con el Dr. Erwin Rodríguez Komukai, Cirujano Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "cáncer de vejiga Tuxtla Gutiérrez",
        "sangre en la orina urólogo Chiapas",
        "RTU tumor vesical Tuxtla Gutiérrez",
      ],
    },
  },
  {
    id: "d-its",
    slug: "infecciones-de-transmision-sexual",
    name: "Infecciones de Transmisión Sexual (ITS)",
    technicalName: "Infecciones de Transmisión Sexual",
    colloquialNames: ["enfermedades venéreas", "ITS"],
    description:
      "Las infecciones de transmisión sexual son un grupo de infecciones causadas por bacterias, virus o parásitos que se transmiten principalmente a través del contacto sexual. En hombres pueden manifestarse con secreción uretral, úlceras genitales o molestias urinarias, aunque también pueden cursar sin síntomas evidentes durante un tiempo, lo que facilita su transmisión si no se diagnostican.",
    symptoms: [
      "Secreción uretral anormal",
      "Ardor o dolor al orinar",
      "Úlceras, ampollas o verrugas en los genitales",
      "Dolor o inflamación testicular",
      "En algunos casos, ausencia completa de síntomas",
    ],
    causes: [
      "Contacto sexual sin protección con una persona infectada",
      "Múltiples parejas sexuales sin uso constante de preservativo",
    ],
    riskFactors: [
      "Relaciones sexuales sin preservativo",
      "Múltiples parejas sexuales",
      "Antecedente de otra ITS previa",
    ],
    mexicoStats:
      "Las infecciones de transmisión sexual continúan siendo un problema de salud pública relevante en México, con un subdiagnóstico importante debido a los casos que cursan sin síntomas evidentes.",
    complications: [
      "Epididimitis y orquitis",
      "Infertilidad en infecciones no tratadas de forma oportuna",
      "Transmisión a la pareja sexual",
    ],
    treatments: [
      "Antibioticoterapia específica según el microorganismo identificado",
      "Tratamiento simultáneo de la pareja sexual",
      "Uso de preservativo para prevenir reinfección y transmisión",
    ],
    faqs: [
      {
        question: "¿Si no tengo síntomas puedo tener una ITS de todas formas?",
        answer:
          "Sí. Varias infecciones de transmisión sexual pueden cursar sin síntomas visibles durante bastante tiempo, por lo que la prueba y el diagnóstico oportuno son importantes incluso sin molestias evidentes.",
      },
      {
        question: "¿Es necesario que mi pareja también se trate?",
        answer:
          "Sí, siempre. Tratar solo a una persona de la pareja prácticamente garantiza la reinfección inmediata después de retomar la actividad sexual, por lo que el tratamiento simultáneo de ambos es parte esencial del manejo.",
      },
      {
        question: "¿El uso de preservativo elimina por completo el riesgo?",
        answer:
          "Lo reduce de forma muy significativa, aunque algunas infecciones (como el virus del papiloma humano) pueden transmitirse por contacto de piel no cubierta, por lo que ningún método es 100% infalible.",
      },
    ],
    relatedServices: ["s-cistoscopia"],
    relatedSymptoms: ["sy-secrecion-uretral", "sy-dolor-testicular", "sy-dolor-al-orinar"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/its.png",
    seo: {
      title: "ITS | Urólogo en Tuxtla Gutiérrez, Chiapas",
      description:
        "Diagnóstico y tratamiento de infecciones de transmisión sexual en hombres con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: [
        "ITS urólogo Tuxtla Gutiérrez",
        "infecciones de transmisión sexual Chiapas",
        "secreción uretral urólogo",
      ],
    },
  },
  {
    id: "d-vejiga-hiperactiva",
    slug: "vejiga-hiperactiva",
    name: "Vejiga Hiperactiva",
    technicalName: "Síndrome de Vejiga Hiperactiva",
    colloquialNames: ["vejiga nerviosa"],
    description:
      "La vejiga hiperactiva es un conjunto de síntomas urinarios caracterizado por una urgencia repentina e intensa para orinar, generalmente acompañada de aumento en la frecuencia urinaria y, en algunos casos, episodios de incontinencia. No es una enfermedad infecciosa, sino una alteración en la forma en que la vejiga se contrae, y puede afectar de forma importante la vida social y laboral de quien la padece.",
    symptoms: [
      "Urgencia repentina e intensa para orinar",
      "Aumento en la frecuencia urinaria durante el día",
      "Nocturia (despertar varias veces en la noche para orinar)",
      "Episodios de escape de orina asociados a la urgencia",
    ],
    causes: [
      "Contracciones involuntarias del músculo de la vejiga",
      "Alteraciones neurológicas que afectan el control vesical",
      "En hombres, frecuentemente asociada a hiperplasia prostática benigna",
    ],
    riskFactors: [
      "Edad avanzada",
      "Hiperplasia prostática benigna no tratada",
      "Enfermedades neurológicas (Parkinson, esclerosis múltiple, entre otras)",
      "Obesidad",
    ],
    mexicoStats:
      "La vejiga hiperactiva afecta a una proporción considerable de adultos mayores en México y es frecuentemente subdiagnosticada porque muchos pacientes asumen erróneamente que es una parte inevitable del envejecimiento.",
    complications: [
      "Aislamiento social por miedo a episodios de urgencia o escape",
      "Alteración del sueño por nocturia",
      "Infecciones urinarias asociadas a vaciamiento incompleto",
    ],
    treatments: [
      "Entrenamiento vesical y ejercicios de piso pélvico",
      "Tratamiento farmacológico para relajar el músculo vesical",
      "Tratamiento de la causa de base (por ejemplo, hiperplasia prostática)",
      "Opciones de neuromodulación en casos que no responden a otros tratamientos",
    ],
    faqs: [
      {
        question: "¿La vejiga hiperactiva es lo mismo que una infección urinaria?",
        answer:
          "No. La vejiga hiperactiva no es una infección, sino una alteración en el control de las contracciones de la vejiga; de hecho, antes de diagnosticarla se debe descartar una infección urinaria como causa de los síntomas.",
      },
      {
        question: "¿Es normal tener urgencia urinaria por la edad?",
        answer:
          "Aunque es más frecuente con la edad, no debe considerarse 'normal' ni algo que haya que simplemente tolerar — existen tratamientos efectivos que mejoran significativamente la calidad de vida.",
      },
      {
        question: "¿Tomar menos líquidos ayuda a controlar la vejiga hiperactiva?",
        answer:
          "Reducir líquidos de forma extrema no es la solución y puede ser contraproducente; es mejor ajustar el horario de ingesta (por ejemplo, limitar líquidos antes de dormir) bajo orientación médica en lugar de deshidratarse.",
      },
    ],
    relatedServices: ["s-cirugia-de-incontinencia"],
    relatedSymptoms: ["sy-urgencia-urinaria", "sy-incontinencia-urinaria", "sy-polaquiuria", "sy-nocturia"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/vejiga-hiperactiva.png",
    seo: {
      title: "Vejiga Hiperactiva | Urólogo en Tuxtla Gutiérrez",
      description:
        "Tratamiento de la vejiga hiperactiva y la urgencia urinaria con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "vejiga hiperactiva Tuxtla Gutiérrez",
        "urgencia urinaria Chiapas",
        "incontinencia urinaria urólogo",
      ],
    },
  },
  {
    id: "d-cancer-de-rinon",
    slug: "cancer-de-rinon",
    name: "Cáncer de Riñón",
    technicalName: "Carcinoma de Células Renales",
    colloquialNames: ["tumor renal"],
    description:
      "El cáncer de riñón se origina en las células del tejido renal y, gracias al uso cada vez más frecuente de estudios de imagen por otras causas, muchos tumores se descubren de forma incidental en etapas tempranas, cuando aún no provocan síntomas. Cuando sí se manifiesta, los signos clásicos incluyen sangre en la orina y dolor en el costado, aunque pueden presentarse de forma tardía.",
    symptoms: [
      "Sangre en la orina",
      "Dolor o masa palpable en el costado o la espalda baja",
      "Pérdida de peso no intencionada",
      "Fatiga persistente",
      "En muchos casos, hallazgo incidental sin síntomas en un estudio de imagen",
    ],
    causes: [
      "Mutaciones en las células del tejido renal",
      "Algunos síndromes genéticos hereditarios predisponentes",
    ],
    riskFactors: [
      "Tabaquismo",
      "Obesidad",
      "Hipertensión arterial no controlada",
      "Enfermedad renal avanzada con diálisis prolongada",
    ],
    mexicoStats:
      "El cáncer de riñón se diagnostica cada vez con mayor frecuencia en etapas iniciales en México gracias al uso más extendido de estudios de imagen abdominal, lo que mejora de forma significativa el pronóstico cuando se detecta a tiempo.",
    complications: [
      "Metástasis a pulmón, hueso o hígado en etapas avanzadas",
      "Pérdida total o parcial de la función del riñón afectado",
    ],
    treatments: [
      "Nefrectomía parcial para preservar tejido renal sano en tumores pequeños",
      "Nefrectomía total cuando el tumor compromete la mayor parte del riñón",
      "Vigilancia activa en tumores muy pequeños seleccionados",
      "Tratamiento oncológico sistémico en etapas avanzadas",
    ],
    faqs: [
      {
        question: "¿Un tumor renal encontrado 'de casualidad' es menos grave?",
        answer:
          "Generalmente sí es una buena noticia: los tumores renales descubiertos de forma incidental en un estudio de imagen por otra causa suelen detectarse en etapas tempranas, con mejor pronóstico y más opciones de tratamiento conservador del riñón.",
      },
      {
        question: "¿Se puede vivir con un solo riñón después de la cirugía?",
        answer:
          "Sí, es perfectamente posible llevar una vida normal con un solo riñón funcional, siempre que se mantenga un seguimiento médico adecuado de la función renal restante.",
      },
      {
        question: "¿Siempre hay que quitar el riñón completo?",
        answer:
          "No. Cuando el tumor es pequeño y está bien localizado, frecuentemente es posible realizar una nefrectomía parcial, retirando solo la porción afectada y preservando el resto del riñón sano.",
      },
    ],
    relatedServices: ["s-nefrectomia"],
    relatedSymptoms: ["sy-sangre-en-la-orina"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/cancer-rinon.png",
    seo: {
      title: "Cáncer de Riñón | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento quirúrgico del cáncer de riñón con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "cáncer de riñón Tuxtla Gutiérrez",
        "nefrectomía Chiapas",
        "tumor renal urólogo Tuxtla Gutiérrez",
      ],
    },
  },
  {
    id: "d-estenosis-uretral",
    slug: "estenosis-uretral",
    name: "Estenosis Uretral",
    technicalName: "Estenosis de Uretra",
    colloquialNames: ["estrechez de la uretra"],
    description:
      "La estenosis uretral es el estrechamiento anormal de la uretra, el conducto por el cual se elimina la orina, generalmente causado por tejido cicatricial. Dificulta progresivamente el flujo urinario y, si no se trata, puede llevar a retención urinaria e infecciones repetidas. Es más frecuente en hombres debido a la mayor longitud de su uretra.",
    symptoms: [
      "Chorro urinario débil, dividido o en forma de rocío",
      "Esfuerzo notorio para iniciar o mantener la micción",
      "Sensación de vaciado incompleto",
      "Infecciones urinarias de repetición",
      "En casos avanzados, retención urinaria",
    ],
    causes: [
      "Cicatrización tras una infección de transmisión sexual no tratada",
      "Lesión o trauma pélvico o genital previo",
      "Uso prolongado o repetido de sondas urinarias",
      "Procedimientos urológicos previos",
    ],
    riskFactors: [
      "Antecedente de infecciones de transmisión sexual",
      "Trauma pélvico previo",
      "Cateterismos urinarios repetidos",
    ],
    mexicoStats:
      "La estenosis uretral es una causa relevante de obstrucción urinaria baja en hombres adultos en México, frecuentemente relacionada con antecedentes de infecciones de transmisión sexual no tratadas a tiempo.",
    complications: [
      "Retención urinaria aguda",
      "Infecciones urinarias recurrentes",
      "Daño renal por obstrucción crónica no resuelta",
    ],
    treatments: [
      "Dilatación uretral en estenosis cortas y seleccionadas",
      "Uretrotomía interna (corte endoscópico de la estenosis)",
      "Reconstrucción quirúrgica de la uretra en estenosis complejas o recurrentes",
    ],
    faqs: [
      {
        question: "¿Por qué mi chorro de orina cambió de forma con el tiempo?",
        answer:
          "Un chorro débil, dividido o en forma de rocío que se desarrolla de manera progresiva es una señal característica de estrechez uretral y debe evaluarse con el urólogo, especialmente si hay antecedente de infección o trauma previo.",
      },
      {
        question: "¿La estenosis uretral puede reaparecer después del tratamiento?",
        answer:
          "Sí, algunas estenosis tienen tendencia a recurrir, por lo que el seguimiento después del tratamiento es importante; en casos de recurrencias múltiples puede considerarse una reconstrucción quirúrgica más definitiva.",
      },
      {
        question: "¿Usar sonda repetidamente puede causar esta condición?",
        answer:
          "Sí, el uso repetido o prolongado de sondas urinarias es uno de los factores que puede generar cicatrización y estrechamiento de la uretra con el tiempo.",
      },
    ],
    relatedServices: ["s-cateter-doble-j"],
    relatedSymptoms: ["sy-dificultad-para-orinar", "sy-retencion-urinaria-aguda"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/estenosis-uretral.png",
    seo: {
      title: "Estenosis Uretral | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento de la estrechez uretral con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "estenosis uretral Tuxtla Gutiérrez",
        "estrechez de la uretra Chiapas",
        "chorro urinario débil urólogo",
      ],
    },
  },
  {
    id: "d-cancer-de-testiculo",
    slug: "cancer-de-testiculo",
    name: "Cáncer de Testículo",
    technicalName: "Tumor Testicular (Germinal)",
    colloquialNames: ["tumor en el testículo"],
    description:
      "El cáncer de testículo es uno de los tumores más frecuentes en hombres jóvenes, entre 15 y 35 años, pero también uno de los más curables cuando se detecta a tiempo. Se manifiesta típicamente como una masa o bulto indoloro en el testículo, por lo que la autoexploración testicular periódica es clave para su detección temprana.",
    symptoms: [
      "Bulto o masa indolora en el testículo",
      "Sensación de pesadez en el escroto",
      "Aumento de tamaño o cambio en la consistencia del testículo",
      "Dolor testicular leve en algunos casos, aunque frecuentemente es indoloro",
    ],
    causes: [
      "Mutaciones en las células germinales del testículo",
      "Antecedente de criptorquidia (testículo no descendido) en la infancia",
    ],
    riskFactors: [
      "Edad entre 15 y 35 años",
      "Antecedente de criptorquidia",
      "Antecedente familiar de cáncer testicular",
    ],
    mexicoStats:
      "El cáncer de testículo es el tumor sólido más frecuente en hombres jóvenes mexicanos y, detectado en etapas tempranas, presenta de las tasas de curación más altas dentro de toda la oncología.",
    complications: [
      "Metástasis a ganglios retroperitoneales y pulmón si se retrasa el diagnóstico",
      "Afectación de la fertilidad, especialmente tras tratamientos combinados",
    ],
    treatments: [
      "Orquiectomía radical (retiro quirúrgico del testículo afectado) como primer paso diagnóstico y terapéutico",
      "Tratamiento oncológico complementario según el tipo y etapa del tumor",
      "Preservación de muestra de semen antes del tratamiento en pacientes que deseen fertilidad futura",
    ],
    faqs: [
      {
        question: "¿Un bulto indoloro en el testículo puede ser grave aunque no duela?",
        answer:
          "Sí. La ausencia de dolor es precisamente una característica típica del cáncer testicular — cualquier bulto o cambio de tamaño nuevo en un testículo debe evaluarse con el urólogo sin esperar a que aparezca dolor.",
      },
      {
        question: "¿Perder un testículo afecta la fertilidad o la vida sexual?",
        answer:
          "El testículo restante generalmente es capaz de mantener niveles hormonales y producción de espermatozoides adecuados; cuando existe duda sobre fertilidad futura, puede recomendarse preservar una muestra de semen antes de iniciar el tratamiento.",
      },
      {
        question: "¿Con qué frecuencia debo autoexplorarme los testículos?",
        answer:
          "Se recomienda una autoexploración mensual, idealmente después de un baño caliente cuando el escroto está relajado, buscando bultos, cambios de tamaño o consistencia nuevos.",
      },
    ],
    relatedServices: ["s-orquidopexia"],
    relatedSymptoms: ["sy-dolor-testicular"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/cancer-testiculo.png",
    seo: {
      title: "Cáncer de Testículo | Urólogo en Tuxtla Gutiérrez",
      description:
        "Detección y tratamiento del cáncer testicular con el Dr. Erwin Rodríguez Komukai, Cirujano Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "cáncer de testículo Tuxtla Gutiérrez",
        "bulto en el testículo Chiapas",
        "urólogo oncológico Tuxtla Gutiérrez",
      ],
    },
  },
  {
    id: "d-enfermedad-de-peyronie",
    slug: "enfermedad-de-peyronie",
    name: "Enfermedad de Peyronie",
    technicalName: "Enfermedad de Peyronie",
    colloquialNames: ["curvatura del pene"],
    description:
      "La enfermedad de Peyronie es la formación de tejido cicatricial (placa fibrosa) dentro del pene, que provoca una curvatura anormal, generalmente dolorosa en sus primeras etapas, durante la erección. Puede afectar significativamente la vida sexual y la autoestima del paciente, y su evolución tiene típicamente una fase aguda inflamatoria seguida de una fase estable.",
    symptoms: [
      "Curvatura notoria del pene durante la erección",
      "Dolor durante la erección, especialmente en la fase inicial",
      "Placa o bulto palpable bajo la piel del pene",
      "Acortamiento percibido del pene",
      "Dificultad o dolor durante la relación sexual",
    ],
    causes: [
      "Microtraumatismos repetidos durante la actividad sexual que generan cicatrización anormal",
      "Predisposición en la forma en que cicatriza el tejido del pene en ciertos hombres",
    ],
    riskFactors: [
      "Edad media y mayor",
      "Antecedente de trauma peneano",
      "Enfermedad de Dupuytren (cicatrización anormal en la mano) asociada en algunos casos",
    ],
    mexicoStats:
      "La enfermedad de Peyronie suele estar subdiagnosticada en México por el carácter íntimo del síntoma, lo que retrasa la consulta a pesar de existir tratamientos efectivos, especialmente cuando se inician en la fase aguda.",
    complications: [
      "Disfunción eréctil asociada",
      "Dificultad mecánica o imposibilidad para la relación sexual en curvaturas severas",
      "Impacto psicológico y en la autoestima",
    ],
    treatments: [
      "Observación durante la fase aguda inflamatoria, que puede resolver parcialmente sola",
      "Tratamiento farmacológico para reducir la placa en fases seleccionadas",
      "Corrección quirúrgica de la curvatura una vez estabilizada la enfermedad",
      "Implante de prótesis de pene en casos con disfunción eréctil severa asociada",
    ],
    faqs: [
      {
        question: "¿La curvatura del pene siempre requiere cirugía?",
        answer:
          "No. Durante la fase aguda inflamatoria, que puede durar varios meses, se recomienda observación y tratamiento conservador; la cirugía se reserva para cuando la curvatura ya está estable y afecta significativamente la función sexual.",
      },
      {
        question: "¿Es normal tener una ligera curvatura en el pene sin enfermedad de Peyronie?",
        answer:
          "Sí, un grado leve de curvatura natural es común y no indica enfermedad; la enfermedad de Peyronie se considera cuando la curvatura es nueva, progresiva, dolorosa o dificulta la relación sexual.",
      },
      {
        question: "¿Por qué da vergüenza consultar esto y qué pasa si se retrasa?",
        answer:
          "Es comprensible que sea un tema incómodo de hablar, pero retrasar la consulta reduce las opciones de tratamiento conservador durante la fase aguda; entre antes se evalúe, más alternativas existen antes de llegar a necesitar cirugía.",
      },
    ],
    relatedServices: ["s-implante-de-protesis-de-pene"],
    relatedSymptoms: ["sy-problemas-de-ereccion"],
    lastReviewed: "2026-11-13",
    image: "/images/diseases/enfermedad-peyronie.png",
    seo: {
      title: "Enfermedad de Peyronie | Urólogo en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento de la curvatura del pene (enfermedad de Peyronie) con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: [
        "enfermedad de Peyronie Tuxtla Gutiérrez",
        "curvatura del pene Chiapas",
        "urólogo Peyronie Tuxtla Gutiérrez",
      ],
    },
  },
];
