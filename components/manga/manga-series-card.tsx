"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, BookMarked, CheckCircle2, CircleDashed, Layers } from "lucide-react";
import { MikiriButton } from "@/components/ui/mikiri/mikiri-button";
import { MikiriProgress } from "@/components/ui/mikiri/mikiri-progress";
import { MangaVolumesDialog } from "@/components/manga/manga-volumes-dialog";
import { LevelSeal } from "@/components/manga/level-seal";
import type { MangaSeries } from "@/lib/manga";

interface MangaSeriesCardProps {
  series: MangaSeries;
  className?: string;
}

const statusMeta = {
  reading: { label: "読書中", sub: "Reading", icon: BookMarked, obi: "bg-sakura text-primary-foreground" },
  finished: { label: "読了", sub: "Finished", icon: CheckCircle2, obi: "bg-mikiri-success text-background" },
  unread: { label: "未読", sub: "Unread", icon: CircleDashed, obi: "bg-white/10 text-foreground/80" },
} as const;

/** Layered box-shadow that reads as two more volumes stacked behind the cover. */
const STACK_SHADOW =
  "6px 8px 0 0 rgba(0,0,0,0.55), 6px 8px 0 1px rgba(255,255,255,0.05), 13px 17px 0 0 rgba(0,0,0,0.4), 13px 17px 0 1px rgba(255,255,255,0.03)";

export function MangaSeriesCard({ series, className = "" }: MangaSeriesCardProps) {
  const [open, setOpen] = useState(false);

  const statusKey =
    series.isReading ? "reading" : series.finishedVolumes === series.totalVolumes && series.totalVolumes > 0 ? "finished" : "unread";
  const status = statusMeta[statusKey];
  const StatusIcon = status.icon;

  return (
    <>
      <div className={`group flex flex-col ${className}`}>
        {/* Cover — tankobon stack */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative mb-6 aspect-[2/3] w-full origin-bottom text-left transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2 group-hover:-rotate-[1.5deg] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sakura focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          style={{ boxShadow: STACK_SHADOW }}
          aria-label={`Open ${series.title} volumes`}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[3px] border border-white/10 bg-mikiri-bg">
            <Image
              src={series.cover || "/placeholder.svg"}
              alt={series.title}
              fill
              sizes="(min-width: 1024px) 320px, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />

            {/* halftone grain */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
              style={{
                backgroundImage: "radial-gradient(circle, #F9A8D4 1px, transparent 1px)",
                backgroundSize: "5px 5px",
              }}
            />

            {/* glossy sheen sweep */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]"
            />

            {/* spine crease */}
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-black/60 to-transparent" />

            {/* page-block edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-1 right-0 w-[3px]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, rgba(0,0,0,0.35) 1px, rgba(0,0,0,0.35) 3px)",
              }}
            />

            {/* legibility gradient under obi */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 to-transparent" />

            {/* obi status band */}
            <div className={`absolute inset-x-0 bottom-0 flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium tracking-wide ${status.obi}`}>
              <StatusIcon className="h-3 w-3" />
              <span className="font-serif">{status.label}</span>
              <span className="opacity-70">· {status.sub}</span>
            </div>

            {/* volume count tag */}
            <div className="absolute left-0 top-3 z-10 flex items-center gap-1 rounded-r-full bg-black/75 px-2.5 py-1 text-[10px] font-medium text-sakura backdrop-blur-sm">
              <Layers className="h-3 w-3" />
              {series.totalVolumes} vol
            </div>
          </div>

          {series.level != null && (
            <div className="absolute -right-3 -top-3 z-10">
              <LevelSeal level={series.level} />
            </div>
          )}
        </button>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="truncate font-serif text-base leading-snug text-foreground">{series.title}</h3>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 text-sakura/70" />
            {series.finishedVolumes} of {series.totalVolumes} read
            {series.readingVolumes > 0 && ` · ${series.readingVolumes} in progress`}
          </p>

          <MikiriProgress value={series.progress} />

          <MikiriButton variant="primary" className="mt-1 w-full justify-center" onClick={() => setOpen(true)}>
            Open bookshelf
          </MikiriButton>
        </div>
      </div>

      <MangaVolumesDialog series={series} open={open} onOpenChange={setOpen} />
    </>
  );
}
