"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import React from "react";

function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <ArrowLeft className="w-6 h-6 cursor-pointer" />
    </button>
  );
}

export default BackButton;
