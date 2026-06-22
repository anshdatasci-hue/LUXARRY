import { cta } from "@/config/cta";

export const craftsmanshipContent = {
  heading: "Craftsmanship Spotlight",
  description: "What makes luxury exceptional?",
  intro:
    "Luxury is defined not by price, but by the mastery, patience, and artistry poured into every creation. Explore the disciplines that set exceptional maisons apart.",
  sectionCTA: cta.learnMore,
  topics: [
    {
      slug: "watchmaking",
      title: "Watchmaking",
      highlight:
        "Hundreds of components assembled by hand to measure time with extraordinary precision.",
      href: "/stories/evolution-of-watchmaking",
      image: {
        src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
        alt: "Intricate mechanical watch movement showcasing haute horlogerie",
      },
    },
    {
      slug: "leather-craftsmanship",
      title: "Leather Craftsmanship",
      highlight:
        "Saddle-stitching traditions passed through generations of artisan leather workers.",
      href: "/stories/art-of-leather-craft",
      image: {
        src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
        alt: "Artisan hands stitching fine leather in a traditional atelier",
      },
    },
    {
      slug: "jewelry-creation",
      title: "Jewelry Creation",
      highlight:
        "Gemstone selection, goldsmith techniques, and the pursuit of perfect proportions.",
      href: "/editorial/evolution-of-jewelry-craft",
      image: {
        src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
        alt: "Fine jewelry creation with precious metals and gemstones",
      },
    },
    {
      slug: "automotive-engineering",
      title: "Automotive Engineering",
      highlight:
        "Bespoke coachbuilding where engineering precision meets artistic vision.",
      href: "/stories/bespoke-automotive-craft",
      image: {
        src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
        alt: "Luxury automotive engineering and bespoke coachbuilding craft",
      },
    },
  ],
};
