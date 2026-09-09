import Image from "next/image";

import { Reveal } from "@/components/effects/Reveal";
import { site, whatsappLink } from "@/content/site";

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden border-b border-white/10 bg-ink">
      <Image
        src={site.hero.background.src}
        width={site.hero.background.width}
        height={site.hero.background.height}
        alt={site.hero.background.alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_50%]"
        priority
        sizes="100vw"
      />
      <div className="hero-brand-overlay absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-7xl items-center px-4 py-12 sm:min-h-[42rem] sm:px-6 lg:px-8">
        <Reveal className="hero-entrance max-w-3xl">
          <p className="section-label">{site.city}</p>
          <h1 className="mt-5 max-w-3xl break-words font-display text-[2.75rem] font-black uppercase leading-[0.94] text-paper sm:text-6xl lg:text-7xl">
            {site.hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-7 text-paper sm:text-2xl">
            {site.hero.kicker}
          </p>
          <p className="mt-3 text-base font-semibold uppercase text-tiger">{site.hero.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.modalities.map((modality) => (
              <a
                key={modality.name}
                href="#modalidades"
                className="focus-ring min-h-11 rounded-md border border-white/10 bg-coal/90 px-4 py-3 text-sm font-black uppercase text-paper transition duration-300 hover:border-tiger hover:bg-white/5 active:scale-95"
              >
                {modality.name}
              </a>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-[auto_auto]">
            <a href={whatsappLink()} className="focus-ring btn-primary">
              Agendar aula experimental
            </a>
            <a href="#videos" className="focus-ring btn-secondary">
              Ver treinos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
