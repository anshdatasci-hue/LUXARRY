"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative h-[700px] overflow-hidden rounded-2xl">
        <Image
          src={images[selected]}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`relative h-20 w-20 overflow-hidden rounded-lg border ${
              selected === index
                ? "border-black"
                : "border-neutral-200"
            }`}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}