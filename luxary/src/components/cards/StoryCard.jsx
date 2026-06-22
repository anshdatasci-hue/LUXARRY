import Link from "next/link";
import DiscoveryImage from "@/components/ui/DiscoveryImage";
import MotionCardHover from "@/components/motion/MotionCardHover";

export default function StoryCard({ story, featured = false }) {
  return (
    <MotionCardHover>
      <article className="group h-full">
        <Link
          href={story.href || `/stories/${story.slug}`}
          className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`Read story: ${story.title}`}
        >
          <DiscoveryImage
            // src={story.image.src}
            // alt={story.image.alt}
            src={story.image?.src || story.heroImage}
            alt={story.image?.alt || story.alt || story.title}
            aspectRatio={featured ? "aspect-[16/10]" : "aspect-[4/3]"}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 60vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            imageClassName="group-hover:scale-105"
          />
          <div className="flex flex-1 flex-col pt-5">
            <h3
              className={
                featured
                  ? "font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl"
                  : "font-display text-lg font-medium text-foreground"
              }
            >
              {story.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {story.summary || story.excerpt}
            </p>
            <span className="mt-4 text-xs font-medium tracking-widest uppercase text-accent">
              Read Story
            </span>
          </div>
        </Link>
      </article>
    </MotionCardHover>
  );
}
