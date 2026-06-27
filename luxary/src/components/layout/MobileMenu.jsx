"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { primaryNavItems, secondaryNavItems, siteConfig } from "@/config/navigation";
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
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function MobileMenu({
  open,
  onClose,
}) {
    console.log("MobileMenu rendered:", open)

    const { cartItems } = useCart();
const { wishlistItems } = useWishlist();
const { user } = useAuth();

if (!open) return null;

return (
  <div
  className="fixed inset-0 z-[99999] flex flex-col bg-white overflow-y-auto lg:hidden"
  style={{ height: "100dvh" }}
>

    <Container className="flex-1 py-6">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-border pb-6">

        <Link
          href="/"
          className="font-display text-2xl"
          onClick={onClose}
        >
          {siteConfig.name}
        </Link>

        <button
          onClick={onClose}
          className="text-3xl leading-none"
        >
          ×
        </button>

      </div>

      {/* Main Navigation */}

      <nav className="mt-10">
        <ul className="space-y-7">
          {primaryNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-2xl font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Secondary */}

      <div className="mt-12 border-t border-border pt-8 space-y-5">

  {secondaryNavItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={onClose}
      className="flex items-center gap-2 text-lg"
    >
      {item.variant === "search" && <SearchIcon />}
      {item.label}
    </Link>
  ))}

  <Link
    href="/cart"
    onClick={onClose}
    className="block text-lg"
  >
    Cart ({cartItems.length})
  </Link>

  <Link
    href="/wishlist"
    onClick={onClose}
    className="block text-lg"
  >
    Wishlist ({wishlistItems.length})
  </Link>

  {/* ↓↓↓ PUT IT HERE ↓↓↓ */}

  {user ? (
    <>
      <p className="text-lg">
        Welcome, {user.user_metadata?.full_name || user.email}
      </p>

      <form action={signOut}>
        <button
          type="submit"
          className="block text-lg"
        >
          Sign Out
        </button>
      </form>
    </>
  ) : (
    <>
      <Link
        href="/sign-in"
        onClick={onClose}
        className="block text-lg"
      >
        Sign In
      </Link>

      <Link
        href="/sign-up"
        onClick={onClose}
        className="block text-lg"
      >
        Create Account
      </Link>
    </>
  )}

</div>

    </Container>

  </div>
);
}