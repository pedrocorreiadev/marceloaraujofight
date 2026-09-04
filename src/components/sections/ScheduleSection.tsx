import { Reveal } from "@/components/effects/Reveal";
import { ScheduleAccordion } from "@/components/interactive/ScheduleAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ScheduleSection() {
  return (
    <section id="horarios" className="section-wrap">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading label="Horários" title="Confira por modalidade">
            <p>
              O kickboxing já tem horários confirmados de segunda a sexta. Para boxe e jiu-jitsu, a
              equipe informa as turmas atualizadas pelo WhatsApp.
            </p>
          </SectionHeading>
        </Reveal>
        <Reveal delay="short">
          <ScheduleAccordion />
        </Reveal>
      </div>
    </section>
  );
}

