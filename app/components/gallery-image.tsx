"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImageProps = {
  src: string;
  alt: string;
  caption: string;
  index: string;
};

export function GalleryImage({ src, alt, caption, index }: GalleryImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        className="gallery-image-button"
        type="button"
        aria-label={`${caption} — open large image`}
        onClick={() => setOpen(true)}
      >
        <span className="gallery-image" style={{ position: "relative" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 800px) 100vw, 72vw"
          />
          <span className="gallery-expand" aria-hidden="true">
            <i />
            <i />
          </span>
        </span>
      </button>

      {open ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          onClick={() => setOpen(false)}
        >
          <button
            className="gallery-lightbox-close"
            type="button"
            aria-label="Close image"
            onClick={() => setOpen(false)}
          >
            <span />
            <span />
          </button>
          <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div className="gallery-lightbox-image">
              <Image src={src} alt={alt} fill sizes="100vw" />
            </div>
            <p>
              <span>{index}</span>
              {caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
