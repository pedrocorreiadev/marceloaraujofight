"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { navLinks, site, whatsappLink } from "@/content/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="focus-ring flex min-w-0 flex-1 items-center gap-3 rounded-md lg:flex-none"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={site.logo.src}
            width={site.logo.width}
            height={site.logo.height}
            alt={site.logo.alt}
            className="h-11 w-11 shrink-0 rounded-full bg-white object-contain p-0.5"
            priority
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-black uppercase leading-none text-paper sm:hidden">
              Marcelo Araújo
            </span>
            <span className="hidden truncate font-display text-lg font-black uppercase leading-none text-paper sm:block">
              Marcelo Araújo Fight
            </span>
            <span className="block text-xs font-semibold text-smoke">{site.city}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-smoke transition hover:bg-white/5 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={whatsappLink()} className="focus-ring btn-primary hidden lg:inline-flex">
          Agendar aula
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-coal text-paper transition active:scale-95 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-white/10 bg-ink transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Navegação mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring min-h-11 rounded-md px-3 py-3 text-base font-semibold text-paper transition hover:bg-white/5 active:scale-[0.99]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
