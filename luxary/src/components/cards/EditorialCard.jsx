import Link from "next/link";
import DiscoveryImage from "@/components/ui/DiscoveryImage";
import MotionCardHover from "@/components/motion/MotionCardHover";

export default function EditorialCard({ article, featured = false }) {
  return (
  <MotionCardHover>
    <article className="group h-full">
      <div className="flex h-full flex-col">
        <DiscoveryImage
          src={article.image.src}
          alt={article.image.alt}
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
            {article.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {article.summary}
          </p>
        </div>
      </div>
    </article>
  </MotionCardHover>
);
}
