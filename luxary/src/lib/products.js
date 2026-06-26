import { supabase } from "./supabase";

export async function getProducts() {
  console.log("GET PRODUCTS CALLED");

  const { data, error } = await supabase.from("products").select(`
  *,
  brands(*),
  categories!products_category_id_fkey(*)
`);

  console.dir(data[0], { depth: null });

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    image: product.image_url,
    description: product.description,
    featured: product.featured,
    brand: product.brands?.name,
    category: product.categories?.name,
  }));
}

export async function getProduct(slug) {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      brands!products_brand_id_fkey (
        name,
        slug
      ),
      categories!products_category_id_fkey (
        name
      )
    `,
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    price: data.price,
    image: data.image_url,
    description: data.description,
    featured: data.featured,
    brand: data.brands?.name,
    category: data.categories?.name,
  };
}
