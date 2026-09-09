import Image from "next/image";

import { Reveal } from "@/components/effects/Reveal";
import { site, whatsappLink } from "@/content/site";

export function PersonalFightSection() {
  return (
    <section className="personal-band">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_26rem] lg:items-center lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-black uppercase text-tiger">{site.personalFight.title}</p>
          <h2 className="mt-3 max-w-3xl break-words font-display text-3xl font-black uppercase leading-tight text-paper sm:text-5xl">
            Treino focado para evoluir com mais atenção.
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-smoke">
            {site.personalFight.subtitle}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {site.personalFight.features.map((feature) => (
              <p key={feature} className="rounded-md border border-white/10 bg-coal px-4 py-4 text-sm font-black uppercase text-paper">
                {feature}
              </p>
            ))}
          </div>

          <a
            href={whatsappLink(
              "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar Personal Fight.",
            )}
            className="focus-ring btn-primary mt-7"
          >
            Consultar personal
          </a>
        </Reveal>

        <Reveal delay="short">
          <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-lg border border-tiger/30 bg-black lg:mx-0">
            <Image
              src={site.personalFight.image.src}
              width={site.personalFight.image.width}
              height={site.personalFight.image.height}
              alt={site.personalFight.image.alt}
              className="aspect-[4/5] h-full w-full object-cover object-[50%_12%]"
              sizes="(min-width: 1024px) 26rem, 100vw"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
              <p className="font-display text-2xl font-black uppercase text-paper">Personal fight</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
