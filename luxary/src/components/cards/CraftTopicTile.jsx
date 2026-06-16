import Link from "next/link";
import DiscoveryImage from "@/components/ui/DiscoveryImage";
import MotionCardHover from "@/components/motion/MotionCardHover";

export default function CraftTopicTile({ topic }) {
  return (
    <MotionCardHover>
      <article className="group h-full">
        <Link
          href={topic.href}
          className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`Learn more about ${topic.title}`}
        >
          <DiscoveryImage
            src={topic.image.src}
            alt={topic.image.alt}
            aspectRatio="aspect-square"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            imageClassName="group-hover:scale-105"
          />
          <div className="flex flex-1 flex-col pt-5">
            <h3 className="font-display text-lg font-medium text-foreground">
              {topic.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {topic.highlight}
            </p>
            <span className="mt-4 text-xs font-medium tracking-widest uppercase text-accent">
              Learn More
            </span>
          </div>
        </Link>
      </article>
    </MotionCardHover>
  );
}
