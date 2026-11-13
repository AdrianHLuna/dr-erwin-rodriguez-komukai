import type { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "s-prostatectomia-radical",
    slug: "prostatectomia-radical",
    name: "Prostatectomía Radical",
    description: "Cirugía para retirar completamente la próstata y tejido circundante como tratamiento del cáncer de próstata localizado.",
    longDescription:
      "La prostatectomía radical es la cirugía que consiste en retirar por completo la glándula prostática, las vesículas seminales y, en algunos casos, los ganglios linfáticos cercanos, con el objetivo de curar el cáncer de próstata localizado. Es uno de los tratamientos con mejor tasa de curación cuando el tumor está confinado a la próstata, y puede realizarse mediante abordaje abierto o laparoscópico, dependiendo de las características de cada caso.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general o regional",
    duration: "2 a 4 horas aproximadamente",
    recoveryTime: "4 a 6 semanas para retomar actividades completas",
    isPainful: true,
    benefits: [
      "Tratamiento con intención curativa del cáncer de próstata localizado",
      "Permite confirmar la etapa exacta del tumor tras el análisis de la pieza quirúrgica",
      "Posibilidad de abordaje laparoscópico para una recuperación más favorable",
    ],
    postOpRecommendations: [
      "Uso de sonda urinaria durante los primeros días tras la cirugía",
      "Evitar esfuerzo físico intenso durante las primeras semanas",
      "Ejercicios de piso pélvico para favorecer la recuperación del control urinario",
      "Seguimiento periódico con antígeno prostático tras la cirugía",
    ],
    faqs: [
      {
        question: "¿Después de la prostatectomía quedaré incontinente?",
        answer:
          "Es común presentar incontinencia temporal en las primeras semanas tras retirar la sonda, que mejora de forma progresiva con ejercicios de piso pélvico; la gran mayoría de los pacientes recupera un buen control urinario con el tiempo.",
      },
      {
        question: "¿Existe alternativa laparoscópica a la cirugía abierta?",
        answer:
          "Sí, el abordaje laparoscópico es una opción válida en casos seleccionados, generalmente asociada a menor sangrado y una recuperación más cómoda, aunque la indicación depende de las características específicas de cada tumor y paciente.",
      },
    ],
    relatedConditions: ["d-cancer-de-prostata"],
    lastReviewed: "2026-11-13",
    image: "/images/services/prostatectomia-radical.jpg",
    seo: {
      title: "Prostatectomía Radical | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía de prostatectomía radical para cáncer de próstata localizado con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["prostatectomía radical Tuxtla Gutiérrez", "cirugía cáncer de próstata Chiapas", "urólogo prostatectomía"],
    },
  },
  {
    id: "s-rtu-prostata",
    slug: "reseccion-transuretral-de-prostata",
    name: "Resección Transuretral de Próstata",
    description: "Procedimiento endoscópico para retirar el tejido prostático que obstruye el paso de la orina en la hiperplasia prostática benigna.",
    longDescription:
      "La resección transuretral de próstata (RTU-P) es un procedimiento quirúrgico que se realiza a través de la uretra, sin incisiones externas, para retirar el tejido prostático que crece y comprime el canal urinario en la hiperplasia prostática benigna. Es considerado el estándar quirúrgico para liberar la obstrucción urinaria cuando el tratamiento médico ya no es suficiente.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional (raquídea) o general",
    duration: "45 a 90 minutos aproximadamente",
    recoveryTime: "1 a 2 semanas",
    isPainful: false,
    benefits: [
      "Mejora significativa del flujo y la fuerza del chorro urinario",
      "No requiere incisiones externas",
      "Resultados duraderos en la mayoría de los pacientes",
    ],
    postOpRecommendations: [
      "Uso de sonda urinaria por 24 a 48 horas tras el procedimiento",
      "Aumentar la ingesta de líquidos para favorecer la limpieza de la vejiga",
      "Evitar esfuerzo físico intenso durante dos semanas",
    ],
    faqs: [
      {
        question: "¿La RTU de próstata deja cicatrices visibles?",
        answer:
          "No, el procedimiento se realiza completamente a través de la uretra con instrumental endoscópico, por lo que no deja ninguna cicatriz en la piel.",
      },
      {
        question: "¿Cuánto tiempo tarda en notarse la mejoría del chorro urinario?",
        answer:
          "Muchos pacientes notan mejoría significativa en el flujo urinario desde los primeros días tras retirar la sonda, aunque la cicatrización completa de la zona toma algunas semanas más.",
      },
    ],
    relatedConditions: ["d-hiperplasia-prostatica-benigna"],
    lastReviewed: "2026-11-13",
    image: "/images/services/reseccion-transuretral-de-prostata.jpg",
    seo: {
      title: "RTU de Próstata | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía endoscópica RTU de próstata para hiperplasia prostática benigna con el Dr. Erwin Rodríguez Komukai.",
      keywords: ["RTU de próstata Tuxtla Gutiérrez", "cirugía próstata crecida Chiapas", "resección transuretral próstata"],
    },
  },
  {
    id: "s-litotripsia",
    slug: "litotripsia-extracorporea",
    name: "Litotripsia Extracorpórea",
    description: "Técnica no invasiva que utiliza ondas de choque para fragmentar cálculos renales y facilitar su expulsión natural.",
    longDescription:
      "La litotripsia extracorpórea por ondas de choque (LEOCH) es un procedimiento no invasivo que utiliza ondas de energía enfocadas desde fuera del cuerpo para fragmentar los cálculos renales en piezas pequeñas, que posteriormente se expulsan de forma natural junto con la orina. Es una excelente opción para cálculos de tamaño pequeño a mediano ubicados en el riñón.",
    type: "ambulatorio",
    anesthesiaType: "Sedación ligera o analgesia local",
    duration: "30 a 60 minutos aproximadamente",
    recoveryTime: "1 a 3 días",
    isPainful: false,
    benefits: [
      "No requiere ninguna incisión ni instrumental dentro del cuerpo",
      "Procedimiento ambulatorio con recuperación muy rápida",
      "Puede repetirse de ser necesario sin mayor riesgo adicional",
    ],
    postOpRecommendations: [
      "Hidratación abundante para favorecer la expulsión de los fragmentos",
      "Es normal observar pequeños fragmentos o sangre leve en la orina los días posteriores",
      "Filtrar la orina si se indica, para recuperar fragmentos y analizar su composición",
    ],
    faqs: [
      {
        question: "¿La litotripsia funciona para cualquier tamaño de cálculo?",
        answer:
          "Funciona mejor en cálculos pequeños a medianos; los cálculos muy grandes o de ciertas composiciones responden mejor a otras técnicas como la ureteroscopia o la nefrolitotomía percutánea.",
      },
      {
        question: "¿Es dolorosa la expulsión de los fragmentos después del procedimiento?",
        answer:
          "Puede haber molestia leve a moderada similar a un cólico leve mientras se expulsan los fragmentos, generalmente controlable con analgésicos indicados por el médico.",
      },
    ],
    relatedConditions: ["d-litiasis-renal"],
    lastReviewed: "2026-11-13",
    image: "/images/services/litotripsia-extracorporea.jpg",
    seo: {
      title: "Litotripsia Extracorpórea | Urólogo en Tuxtla Gutiérrez",
      description: "Tratamiento no invasivo de cálculos renales con ondas de choque con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["litotripsia Tuxtla Gutiérrez", "ondas de choque piedras riñón Chiapas", "tratamiento cálculos renales"],
    },
  },
  {
    id: "s-ureteroscopia-laser",
    slug: "ureteroscopia-con-laser",
    name: "Ureteroscopia con Láser",
    description: "Procedimiento endoscópico que permite localizar y fragmentar con láser cálculos ubicados en el uréter.",
    longDescription:
      "La ureteroscopia con láser es un procedimiento endoscópico en el que se introduce un instrumento delgado a través de la uretra y la vejiga hasta llegar al uréter, permitiendo visualizar directamente el cálculo y fragmentarlo con energía láser para su extracción o expulsión posterior. Es especialmente útil para cálculos ubicados en el trayecto del uréter que no responden bien a la litotripsia extracorpórea.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general",
    duration: "30 a 90 minutos aproximadamente",
    recoveryTime: "3 a 7 días",
    isPainful: false,
    benefits: [
      "Permite ver y tratar el cálculo de forma directa, con alta tasa de éxito en un solo procedimiento",
      "No requiere ninguna incisión externa",
      "Útil para cálculos que no respondieron a litotripsia extracorpórea",
    ],
    postOpRecommendations: [
      "Frecuentemente se coloca un catéter doble J temporal tras el procedimiento",
      "Hidratación abundante en los días posteriores",
      "Es normal sentir molestia leve al orinar los primeros días",
    ],
    faqs: [
      {
        question: "¿Por qué me colocan un catéter doble J después de la ureteroscopia?",
        answer:
          "El catéter doble J ayuda a mantener el uréter abierto mientras cicatriza la zona tratada y facilita el drenaje de orina del riñón hacia la vejiga; generalmente se retira en consulta después de una a dos semanas.",
      },
      {
        question: "¿La ureteroscopia resuelve el cálculo en una sola sesión?",
        answer:
          "En la mayoría de los casos sí, especialmente en cálculos de tamaño moderado; cálculos muy grandes o múltiples pueden requerir más de una sesión para resolverse por completo.",
      },
    ],
    relatedConditions: ["d-litiasis-renal"],
    lastReviewed: "2026-11-13",
    image: "/images/services/ureteroscopia-con-laser.jpg",
    seo: {
      title: "Ureteroscopia con Láser | Urólogo en Tuxtla Gutiérrez",
      description: "Tratamiento endoscópico con láser de cálculos ureterales con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["ureteroscopia láser Tuxtla Gutiérrez", "cálculo en el uréter Chiapas", "cirugía láser piedras riñón"],
    },
  },
  {
    id: "s-circuncision",
    slug: "circuncision",
    name: "Circuncisión",
    description: "Cirugía ambulatoria para retirar el prepucio, indicada en fimosis, parafimosis recurrente o por decisión personal del paciente.",
    longDescription:
      "La circuncisión es la cirugía mediante la cual se retira el prepucio que cubre el glande. En adultos, generalmente se realiza para resolver una fimosis que dificulta la higiene o las relaciones sexuales, o tras episodios repetidos de parafimosis. Es un procedimiento ambulatorio con una técnica depurada que busca minimizar las molestias postoperatorias.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local o regional",
    duration: "30 a 45 minutos aproximadamente",
    recoveryTime: "2 a 3 semanas",
    isPainful: true,
    benefits: [
      "Resuelve de forma definitiva la fimosis y previene nuevos episodios de parafimosis",
      "Facilita la higiene local y reduce el riesgo de infecciones recurrentes",
      "Procedimiento ambulatorio de recuperación relativamente corta",
    ],
    postOpRecommendations: [
      "Evitar actividad sexual durante al menos 4 semanas",
      "Mantener la zona limpia y seca según indicación médica",
      "Usar ropa interior holgada durante la recuperación",
      "Acudir a revisión si hay sangrado importante o signos de infección",
    ],
    faqs: [
      {
        question: "¿La circuncisión en adultos duele mucho después de la cirugía?",
        answer:
          "Es normal presentar molestia e inflamación durante los primeros días, generalmente bien controlada con analgésicos indicados por el médico; el dolor intenso o que empeora debe revisarse.",
      },
      {
        question: "¿Cuánto tiempo debo esperar para tener relaciones sexuales?",
        answer:
          "Se recomienda esperar al menos cuatro semanas, o hasta que el médico confirme en consulta que la cicatrización se completó adecuadamente.",
      },
    ],
    relatedConditions: ["d-fimosis-y-parafimosis"],
    lastReviewed: "2026-11-13",
    image: "/images/services/circuncision.jpg",
    seo: {
      title: "Circuncisión en Adultos | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía de circuncisión en adultos para fimosis y parafimosis con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["circuncisión adultos Tuxtla Gutiérrez", "cirugía fimosis Chiapas", "urólogo circuncisión"],
    },
  },
  {
    id: "s-varicocelectomia",
    slug: "varicocelectomia",
    name: "Varicocelectomía",
    description: "Cirugía para ligar las venas dilatadas del cordón espermático y tratar el varicocele sintomático o asociado a infertilidad.",
    longDescription:
      "La varicocelectomía es la cirugía que consiste en ligar o sellar las venas dilatadas del cordón espermático responsables del varicocele, con el objetivo de aliviar el dolor, prevenir la atrofia testicular progresiva y, en muchos casos, mejorar los parámetros del espermatograma en hombres con infertilidad asociada al varicocele.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia regional o general",
    duration: "45 a 60 minutos aproximadamente",
    recoveryTime: "1 a 2 semanas",
    isPainful: false,
    benefits: [
      "Alivia el dolor o pesadez testicular asociada al varicocele",
      "Puede mejorar la calidad del espermatograma en casos de infertilidad",
      "Procedimiento ambulatorio con técnica microquirúrgica de alta precisión",
    ],
    postOpRecommendations: [
      "Uso de suspensorio escrotal durante los primeros días",
      "Evitar esfuerzo físico intenso y relaciones sexuales por 2 a 3 semanas",
      "Aplicar hielo local las primeras 48 horas para reducir inflamación",
    ],
    faqs: [
      {
        question: "¿La varicocelectomía garantiza un embarazo?",
        answer:
          "No lo garantiza, pero mejora los parámetros espermáticos en una proporción significativa de los pacientes, aumentando las probabilidades naturales de embarazo cuando el varicocele era un factor contribuyente a la infertilidad.",
      },
      {
        question: "¿El varicocele puede regresar después de la cirugía?",
        answer:
          "Es poco frecuente con la técnica microquirúrgica actual, aunque existe un pequeño porcentaje de recurrencia que se vigila en las consultas de seguimiento posteriores.",
      },
    ],
    relatedConditions: ["d-varicocele"],
    lastReviewed: "2026-11-13",
    image: "/images/services/varicocelectomia.jpg",
    seo: {
      title: "Varicocelectomía | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía de varicocele (varicocelectomía) con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["varicocelectomía Tuxtla Gutiérrez", "cirugía varicocele Chiapas", "varicocele infertilidad urólogo"],
    },
  },
  {
    id: "s-biopsia-de-prostata",
    slug: "biopsia-de-prostata",
    name: "Biopsia de Próstata",
    description: "Procedimiento diagnóstico que toma pequeñas muestras de tejido prostático para confirmar o descartar la presencia de cáncer.",
    longDescription:
      "La biopsia de próstata es el procedimiento que permite confirmar o descartar el diagnóstico de cáncer de próstata, tomando pequeñas muestras de tejido guiadas por ultrasonido para su análisis bajo microscopio. Se indica cuando el antígeno prostático está elevado, el tacto rectal es sospechoso, o ambos, y es el único método que da un diagnóstico definitivo.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local",
    duration: "15 a 20 minutos aproximadamente",
    recoveryTime: "1 a 2 días",
    isPainful: false,
    benefits: [
      "Único método que confirma o descarta el diagnóstico de cáncer de próstata con certeza",
      "Procedimiento ambulatorio guiado por ultrasonido en tiempo real",
      "Permite definir el grado y la agresividad del tumor si se confirma el diagnóstico",
    ],
    postOpRecommendations: [
      "Tomar el antibiótico profiláctico indicado antes y después del procedimiento",
      "Es normal observar sangre leve en orina, semen o heces los días posteriores",
      "Evitar esfuerzo físico intenso las 24 a 48 horas siguientes",
    ],
    faqs: [
      {
        question: "¿La biopsia de próstata es muy dolorosa?",
        answer:
          "La mayoría de los pacientes la describen como una molestia tolerable gracias a la anestesia local aplicada antes de tomar las muestras, más que como un dolor intenso.",
      },
      {
        question: "¿Un antígeno prostático elevado obliga siempre a hacer biopsia?",
        answer:
          "No necesariamente de forma inmediata; el urólogo valora el valor exacto, su tendencia en el tiempo, el tacto rectal y otros estudios complementarios antes de decidir si la biopsia es el siguiente paso adecuado.",
      },
    ],
    relatedConditions: ["d-cancer-de-prostata"],
    lastReviewed: "2026-11-13",
    image: "/images/services/biopsia-de-prostata.jpg",
    seo: {
      title: "Biopsia de Próstata | Urólogo en Tuxtla Gutiérrez",
      description: "Biopsia de próstata guiada por ultrasonido con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["biopsia de próstata Tuxtla Gutiérrez", "antígeno prostático elevado Chiapas", "diagnóstico cáncer de próstata"],
    },
  },
  {
    id: "s-vasectomia",
    slug: "vasectomia",
    name: "Vasectomía",
    description: "Método anticonceptivo definitivo para el hombre, que interrumpe el paso de los espermatozoides mediante un procedimiento ambulatorio sencillo.",
    longDescription:
      "La vasectomía es un procedimiento quirúrgico ambulatorio y de corta duración en el que se corta y sella el conducto deferente de cada lado, interrumpiendo el paso de los espermatozoides al semen. Es uno de los métodos anticonceptivos más efectivos y seguros disponibles, pensado para hombres que han decidido, de forma informada, no tener más hijos.",
    type: "consultorio",
    anesthesiaType: "Anestesia local",
    duration: "20 a 30 minutos aproximadamente",
    recoveryTime: "3 a 5 días para actividades normales",
    isPainful: false,
    benefits: [
      "Método anticonceptivo con una de las tasas de efectividad más altas que existen",
      "Procedimiento ambulatorio y de recuperación rápida",
      "No afecta la producción hormonal, el deseo sexual ni la capacidad de erección",
    ],
    postOpRecommendations: [
      "Uso de suspensorio escrotal y hielo local los primeros días",
      "Evitar esfuerzo físico intenso durante una semana",
      "Usar un método anticonceptivo adicional hasta confirmar ausencia de espermatozoides en el espermatograma de control",
    ],
    faqs: [
      {
        question: "¿La vasectomía afecta el deseo sexual o la erección?",
        answer:
          "No. La vasectomía solo interrumpe el paso de los espermatozoides al semen; la producción hormonal, el deseo sexual, la erección y la eyaculación se mantienen completamente normales.",
      },
      {
        question: "¿Después de la vasectomía quedo estéril de inmediato?",
        answer:
          "No de inmediato: pueden quedar espermatozoides residuales en el trayecto durante varias semanas, por lo que se requiere un espermatograma de control antes de suspender otro método anticonceptivo.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-13",
    image: "/images/services/vasectomia.jpg",
    seo: {
      title: "Vasectomía | Urólogo en Tuxtla Gutiérrez",
      description: "Vasectomía como método anticonceptivo definitivo con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["vasectomía Tuxtla Gutiérrez", "anticoncepción masculina Chiapas", "urólogo vasectomía"],
    },
  },
  {
    id: "s-cistoscopia",
    slug: "cistoscopia",
    name: "Cistoscopia",
    description: "Procedimiento endoscópico que permite visualizar directamente el interior de la uretra y la vejiga con fines diagnósticos.",
    longDescription:
      "La cistoscopia es un procedimiento endoscópico en el que se introduce un instrumento delgado con cámara a través de la uretra para observar directamente el interior de la uretra y la vejiga. Permite identificar tumores, cálculos, estenosis o fuentes de sangrado que no siempre se detectan con estudios de imagen externos, y es una herramienta clave de seguimiento tras el tratamiento de ciertos tumores vesicales.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local con gel anestésico",
    duration: "10 a 20 minutos aproximadamente",
    recoveryTime: "Mismo día",
    isPainful: false,
    benefits: [
      "Visualización directa del interior de la uretra y la vejiga",
      "Procedimiento ambulatorio sin necesidad de incisiones",
      "Esencial para el seguimiento de pacientes con antecedente de tumor vesical",
    ],
    postOpRecommendations: [
      "Puede presentarse ardor leve al orinar las primeras horas",
      "Hidratación abundante tras el procedimiento",
      "Acudir a revisión si aparece fiebre o sangrado importante",
    ],
    faqs: [
      {
        question: "¿La cistoscopia es un procedimiento doloroso?",
        answer:
          "La mayoría de los pacientes refieren solo molestia leve gracias al gel anestésico local aplicado antes del procedimiento, no un dolor significativo.",
      },
      {
        question: "¿Con qué frecuencia se repite la cistoscopia de seguimiento?",
        answer:
          "Depende del motivo original; en pacientes con antecedente de tumor vesical, el urólogo define un calendario de vigilancia periódica basado en el tipo y riesgo del tumor tratado.",
      },
    ],
    relatedConditions: ["d-infeccion-de-vias-urinarias", "d-prostatitis", "d-cancer-de-vejiga", "d-its"],
    lastReviewed: "2026-11-13",
    image: "/images/services/cistoscopia.jpg",
    seo: {
      title: "Cistoscopia | Urólogo en Tuxtla Gutiérrez",
      description: "Cistoscopia diagnóstica y de seguimiento con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cistoscopia Tuxtla Gutiérrez", "estudio de vejiga Chiapas", "urólogo cistoscopia"],
    },
  },
  {
    id: "s-rtu-tumor-vesical",
    slug: "reseccion-transuretral-de-tumor-vesical",
    name: "Resección Transuretral de Tumor Vesical (RTU-V)",
    description: "Procedimiento endoscópico que retira el tumor de vejiga a través de la uretra, con fines diagnósticos y terapéuticos.",
    longDescription:
      "La resección transuretral de tumor vesical (RTU-V) es el procedimiento quirúrgico de primera línea ante un tumor de vejiga, realizado completamente a través de la uretra con instrumental endoscópico. Permite retirar el tumor visible y obtener tejido para determinar con precisión el tipo y la profundidad de invasión, información esencial para definir el tratamiento posterior.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general",
    duration: "30 a 60 minutos aproximadamente",
    recoveryTime: "1 a 2 semanas",
    isPainful: false,
    benefits: [
      "Permite tratar el tumor visible y obtener diagnóstico de profundidad en el mismo procedimiento",
      "No requiere incisiones externas",
      "Base indispensable para definir el tratamiento posterior adecuado",
    ],
    postOpRecommendations: [
      "Uso de sonda urinaria durante las primeras horas o días según el caso",
      "Hidratación abundante en los días posteriores",
      "Seguimiento cistoscópico programado tras la cirugía",
    ],
    faqs: [
      {
        question: "¿La RTU-V cura el cáncer de vejiga por completo?",
        answer:
          "En tumores superficiales puede ser el tratamiento definitivo combinado con instilaciones; en tumores que invaden capas más profundas, suele requerir tratamiento adicional según lo que muestre el análisis de tejido.",
      },
      {
        question: "¿Por qué necesito revisiones cistoscópicas después de la cirugía?",
        answer:
          "Porque el cáncer de vejiga tiene una tendencia relevante a recurrir en otras zonas de la vejiga, por lo que la vigilancia periódica con cistoscopia permite detectar y tratar cualquier recurrencia de forma temprana.",
      },
    ],
    relatedConditions: ["d-cancer-de-vejiga"],
    lastReviewed: "2026-11-13",
    image: "/images/services/reseccion-transuretral-de-tumor-vesical.jpg",
    seo: {
      title: "RTU de Tumor Vesical | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía endoscópica de tumor vesical (RTU-V) con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["RTU tumor vesical Tuxtla Gutiérrez", "cirugía cáncer de vejiga Chiapas", "urólogo tumor de vejiga"],
    },
  },
  {
    id: "s-nefrectomia",
    slug: "nefrectomia",
    name: "Nefrectomía (Parcial o Total)",
    description: "Cirugía para retirar parcial o totalmente un riñón afectado, generalmente por un tumor renal.",
    longDescription:
      "La nefrectomía es la cirugía para retirar un riñón de forma parcial (conservando el tejido sano restante) o total, indicada principalmente en el tratamiento del cáncer de riñón. Siempre que las características del tumor lo permiten, se prefiere el abordaje parcial para preservar la mayor cantidad posible de función renal, reservando la nefrectomía total para tumores que comprometen la mayor parte del riñón.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "2 a 4 horas aproximadamente",
    recoveryTime: "3 a 6 semanas",
    isPainful: true,
    benefits: [
      "Tratamiento con intención curativa para el cáncer renal localizado",
      "El abordaje parcial preserva función renal cuando es técnicamente posible",
      "Puede realizarse por vía laparoscópica en casos seleccionados",
    ],
    postOpRecommendations: [
      "Hospitalización de varios días para vigilancia postoperatoria",
      "Evitar esfuerzo físico intenso durante al menos 4 a 6 semanas",
      "Seguimiento periódico de la función renal y estudios de imagen de control",
    ],
    faqs: [
      {
        question: "¿Puedo vivir normalmente con un solo riñón?",
        answer:
          "Sí, el riñón restante generalmente es capaz de asumir la función necesaria para una vida normal, siempre que se mantenga seguimiento médico periódico de la función renal.",
      },
      {
        question: "¿Cuándo se prefiere nefrectomía parcial en lugar de total?",
        answer:
          "Siempre que el tamaño, la ubicación y las características del tumor lo permitan, se prefiere la nefrectomía parcial para conservar la mayor cantidad posible de tejido renal sano funcional.",
      },
    ],
    relatedConditions: ["d-cancer-de-rinon"],
    lastReviewed: "2026-11-13",
    image: "/images/services/nefrectomia.jpg",
    seo: {
      title: "Nefrectomía Parcial o Total | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía renal (nefrectomía) para cáncer de riñón con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["nefrectomía Tuxtla Gutiérrez", "cirugía de riñón Chiapas", "cirugía cáncer renal urólogo"],
    },
  },
  {
    id: "s-hidrocelectomia",
    slug: "hidrocelectomia",
    name: "Hidrocelectomía",
    description: "Cirugía ambulatoria para corregir el hidrocele, la acumulación de líquido alrededor del testículo.",
    longDescription:
      "La hidrocelectomía es la cirugía indicada para corregir el hidrocele, una acumulación de líquido entre las capas que envuelven al testículo que provoca aumento de volumen del escroto. Cuando el hidrocele es grande, molesto o afecta la calidad de vida, la corrección quirúrgica es un procedimiento ambulatorio sencillo y con muy buenos resultados.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia regional o general",
    duration: "30 a 45 minutos aproximadamente",
    recoveryTime: "1 a 2 semanas",
    isPainful: false,
    benefits: [
      "Resuelve de forma definitiva el aumento de volumen escrotal",
      "Procedimiento ambulatorio con baja tasa de recurrencia",
      "Mejora la comodidad y la calidad de vida del paciente",
    ],
    postOpRecommendations: [
      "Uso de suspensorio escrotal durante la primera semana",
      "Aplicar hielo local las primeras 48 horas",
      "Evitar esfuerzo físico intenso durante dos semanas",
    ],
    faqs: [
      {
        question: "¿El hidrocele puede resolverse sin cirugía?",
        answer:
          "En adultos, a diferencia de algunos casos pediátricos, el hidrocele rara vez se resuelve solo; cuando es grande o sintomático, la cirugía es la opción más efectiva y definitiva.",
      },
      {
        question: "¿El hidrocele es lo mismo que el varicocele?",
        answer:
          "No. El hidrocele es acumulación de líquido alrededor del testículo, mientras que el varicocele es dilatación de las venas del cordón espermático; son condiciones distintas, aunque ambas provocan aumento de volumen en el escroto.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-13",
    image: "/images/services/hidrocelectomia.jpg",
    seo: {
      title: "Hidrocelectomía | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía de hidrocele (hidrocelectomía) con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["hidrocelectomía Tuxtla Gutiérrez", "cirugía hidrocele Chiapas", "urólogo hidrocele"],
    },
  },
  {
    id: "s-orquidopexia",
    slug: "orquidopexia",
    name: "Orquidopexia",
    description: "Cirugía para fijar el testículo en su posición escrotal correcta, indicada en testículo no descendido o torsión testicular.",
    longDescription:
      "La orquidopexia es la cirugía mediante la cual se fija el testículo en su posición correcta dentro del escroto. Se indica principalmente cuando el testículo no ha descendido completamente (criptorquidia) o como parte del tratamiento urgente de una torsión testicular, donde además de destorcer el testículo es necesario fijarlo para prevenir una recurrencia.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general o regional",
    duration: "45 a 60 minutos aproximadamente",
    recoveryTime: "2 a 3 semanas",
    isPainful: true,
    benefits: [
      "Previene complicaciones a largo plazo del testículo no descendido",
      "En torsión testicular, puede preservar la función del testículo si se actúa a tiempo",
      "Fija el testículo para prevenir una nueva torsión del mismo lado o del contralateral",
    ],
    postOpRecommendations: [
      "Uso de suspensorio escrotal durante la recuperación",
      "Evitar esfuerzo físico intenso durante al menos dos semanas",
      "Vigilancia del tamaño y la consistencia testicular en consultas de seguimiento",
    ],
    faqs: [
      {
        question: "¿La torsión testicular es una urgencia real?",
        answer:
          "Sí, es una de las verdaderas urgencias urológicas: el testículo pierde su riego sanguíneo y las primeras horas son determinantes para poder salvarlo, por lo que el dolor testicular súbito e intenso nunca debe esperarse a 'ver si pasa'.",
      },
      {
        question: "¿Un testículo no descendido detectado en la infancia tardía aún se puede corregir?",
        answer:
          "Sí, puede corregirse quirúrgicamente a cualquier edad, aunque entre más temprano se realice, mejor es el pronóstico para la función testicular futura.",
      },
    ],
    relatedConditions: ["d-cancer-de-testiculo"],
    lastReviewed: "2026-11-13",
    image: "/images/services/orquidopexia.jpg",
    seo: {
      title: "Orquidopexia | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía de orquidopexia para testículo no descendido o torsión testicular con el Dr. Erwin Rodríguez Komukai.",
      keywords: ["orquidopexia Tuxtla Gutiérrez", "torsión testicular urgencia Chiapas", "testículo no descendido urólogo"],
    },
  },
  {
    id: "s-cateter-doble-j",
    slug: "colocacion-de-cateter-doble-j",
    name: "Colocación de Catéter Doble J",
    description: "Procedimiento endoscópico que coloca un catéter interno temporal para mantener abierto el uréter y permitir el drenaje de orina.",
    longDescription:
      "La colocación de catéter doble J es un procedimiento endoscópico en el que se introduce un catéter interno flexible, con ambos extremos enrollados en espiral, que conecta el riñón con la vejiga para garantizar el drenaje de orina cuando el uréter está obstruido o recién intervenido. Se utiliza con frecuencia tras procedimientos como la ureteroscopia o en casos de obstrucción por cálculos o estenosis.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o sedación",
    duration: "15 a 30 minutos aproximadamente",
    recoveryTime: "Variable, según el motivo de colocación",
    isPainful: false,
    benefits: [
      "Garantiza el drenaje de orina mientras se resuelve la causa de la obstrucción",
      "Procedimiento endoscópico sin incisiones externas",
      "Puede colocarse de forma urgente en casos de obstrucción con dolor severo",
    ],
    postOpRecommendations: [
      "Es común sentir molestia leve al orinar o necesidad de orinar con más frecuencia mientras el catéter está colocado",
      "Hidratación abundante",
      "No olvidar la fecha programada para su retiro, ya que no debe dejarse de forma indefinida",
    ],
    faqs: [
      {
        question: "¿El catéter doble J se siente o causa molestia constante?",
        answer:
          "Algunos pacientes sí notan molestia leve, sensación de urgencia urinaria o dolor lumbar leve mientras lo tienen colocado; estas molestias son esperadas y mejoran al retirarlo en el tiempo programado.",
      },
      {
        question: "¿Cuánto tiempo puede permanecer colocado el catéter doble J?",
        answer:
          "Depende del motivo de colocación, pero generalmente se retira o se cambia entre varias semanas y pocos meses después; no debe dejarse colocado de forma indefinida sin seguimiento médico.",
      },
    ],
    relatedConditions: ["d-estenosis-uretral", "d-litiasis-renal"],
    lastReviewed: "2026-11-13",
    image: "/images/services/colocacion-de-cateter-doble-j.jpg",
    seo: {
      title: "Colocación de Catéter Doble J | Urólogo en Tuxtla Gutiérrez",
      description: "Colocación endoscópica de catéter doble J con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["catéter doble J Tuxtla Gutiérrez", "obstrucción ureteral Chiapas", "urólogo catéter ureteral"],
    },
  },
  {
    id: "s-cirugia-de-incontinencia",
    slug: "cirugia-de-incontinencia",
    name: "Cirugía de Incontinencia (Slings/Mallas)",
    description: "Procedimiento quirúrgico que utiliza cintas de soporte (slings) para corregir la incontinencia urinaria cuando otros tratamientos no fueron suficientes.",
    longDescription:
      "La cirugía de incontinencia mediante slings o mallas de soporte consiste en colocar una cinta que da sostén a la uretra o la vejiga, ayudando a controlar las fugas involuntarias de orina en pacientes en quienes el tratamiento conservador (ejercicios de piso pélvico, medicamentos) no logró un control suficiente. La técnica específica se adapta al tipo de incontinencia que presenta cada paciente.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general",
    duration: "45 a 90 minutos aproximadamente",
    recoveryTime: "2 a 4 semanas",
    isPainful: false,
    benefits: [
      "Mejora significativa o resolución del control urinario en pacientes seleccionados",
      "Técnica mínimamente invasiva en la mayoría de los casos",
      "Impacto directo y positivo en la calidad de vida diaria",
    ],
    postOpRecommendations: [
      "Evitar esfuerzo físico intenso y levantar peso durante varias semanas",
      "Seguimiento del vaciado urinario en el posoperatorio inmediato",
      "Acudir a consulta de control para evaluar la respuesta al tratamiento",
    ],
    faqs: [
      {
        question: "¿Esta cirugía es solo para mujeres?",
        answer:
          "No, aunque es más conocida en el contexto de incontinencia femenina, existen técnicas con slings también indicadas en hombres con incontinencia urinaria, particularmente tras cirugía prostática.",
      },
      {
        question: "¿Es la primera opción para tratar la incontinencia urinaria?",
        answer:
          "No, generalmente se recomienda primero el manejo conservador (ejercicios de piso pélvico, ajustes de hábitos, medicamentos); la cirugía se reserva para cuando estas medidas no logran un control adecuado.",
      },
    ],
    relatedConditions: ["d-vejiga-hiperactiva"],
    lastReviewed: "2026-11-13",
    image: "/images/services/cirugia-de-incontinencia.jpg",
    seo: {
      title: "Cirugía de Incontinencia | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía de incontinencia con slings/mallas con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cirugía de incontinencia Tuxtla Gutiérrez", "slings urinarios Chiapas", "urólogo incontinencia"],
    },
  },
  {
    id: "s-nefrolitotomia-percutanea",
    slug: "nefrolitotomia-percutanea",
    name: "Nefrolitotomía Percutánea",
    description: "Cirugía mínimamente invasiva que extrae cálculos renales grandes a través de una pequeña incisión directa al riñón.",
    longDescription:
      "La nefrolitotomía percutánea es una técnica quirúrgica mínimamente invasiva en la que se accede directamente al riñón a través de una pequeña incisión en la espalda, permitiendo fragmentar y extraer cálculos grandes o complejos que no responden bien a otras técnicas como la litotripsia o la ureteroscopia. Es el tratamiento de elección para cálculos renales de gran tamaño.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "1 a 2 horas aproximadamente",
    recoveryTime: "1 a 2 semanas",
    isPainful: true,
    benefits: [
      "Permite tratar en una sola intervención cálculos grandes que otras técnicas no resuelven",
      "Alta tasa de eliminación completa del cálculo en un solo procedimiento",
      "Incisión mínima comparada con la cirugía renal abierta tradicional",
    ],
    postOpRecommendations: [
      "Hospitalización breve para vigilancia postoperatoria",
      "Frecuentemente se deja un drenaje temporal que se retira antes del alta o en los días siguientes",
      "Evitar esfuerzo físico intenso durante dos semanas",
    ],
    faqs: [
      {
        question: "¿Cuándo se prefiere esta cirugía sobre la litotripsia?",
        answer:
          "Se prefiere cuando el cálculo es grande, múltiple o de una composición que responde mal a las ondas de choque; en esos casos, el acceso directo al riñón ofrece mejores tasas de resolución completa.",
      },
      {
        question: "¿Deja una cicatriz grande en la espalda?",
        answer:
          "No, el acceso es a través de una incisión pequeña, de aproximadamente un centímetro, muy distinta a la cirugía renal abierta tradicional que sí requiere incisiones más amplias.",
      },
    ],
    relatedConditions: ["d-litiasis-renal"],
    lastReviewed: "2026-11-13",
    image: "/images/services/nefrolitotomia-percutanea.jpg",
    seo: {
      title: "Nefrolitotomía Percutánea | Tuxtla Gutiérrez",
      description: "Cirugía percutánea para cálculos renales grandes con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["nefrolitotomía percutánea Tuxtla Gutiérrez", "cálculo renal grande Chiapas", "cirugía piedra riñón"],
    },
  },
  {
    id: "s-implante-de-protesis-de-pene",
    slug: "implante-de-protesis-de-pene",
    name: "Implante de Prótesis de Pene",
    description: "Cirugía que coloca un implante interno para restaurar la capacidad de erección en disfunción eréctil severa que no responde a otros tratamientos.",
    longDescription:
      "El implante de prótesis de pene es una cirugía indicada en hombres con disfunción eréctil severa que no respondieron a tratamientos farmacológicos ni a terapias de segunda línea, o en casos seleccionados de enfermedad de Peyronie con disfunción eréctil asociada. Consiste en colocar un dispositivo interno que permite lograr una erección funcional de forma mecánica, con muy altos niveles de satisfacción reportados por los pacientes.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general",
    duration: "1 a 2 horas aproximadamente",
    recoveryTime: "4 a 6 semanas",
    isPainful: true,
    benefits: [
      "Solución definitiva para la disfunción eréctil severa que no responde a otros tratamientos",
      "Altas tasas de satisfacción reportadas tanto por el paciente como por su pareja",
      "Preserva la sensibilidad y la capacidad de eyaculación y orgasmo",
    ],
    postOpRecommendations: [
      "Evitar actividad física intensa y relaciones sexuales durante el periodo indicado por el médico (generalmente 4 a 6 semanas)",
      "Seguir las instrucciones de activación del dispositivo según el tipo de prótesis colocada",
      "Acudir a las consultas de seguimiento programadas",
    ],
    faqs: [
      {
        question: "¿El implante de prótesis es el primer tratamiento para la disfunción eréctil?",
        answer:
          "No, es una opción que se considera cuando los tratamientos farmacológicos y otras terapias de segunda línea no lograron resultados satisfactorios; se reserva para casos de disfunción eréctil severa y persistente.",
      },
      {
        question: "¿El implante se nota o es incómodo en la vida diaria?",
        answer:
          "La mayoría de los pacientes reportan que el dispositivo no es perceptible en actividades cotidianas y que la satisfacción con la función sexual mejora de forma muy significativa tras la recuperación completa.",
      },
    ],
    relatedConditions: ["d-disfuncion-erectil", "d-enfermedad-de-peyronie"],
    lastReviewed: "2026-11-13",
    image: "/images/services/implante-de-protesis-de-pene.jpg",
    seo: {
      title: "Implante de Prótesis de Pene | Urólogo en Tuxtla Gutiérrez",
      description: "Cirugía de implante de prótesis de pene con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["implante de prótesis de pene Tuxtla Gutiérrez", "disfunción eréctil severa Chiapas", "urólogo prótesis peneana"],
    },
  },
  {
    id: "s-ultrasonido-rastreo",
    slug: "ultrasonido-de-rastreo",
    name: "Ultrasonido de Rastreo en Casos Específicos",
    description: "Estudio de imagen no invasivo utilizado para evaluar próstata, riñones, vejiga o testículos según el padecimiento a estudiar.",
    longDescription:
      "El ultrasonido de rastreo urológico es un estudio de imagen no invasivo que permite evaluar estructuras como los riñones, la vejiga, la próstata o los testículos, según el motivo de consulta. Es frecuentemente el primer estudio de imagen solicitado ante síntomas urinarios, dolor testicular o seguimiento de hallazgos previos, por ser rápido, seguro y sin radiación.",
    type: "ambulatorio",
    anesthesiaType: "No requiere anestesia",
    duration: "15 a 30 minutos aproximadamente",
    recoveryTime: "Ninguno, se reincorpora de inmediato a sus actividades",
    isPainful: false,
    benefits: [
      "Estudio no invasivo y sin radiación",
      "Resultados disponibles para su interpretación en la misma consulta",
      "Útil tanto para diagnóstico inicial como para seguimiento de hallazgos previos",
    ],
    postOpRecommendations: [
      "Para ultrasonido vesical o prostático, generalmente se solicita acudir con la vejiga llena",
      "Ningún cuidado especial posterior al estudio",
    ],
    faqs: [
      {
        question: "¿El ultrasonido urológico requiere alguna preparación especial?",
        answer:
          "Depende del área a evaluar: para valorar la vejiga o la próstata suele pedirse llegar con la vejiga llena, mientras que para evaluar los testículos generalmente no se requiere ninguna preparación previa.",
      },
      {
        question: "¿El ultrasonido sustituye a otros estudios como la biopsia?",
        answer:
          "No. El ultrasonido es una herramienta de evaluación inicial y seguimiento, pero cuando existe sospecha de un tumor, estudios como la biopsia siguen siendo necesarios para un diagnóstico definitivo.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-13",
    image: "/images/services/ultrasonido-de-rastreo.jpg",
    seo: {
      title: "Ultrasonido Urológico | Urólogo en Tuxtla Gutiérrez",
      description: "Ultrasonido de rastreo urológico (renal, vesical, prostático, testicular) con el Dr. Erwin Rodríguez Komukai.",
      keywords: ["ultrasonido urológico Tuxtla Gutiérrez", "ultrasonido prostático Chiapas", "ultrasonido renal urólogo"],
    },
  },
];
