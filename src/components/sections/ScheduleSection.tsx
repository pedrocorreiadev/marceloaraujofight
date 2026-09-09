import { Reveal } from "@/components/effects/Reveal";
import { ScheduleCards } from "@/components/interactive/ScheduleCards";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ScheduleSection() {
  return (
    <section id="horarios" className="section-wrap">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading label="Horários" title="Treine de segunda a sexta">
            <p>
              Kickboxing com horários fixos. Boxe e jiu-jitsu seguem com consulta direta pelo
              WhatsApp.
            </p>
          </SectionHeading>
        </Reveal>
        <Reveal delay="short">
          <ScheduleCards />
        </Reveal>
      </div>
    </section>
  );
}
