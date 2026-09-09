import { site, whatsappLink } from "@/content/site";

const scheduleItems = [
  {
    name: "Kickboxing",
    body: "Segunda a sexta-feira",
    times: site.kickboxingSchedule,
  },
  {
    name: "Boxe",
    body: "Consultar pelo WhatsApp.",
    times: [],
  },
  {
    name: "Jiu-jitsu",
    body: "Consultar pelo WhatsApp.",
    times: [],
  },
];

export function ScheduleCards() {
  return (
    <div className="grid gap-4">
      {scheduleItems.map((item) => (
        <article key={item.name} className="rounded-lg border border-white/10 bg-coal p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase text-tiger">{item.body}</p>
              <h3 className="mt-2 font-display text-3xl font-black uppercase text-paper">{item.name}</h3>
            </div>
            <a href={whatsappLink()} className="focus-ring btn-secondary">
              Consultar turmas
            </a>
          </div>

          {item.times.length ? (
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {item.times.map((time) => (
                <p
                  key={time}
                  className="rounded-md border border-tiger/45 bg-ink px-4 py-4 text-center font-display text-2xl font-black text-tiger"
                >
                  {time}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-base leading-7 text-smoke">
              A equipe informa as turmas disponíveis e orienta o melhor horário para começar.
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
