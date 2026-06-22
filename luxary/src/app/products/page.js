"use client";

import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
const categories = ["All", "Watches", "Fashion", "Jewelry", "Automobiles"];

export default function ProductsPage() {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const brands = ["All", ...new Set(products.map((product) => product.brand))];

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;

      const brandMatch =
        selectedBrand === "All" || product.brand === selectedBrand;

      return categoryMatch && brandMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;

        case "price-high":
          return b.price - a.price;

        case "brand-asc":
          return a.brand.localeCompare(b.brand);

        case "brand-desc":
          return b.brand.localeCompare(a.brand);

        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedBrand("All");
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Luxury Collection
        </p>

        <h1 className="text-5xl font-light">Products</h1>

        <p className="mt-4 max-w-2xl text-neutral-600">
          Discover iconic luxury products from the world's most celebrated
          brands.
        </p>
      </div>

      <div className="mt-16 border-b border-neutral-200">
        <div className="flex flex-wrap gap-8 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-3 text-sm uppercase tracking-[0.25em] transition ${
                selectedCategory === category
                  ? "border-b border-black text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="mt-8 mb-10 flex items-center justify-between">
        <p className="text-sm text-neutral-500">
          Showing {filteredProducts.length} products
        </p>

        <div className="flex items-center gap-6">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border-none bg-transparent text-sm uppercase tracking-[0.15em] text-neutral-600 outline-none"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-none bg-transparent text-sm uppercase tracking-[0.15em] text-neutral-600 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price Low → High</option>
            <option value="price-high">Price High → Low</option>
            <option value="brand-asc">Brand A → Z</option>
            <option value="brand-desc">Brand Z → A</option>
          </select>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedBrand("All");
              setSortBy("featured");
            }}
            className="text-sm uppercase tracking-[0.15em] text-neutral-500 transition hover:text-black"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-light">No products found</h2>

          <p className="mt-3 text-neutral-500">Try adjusting your filters.</p>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
