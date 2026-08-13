"use client";

import { useState } from "react";
import Image from "next/image";
import { Library } from "lucide-react";
import { MikiriBadge } from "@/components/ui/mikiri/mikiri-badge";
import { MikiriButton } from "@/components/ui/mikiri/mikiri-button";
import { MikiriProgress } from "@/components/ui/mikiri/mikiri-progress";
import { MangaVolumesDialog } from "@/components/manga/manga-volumes-dialog";
import type { MangaSeries } from "@/lib/manga";

interface MangaSeriesCardProps {
  series: MangaSeries;
  className?: string;
}

export function MangaSeriesCard({ series, className = "" }: MangaSeriesCardProps) {
  const [open, setOpen] = useState(false);
  const stack = series.volumes.slice(0, 3);
  const statusLabel = series.isReading
    ? "読書中"
    : series.finishedVolumes === series.totalVolumes
      ? "読了"
      : "未読";

  return (
    <>
      <div
        className={`group relative flex flex-col overflow-hidden rounded-sm border border-border bg-[#171717] shadow-sakura-dim transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:border-sakura hover:shadow-[0_16px_44px_rgba(249,168,212,0.16),0_0_0_1px_rgba(249,168,212,0.25)] ${className}`}
      >
        {/* Cover stack */}
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-mikiri-bg">
          {/* Halftone texture, manga-style */}
          <div
            aria-hidden
            className="absolute inset-0 z-10 opacity-[0.06] mix-blend-screen"
            style={{
              backgroundImage:
                "radial-gradient(circle, #F9A8D4 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          />

          {/* Stacked volume spines behind the main cover */}
          <div className="absolute inset-0 flex items-center justify-center">
            {stack
              .slice(1)
              .reverse()
              .map((volume, i) => (
                <div
                  key={volume.id}
                  className="absolute h-[86%] w-[58%] overflow-hidden rounded-[2px] border border-black/40 shadow-lg transition-transform duration-300"
                  style={{
                    transform: `rotate(${i === 0 ? 8 : -10}deg) translate(${i === 0 ? "18px" : "-20px"}, 4px)`,
                    filter: "brightness(0.55) saturate(0.8)",
                  }}
                >
                  <Image
                    src={volume.cover || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}

            <div className="relative h-[92%] w-[64%] overflow-hidden rounded-[2px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
              <Image
                src={series.cover || "/placeholder.svg"}
                alt={series.title}
                fill
                sizes="260px"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* spine line */}
              <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-black/50 to-transparent" />
            </div>
          </div>

          {/* Volume count ribbon */}
          <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full border border-sakura/30 bg-black/70 px-2.5 py-1 text-[11px] font-medium text-sakura backdrop-blur-sm">
            <Library className="h-3 w-3" />
            {series.totalVolumes} vol
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <span className="font-serif text-[11px] tracking-[0.15em] text-sakura/70">
                {statusLabel}
              </span>
              <h3 className="truncate font-serif text-base leading-snug text-foreground">
                {series.title}
              </h3>
            </div>
            {series.level != null && (
              <MikiriBadge className="shrink-0 bg-[#243129] ring-2 ring-[#86EFAC44] text-mikiri-success shadow-[0px_0px_15px_0px_#86EFAC77]">
                N{series.level}
              </MikiriBadge>
            )}
          </div>

          <p className="text-xs text-muted-foreground">
            {series.finishedVolumes} of {series.totalVolumes} volumes finished
            {series.readingVolumes > 0 && ` · ${series.readingVolumes} in progress`}
          </p>

          <MikiriProgress value={series.progress} />

          <MikiriButton
            variant="primary"
            className="mt-1 w-full justify-center"
            onClick={() => setOpen(true)}
          >
            View volumes
          </MikiriButton>
        </div>
      </div>

      <MangaVolumesDialog series={series} open={open} onOpenChange={setOpen} />
    </>
  );
}
