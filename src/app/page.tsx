import { generateHomeSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import CertificationsSection from "@/components/home/CertificationsSection";
import AboutMeSection from "@/components/home/AboutMeSection";
import ServicesSection from "@/components/home/ServicesSection";
import DiseasesSection from "@/components/home/DiseasesSection";
import SymptomsSection from "@/components/home/SymptomsSection";
import PriceSection from "@/components/home/PriceSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CallToActionSection from "@/components/home/CallToActionSection";

export default function Home() {
  const schemas = generateHomeSchemas();

  return (
    <div className="flex w-full flex-col">
      <StructuredData data={schemas} />
      <HeroSection />
      <StatsStrip />
      <CertificationsSection />
      <AboutMeSection />
      <ServicesSection />
      <DiseasesSection />
      <SymptomsSection />
      <PriceSection />
      <ReviewsSection />
      <CallToActionSection />
    </div>
  );
}
