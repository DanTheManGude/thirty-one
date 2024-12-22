import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const json: { name: string } = await request.json();
  const name = json.name;

  console.log(`Adding player ${name}`);

  return NextResponse.json(null, { status: 202 });
}
