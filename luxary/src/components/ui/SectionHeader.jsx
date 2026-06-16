import clsx from "clsx";

export default function SectionHeader({
  heading,
  description,
  headingId,
  className,
  align = "left",
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2
        id={headingId}
        className="font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
