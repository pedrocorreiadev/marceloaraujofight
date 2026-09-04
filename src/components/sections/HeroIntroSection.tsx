import Image from "next/image";

import { Reveal } from "@/components/effects/Reveal";
import { site, whatsappLink } from "@/content/site";

const highlights = [
  { value: "03", label: "modalidades" },
  { value: "Todos", label: "os níveis" },
  { value: "Fight", label: "personal" },
];

export function HeroIntroSection() {
  return (
    <section aria-label="Chamada principal" className="border-b border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-7 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_20rem] lg:items-end lg:px-8">
        <Reveal className="hero-entrance">
          <div className="flex items-center gap-4">
            <Image
              src={site.logo.src}
              width={site.logo.width}
              height={site.logo.height}
              alt={site.logo.alt}
              className="h-16 w-16 shrink-0 rounded-full bg-white object-contain p-1 sm:h-20 sm:w-20"
              priority
            />
            <div className="min-w-0">
              <p className="section-label">{site.city}</p>
              <h1 className="mt-2 font-display text-[2.35rem] font-black uppercase leading-[0.95] text-paper sm:text-6xl">
                {site.hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-xl font-semibold leading-7 text-paper">
            {site.hero.kicker}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-smoke">{site.hero.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.modalities.map((modality) => (
              <a
                key={modality.name}
                href="#modalidades"
                className="focus-ring min-h-11 rounded-md border border-white/10 bg-coal px-4 py-3 text-sm font-black uppercase text-paper transition hover:border-tiger active:scale-95"
              >
                {modality.name}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-entrance" delay="short">
          <div className="grid gap-3 sm:grid-cols-[auto_auto] lg:grid-cols-1">
            <a href={whatsappLink()} className="focus-ring btn-primary justify-center">
              Agendar aula experimental
            </a>
            <a href="#videos" className="focus-ring btn-secondary justify-center">
              Ver treinos reais
            </a>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-md border border-white/10 bg-coal p-3">
                <span className="block font-display text-2xl font-black text-tiger">{item.value}</span>
                <span className="mt-1 block text-xs font-semibold uppercase text-smoke">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
