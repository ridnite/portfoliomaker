import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  const { data, error } = await supabaseAdmin
    .from("pages")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }

  return NextResponse.json(data);
}
