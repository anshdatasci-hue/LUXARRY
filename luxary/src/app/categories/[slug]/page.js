import { notFound } from "next/navigation";

const categories = {
  watches: {
    title: "Watches",
    description:
      "Discover exceptional timepieces from the world's most prestigious watchmakers.",
  },

  jewelry: {
    title: "Jewelry",
    description:
      "Explore iconic jewelry creations defined by craftsmanship and heritage.",
  },

  beauty: {
    title: "Beauty",
    description:
      "Luxury beauty, fragrances, and personal care from renowned maisons.",
  },

  automotive: {
    title: "Automotive",
    description:
      "Experience the pinnacle of performance, engineering, and luxury motoring.",
  },

  hospitality: {
    title: "Hospitality",
    description:
      "Discover extraordinary hotels, resorts, and luxury travel experiences.",
  },

  fashion: {
    title: "Fashion",
    description:
      "Explore fashion houses shaping luxury through innovation and timeless design.",
  },
};

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = categories[slug];

  if (!category) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Category
        </p>

        <h1 className="text-5xl font-light lg:text-7xl">{category.title}</h1>

        <p className="mt-6 text-lg text-neutral-600">{category.description}</p>
      </div>

      <div className="mt-20 border-t border-neutral-200 pt-12">
        <p className="text-neutral-500">
          Category experiences and curated products will be added in a future
          phase of Luxary.
        </p>
      </div>
    </main>
  );
}
