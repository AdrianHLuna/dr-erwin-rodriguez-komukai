import type { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "sy-dolor-al-orinar",
    slug: "dolor-al-orinar",
    name: "Dolor al Orinar",
    colloquialNames: ["ardor al orinar", "disuria"],
    description:
      "El dolor o ardor al orinar es una molestia en la uretra o la vejiga que aparece durante o inmediatamente después de orinar. Es uno de los síntomas urológicos más frecuentes y, aunque suele asociarse a una infección urinaria, también puede deberse a prostatitis, infecciones de transmisión sexual o irritación local.",
    causes: [
      "Infección de vías urinarias",
      "Prostatitis",
      "Infecciones de transmisión sexual",
      "Irritación química o por productos de higiene local",
    ],
    alarmSigns: [
      "Fiebre alta asociada",
      "Dolor en el costado o la espalda baja además del ardor",
      "Sangre visible en la orina",
      "Incapacidad para orinar a pesar de sentir la necesidad",
    ],
    whyConsult:
      "El dolor al orinar casi nunca se resuelve solo y, cuando se acompaña de fiebre o dolor en el costado, puede indicar que la infección ya subió hacia el riñón — una valoración oportuna evita complicaciones y define el tratamiento correcto según la causa exacta.",
    faqs: [
      {
        question: "¿El ardor al orinar siempre es una infección?",
        answer:
          "Es la causa más frecuente, pero no la única: la prostatitis, algunas infecciones de transmisión sexual y la irritación local también pueden provocar ardor al orinar sin que exista una infección urinaria clásica.",
      },
      {
        question: "¿Puedo automedicarme con el mismo antibiótico de la vez pasada?",
        answer:
          "No es recomendable. Usar el mismo antibiótico sin confirmar que se trata del mismo problema puede enmascarar síntomas de una causa distinta y favorecer resistencia bacteriana; lo correcto es una valoración y, si aplica, un urocultivo.",
      },
    ],
    relatedConditions: ["d-infeccion-de-vias-urinarias", "d-prostatitis", "d-its"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/dolor-al-orinar.jpg",
    seo: {
      title: "Dolor al Orinar | Urólogo en Tuxtla Gutiérrez",
      description: "¿Ardor o dolor al orinar? Conoce las causas y cuándo consultar con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["dolor al orinar Tuxtla Gutiérrez", "ardor al orinar Chiapas", "disuria urólogo"],
    },
  },
  {
    id: "sy-sangre-en-la-orina",
    slug: "sangre-en-la-orina",
    name: "Sangre en la Orina",
    colloquialNames: ["orina con sangre", "hematuria"],
    description:
      "La presencia de sangre en la orina, visible a simple vista o detectada en un análisis de laboratorio, es un síntoma que siempre debe estudiarse, incluso si no se acompaña de dolor. Puede originarse en cualquier punto del tracto urinario — riñones, uréteres, vejiga, próstata o uretra — y sus causas van desde infecciones hasta tumores.",
    causes: [
      "Infección de vías urinarias",
      "Cálculos renales o ureterales",
      "Cáncer de vejiga o de riñón",
      "Hiperplasia prostática benigna",
    ],
    alarmSigns: [
      "Sangrado abundante o con coágulos",
      "Dolor intenso asociado en el costado",
      "Imposibilidad para orinar por obstrucción con coágulos",
      "Sangrado persistente por varios días",
    ],
    whyConsult:
      "La sangre en la orina sin dolor es precisamente el patrón clásico de alarma del cáncer de vejiga o de riñón, por lo que nunca debe asumirse como 'solo una infección' sin la evaluación urológica correspondiente, incluso si el episodio fue único y ya no se repitió.",
    faqs: [
      {
        question: "¿Si la sangre en la orina desapareció sola, ya no es necesario revisarlo?",
        answer:
          "No es correcto asumir eso. Un episodio de sangre en la orina que desaparece por sí solo igual debe estudiarse, ya que algunas causas importantes, como ciertos tumores, pueden sangrar de forma intermitente.",
      },
      {
        question: "¿La sangre en la orina siempre se ve a simple vista?",
        answer:
          "No, en muchos casos solo se detecta mediante un examen general de orina (hematuria microscópica), por lo que un resultado de laboratorio anormal también debe tomarse en serio aunque la orina se vea de color normal.",
      },
    ],
    relatedConditions: ["d-cancer-de-vejiga", "d-cancer-de-rinon", "d-litiasis-renal"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/sangre-en-la-orina.jpg",
    seo: {
      title: "Sangre en la Orina | Urólogo en Tuxtla Gutiérrez",
      description: "¿Sangre en la orina? Conoce las causas y la importancia de evaluarla con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["sangre en la orina Tuxtla Gutiérrez", "hematuria Chiapas", "orina con sangre urólogo"],
    },
  },
  {
    id: "sy-dificultad-para-orinar",
    slug: "dificultad-para-orinar",
    name: "Dificultad para Orinar",
    colloquialNames: ["chorro débil", "cuesta trabajo orinar"],
    description:
      "La dificultad para orinar se manifiesta como un chorro urinario débil, intermitente o con esfuerzo notorio para iniciar la micción. Es uno de los síntomas más característicos de obstrucción del tracto urinario inferior, ya sea por crecimiento prostático o por estrechez de la uretra, y tiende a empeorar de forma progresiva si no se atiende.",
    causes: [
      "Hiperplasia prostática benigna",
      "Estenosis uretral",
      "Cáncer de próstata en etapas avanzadas",
    ],
    alarmSigns: [
      "Incapacidad total para orinar (retención urinaria)",
      "Dolor abdominal bajo intenso asociado",
      "Fiebre acompañante",
    ],
    whyConsult:
      "Un chorro urinario que se debilita de forma progresiva no es simplemente 'cosas de la edad' — refleja una obstrucción real en el tracto urinario que, si no se estudia y trata, puede progresar hasta la retención urinaria completa o dañar los riñones con el tiempo.",
    faqs: [
      {
        question: "¿Es normal que el chorro de orina se vuelva más débil con los años?",
        answer:
          "Es frecuente, pero no debe considerarse simplemente normal sin evaluación: generalmente refleja un crecimiento prostático o una estrechez uretral que tiene tratamiento y no debe dejarse progresar sin atención.",
      },
      {
        question: "¿Cuándo la dificultad para orinar se vuelve una urgencia?",
        answer:
          "Cuando la dificultad progresa hasta la imposibilidad total para orinar, acompañada de dolor abdominal bajo intenso — eso es una retención urinaria aguda y requiere atención médica inmediata.",
      },
    ],
    relatedConditions: ["d-hiperplasia-prostatica-benigna", "d-estenosis-uretral", "d-cancer-de-prostata"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/dificultad-para-orinar.jpg",
    seo: {
      title: "Dificultad para Orinar | Urólogo en Tuxtla Gutiérrez",
      description: "¿Chorro urinario débil o dificultad para orinar? Causas y tratamiento con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["dificultad para orinar Tuxtla Gutiérrez", "chorro urinario débil Chiapas", "urólogo próstata"],
    },
  },
  {
    id: "sy-dolor-testicular",
    slug: "dolor-testicular",
    name: "Dolor Testicular",
    colloquialNames: ["dolor de testículo", "dolor en los testículos"],
    description:
      "El dolor testicular puede ser agudo y súbito, o crónico y de bajo grado, y sus causas van desde infecciones leves hasta urgencias quirúrgicas como la torsión testicular. Distinguir entre ambos escenarios es crítico, porque el manejo y la urgencia del tratamiento son completamente distintos.",
    causes: [
      "Torsión testicular",
      "Varicocele",
      "Epididimitis u orquitis (infección o inflamación)",
      "Infecciones de transmisión sexual",
      "Cáncer de testículo (generalmente indoloro, pero puede acompañarse de molestia)",
    ],
    alarmSigns: [
      "Dolor testicular súbito, intenso y de inicio brusco",
      "Náusea y vómito asociados al dolor",
      "Testículo muy inflamado, elevado o con cambio de posición evidente",
    ],
    whyConsult:
      "El dolor testicular súbito e intenso debe tratarse como una urgencia hasta demostrar lo contrario, porque puede tratarse de una torsión testicular, donde las primeras horas determinan si el testículo puede salvarse o no — nunca debe esperarse 'a ver si se pasa solo'.",
    faqs: [
      {
        question: "¿Cómo distingo un dolor testicular urgente de uno que puede esperar?",
        answer:
          "Un dolor de inicio súbito, muy intenso, que no mejora con reposo y se acompaña de náusea o vómito debe tratarse como urgencia; un dolor leve, gradual y que no empeora puede evaluarse en consulta programada, pero siempre conviene no demorar la revisión.",
      },
      {
        question: "¿Un bulto indoloro en el testículo también debe revisarse aunque no duela?",
        answer:
          "Sí, siempre. La ausencia de dolor no descarta nada — de hecho, es característica del cáncer testicular — por lo que cualquier bulto o cambio nuevo debe evaluarse sin esperar a que aparezca dolor.",
      },
    ],
    relatedConditions: ["d-varicocele", "d-cancer-de-testiculo", "d-its"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/dolor-testicular.jpg",
    seo: {
      title: "Dolor Testicular | Urólogo en Tuxtla Gutiérrez",
      description: "¿Dolor testicular? Conoce cuándo es urgente y cuándo consultar con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["dolor testicular Tuxtla Gutiérrez", "dolor en los testículos Chiapas", "torsión testicular urgencia"],
    },
  },
  {
    id: "sy-incontinencia-urinaria",
    slug: "incontinencia-urinaria",
    name: "Incontinencia Urinaria",
    colloquialNames: ["se me escapa la orina", "fugas de orina"],
    description:
      "La incontinencia urinaria es la pérdida involuntaria de orina, que puede presentarse al toser o hacer esfuerzo, de forma asociada a una urgencia repentina, o de manera constante. Afecta de forma importante la calidad de vida y la vida social de quien la padece, y en la mayoría de los casos tiene tratamiento efectivo, por lo que no debe asumirse como algo que solo hay que tolerar.",
    causes: [
      "Vejiga hiperactiva",
      "Debilidad del piso pélvico",
      "Tras cirugía prostática (incontinencia postquirúrgica)",
      "Enfermedades neurológicas que afectan el control vesical",
    ],
    alarmSigns: [
      "Incontinencia de inicio súbito asociada a debilidad en las piernas",
      "Pérdida de sensibilidad en la zona genital o glútea asociada",
    ],
    whyConsult:
      "Muchas personas retrasan años la consulta por vergüenza, asumiendo que la incontinencia es inevitable con la edad o después de una cirugía — en realidad existen tratamientos efectivos, desde ejercicios de piso pélvico hasta opciones quirúrgicas, que pueden mejorar significativamente el control urinario.",
    faqs: [
      {
        question: "¿La incontinencia después de una cirugía de próstata es definitiva?",
        answer:
          "En la mayoría de los casos es temporal y mejora de forma progresiva con ejercicios de piso pélvico durante los meses siguientes a la cirugía; solo una minoría de pacientes requiere tratamiento adicional si la incontinencia persiste.",
      },
      {
        question: "¿Los ejercicios de piso pélvico realmente funcionan?",
        answer:
          "Sí, son la primera línea de tratamiento en muchos tipos de incontinencia y, realizados de forma constante y con la técnica correcta, mejoran de forma significativa el control urinario en la mayoría de los pacientes.",
      },
    ],
    relatedConditions: ["d-vejiga-hiperactiva"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/incontinencia-urinaria.jpg",
    seo: {
      title: "Incontinencia Urinaria | Urólogo en Tuxtla Gutiérrez",
      description: "Causas y tratamiento de la incontinencia urinaria con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["incontinencia urinaria Tuxtla Gutiérrez", "fugas de orina Chiapas", "urólogo incontinencia"],
    },
  },
  {
    id: "sy-problemas-de-ereccion",
    slug: "problemas-de-ereccion",
    name: "Problemas de Erección",
    colloquialNames: ["no se me para", "dificultad para tener relaciones"],
    description:
      "Los problemas de erección, que pueden presentarse como dificultad para lograrla, para mantenerla, o ambas, son un motivo de consulta frecuente aunque muchas veces postergado por vergüenza. Pueden originarse por causas vasculares, hormonales, neurológicas o psicológicas, y en ocasiones son la primera señal visible de una enfermedad cardiovascular aún no diagnosticada.",
    causes: [
      "Enfermedad vascular (aterosclerosis)",
      "Diabetes mellitus",
      "Baja testosterona",
      "Enfermedad de Peyronie",
      "Factores psicológicos (ansiedad, estrés, depresión)",
    ],
    alarmSigns: [
      "Erección dolorosa y prolongada por más de 4 horas (priapismo)",
      "Aparición súbita junto con otros síntomas cardiovasculares (dolor de pecho, falta de aire)",
    ],
    whyConsult:
      "Los problemas de erección frecuentes no deben normalizarse ni resolverse solo con medicamentos adquiridos sin receta — pueden ser la primera señal de diabetes, hipertensión o enfermedad cardiovascular no diagnosticada, por lo que una valoración médica completa es más importante que solo 'tratar el síntoma'.",
    faqs: [
      {
        question: "¿Es normal tener dificultad ocasional por estrés o cansancio?",
        answer:
          "Sí, episodios aislados relacionados con estrés, cansancio o ansiedad situacional son comunes y no necesariamente indican un problema médico de fondo; la preocupación surge cuando la dificultad se vuelve frecuente o persistente.",
      },
      {
        question: "¿Es seguro tomar medicamentos para la erección sin receta médica?",
        answer:
          "No es recomendable. Estos medicamentos pueden tener interacciones importantes, especialmente con tratamientos para el corazón, y antes de usarlos conviene identificar la causa de fondo con un urólogo.",
      },
    ],
    relatedConditions: ["d-disfuncion-erectil", "d-enfermedad-de-peyronie"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/problemas-de-ereccion.jpg",
    seo: {
      title: "Problemas de Erección | Urólogo en Tuxtla Gutiérrez",
      description: "Causas y tratamiento de los problemas de erección con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["problemas de erección Tuxtla Gutiérrez", "disfunción eréctil Chiapas", "urólogo erección"],
    },
  },
  {
    id: "sy-polaquiuria",
    slug: "polaquiuria",
    name: "Polaquiuria (Orinar muy seguido)",
    colloquialNames: ["orinar muy seguido", "ir al baño todo el tiempo"],
    description:
      "La polaquiuria es la necesidad de orinar con una frecuencia mayor a la habitual durante el día, generalmente en pequeñas cantidades cada vez. Puede deberse a una vejiga hiperactiva, una infección, crecimiento prostático o incluso a hábitos como el consumo excesivo de líquidos o cafeína, por lo que identificar la causa exacta es clave para un tratamiento efectivo.",
    causes: [
      "Vejiga hiperactiva",
      "Hiperplasia prostática benigna",
      "Infección de vías urinarias",
      "Consumo elevado de cafeína o líquidos",
    ],
    alarmSigns: [
      "Acompañada de dolor intenso o fiebre",
      "Pérdida de peso no intencionada asociada",
    ],
    whyConsult:
      "Cuando orinar con mucha frecuencia empieza a interferir con el trabajo, el sueño o la vida social, vale la pena identificar la causa de fondo con el urólogo en lugar de simplemente aprender a 'vivir con ello' o reducir líquidos de forma extrema.",
    faqs: [
      {
        question: "¿Cuántas veces al día es normal orinar?",
        answer:
          "En general, entre 6 y 8 veces al día se considera un rango normal para un adulto con hidratación habitual; orinar notablemente más seguido que eso, sobre todo en poca cantidad cada vez, amerita evaluación.",
      },
      {
        question: "¿Reducir la cantidad de líquido que tomo resuelve el problema?",
        answer:
          "No de forma segura ni sostenible — reducir líquidos de forma extrema puede causar deshidratación sin resolver la causa real; es mejor identificar y tratar el origen de la polaquiuria con el urólogo.",
      },
    ],
    relatedConditions: ["d-vejiga-hiperactiva", "d-hiperplasia-prostatica-benigna"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/polaquiuria.jpg",
    seo: {
      title: "Polaquiuria (Orinar Seguido) | Tuxtla Gutiérrez",
      description: "¿Orinas con mucha frecuencia? Causas de la polaquiuria con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["polaquiuria Tuxtla Gutiérrez", "orinar muy seguido Chiapas", "urólogo frecuencia urinaria"],
    },
  },
  {
    id: "sy-nocturia",
    slug: "nocturia",
    name: "Nocturia (Levantarse a orinar)",
    colloquialNames: ["levantarse en la noche a orinar"],
    description:
      "La nocturia es la necesidad de levantarse una o más veces durante la noche para orinar, interrumpiendo el descanso. Es uno de los síntomas más frecuentes y molestos de la hiperplasia prostática benigna y de la vejiga hiperactiva, y su impacto en la calidad del sueño suele subestimarse.",
    causes: [
      "Hiperplasia prostática benigna",
      "Vejiga hiperactiva",
      "Consumo de líquidos o diuréticos antes de dormir",
      "Apnea del sueño (causa menos conocida pero relevante)",
    ],
    alarmSigns: [
      "Nocturia de aparición muy reciente y progresiva",
      "Acompañada de hinchazón en las piernas (podría indicar otra causa de fondo)",
    ],
    whyConsult:
      "Levantarse varias veces por noche no es simplemente 'cosas de la edad': afecta directamente la calidad del sueño y, con ella, la energía, el ánimo y el rendimiento diario — identificar si la causa es prostática, vesical o de otro tipo permite un tratamiento dirigido y efectivo.",
    faqs: [
      {
        question: "¿Levantarme una vez en la noche ya es motivo de consulta?",
        answer:
          "Una vez ocasional puede ser normal, pero levantarse de forma repetida y constante, varias noches por semana, sí amerita evaluación para identificar si existe una causa prostática o vesical que pueda tratarse.",
      },
      {
        question: "¿Dejar de tomar agua en la tarde resuelve la nocturia?",
        answer:
          "Puede ayudar como medida general, pero si la nocturia persiste a pesar de limitar líquidos por la tarde, generalmente existe una causa de fondo (prostática o vesical) que requiere evaluación y tratamiento específico.",
      },
    ],
    relatedConditions: ["d-hiperplasia-prostatica-benigna", "d-vejiga-hiperactiva", "d-cancer-de-prostata"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/nocturia.jpg",
    seo: {
      title: "Nocturia (Orinar de Noche) | Tuxtla Gutiérrez",
      description: "¿Te levantas varias veces en la noche a orinar? Causas de la nocturia con el Dr. Erwin Rodríguez Komukai.",
      keywords: ["nocturia Tuxtla Gutiérrez", "levantarse a orinar de noche Chiapas", "urólogo nocturia"],
    },
  },
  {
    id: "sy-urgencia-urinaria",
    slug: "urgencia-urinaria",
    name: "Urgencia Urinaria",
    colloquialNames: ["ganas repentinas de orinar"],
    description:
      "La urgencia urinaria es la sensación repentina e intensa de necesitar orinar de inmediato, que en ocasiones es tan fuerte que resulta difícil llegar al baño a tiempo. Es el síntoma central de la vejiga hiperactiva y puede presentarse con o sin episodios de escape de orina asociados.",
    causes: [
      "Vejiga hiperactiva",
      "Infección de vías urinarias",
      "Prostatitis",
      "Hiperplasia prostática benigna",
    ],
    alarmSigns: [
      "Urgencia acompañada de fiebre o dolor intenso",
      "Incapacidad para retener la orina de forma constante y progresiva",
    ],
    whyConsult:
      "La urgencia urinaria que empieza a condicionar la vida diaria — evitar salidas largas, ubicar siempre el baño más cercano — tiene tratamiento efectivo en la mayoría de los casos y no debe aceptarse como una limitación permanente sin antes buscar ayuda especializada.",
    faqs: [
      {
        question: "¿La urgencia urinaria siempre viene acompañada de escape de orina?",
        answer:
          "No necesariamente. Puede presentarse solo como la sensación intensa de necesidad urgente sin llegar a haber fuga de orina, aunque en muchos pacientes ambos síntomas coexisten como parte del mismo cuadro.",
      },
      {
        question: "¿Qué tan rápido mejora la urgencia urinaria con tratamiento?",
        answer:
          "Varía según la causa, pero muchos pacientes notan mejoría en las primeras semanas de tratamiento, ya sea con entrenamiento vesical, medicamentos o el manejo de la causa de fondo identificada.",
      },
    ],
    relatedConditions: ["d-vejiga-hiperactiva", "d-prostatitis"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/urgencia-urinaria.jpg",
    seo: {
      title: "Urgencia Urinaria | Urólogo en Tuxtla Gutiérrez",
      description: "¿Ganas repentinas e intensas de orinar? Causas de la urgencia urinaria con el Dr. Erwin Rodríguez Komukai.",
      keywords: ["urgencia urinaria Tuxtla Gutiérrez", "ganas repentinas de orinar Chiapas", "urólogo vejiga hiperactiva"],
    },
  },
  {
    id: "sy-colico-nefritico",
    slug: "colico-nefritico",
    name: "Cólico Nefrítico (Dolor de riñón)",
    colloquialNames: ["dolor de riñón", "cólico renal"],
    description:
      "El cólico nefrítico es un dolor súbito e intenso, tipo cólico, que se origina cuando un cálculo obstruye el paso de la orina por el uréter. Se describe como uno de los dolores más fuertes que puede experimentar una persona, típicamente localizado en el costado o la espalda baja, con irradiación hacia la ingle.",
    causes: [
      "Cálculo renal o ureteral en movimiento",
      "Obstrucción del uréter por coágulos u otras causas menos frecuentes",
    ],
    alarmSigns: [
      "Fiebre asociada al dolor (posible infección obstruida, urgencia real)",
      "Imposibilidad para orinar",
      "Dolor que no cede con analgésicos habituales",
    ],
    whyConsult:
      "Un cólico nefrítico con fiebre es una urgencia médica real, porque indica que además de la obstrucción hay una infección que no puede drenar — esta combinación requiere atención inmediata y no debe manejarse solo con analgésicos en casa.",
    faqs: [
      {
        question: "¿El cólico nefrítico siempre significa que tengo un cálculo?",
        answer:
          "Es la causa más frecuente por mucho, aunque el urólogo siempre confirma el diagnóstico con estudios de imagen para definir el tamaño y la ubicación exacta del cálculo y decidir el tratamiento adecuado.",
      },
      {
        question: "¿Puedo esperar en casa a que el cálculo pase solo?",
        answer:
          "Depende del tamaño del cálculo y de si hay signos de alarma como fiebre o imposibilidad para orinar; muchos cálculos pequeños sí pueden manejarse de forma ambulatoria con hidratación y analgesia, pero siempre bajo valoración médica inicial.",
      },
    ],
    relatedConditions: ["d-litiasis-renal"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/colico-nefritico.jpg",
    seo: {
      title: "Cólico Nefrítico (Dolor de Riñón) | Tuxtla Gutiérrez",
      description: "¿Dolor de riñón intenso y repentino? Causas del cólico nefrítico con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez.",
      keywords: ["cólico nefrítico Tuxtla Gutiérrez", "dolor de riñón Chiapas", "cólico renal urólogo"],
    },
  },
  {
    id: "sy-eyaculacion-precoz-o-dolorosa",
    slug: "eyaculacion-precoz-o-dolorosa",
    name: "Eyaculación Precoz o Dolorosa",
    colloquialNames: ["me vengo muy rápido", "dolor al eyacular"],
    description:
      "La eyaculación precoz es la incapacidad para controlar el momento de la eyaculación, que ocurre antes de lo deseado por el hombre o su pareja. La eyaculación dolorosa, en cambio, es la presencia de dolor o ardor durante o inmediatamente después de eyacular, y frecuentemente se relaciona con inflamación o infección de la próstata.",
    causes: [
      "Factores psicológicos (ansiedad de desempeño, estrés)",
      "Prostatitis (en el caso de la eyaculación dolorosa)",
      "Hipersensibilidad del glande",
      "Factores de pareja o relación",
    ],
    alarmSigns: [
      "Dolor intenso y persistente asociado a fiebre",
      "Sangre visible en el semen de forma recurrente",
    ],
    whyConsult:
      "Ambos síntomas suelen postergarse por vergüenza, pero tienen causas identificables y tratamiento efectivo — la eyaculación dolorosa en particular puede ser la única señal visible de una prostatitis que requiere tratamiento específico, no solo 'algo con lo que hay que aprender a vivir'.",
    faqs: [
      {
        question: "¿La eyaculación precoz es solo un problema psicológico?",
        answer:
          "En muchos casos los factores emocionales influyen de forma importante, pero también existen causas físicas (como hipersensibilidad del glande) que pueden evaluarse y tratarse de forma específica con el urólogo.",
      },
      {
        question: "¿La eyaculación dolorosa siempre es prostatitis?",
        answer:
          "Es una de las causas más frecuentes, pero no la única; el urólogo evalúa otras posibles causas antes de confirmar el diagnóstico e indicar el tratamiento adecuado.",
      },
    ],
    relatedConditions: ["d-prostatitis"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/eyaculacion-precoz-o-dolorosa.jpg",
    seo: {
      title: "Eyaculación Precoz o Dolorosa | Urólogo en Tuxtla Gutiérrez",
      description: "Causas de la eyaculación precoz o dolorosa con el Dr. Erwin Rodríguez Komukai, Urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["eyaculación precoz Tuxtla Gutiérrez", "eyaculación dolorosa Chiapas", "urólogo disfunción sexual"],
    },
  },
  {
    id: "sy-retencion-urinaria-aguda",
    slug: "retencion-urinaria-aguda",
    name: "Retención Urinaria Aguda",
    colloquialNames: ["no puedo orinar"],
    description:
      "La retención urinaria aguda es la incapacidad súbita y completa para orinar a pesar de la necesidad intensa de hacerlo, generalmente acompañada de dolor abdominal bajo significativo por la distensión de la vejiga. Es una verdadera urgencia urológica que requiere drenaje inmediato de la orina.",
    causes: [
      "Hiperplasia prostática benigna avanzada",
      "Estenosis uretral severa",
      "Coágulos que obstruyen la salida de la vejiga",
      "Efecto de ciertos medicamentos en personas predispuestas",
    ],
    alarmSigns: [
      "Imposibilidad total para orinar por varias horas",
      "Dolor abdominal bajo intenso y creciente",
      "Vejiga notoriamente distendida y palpable",
    ],
    whyConsult:
      "La retención urinaria aguda es una urgencia que requiere atención inmediata para drenar la vejiga, generalmente con una sonda urinaria, y después identificar y tratar la causa de fondo — no debe intentarse 'aguantar' ni esperar a que se resuelva sola.",
    faqs: [
      {
        question: "¿La retención urinaria aguda puede dañar los riñones?",
        answer:
          "Sí, si no se resuelve a tiempo, la presión acumulada puede afectar la función renal; por eso el drenaje inmediato de la vejiga es la prioridad antes de estudiar la causa de fondo con calma.",
      },
      {
        question: "¿Después de resolver la urgencia, puede volver a repetirse?",
        answer:
          "Sí, si no se trata la causa de fondo (por ejemplo, una próstata muy crecida) puede repetirse; por eso tras la urgencia es importante completar el estudio y el tratamiento definitivo con el urólogo.",
      },
    ],
    relatedConditions: ["d-hiperplasia-prostatica-benigna", "d-estenosis-uretral"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/retencion-urinaria-aguda.jpg",
    seo: {
      title: "Retención Urinaria Aguda | Urólogo en Tuxtla Gutiérrez",
      description: "¿No puedes orinar? La retención urinaria aguda es una urgencia — atención con el Dr. Erwin Rodríguez Komukai.",
      keywords: ["retención urinaria aguda Tuxtla Gutiérrez", "no puedo orinar Chiapas", "urgencia urológica"],
    },
  },
  {
    id: "sy-secrecion-uretral",
    slug: "secrecion-uretral",
    name: "Secreción Uretral",
    colloquialNames: ["flujo por el pene"],
    description:
      "La secreción uretral es la salida de un líquido anormal por la uretra, fuera del contexto de la micción o la eyaculación, que puede ser transparente, blanquecina o amarillenta. Es uno de los signos más característicos de una infección de transmisión sexual, aunque también puede deberse a otras causas de inflamación uretral.",
    causes: [
      "Infecciones de transmisión sexual (gonorrea, clamidia, entre otras)",
      "Uretritis no infecciosa",
      "Fimosis con higiene local inadecuada asociada",
    ],
    alarmSigns: [
      "Secreción abundante con dolor intenso al orinar",
      "Fiebre asociada",
      "Inflamación importante del pene o los testículos",
    ],
    whyConsult:
      "La secreción uretral debe evaluarse siempre, incluso si no causa dolor significativo, porque suele indicar una infección de transmisión sexual activa que requiere tratamiento específico y, generalmente, tratamiento simultáneo de la pareja para evitar la reinfección.",
    faqs: [
      {
        question: "¿La secreción uretral siempre significa una infección de transmisión sexual?",
        answer:
          "Es la causa más frecuente en hombres sexualmente activos, pero no la única; de cualquier forma, siempre debe evaluarse con el urólogo para identificar la causa exacta y el tratamiento correspondiente.",
      },
      {
        question: "¿Puedo esperar a que la secreción desaparezca sola?",
        answer:
          "No es recomendable esperar. Las infecciones que causan secreción uretral no suelen resolverse solas y, sin tratamiento, pueden complicarse o transmitirse a la pareja sexual.",
      },
    ],
    relatedConditions: ["d-its", "d-fimosis-y-parafimosis", "d-infeccion-de-vias-urinarias"],
    lastReviewed: "2026-11-13",
    image: "/images/symptoms/secrecion-uretral.jpg",
    seo: {
      title: "Secreción Uretral | Urólogo en Tuxtla Gutiérrez",
      description: "¿Secreción anormal por la uretra? Causas y tratamiento con el Dr. Erwin Rodríguez Komukai en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["secreción uretral Tuxtla Gutiérrez", "flujo uretral Chiapas", "urólogo infección de transmisión sexual"],
    },
  },
];
