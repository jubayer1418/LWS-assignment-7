import { getAllData } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllData();
  return NextResponse.json(data);
}
