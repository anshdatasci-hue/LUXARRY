import Link from "next/link";

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:outline-none"
    >
      Skip to main content
    </Link>
  );
}
