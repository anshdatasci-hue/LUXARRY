export const categories = [
  {
    slug: "fashion",
    name: "Fashion",
    description:
      "Haute couture, heritage maisons, and the art of luxury dressmaking.",
    href: "/categories/fashion",
    image: {
      src: "https://picsum.photos/800/600?random=1",
      alt: "Elegant luxury fashion atelier with draped fabrics",
    },
  },
  {
    slug: "watches",
    name: "Watches",
    description:
      "Horological mastery, complications, and centuries of precision craft.",
    href: "/categories/watches",
    image: {
      src: "https://picsum.photos/800/600?random=2",
      alt: "Intricate luxury watch movement showcasing fine watchmaking",
    },
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    description:
      "Gemstone artistry, goldsmith traditions, and iconic creations.",
    href: "/categories/jewelry",
    image: {
      src: "https://picsum.photos/800/600?random=1",
      alt: "Fine jewelry craftsmanship with precious gemstones",
    },
  },
  {
    slug: "automotive",
    name: "Automotive",
    description:
      "Engineering excellence, bespoke coachbuilding, and automotive legacy.",
    href: "/categories/automotive",
    image: {
      src: "https://picsum.photos/800/600?random=1",
      alt: "Luxury automobile showcasing refined automotive design",
    },
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    description:
      "Legendary hotels, exceptional service, and destination experiences.",
    href: "/categories/hospitality",
    image: {
      src: "https://picsum.photos/800/600?random=1",
      alt: "Grand luxury hotel lobby with elegant architectural details",
    },
  },
  {
    slug: "beauty",
    name: "Beauty",
    description: "Fragrance houses, skincare innovation, and beauty rituals.",
    href: "/categories/beauty",
    image: {
      src: "https://picsum.photos/800/600?random=1",
      alt: "Luxury beauty products arranged in an editorial composition",
    },
  },
];

export const footerCategoryLinks = categories.map(({ name, href }) => ({
  label: name,
  href,
}));
