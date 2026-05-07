import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // TODO: add to mailing list
  console.log("Newsletter signup:", body);
  return NextResponse.json({ success: true });
}
