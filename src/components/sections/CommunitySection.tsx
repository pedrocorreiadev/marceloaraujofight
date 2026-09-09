import Image from "next/image";

import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/content/site";

export function CommunitySection() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <Reveal>
          <p className="section-label">Comunidade</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-black uppercase leading-tight text-paper sm:text-5xl">
            {site.community.title}
          </h2>
          <p className="mt-5 max-w-xl text-xl font-semibold leading-8 text-smoke">{site.community.text}</p>
        </Reveal>

        <Reveal delay="short">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black">
            <Image
              src={site.community.photo.src}
              width={site.community.photo.width}
              height={site.community.photo.height}
              alt={site.community.photo.alt}
              className="aspect-[4/3] h-full w-full object-cover object-center"
              sizes="(min-width: 1024px) 46vw, 100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
