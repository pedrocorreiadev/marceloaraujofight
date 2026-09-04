import Image from "next/image";

import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden border-b border-white/10 bg-ink">
      <div className="relative min-h-[calc(100svh-4rem)] overflow-hidden sm:min-h-[44rem] lg:min-h-[calc(100vh-4rem)]">
        <Image
          src={site.hero.background.src}
          width={site.hero.background.width}
          height={site.hero.background.height}
          alt={site.hero.background.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/5 to-ink/75" />
        <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-ink/35 to-transparent lg:block" />

        {site.hero.overlay.src ? (
          <Reveal className="hero-entrance relative z-10 flex min-h-[calc(100svh-4rem)] items-end justify-center px-2 pb-3 pt-5 sm:min-h-[44rem] sm:px-6 sm:pb-5 lg:min-h-[calc(100vh-4rem)]">
            <Image
              src={site.hero.overlay.src}
              width={site.hero.overlay.width}
              height={site.hero.overlay.height}
              alt={site.hero.overlay.alt}
              className="hero-overlay-art h-auto max-h-[calc(100svh-5rem)] w-[96vw] max-w-[31rem] object-contain sm:max-h-[41rem] sm:w-[78vw] sm:max-w-[34rem] lg:max-h-[calc(100vh-6rem)] lg:w-[38vw] lg:max-w-[34rem]"
              priority
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 78vw, 96vw"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
