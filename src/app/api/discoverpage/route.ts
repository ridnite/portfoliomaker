import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: Request) {
    console.log("deneme 3131")
    const { data, error } = await supabaseAdmin
        .from("pages")
        .select("*, users(username)");

    if (error) {
        return NextResponse.json({ error: error.message });
    }

    return NextResponse.json(data);
}