import { Reveal } from "@/components/effects/Reveal";
import { PhotoGallery } from "@/components/interactive/PhotoGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  return (
    <section id="turmas" className="section-wrap">
      <Reveal>
        <SectionHeading label="Turmas" title="Treino também é pertencimento">
          <p>
            Registros reais de equipe e alunos reunidos após a rotina de treino, preservando o
            ambiente e os rostos do grupo.
          </p>
        </SectionHeading>
      </Reveal>
      <Reveal className="mt-8" delay="short">
        <PhotoGallery />
      </Reveal>
    </section>
  );
}

