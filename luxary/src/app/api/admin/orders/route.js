import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

// GET ALL ORDERS
export async function GET() {
  const supabase = supabaseAdmin;

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// UPDATE ORDER STATUS
export async function PATCH(request) {
  const supabase = supabaseAdmin;

  const { id, status } = await request.json();

  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// DELETE ORDER
export async function DELETE(request) {
  const supabase = supabaseAdmin;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Order ID is required." },
      { status: 400 },
    );
  }

  const { error } = await supabase.from("orders").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message: "Order deleted successfully.",
  });
}
