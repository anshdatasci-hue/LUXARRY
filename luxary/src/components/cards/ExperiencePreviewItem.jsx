import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function ExperiencePreviewItem({ experience, typeLabel }) {
  return (
    <article>
      <Link
        href={experience.href}
        className="group flex items-start justify-between gap-4 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`Explore experience: ${experience.title}`}
      >
        <div className="flex-1">
          <Badge variant="accent" className="mb-2">
            {typeLabel}
          </Badge>
          <h3 className="font-display text-base font-medium text-foreground transition-colors group-hover:text-accent">
            {experience.title}
          </h3>
          {experience.status === "coming-soon" && (
            <Badge variant="muted" className="mt-2">
              Coming Soon
            </Badge>
          )}
        </div>
        <span
          aria-hidden="true"
          className="mt-1 text-accent opacity-0 transition-opacity group-hover:opacity-100"
        >
          →
        </span>
      </Link>
    </article>
  );
}
