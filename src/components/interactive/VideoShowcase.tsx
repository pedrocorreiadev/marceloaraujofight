"use client";

import { useEffect, useRef, useState } from "react";

import { site } from "@/content/site";

type VideoItem = (typeof site.videos)[number];

export function VideoShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {site.videos.map((video) => (
        <TrainingVideo key={video.src} video={video} />
      ))}
    </div>
  );
}

function TrainingVideo({ video }: { video: VideoItem }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const isVertical = video.height > video.width;
  const hasVerticalFootageInWideFile = video.src.includes("treino-boxe-kickboxing");
  const frameClass = hasVerticalFootageInWideFile
    ? "aspect-video lg:aspect-[9/16]"
    : isVertical
      ? "aspect-[9/16]"
      : "aspect-video";

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          element.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  async function play() {
    const element = ref.current;
    if (!element) return;

    element.muted = true;
    try {
      await element.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  function pause() {
    const element = ref.current;
    if (!element) return;

    element.pause();
    setPlaying(false);
  }

  async function toggle() {
    const element = ref.current;
    if (!element) return;

    if (element.paused) {
      await play();
    } else {
      pause();
    }
  }

  async function playOnHover() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    await play();
  }

  return (
    <article
      className="group overflow-hidden rounded-lg border border-white/10 bg-coal transition duration-300 hover:-translate-y-1 hover:border-tiger/70 hover:bg-ink"
      onPointerEnter={() => {
        void playOnHover();
      }}
      onPointerLeave={pause}
    >
      <div className={`relative bg-black ${frameClass}`}>
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          preload="metadata"
          muted
          playsInline
          loop
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
          aria-label={video.title}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-black/40" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-tiger px-3 py-2 text-xs font-black uppercase text-ink">
            Treino real
          </span>
          <span className="rounded-md border border-white/15 bg-ink/80 px-3 py-2 text-xs font-black uppercase text-paper">
            {video.modality}
          </span>
        </div>
        <button
          type="button"
          className="focus-ring absolute bottom-3 left-3 min-h-11 rounded-md bg-paper px-4 py-3 text-sm font-black uppercase text-ink transition hover:bg-tiger active:scale-95"
          onClick={toggle}
          aria-label={`${playing ? "Pausar" : "Reproduzir"} ${video.title}`}
        >
          {playing ? "Pausar" : "Reproduzir"}
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-black uppercase text-paper">{video.title}</h3>
        <p className="mt-2 text-sm leading-6 text-smoke">{video.description}</p>
      </div>
    </article>
  );
}
