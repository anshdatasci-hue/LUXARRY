"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const search = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  const suggestions = ["Rolex", "Cartier", "Watches", "Jewelry", "Ferrari"];

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Discovery
        </p>

        <h1 className="text-5xl font-light">Search</h1>

        <p className="mt-4 max-w-2xl text-neutral-600">
          Explore products, brands and categories across the Luxary collection.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search products, brands or categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-8 w-full rounded-xl border border-neutral-200 px-5 py-4 outline-none focus:border-black"
      />

      {!query && (
        <div className="mb-10 flex flex-wrap gap-3">
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition hover:border-black"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {query && (
        <p className="mb-8 text-neutral-500">
          {filteredProducts.length} result(s) found
        </p>
      )}

      {query && filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200">
            ✦
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Discovery
          </p>

          <h2 className="text-5xl font-light">No Results Found</h2>

          <p className="mx-auto mt-6 max-w-xl text-neutral-600">
            Try exploring our curated luxury collections or searching for
            another maison.
          </p>

          <button
            onClick={() => setQuery("")}
            className="mt-10 rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
          >
            Browse Products
          </button>
        </div>
      )}

      {query && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
