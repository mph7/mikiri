"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LevelSeal } from "@/components/manga/level-seal";
import type { MangaSeries } from "@/lib/manga";
import { getStatusConfig } from "@/lib/manga-status";

interface MangaVolumesDialogProps {
  series: MangaSeries | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MangaVolumesDialog({ series, open, onOpenChange }: MangaVolumesDialogProps) {
  if (!series) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto rounded-sm border-border bg-[#111111] p-0 sm:max-w-3xl">
        <DialogHeader className="flex-row items-start gap-4 border-b border-border px-6 py-5">
          {series.level != null && <LevelSeal level={series.level} size="sm" className="mt-1" />}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-sakura/70">
              <Layers className="h-3 w-3" />
              <span className="font-serif text-sm normal-case tracking-normal">全巻</span>
              <span>All volumes</span>
            </div>
            <DialogTitle className="font-serif text-xl font-normal text-foreground">
              {series.title}
            </DialogTitle>
            <DialogDescription className="flex flex-wrap items-center gap-2 pt-1">
              <span>
                {series.finishedVolumes} of {series.totalVolumes} volumes read
              </span>
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4">
          {series.volumes.map((volume) => {
            const status = getStatusConfig(volume.status);
            return (
              <Link
                key={volume.id}
                href={`/read/${volume.id}`}
                className="group flex flex-col gap-2 outline-none focus-visible:ring-2 focus-visible:ring-sakura focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-[3px] border border-border bg-mikiri-bg transition duration-300 group-hover:-translate-y-1 group-hover:border-sakura/60 group-hover:shadow-[0_8px_24px_rgba(249,168,212,0.2)]">
                  <Image
                    src={volume.cover || "/placeholder.svg"}
                    alt={volume.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <BookOpen className="h-5 w-5 text-foreground drop-shadow" />
                  </div>
                  <span className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 font-serif text-[11px] text-foreground ring-1 ring-white/10">
                    {volume.volume ?? "-"}
                  </span>
                  <span className={`absolute right-1.5 top-1.5 h-2 w-2 rounded-full ${status.dot}`} />
                </div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] text-muted-foreground">Vol. {volume.volume ?? "?"}</span>
                  <span className={`rounded-full border px-1.5 py-0.5 text-[10px] leading-none ${status.badge}`}>
                    {status.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
