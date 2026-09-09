import { Reveal } from "@/components/effects/Reveal";
import { ModalitySelector } from "@/components/interactive/ModalitySelector";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ModalitiesSection() {
  return (
    <section id="modalidades" className="section-wrap">
      <Reveal>
        <SectionHeading label="Modalidades" title="Escolha o ritmo do treino">
          <p>
            Três caminhos de evolução com base técnica, disciplina e acompanhamento profissional.
          </p>
        </SectionHeading>
      </Reveal>

      <Reveal className="mt-8" delay="short">
        <ModalitySelector />
      </Reveal>
    </section>
  );
}
