import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function TestProductPage() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-sm">
        <ProductCard product={products[0]} />
      </div>
    </main>
  );
}
