import { site, whatsappLink } from "@/content/site";

export function ModalitySelector() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {site.modalities.map((modality, index) => (
        <article
          key={modality.name}
          className="group flex min-h-[19rem] flex-col rounded-lg border border-white/10 bg-coal p-5 transition duration-300 hover:-translate-y-1 hover:border-tiger/70 hover:bg-graphite"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-display text-sm font-black uppercase text-tiger">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-1 w-14 rounded-full bg-white/10 transition duration-300 group-hover:bg-tiger" />
          </div>

          <h3 className="mt-8 font-display text-3xl font-black uppercase text-paper">{modality.name}</h3>
          <p className="mt-3 text-sm font-black uppercase leading-6 text-tiger">{modality.feature}</p>
          <p className="mt-4 flex-1 text-base leading-7 text-smoke">{modality.description}</p>

          <a href={whatsappLink(modality.message)} className="focus-ring btn-secondary mt-6 w-full">
            {modality.cta}
          </a>
        </article>
      ))}
    </div>
  );
}
