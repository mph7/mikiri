import React from "react";
import BackButton from "@/app/(root)/read/[id]/BackButton";

type ReaderProps = {
  params: Promise<{
    id: string;
  }>;
};

const Reader = async ({ params }: ReaderProps) => {
  const { } = await params;

  // const currentMaterial = materials.find((material) => material.id === id);

  return (
    <div className="p-8">
      {/* CONTROLS */}
      <div className="border-b mb-4 pb-4">
        <BackButton />
      </div>

      <h1 className="mb-8 text-2xl font-semibold font-mono">
        {"test"}
      </h1>
      <p className="font-medium text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quisquam dolores aliquid ab veritatis reiciendis. Necessitatibus, quo. Animi, beatae. Suscipit beatae cum rem dolorem! Veniam omnis nihil numquam tenetur quo!</p>
    </div>
  );
};

export default Reader;
