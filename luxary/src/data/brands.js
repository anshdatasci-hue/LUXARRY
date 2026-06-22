const brands = [
  {
    slug: "rolex",
    name: "Rolex",
    country: "Switzerland",
    founded: "1905",
    founder: "Hans Wilsdorf",
    category: "Watches",
    description:
      "Rolex is one of the world's most prestigious watch manufacturers, renowned for precision, durability, and timeless design.",
    heritage:
      "Founded in London before moving to Geneva, Rolex pioneered many innovations that shaped modern watchmaking and became a global symbol of success and achievement.",
    craftsmanship:
      "Rolex controls nearly every stage of production, from casting gold alloys to assembling movements by hand.",
    heroImage: "/images/brands/rolex.jpg",
    milestones: [
      { year: "1905", title: "Founded" },
      { year: "1926", title: "Oyster Case" },
      { year: "1953", title: "Submariner Launch" },
    ],
  },

  {
    slug: "patek-philippe",
    name: "Patek Philippe",
    country: "Switzerland",
    founded: "1839",
    founder: "Antoni Patek",
    category: "Watches",
    description:
      "Patek Philippe represents the pinnacle of traditional Swiss watchmaking.",
    heritage:
      "Known for exceptional complications and family ownership, the maison has remained independent for generations.",
    craftsmanship:
      "Every timepiece is finished by master artisans following centuries-old techniques.",
    heroImage: "/images/brand-heroes/herooo.jpg",
    milestones: [
      { year: "1839", title: "Founded" },
      { year: "1932", title: "Stern Family Ownership" },
      { year: "1989", title: "Calibre 89 Launch" },
    ],
  },

  {
    slug: "cartier",
    name: "Cartier",
    country: "France",
    founded: "1847",
    founder: "Louis-François Cartier",
    category: "Jewelry",
    description:
      "Cartier is a legendary French maison known for jewelry and watches.",
    heritage: "Often called the jeweler of kings and the king of jewelers.",
    craftsmanship:
      "Cartier combines exceptional gem-setting expertise with timeless design.",
    heroImage: "/images/brands/cartier.jpg",
    milestones: [
      { year: "1847", title: "Founded" },
      { year: "1904", title: "Santos Watch" },
      { year: "1917", title: "Tank Collection" },
    ],
  },

  {
    slug: "louis-vuitton",
    name: "Louis Vuitton",
    country: "France",
    founded: "1854",
    founder: "Louis Vuitton",
    category: "Fashion",
    description:
      "Louis Vuitton is one of the most influential luxury fashion houses in the world.",
    heritage:
      "The maison began with luxury trunks and evolved into a global symbol of luxury.",
    craftsmanship:
      "Each creation reflects exceptional leather craftsmanship and innovation.",
    heroImage: "/images/brands/louis-vuitton.jpg",
    milestones: [
      { year: "1854", title: "Founded" },
      { year: "1896", title: "Monogram Canvas" },
      { year: "1987", title: "LVMH Formation" },
    ],
  },

  {
    slug: "hermes",
    name: "Hermès",
    country: "France",
    founded: "1837",
    founder: "Thierry Hermès",
    category: "Fashion",
    description:
      "Hermès is celebrated for craftsmanship, exclusivity, and timeless elegance.",
    heritage: "Originally a harness workshop serving European nobility.",
    craftsmanship: "Products are handcrafted by artisans trained for years.",
    heroImage: "/images/brands/hermes.jpg",
    milestones: [
      { year: "1837", title: "Founded" },
      { year: "1922", title: "Leather Goods Expansion" },
      { year: "1984", title: "Birkin Bag" },
    ],
  },

  {
    slug: "gucci",
    name: "Gucci",
    country: "Italy",
    founded: "1921",
    founder: "Guccio Gucci",
    category: "Fashion",
    description:
      "Gucci is an Italian luxury house known for bold creativity and craftsmanship.",
    heritage: "From Florentine roots to global influence.",
    craftsmanship:
      "Combines Italian artisan traditions with contemporary innovation.",
    heroImage: "/images/brands/gucci.jpg",
    milestones: [
      { year: "1921", title: "Founded" },
      { year: "1953", title: "International Expansion" },
      { year: "1990s", title: "Luxury Revival" },
    ],
  },

  {
    slug: "dior",
    name: "Dior",
    country: "France",
    founded: "1946",
    founder: "Christian Dior",
    category: "Fashion",
    description:
      "Dior redefined post-war luxury fashion with elegance and innovation.",
    heritage: "The New Look transformed haute couture forever.",
    craftsmanship:
      "Each collection reflects Parisian excellence and savoir-faire.",
    heroImage: "/images/brands/dior.jpg",
    milestones: [
      { year: "1946", title: "Founded" },
      { year: "1947", title: "New Look" },
      { year: "1990s", title: "Global Expansion" },
    ],
  },

  {
    slug: "ferrari",
    name: "Ferrari",
    country: "Italy",
    founded: "1947",
    founder: "Enzo Ferrari",
    category: "Automotive",
    description:
      "Ferrari is synonymous with racing heritage and performance excellence.",
    heritage: "Built on Formula One success and automotive innovation.",
    craftsmanship:
      "Every Ferrari blends engineering precision with Italian artistry.",
    heroImage: "/images/brands/ferrari.jpg",
    milestones: [
      { year: "1947", title: "Founded" },
      { year: "1950", title: "Formula One Debut" },
      { year: "1987", title: "F40 Launch" },
    ],
  },

  {
    slug: "rolls-royce",
    name: "Rolls-Royce",
    country: "United Kingdom",
    founded: "1906",
    founder: "Charles Rolls & Henry Royce",
    category: "Automotive",
    description:
      "Rolls-Royce Motor Cars creates some of the world's most luxurious automobiles.",
    heritage: "A benchmark for prestige and handcrafted excellence.",
    craftsmanship: "Each vehicle is meticulously tailored to its owner.",
    heroImage: "/images/brands/rolls-royce.jpg",
    milestones: [
      { year: "1906", title: "Founded" },
      { year: "1925", title: "Phantom Launch" },
      { year: "2003", title: "Goodwood Era" },
    ],
  },

  {
    slug: "tiffany-co",
    name: "Tiffany & Co.",
    country: "United States",
    founded: "1837",
    founder: "Charles Lewis Tiffany",
    category: "Jewelry",
    description: "Tiffany & Co. is an iconic American luxury jeweler.",
    heritage: "Known worldwide for exceptional diamonds and timeless design.",
    craftsmanship: "Each creation reflects precision, artistry, and heritage.",
    heroImage: "/images/brands/tiffany.jpg",
    milestones: [
      { year: "1837", title: "Founded" },
      { year: "1886", title: "Tiffany Setting" },
      { year: "2021", title: "LVMH Acquisition" },
    ],
  },
];

export default brands;
