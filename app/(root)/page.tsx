"use client";

import { MikiriTopBar } from "@/components/ui/mikiri/mikiri-top-bar";
import { mockMangaSeries } from "./mockVolumes";

import { SakuraPetals } from "@/components/ui/mikiri/sakura-petals";
import MangaLibrary from "@/components/ui/mikiri/mikiri-manga-library";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
        <MikiriTopBar />
        <SakuraPetals />
        <div
          className="pointer-events-none fixed inset-0 -z-20 opacity-[0.02]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ctext x='20' y='60' fill='%23E8E0D8' font-size='40' font-family='serif'%3E%E8%AA%AD%3C/text%3E%3Ctext x='100' y='120' fill='%23E8E0D8' font-size='40' font-family='serif'%3E%E6%9C%AC%3C/text%3E%3Ctext x='40' y='180' fill='%23E8E0D8' font-size='40' font-family='serif'%3E%E5%AD%97%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <main className="flex-1 overflow-y-auto w-full">
          {/* Manga library */}
          <MangaLibrary series={mockMangaSeries} />
        </main>
      </div>
    </div>
  );
}
