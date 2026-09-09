import Image from "next/image";

import { site, whatsappLink } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-8 text-sm text-smoke sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={site.logo.src}
            width={site.logo.width}
            height={site.logo.height}
            alt={site.logo.alt}
            className="h-12 w-12 shrink-0 rounded-full bg-white object-contain p-0.5"
            loading="lazy"
          />
          <div>
            <p className="font-display text-lg font-black uppercase leading-none text-paper">{site.name}</p>
            <p className="mt-1">Boxe • Kickboxing • Jiu-jitsu</p>
            <p>{site.city}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md px-1 py-2 font-semibold text-smoke transition hover:text-tiger"
          >
            Instagram
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md px-1 py-2 font-semibold text-smoke transition hover:text-tiger"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-7xl text-xs text-smoke/80">
        © {year} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
