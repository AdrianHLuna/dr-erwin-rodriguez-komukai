import type { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Erwin Rodríguez Komukai",
  title: "Dr.",
  specialty: "Urología",
  specialistTitle: "Cirujano Urólogo",
  subspecialty: "Cirugía Laparoscópica Urológica y Endourología",
  cedula: "8744017",
  cedulaInstitucion: "UNACH",
  cedulaEspecialidad: "11721782",
  cedulaEspecialidadInstitucion: "UNAM",
  cofepris: "233300201A1234",
  phone: "+529611897751",
  whatsapp: "+529611897751",
  emergencyPhone: "+529611897751",
  email: "uroentuxtla@gmail.com",
  address:
    "11a Poniente Sur #1293, Clínica de Especialidades San Sebastián, Fracc. Las Terrazas, Tuxtla Gutiérrez, Chiapas",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Clínica de Especialidades San Sebastián, 11a Poniente Sur 1293, Las Terrazas, Tuxtla Gutiérrez, Chiapas"
    ),
  consultationPrice: 900,
  paymentMethods: ["Efectivo", "Tarjeta de Crédito", "Tarjeta de Débito", "Transferencia Bancaria"],
  insurances: ["Todas las aseguradoras"],
  schedule: "Lunes a Viernes 9:00am a 2:00pm y 5:00pm a 8:00pm · Sábados 9:00am a 2:00pm",
  openingHours: ["Mo-Fr 09:00-14:00", "Mo-Fr 17:00-20:00", "Sa 09:00-14:00"],
  acceptingNewPatients: true,
  photo: "/img-doctor/nuevo-hero.jpeg",
  bio: "El Dr. Erwin Rodríguez Komukai es un destacado Cirujano Urólogo con amplia experiencia en el diagnóstico y tratamiento de enfermedades del sistema urinario y reproductor masculino. Especialista en procedimientos de mínima invasión, cirugía laparoscópica y endourología, enfocado en brindar tratamientos modernos y una atención empática.",
  philosophy:
    "Brindar una atención médica de excelencia basada en la honestidad, la empatía y la actualización constante para mejorar la calidad de vida de cada paciente.",
  experience: [
    {
      year: "2014 - 2019",
      title: "Residencia en Urología",
      description: "UNAM · Centro Médico Nacional La Raza. Formación integral en urología clínica y quirúrgica.",
    },
    {
      year: "2019",
      title: "Cirugía Laparoscopia Avanzada",
      description: "Hospital Juárez de México | UNAM. Especialización en técnicas de mínima invasión y procedimientos urológicos complejos.",
    },
    {
      year: "2019 - Presente",
      title: "Urólogo Hospital San Sebastián",
      description: "Práctica institucional y privada en Tuxtla Gutiérrez, Chiapas. Especialista en cirugía laparoscópica y endourología.",
    },
  ],
  // Único número real y verificado (no hay cifras de "pacientes atendidos" ni
  // "procedimientos realizados" confirmadas por el doctor): su perfil público
  // de Doctoralia, verificado vía WebFetch el día de construcción de este
  // sitio. Nunca sustituir por las cifras de marketing de la referencia de
  // Envato (2.5k+ / +500 / #1 / 5.0★ / 10,000+ / 2k+ / 99%) — ninguna de esas
  // está respaldada por `doctor.ts` del repo fuente ni es verificable.
  stats: [
    { label: "Reseñas reales en Doctoralia", value: "1,201" },
    { label: "Años desde su residencia en Urología", value: "+10" },
    { label: "Pacientes atendidos", value: "—" },
  ],
  certifications: [
    {
      name: "Consejo Mexicano de Urología",
      institution: "CMU",
      logo: "/institution-logos/cmu.png",
    },
    {
      name: "American Urological Association",
      institution: "AUA",
      logo: "/institution-logos/aua.png",
    },
    {
      name: "Hospital Juárez de México",
      institution: "Aval Médico",
      logo: "/institution-logos/hjm.png",
    },
    {
      name: "Instituto Mexicano del Seguro Social",
      institution: "Formación de Especialista",
      logo: "/institution-logos/imss.png",
    },
  ],
  education: [
    {
      degree: "Licenciatura en Médico Cirujano",
      institution: "Universidad Autónoma de Chiapas (UNACH)",
      logo: "/institution-logos/unach.png",
      year: "2006 - 2013",
    },
    {
      degree: "Residencia en Urología",
      institution: "UNAM · Centro Médico Nacional La Raza",
      logo: "/institution-logos/unam.png",
      year: "2014 - 2019",
    },
    {
      degree: "Cirugía Laparoscopia Avanzada",
      institution: "Hospital Juárez de México | UNAM",
      logo: "/institution-logos/unam.png",
      year: "2019",
    },
  ],
  testimonials: [
    {
      id: "doctoralia-rcfm",
      patientName: "R. C. F. M.",
      rating: 5,
      text: "Excelente la atención, la puntualidad para de la cita y la explicación del tratamiento.",
      sourceUrl: "https://www.doctoralia.com.mx/erwin-rodriguez-komukai/urologo/tuxtla-gutierrez",
      date: "2026-02-18",
    },
    {
      id: "doctoralia-dee",
      patientName: "D.E.E.",
      rating: 5,
      text: "El tratamiento que me dio resultó eficaz y excelente para mi salud.",
      sourceUrl: "https://www.doctoralia.com.mx/erwin-rodriguez-komukai/urologo/tuxtla-gutierrez",
      date: "2024-07-02",
    },
    {
      id: "doctoralia-exiquio",
      patientName: "Exiquio Avila Sanchez",
      rating: 5,
      text: "El Dr. fue específico y directo en decirme lo que tengo, sin recurrir a estudios innecesarios.",
      sourceUrl: "https://www.doctoralia.com.mx/erwin-rodriguez-komukai/urologo/tuxtla-gutierrez",
      date: "2024-06-22",
    },
    {
      id: "doctoralia-juan",
      patientName: "Juan",
      rating: 5,
      text: "Me dio mucha confianza y seguridad en la consulta, trato amable.",
      sourceUrl: "https://www.doctoralia.com.mx/erwin-rodriguez-komukai/urologo/tuxtla-gutierrez",
      date: "2026-11-12",
    },
    {
      id: "doctoralia-luisg",
      patientName: "Luis G.",
      rating: 5,
      text: "Excelente servicio, explicación del tratamiento y de la complicación a resolver.",
      sourceUrl: "https://www.doctoralia.com.mx/erwin-rodriguez-komukai/urologo/tuxtla-gutierrez",
      date: "2026-11-12",
    },
  ],
  sameAs: [
    "https://www.doctoralia.com.mx/erwin-rodriguez-komukai",
    "https://www.facebook.com/UrologoDrKomukai",
    "https://www.instagram.com/dr_erwin_urologo",
    "https://www.tiktok.com/@dr.erwin.komukai",
    "https://g.page/urologo-en-tuxtla-dr-erwin",
  ],
  ga4Id: undefined,
};
