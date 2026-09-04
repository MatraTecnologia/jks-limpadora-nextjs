"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = { poster: string | null; desktop: string | null; mobile: string | null };

export const HeroMedia = ({ poster, desktop, mobile }: Props) => {
  const [src, setSrc] = useState<string | null>(null);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 767px)").matches;
    setSrc((small ? mobile : desktop) ?? desktop ?? mobile);
  }, [desktop, mobile]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    video.muted = true;
    video.defaultMuted = true;
    const play = () => video.play().catch(() => {});
    play();
    video.addEventListener("loadeddata", play);
    document.addEventListener("visibilitychange", play);
    return () => {
      video.removeEventListener("loadeddata", play);
      document.removeEventListener("visibilitychange", play);
    };
  }, [src]);

  return (
    <>
      {poster && <Image src={poster} alt="Técnico da JKS Limpadora em ambiente pós-incêndio" fill priority sizes="100vw" className="object-cover object-[64%_50%]" />}
      {src && (
        <video
          ref={ref}
          key={src}
          src={src}
          poster={poster ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-[64%_50%] animate-in fade-in duration-1000"
        />
      )}
    </>
  );
};
