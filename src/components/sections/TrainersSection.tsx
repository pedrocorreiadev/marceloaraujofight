import Image from "next/image";

import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function TrainersSection() {
  return (
    <section id="professores" className="border-y border-white/10 bg-graphite">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading label="Professores" title="Orientação de faixa preta" />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {site.trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index === 0 ? "short" : "medium"}>
              <article className="trainer-panel">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image
                    src={trainer.image.src}
                    width={trainer.image.width}
                    height={trainer.image.height}
                    alt={trainer.image.alt}
                    className={`h-full w-full object-cover ${
                      trainer.name === "Marcelo Araújo" ? "object-[50%_12%]" : "object-[52%_20%]"
                    }`}
                    sizes="(min-width: 1024px) 48vw, 100vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase text-tiger">{trainer.title}</p>
                  <h3 className="mt-2 font-display text-3xl font-black uppercase text-paper">
                    {trainer.name}
                  </h3>
                  <p className="mt-3 text-base text-smoke">{trainer.graduation}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

