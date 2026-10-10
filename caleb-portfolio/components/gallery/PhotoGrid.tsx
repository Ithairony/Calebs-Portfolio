"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/data/photos/photos";

type Size = "S" | "M" | "L";

const sizeOptions: Size[] = ["S", "M", "L"];

const columns: Record<Size, string> = {
  S: "columns-2 sm:columns-3 lg:columns-5",
  M: "columns-1 sm:columns-2 lg:columns-3",
  L: "columns-1 lg:columns-2",
};

const imageSizes: Record<Size, string> = {
  S: "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw",
  M: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  L: "(min-width: 1024px) 50vw, 100vw",
};

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [size, setSize] = useState<Size>("M");

  return (
    <div className="p-5">
      {/* Size switch */}
      <div
        role="group"
        aria-label="Photo size"
        className="mb-5 flex justify-center gap-2 text-sm font-bold"
      >
        {sizeOptions.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={size === option}
            onClick={() => setSize(option)}
            className={`h-8 w-8 rounded-full border transition-colors ${
              size === option
                ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                : "border-neutral-300 hover:border-black dark:border-neutral-600 dark:hover:border-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid */}
      <ul className={`gap-4 ${columns[size]}`}>
        {photos.map((photo) => (
          <li
            key={photo.src}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={imageSizes[size]}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}