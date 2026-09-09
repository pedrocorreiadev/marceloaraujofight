import { Reveal } from "@/components/effects/Reveal";
import { VideoShowcase } from "@/components/interactive/VideoShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideosSection() {
  return (
    <section id="videos" className="border-y border-white/10 bg-graphite">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading label="Vídeos" title="Treinos reais">
            <p>Veja como é a rotina dentro da Marcelo Araújo Fight.</p>
          </SectionHeading>
        </Reveal>
        <Reveal className="mt-8" delay="short">
          <VideoShowcase />
        </Reveal>
      </div>
    </section>
  );
}
