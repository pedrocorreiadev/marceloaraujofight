"use client";

import { useEffect, useRef, useState } from "react";

import { site } from "@/content/site";

type VideoItem = (typeof site.videos)[number];

export function VideoShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
      {site.videos.map((video, index) => (
        <TrainingVideo key={video.src} video={video} featured={index === 1} />
      ))}
    </div>
  );
}

function TrainingVideo({ video, featured }: { video: VideoItem; featured?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

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
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  async function toggle() {
    const element = ref.current;
    if (!element) return;

    if (element.paused) {
      element.muted = true;
      await element.play();
      setPlaying(true);
    } else {
      element.pause();
      setPlaying(false);
    }
  }

  return (
    <article className={`rounded-lg border border-white/10 bg-coal p-3 ${featured ? "lg:row-span-2" : ""}`}>
      <div className="relative overflow-hidden rounded-md bg-black">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          preload="metadata"
          muted
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className={`w-full object-contain ${video.height > video.width ? "max-h-[70svh]" : "aspect-video"}`}
          aria-label={video.title}
        />
        <button
          type="button"
          className="focus-ring absolute bottom-3 left-3 min-h-11 rounded-md bg-tiger px-4 py-3 text-sm font-black uppercase text-ink transition hover:bg-ember active:scale-95"
          onClick={toggle}
        >
          {playing ? "Pausar" : "Reproduzir"}
        </button>
      </div>
      <div className="px-1 py-4">
        <h3 className="font-display text-2xl font-black uppercase text-paper">{video.title}</h3>
        <p className="mt-2 text-sm leading-6 text-smoke">{video.description}</p>
      </div>
    </article>
  );
}

