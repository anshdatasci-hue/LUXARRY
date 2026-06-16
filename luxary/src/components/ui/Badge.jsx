import clsx from "clsx";

export default function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={clsx(
        "inline-block rounded-sm px-2.5 py-1 text-xs font-medium tracking-wider uppercase",
        variant === "default" && "bg-surface-elevated text-muted",
        variant === "accent" && "bg-accent/10 text-accent",
        variant === "muted" && "bg-foreground/5 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
