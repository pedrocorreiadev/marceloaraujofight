import { Reveal } from "@/components/effects/Reveal";
import { ModalitySelector } from "@/components/interactive/ModalitySelector";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ModalitiesSection() {
  return (
    <section id="modalidades" className="section-wrap">
      <Reveal>
        <SectionHeading label="Modalidades" title="Escolha o ritmo do treino">
          <p>
            Boxe, kickboxing e jiu-jitsu em uma experiência direta: selecione a modalidade para ver
            o foco da aula e chamar a equipe com a mensagem certa.
          </p>
        </SectionHeading>
      </Reveal>

      <Reveal className="mt-8" delay="short">
        <ModalitySelector />
      </Reveal>
    </section>
  );
}

