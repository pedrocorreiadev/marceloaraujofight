"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { site } from "@/content/site";

type PhotoItem = (typeof site.teamPhotos)[number];

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : site.teamPhotos[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => nextIndex(index, 1));
      if (event.key === "ArrowLeft") setActiveIndex((index) => nextIndex(index, -1));
    }

    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("overflow-hidden");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {site.teamPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="focus-ring group overflow-hidden rounded-lg border border-white/10 bg-coal text-left transition hover:border-tiger/70 active:scale-[0.99]"
            onClick={() => setActiveIndex(index)}
          >
            <GalleryImage photo={photo} />
            <span className="flex min-h-14 items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
              <span className="font-semibold text-paper">{photo.caption}</span>
              <span className="text-sm font-black uppercase text-tiger">Ampliar</span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onTouchStart={(event) => {
            const touch = event.changedTouches[0];
            event.currentTarget.dataset.startX = String(touch.clientX);
          }}
          onTouchEnd={(event) => {
            const start = Number(event.currentTarget.dataset.startX || 0);
            const end = event.changedTouches[0].clientX;
            if (Math.abs(start - end) > 50) setActiveIndex((index) => nextIndex(index, start > end ? 1 : -1));
          }}
        >
          <button
            type="button"
            className="focus-ring absolute right-4 top-4 min-h-11 rounded-md border border-white/20 bg-coal px-4 py-3 text-sm font-black uppercase text-paper"
            onClick={() => setActiveIndex(null)}
          >
            Fechar
          </button>
          <button
            type="button"
            className="focus-ring absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-coal text-3xl text-paper sm:grid"
            onClick={() => setActiveIndex((index) => nextIndex(index, -1))}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <Image
            src={active.src}
            width={active.width}
            height={active.height}
            alt={active.alt}
            className="max-h-[80svh] w-auto max-w-full object-contain"
            sizes="100vw"
          />
          <button
            type="button"
            className="focus-ring absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-coal text-3xl text-paper sm:grid"
            onClick={() => setActiveIndex((index) => nextIndex(index, 1))}
            aria-label="Próxima foto"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}

function GalleryImage({ photo }: { photo: PhotoItem }) {
  return (
    <div className="relative aspect-[4/3] bg-black">
      <Image
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        className="h-full w-full object-contain"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  );
}

function nextIndex(index: number | null, step: number) {
  const current = index ?? 0;
  return (current + step + site.teamPhotos.length) % site.teamPhotos.length;
}

