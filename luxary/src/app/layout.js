import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { siteConfig } from "@/config/navigation";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
// import { CartProvider } from "@/context/CartContext";
// import { ToastProvider } from "@/context/ToastContext";
import { AuthProvider } from "@/context/AuthContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title:
    "Luxary — Discover Luxury Through Heritage, Storytelling & Craftsmanship",
  description:
    "Luxary is a luxury discovery platform. Explore iconic brands through heritage stories, craftsmanship insights, editorial features, and immersive experiences.",
  openGraph: {
    type: "website",
    title:
      "Luxary — Discover Luxury Through Heritage, Storytelling & Craftsmanship",
    description:
      "Explore iconic luxury brands through heritage, storytelling, craftsmanship, and immersive experiences.",
    siteName: "Luxary",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Luxary — Discover Luxury Through Heritage, Storytelling & Craftsmanship",
    description:
      "Explore iconic luxury brands through heritage, storytelling, craftsmanship, and immersive experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {/* <ToastProvider> */}
              <SkipLink />
              <SiteHeader />
              <main id="main-content">{children}</main>
              <SiteFooter />
              {/* </ToastProvider> */}
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
