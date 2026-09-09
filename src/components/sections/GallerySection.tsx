import { Reveal } from "@/components/effects/Reveal";
import { PhotoGallery } from "@/components/interactive/PhotoGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  return (
    <section id="galeria" className="section-wrap">
      <Reveal>
        <SectionHeading label="Galeria" title="Dentro do treino">
          <p>Disciplina, técnica e evolução todos os dias.</p>
        </SectionHeading>
      </Reveal>
      <Reveal className="mt-8" delay="short">
        <PhotoGallery />
      </Reveal>
    </section>
  );
}
