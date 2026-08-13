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

export function MangaSeriesCard({ series, className = "" }: MangaSeriesCardProps) {
  const [open, setOpen] = useState(false);

  const statusKey =
    series.isReading ? "reading" : series.finishedVolumes === series.totalVolumes && series.totalVolumes > 0 ? "finished" : "unread";
  const status = statusMeta[statusKey];
  const StatusIcon = status.icon;

  return (
    <>
      <div className={`group flex flex-col ${className}`}>
        {/* Cover — bound tankobon volume, sitting on a shelf */}
        <div className="relative mb-7 px-3 pt-2">
          {/* other volumes peeking out from behind, like a stack on a shelf */}
          <div
            aria-hidden
            className="absolute inset-x-3 top-2 aspect-[10/15.5] translate-x-[9px] translate-y-[11px] rotate-[3deg] rounded-[2px] border border-white/5 bg-mikiri-surface transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[13px] group-hover:translate-y-[15px] group-hover:rotate-[5deg]"
          />
          <div
            aria-hidden
            className="absolute inset-x-3 top-2 aspect-[10/15.5] translate-x-[4px] translate-y-[5px] rotate-[1.5deg] rounded-[2px] border border-white/5 bg-[#161311] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[6px] group-hover:translate-y-[7px] group-hover:rotate-[2.5deg]"
          />

          {/* grounding shadow */}
          <div
            aria-hidden
            className="absolute inset-x-3 bottom-0 h-3 translate-y-2 rounded-full bg-black/50 blur-md transition-opacity duration-500 group-hover:opacity-70"
          />

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative flex aspect-[10/15.5] w-full origin-bottom overflow-hidden rounded-[2px] text-left shadow-[2px_4px_10px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1.5 group-hover:-translate-x-0.5 group-hover:-rotate-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sakura focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            aria-label={`Open ${series.title} volumes`}
          >
            {/* bound spine, cloth-covered edge of the book */}
            <div className="relative z-10 flex w-[13%] shrink-0 flex-col items-center justify-between border-r border-black/40 bg-gradient-to-b from-[#1c1815] via-[#141110] to-[#0c0a09] py-2">
              <span aria-hidden className="h-px w-2/3 bg-sakura/20" />
              <span
                className="line-clamp-1 font-serif text-[9px] font-medium tracking-[0.15em] text-sakura/60"
                style={{ writingMode: "vertical-rl" }}
              >
                {series.title}
              </span>
              <span aria-hidden className="h-px w-2/3 bg-sakura/20" />
            </div>

            {/* front cover */}
            <div className="relative h-full flex-1 overflow-hidden bg-mikiri-bg">
              <Image
                src={series.cover || "/placeholder.svg"}
                alt={series.title}
                fill
                sizes="(min-width: 1024px) 220px, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
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

              {/* page-block edge */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0.5 right-0 w-[2px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, rgba(0,0,0,0.35) 1px, rgba(0,0,0,0.35) 3px)",
                }}
              />

              {/* legibility gradient under obi */}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/85 to-transparent" />

              {/* obi status band */}
              <div className={`absolute inset-x-0 bottom-0 flex items-center gap-1 px-2 py-1 text-[9.5px] font-medium tracking-wide ${status.obi}`}>
                <StatusIcon className="h-2.5 w-2.5 shrink-0" />
                <span className="truncate font-serif">{status.label}</span>
                <span className="shrink-0 opacity-70">· {status.sub}</span>
              </div>

              {/* volume count tag */}
              <div className="absolute left-0 top-2 z-10 flex items-center gap-1 rounded-r-full bg-black/75 px-2 py-0.5 text-[9px] font-medium text-sakura backdrop-blur-sm">
                <Layers className="h-2.5 w-2.5" />
                {series.totalVolumes}
              </div>
            </div>

            {series.level != null && (
              <div className="absolute -right-1.5 -top-1.5 z-10">
                <LevelSeal level={series.level} size="sm" />
              </div>
            )}
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-2.5 px-1">
          <h3 className="truncate font-serif text-sm leading-snug text-foreground">{series.title}</h3>
          <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <BookOpen className="h-3 w-3 shrink-0 text-sakura/70" />
            <span className="truncate">
              {series.finishedVolumes}/{series.totalVolumes} read
              {series.readingVolumes > 0 && ` · ${series.readingVolumes} in progress`}
            </span>
          </p>

          <MikiriProgress value={series.progress} />

          <MikiriButton variant="primary" className="mt-1 w-full justify-center text-xs" onClick={() => setOpen(true)}>
            Open bookshelf
          </MikiriButton>
        </div>
      </div>

      <MangaVolumesDialog series={series} open={open} onOpenChange={setOpen} />
    </>
  );
}
