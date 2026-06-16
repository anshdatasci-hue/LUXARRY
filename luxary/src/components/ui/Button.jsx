import Link from "next/link";
import clsx from "clsx";

const variants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border border-foreground",
  secondary:
    "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5",
  tertiary:
    "bg-transparent text-accent border border-accent/30 hover:border-accent hover:bg-accent/5",
  text: "bg-transparent text-foreground underline-offset-4 hover:underline p-0 min-h-0",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
  ...props
}) {
  const classes = clsx(
    "inline-flex items-center justify-center min-h-11 px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    variant !== "text" && "rounded-sm",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
}
