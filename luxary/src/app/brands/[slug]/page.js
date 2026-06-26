import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";

export default async function BrandPage({ params }) {
  const { slug } = await params;

  // Brand from Supabase
  const { data: brand, error } = await supabase
    .from("brands")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !brand) {
    notFound();
  }

  // Milestones from Supabase
  const { data: milestones, error: milestoneError } = await supabase
    .from("brand_milestones")
    .select("*")
    .eq("brand_slug", slug)
    .order("year");

  // Products still from local file
  const brandProducts = featuredProducts.filter(
    (product) => product.brand === brand.name,
  );

  // Related brands from Supabase
  const { data: relatedBrands } = await supabase
    .from("brands")
    .select("*")
    .eq("category", brand.category)
    .neq("slug", brand.slug)
    .limit(4);
  console.log("BRAND:", brand.slug);
  console.log("MILESTONES:", milestones);

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">
          {brand.category}
        </p>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          {brand.name}
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-neutral-600 leading-relaxed">
          {brand.description}
        </p>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <img
              src={brand.hero_image}
              alt={brand.name}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Country
              </p>
              <p className="mt-2 text-xl">{brand.country}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Founded
              </p>
              <p className="mt-2 text-xl">{brand.founded}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Founder
              </p>
              <p className="mt-2 text-xl">{brand.founder}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-28">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
            Heritage
          </p>

          <h2 className="text-4xl md:text-5xl font-light max-w-3xl">
            A legacy shaped through generations of excellence.
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-neutral-700 max-w-4xl">
            {brand.heritage}
          </p>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
                Craftsmanship
              </p>

              <h2 className="text-4xl md:text-5xl font-light">
                The pursuit of perfection.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-neutral-700">
                {brand.craftsmanship}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-28">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-12">
            Timeline
          </p>

          <div className="space-y-12">
            {milestones?.map((milestone) => (
              <div
                key={milestone.id}
                className="flex gap-10 border-l border-neutral-300 pl-8"
              >
                <div className="min-w-[80px] text-neutral-500">
                  {milestone.year}
                </div>

                <h3 className="text-2xl font-light">{milestone.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-light">Creations</h2>

            <p className="text-neutral-500">Products from the maison</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {brandProducts.length > 0 ? (
              brandProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-neutral-500">
                No products available for this brand yet.
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-4xl font-light mb-16">Discover More Houses</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedBrands?.map((related) => (
              <Link
                key={related.slug}
                href={`/brands/${related.slug}`}
                className="border border-neutral-200 p-8 hover:border-neutral-400 transition"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {related.category}
                </p>

                <h3 className="mt-4 text-2xl font-light">{related.name}</h3>

                <p className="mt-4 text-neutral-600">{related.country}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
