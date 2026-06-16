import Link from "next/link";
import DiscoveryImage from "@/components/ui/DiscoveryImage";
import MotionCardHover from "@/components/motion/MotionCardHover";

export default function CategoryTile({ category }) {
  return (
    <MotionCardHover>
      <article className="group h-full">
        <Link
          href={category.href}
          className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`Explore ${category.name} — ${category.description}`}
        >
          <DiscoveryImage
            src={category.image.src}
            alt={category.image.alt}
            aspectRatio="aspect-[3/2]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            imageClassName="group-hover:scale-105"
          />
          <div className="flex flex-1 flex-col pt-4">
            <h3 className="font-display text-lg font-medium text-foreground">
              {category.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
              {category.description}
            </p>
            <span className="mt-3 text-xs font-medium tracking-widest uppercase text-accent">
              Explore Category
            </span>
          </div>
        </Link>
      </article>
    </MotionCardHover>
  );
}
