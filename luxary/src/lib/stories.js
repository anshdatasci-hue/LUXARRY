import { supabase } from "@/lib/supabase";

export async function getStories() {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .order("id");

  if (error) throw error;

  return data;
}

export async function getStory(slug) {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data;
}
