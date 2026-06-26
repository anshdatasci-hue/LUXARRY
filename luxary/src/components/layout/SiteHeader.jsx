"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import {
  primaryNavItems,
  secondaryNavItems,
  siteConfig,
} from "@/config/navigation";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/lib/auth/actions";

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function SiteHeader() {
  const { cartItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { wishlistItems } = useWishlist();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="font-display text-2xl font-medium tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label={`${siteConfig.name} — Home`}
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "text-sm tracking-wide transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
  <nav aria-label="Utility">
    <ul className="flex items-center gap-6">
      {secondaryNavItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="flex items-center gap-1.5 text-sm tracking-wide text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label={item.variant === "search" ? "Search" : item.label}
          >
            {item.variant === "search" && <SearchIcon />}
            <span className={item.variant === "search" ? "sr-only" : ""}>
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>

  <Link
    href="/cart"
    className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
  >
    Cart ({cartItems.length})
  </Link>
<Link href="/wishlist">
  Wishlist ({wishlistItems.length})
</Link>
{user ? (
  <>
    <span className="text-sm text-foreground">
      Welcome, {user.user_metadata?.full_name || user.email}
    </span>

    <form action={signOut}>
      <button
        type="submit"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        Sign Out
      </button>
    </form>
  </>
) : (
  <>
    <Link
      href="/sign-in"
      className="text-sm text-muted transition-colors hover:text-foreground"
    >
      Sign In
    </Link>

    <Link
      href="/sign-up"
      className="text-sm text-muted transition-colors hover:text-foreground"
    >
      Create Account
    </Link>
  </>
)}
</div>


          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-foreground lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => {
  console.log("clicked");
  setIsMobileOpen((open) => !open);
}}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isMobileOpen ? "Close" : "Menu"}</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={clsx(
                  "block h-px w-full bg-foreground transition-transform duration-200",
                  isMobileOpen && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={clsx(
                  "block h-px w-full bg-foreground transition-opacity duration-200",
                  isMobileOpen && "opacity-0",
                )}
              />
              <span
                className={clsx(
                  "block h-px w-full bg-foreground transition-transform duration-200",
                  isMobileOpen && "-translate-y-[7px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
  <div
    id="mobile-navigation"
    className="border-t border-border bg-background lg:hidden"
  >
            <Container className="py-6">
              <nav aria-label="Primary mobile">
                <ul className="space-y-1">
                  {primaryNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-3 text-base tracking-wide text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 border-t border-border pt-6 space-y-4">

  <nav aria-label="Utility mobile">
    <ul className="space-y-4">
      {secondaryNavItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="flex items-center gap-2 text-base text-muted"
          >
            {item.variant === "search" && <SearchIcon />}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>

  <div className="border-t border-border pt-4 space-y-4">

    <Link
      href="/cart"
      className="block text-base"
    >
      Cart ({cartItems.length})
    </Link>

    <Link
      href="/wishlist"
      className="block text-base"
    >
      Wishlist ({wishlistItems.length})
    </Link>

    {user ? (
      <>
        <p className="text-base">
          Welcome, {user.user_metadata?.full_name || user.email}
        </p>

        <form action={signOut}>
          <button
            type="submit"
            className="text-base"
          >
            Sign Out
          </button>
        </form>
      </>
    ) : (
      <>
        <Link
          href="/sign-in"
          className="block text-base"
        >
          Sign In
        </Link>

        <Link
          href="/sign-up"
          className="block text-base"
        >
          Create Account
        </Link>
      </>
    )}

  </div>

</div>
            </Container>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
