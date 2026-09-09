import { SiteHeader } from "@/components/layout/SiteHeader";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ModalitiesSection } from "@/components/sections/ModalitiesSection";
import { PersonalFightSection } from "@/components/sections/PersonalFightSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { TrainersSection } from "@/components/sections/TrainersSection";
import { VideosSection } from "@/components/sections/VideosSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <SiteHeader />
      <HeroSection />
      <VideosSection />
      <ModalitiesSection />
      <TrainersSection />
      <GallerySection />
      <CommunitySection />
      <ScheduleSection />
      <PersonalFightSection />
      <ContactSection />
      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
