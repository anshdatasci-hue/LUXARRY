import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  footerExploreLinks,
  footerCompanyLinks,
  footerLegalLinks,
  siteConfig,
} from "@/config/navigation";
import { footerCategoryLinks } from "@/config/categories";

export default function SiteFooter() {
  const columns = [
    { title: "Explore", links: footerExploreLinks },
    { title: "Categories", links: footerCategoryLinks },
    { title: "Company", links: footerCompanyLinks },
    { title: "Legal", links: footerLegalLinks },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 lg:py-20">
        <div className="mb-12">
          <Link
            href="/"
            className="font-display text-2xl font-medium text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-medium tracking-widest uppercase text-foreground">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">{siteConfig.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
