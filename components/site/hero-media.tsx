"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = { poster: string | null; desktop: string | null; mobile: string | null };

export const HeroMedia = ({ poster, desktop, mobile }: Props) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 767px)").matches;
    setSrc((small ? mobile : desktop) ?? desktop ?? mobile);
  }, [desktop, mobile]);

  return (
    <>
      {poster && <Image src={poster} alt="Técnico da JKS Limpadora em ambiente pós-incêndio" fill priority sizes="100vw" className="object-cover object-[64%_50%]" />}
      {src && (
        <video
          key={src}
          src={src}
          poster={poster ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-[64%_50%] animate-in fade-in duration-1000"
        />
      )}
    </>
  );
};
