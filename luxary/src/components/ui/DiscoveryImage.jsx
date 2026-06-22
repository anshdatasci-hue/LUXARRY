import Image from "next/image";
import clsx from "clsx";

export default function DiscoveryImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  imageClassName,
  aspectRatio = "aspect-[4/3]",
}) {
  return (
    <div className={clsx("relative overflow-hidden bg-surface-elevated", aspectRatio, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
        className={clsx("object-cover transition-transform duration-500", imageClassName)}
      />
    </div>
  );
}
