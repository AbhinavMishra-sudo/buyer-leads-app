// TODO: Add Zod validation for `data` before creating buyer

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Fetch all buyers
export async function GET() {
  try {
    const buyers = await prisma.buyer.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(buyers);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch buyers" }, { status: 500 });
  }
}

// POST: Add new buyer
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newBuyer = await prisma.buyer.create({ data });
    return NextResponse.json(newBuyer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add buyer" }, { status: 500 });
  }
}
