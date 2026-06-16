import Link from "next/link";
import clsx from "clsx";

export default function SectionFooterCTA({ href, label, className }) {
  return (
    <div className={clsx("mt-10 flex justify-center sm:mt-12", className)}>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <span>{label}</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
}
