import Link from "next/link";
import DiscoveryImage from "@/components/ui/DiscoveryImage";
import MotionCardHover from "@/components/motion/MotionCardHover";

export default function BrandCard({ brand, priority = false }) {
  return (
    <MotionCardHover>
      <article className="group h-full">
        <Link
          href={brand.href}
          className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`Explore ${brand.name} — ${brand.introduction}`}
        >
          <DiscoveryImage
            src={brand.image.src}
            alt={brand.image.alt}
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            imageClassName="group-hover:scale-105"
          />
          <div className="flex flex-1 flex-col pt-5">
            <h3 className="font-display text-xl font-medium text-foreground">
              {brand.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {brand.introduction}
            </p>
            <span className="mt-4 text-xs font-medium tracking-widest uppercase text-accent">
              Explore Brand
            </span>
          </div>
        </Link>
      </article>
    </MotionCardHover>
  );
}
