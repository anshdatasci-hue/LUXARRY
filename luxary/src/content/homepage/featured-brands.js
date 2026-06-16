import { cta } from "@/config/cta";

export const featuredBrandsContent = {
  heading: "Featured Luxury Brands",
  description:
    "Explore the world's most iconic luxury brands and their enduring legacies.",
  sectionCTA: cta.viewAllBrands,
  brands: [
    {
      slug: "rolex",
      name: "Rolex",
      introduction:
        "A symbol of precision watchmaking and timeless design since 1905.",
      href: "/brands/rolex",
      image: {
        src: "https://picsum.photos/800/600?random=3",
        alt: "Precision luxury watchmaking representing Rolex heritage",
      },
    },
    {
      slug: "louis-vuitton",
      name: "Louis Vuitton",
      introduction:
        "From trunk-making pioneer to global icon of luxury fashion and craft.",
      href: "/brands/louis-vuitton",
      image: {
        src: "https://picsum.photos/800/600?random=3",
        alt: "Luxury leather craftsmanship reflecting Louis Vuitton heritage",
      },
    },
    {
      slug: "dior",
      name: "Dior",
      introduction:
        "Revolutionary haute couture and the art of French elegance since 1947.",
      href: "/brands/dior",
      image: {
        src: "https://picsum.photos/800/600?random=3",
        alt: "Haute couture fashion atelier embodying Dior elegance",
      },
    },
    {
      slug: "rolls-royce",
      name: "Rolls-Royce",
      introduction:
        "The pursuit of perfection in bespoke automotive engineering since 1904.",
      href: "/brands/rolls-royce",
      image: {
        src: "https://picsum.photos/800/600?random=3",
        alt: "Bespoke luxury automobile craftsmanship of Rolls-Royce",
      },
    },
  ],
};
