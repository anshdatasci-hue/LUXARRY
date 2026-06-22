import Link from "next/link";
import brands from "@/data/brands";

// const brands = [
//   {
//     name: "Rolex",
//     category: "Swiss Watchmaking",
//     description: "A symbol of precision, innovation, and timeless prestige.",
//   },
//   {
//     name: "Patek Philippe",
//     category: "Haute Horlogerie",
//     description:
//       "Generations of craftsmanship and some of the world's most sought-after timepieces.",
//   },
//   {
//     name: "Cartier",
//     category: "Jewelry & Watches",
//     description:
//       "Parisian elegance expressed through iconic jewelry and watchmaking.",
//   },
//   {
//     name: "Louis Vuitton",
//     category: "Fashion & Leather Goods",
//     description:
//       "Travel heritage transformed into one of the world's leading luxury houses.",
//   },
//   {
//     name: "Hermès",
//     category: "Leather Goods & Fashion",
//     description: "Exceptional craftsmanship rooted in equestrian heritage.",
//   },
//   {
//     name: "Ferrari",
//     category: "Automotive",
//     description: "Performance, racing heritage, and Italian excellence.",
//   },
//   {
//     name: "Rolls-Royce",
//     category: "Automotive",
//     description: "The pinnacle of handcrafted luxury motoring.",
//   },
//   {
//     name: "Dior",
//     category: "Fashion",
//     description: "A house that continues to define modern luxury and couture.",
//   },
// ];

export const metadata = {
  title: "Brands | Luxary",
  description:
    "Discover the world's most iconic luxury maisons and their heritage.",
};

export default function BrandsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Luxury Ecosystem
        </p>

        <h1 className="text-5xl font-light lg:text-7xl">Iconic Brands</h1>

        <p className="mt-6 text-lg text-neutral-600">
          Explore the maisons, manufacturers, and innovators that define luxury
          through heritage, craftsmanship, and cultural influence.
        </p>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        {brands.map((brand) => (
          <article
            key={brand.name}
            className="border-t border-neutral-200 pt-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              {brand.category}
            </p>

            <h2 className="mt-4 text-3xl font-light">{brand.name}</h2>

            <p className="mt-4 leading-relaxed text-neutral-600">
              {brand.description}
            </p>

            <Link
              href={`/brands/${brand.slug}`}
              className="mt-6 inline-block text-sm uppercase tracking-[0.2em]"
            >
              Explore Story →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
