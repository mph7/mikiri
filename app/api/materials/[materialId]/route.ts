import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

import { db } from "@/lib/db";

// Helper to extract ID from URL
const getMaterialIdFromUrl = (req: NextRequest) => {
  const pathParts = req.nextUrl.pathname.split("/");
  // Assumes URL is /api/materials/[materialId]
  return pathParts[pathParts.length - 1];
};

export async function GET(req: NextRequest) {
  try {
    const materialId = getMaterialIdFromUrl(req);

    const material = await db.material.findUnique({
      where: {
        id: materialId,
      },
    });

    if (!material) {
      return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.json(material);
  } catch (error) {
    console.error("[MATERIAL_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const materialId = getMaterialIdFromUrl(req);
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return new NextResponse("Missing title or content", { status: 400 });
    }

    const material = await db.material.updateMany({
      where: {
        id: materialId,
        authorId: session.user.id,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(material);
  } catch (error) {
    console.error("[MATERIAL_PATCH]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const materialId = getMaterialIdFromUrl(req);
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const material = await db.material.deleteMany({
      where: {
        id: materialId,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(material);
  } catch (error) {
    console.error("[MATERIAL_DELETE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
