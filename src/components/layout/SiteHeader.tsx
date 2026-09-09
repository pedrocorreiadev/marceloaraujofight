"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { navLinks, site, whatsappLink } from "@/content/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    function onScroll() {
      setIsScrolled(window.scrollY > 18);
    }

    onScroll();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-[14px] transition-all duration-300">
      <div
        className={`mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 transition-[height] duration-300 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:px-8 ${
          isScrolled ? "h-14" : "h-[4.5rem]"
        }`}
      >
        <a
          href="#inicio"
          className="focus-ring flex min-w-0 items-center gap-3 rounded-md"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={site.logo.src}
            width={site.logo.width}
            height={site.logo.height}
            alt={site.logo.alt}
            className={`shrink-0 rounded-full bg-white object-contain p-0.5 transition-[width,height] duration-300 ${
              isScrolled ? "h-10 w-10" : "h-12 w-12"
            }`}
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

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring group relative rounded-md px-3 py-2 text-sm font-semibold text-smoke transition hover:text-paper"
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-tiger transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a href={whatsappLink()} className="focus-ring btn-primary hidden lg:inline-flex">
          Aula experimental
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
        className={`mobile-menu-panel grid overflow-hidden border-t border-white/10 transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring min-h-12 rounded-md border border-white/10 bg-coal px-4 py-3 text-base font-black uppercase text-paper transition hover:border-tiger active:scale-[0.99]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={whatsappLink()} className="focus-ring btn-primary mt-2 w-full">
              Aula experimental
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
