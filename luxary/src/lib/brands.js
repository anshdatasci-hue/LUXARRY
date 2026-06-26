import { supabase } from "@/lib/supabase";

export async function getBrands() {
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .order("name");

  if (error) throw error;

  return data;
}

export async function getBrand(slug) {
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data;
}
