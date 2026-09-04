import { Reveal } from "@/components/effects/Reveal";
import { VideoShowcase } from "@/components/interactive/VideoShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideosSection() {
  return (
    <section id="videos" className="border-y border-white/10 bg-graphite">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading label="Treinos reais" title="Movimento dentro da academia">
            <p>
              Dois registros reais de aula mostram a prática, o ritmo da sala e a energia dos
              treinos no dia a dia.
            </p>
          </SectionHeading>
        </Reveal>
        <Reveal className="mt-8" delay="short">
          <VideoShowcase />
        </Reveal>
      </div>
    </section>
  );
}
