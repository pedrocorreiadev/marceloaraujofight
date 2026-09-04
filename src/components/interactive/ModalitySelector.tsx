"use client";

import { useState } from "react";

import { site, whatsappLink } from "@/content/site";

export function ModalitySelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = site.modalities[activeIndex];

  return (
    <div className="rounded-lg border border-white/10 bg-coal p-3 sm:p-4">
      <div className="grid gap-2 sm:grid-cols-3" role="tablist" aria-label="Modalidades">
        {site.modalities.map((modality, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={modality.name}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="modality-panel"
              className={`focus-ring min-h-12 rounded-md border px-4 py-3 text-left transition active:scale-[0.98] ${
                selected
                  ? "border-tiger bg-tiger text-ink"
                  : "border-white/10 bg-ink text-paper hover:border-tiger/70"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="block font-display text-xl font-black uppercase leading-none">
                {modality.name}
              </span>
              <span className={`mt-1 block text-xs ${selected ? "text-ink" : "text-smoke"}`}>
                {modality.short}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="modality-panel"
        role="tabpanel"
        className="mt-4 rounded-md border border-white/10 bg-ink p-5"
      >
        <p className="text-sm font-semibold uppercase text-tiger">Modalidade selecionada</p>
        <h3 className="mt-2 font-display text-3xl font-black uppercase text-paper">{active.name}</h3>
        <p className="mt-3 text-base leading-7 text-smoke">{active.description}</p>
        <a href={whatsappLink(active.message)} className="focus-ring btn-primary mt-5 justify-center">
          {active.cta}
        </a>
      </div>
    </div>
  );
}

