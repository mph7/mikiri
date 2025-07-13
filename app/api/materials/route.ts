import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return new NextResponse("Missing title or content", { status: 400 });
    }

    const material = await db.material.create({
      data: {
        title,
        content,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(material);
  } catch (error) {
    console.error("[MATERIALS_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const materials = await db.material.findMany();
    return NextResponse.json(materials);
  } catch (error) {
    console.error("[MATERIALS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
