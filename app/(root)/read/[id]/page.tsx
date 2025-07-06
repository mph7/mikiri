import materials from "./../../dashboard/dummyMaterial";
import React from "react";
import BackButton from "@/app/(root)/read/[id]/BackButton";

const Reader = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const currentMaterial = materials.find((material) => material.id === id);

  if (!currentMaterial) {
    return <div>Material not found</div>;
  }

  return (
    <div className="p-8">
      {/* CONTROLS */}
      <div className="border-b mb-4 pb-4">
        <BackButton />
      </div>

      <h1 className="mb-8 text-2xl font-semibold font-mono">
        {currentMaterial?.title}
      </h1>
      <p className="font-medium text-lg">{currentMaterial?.content}</p>
    </div>
  );
};

export default Reader;
