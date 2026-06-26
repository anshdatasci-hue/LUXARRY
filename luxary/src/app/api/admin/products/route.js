import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Products API working",
    data: [],
  });
}

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json(
    {
      success: true,
      message: "Product created",
      data: body,
    },
    { status: 201 },
  );
}
