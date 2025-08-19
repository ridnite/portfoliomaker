import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: Request) {

    const userId = request.headers.get("userid");
    const { data, error } = await supabaseAdmin
        .from("pages")
        .select("*")
        .eq("user_id", userId);

    if (error) {
        return NextResponse.json({ error: error.message });
    }

    return NextResponse.json(data);
}