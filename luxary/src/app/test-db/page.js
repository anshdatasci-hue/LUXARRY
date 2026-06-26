import { supabase } from "@/lib/supabase";

export default async function TestDBPage() {
  const { data, error } = await supabase.from("brands").select("*");

  return (
    <div className="p-10">
      <h2>Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h2>Error</h2>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
