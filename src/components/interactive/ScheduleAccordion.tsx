"use client";

import { useState } from "react";

import { site, whatsappLink } from "@/content/site";

const scheduleItems = [
  {
    name: "Kickboxing",
    body: "Segunda a sexta-feira",
    times: site.kickboxingSchedule,
  },
  {
    name: "Boxe",
    body: "Consulte os horários pelo WhatsApp.",
    times: [],
  },
  {
    name: "Jiu-jitsu",
    body: "Consulte os horários pelo WhatsApp.",
    times: [],
  },
];

export function ScheduleAccordion() {
  const [openName, setOpenName] = useState(scheduleItems[0].name);

  return (
    <div className="space-y-3">
      {scheduleItems.map((item) => {
        const open = item.name === openName;
        return (
          <article key={item.name} className="rounded-lg border border-white/10 bg-coal">
            <button
              type="button"
              className="focus-ring flex min-h-14 w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left transition active:scale-[0.99]"
              aria-expanded={open}
              onClick={() => setOpenName(open ? "" : item.name)}
            >
              <span className="font-display text-2xl font-black uppercase text-paper">{item.name}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/15 text-xl text-tiger transition ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 px-5 pb-5">
                <p className="text-sm font-semibold text-smoke">{item.body}</p>
                {item.times.length ? (
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {item.times.map((time) => (
                      <div key={time} className="rounded-md border border-tiger/40 bg-ink px-4 py-4 text-center">
                        <span className="font-display text-2xl font-black text-paper">{time}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <a href={whatsappLink()} className="focus-ring btn-secondary mt-4">
                    Consultar pelo WhatsApp
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

