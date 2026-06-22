// import Link from "next/link";
import DiscoveryImage from "@/components/ui/DiscoveryImage";
import Badge from "@/components/ui/Badge";
import MotionCardHover from "@/components/motion/MotionCardHover";

export default function ExperienceCard({ experience, typeLabel, featured = false }) {
  return (
    <MotionCardHover>
      <article className="group h-full">
        <div
  className="flex h-full flex-col"
>
          {experience.image && (
            <DiscoveryImage
              src={experience.image.src}
              alt={experience.image.alt}
              aspectRatio={featured ? "aspect-[16/10]" : "aspect-[4/3]"}
              sizes={featured ? "(max-width: 768px) 100vw, 60vw" : "100vw"}
              imageClassName="group-hover:scale-105"
            />
          )}
          <div className="flex flex-1 flex-col pt-5">
            {typeLabel && (
              <Badge variant="accent" className="mb-3 w-fit">
                {typeLabel}
              </Badge>
            )}
            <h3
              className={
                featured
                  ? "font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl"
                  : "font-display text-base font-medium text-foreground"
              }
            >
              {experience.title}
            </h3>
            {experience.summary && (
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {experience.summary}
              </p>
            )}
            {experience.status === "coming-soon" && (
              <Badge variant="muted" className="mt-2 w-fit">
                Coming Soon
              </Badge>
            )}
            <span className="mt-4 text-xs font-medium tracking-widest uppercase text-accent">
              Explore Experience
            </span>
          </div>
        </div>
      </article>
    </MotionCardHover>
  );
}
