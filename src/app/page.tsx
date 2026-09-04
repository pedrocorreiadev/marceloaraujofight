import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroIntroSection } from "@/components/sections/HeroIntroSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ModalitiesSection } from "@/components/sections/ModalitiesSection";
import { PersonalFightSection } from "@/components/sections/PersonalFightSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { TrainersSection } from "@/components/sections/TrainersSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <SiteHeader />
      <HeroSection />
      <HeroIntroSection />
      <VideosSection />
      <ModalitiesSection />
      <TrainersSection />
      <ScheduleSection />
      <PersonalFightSection />
      <GallerySection />
      <ContactSection />
      <footer className="border-t border-white/10 bg-ink px-4 py-8 text-center text-sm text-smoke">
        <p>{site.name} - Boxe, kickboxing e jiu-jitsu em {site.city}.</p>
      </footer>
    </main>
  );
}
