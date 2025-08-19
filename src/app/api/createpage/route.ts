import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { title } from "process";

export async function POST(request: Request) {
  const contentdata  = await request.json();
  const userid = contentdata.id;
  const { error } = await supabaseAdmin
    .from("pages")
    .insert([{ user_id: userid, title: `project:${userid}`, content: contentdata }]);

  if (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ message: "Error inserting data" }, { status: 500 });
  }

  return NextResponse.json({ message: "Data received" });
}
