"use client"

import Image from "next/image"
import type { PointerEvent } from "react"
import {
  BookMarked,
  Bookmark,
  Check,
  Library,
  Pause,
} from "lucide-react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

import type {
  MangaSeries,
  MangaStatus,
  MockVolume,
} from "@/app/(root)/manga-data"
import { cn } from "@/lib/utils"

const statusMeta = {
  reading: { label: "Reading", icon: Bookmark },
  finished: { label: "Finished", icon: Check },
  owned: { label: "Owned", icon: Library },
  wishlist: { label: "Wishlist", icon: BookMarked },
  stopped: { label: "Paused", icon: Pause },
} as const

type MangaCardProps =
  | { mode: "series"; series: MangaSeries; onSelect: () => void }
  | { mode: "volume"; volume: MockVolume; onSelect?: () => void }

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`))
}

function StatusMark({ status }: { status: MangaStatus }) {
  if (!status) return null
  const { label, icon: Icon } = statusMeta[status]

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-1 font-sans text-xs font-medium backdrop-blur-md",
        status === "reading" && "border-sakura/40 bg-background/80 text-sakura shadow-[0_0_16px_rgba(249,168,212,0.2)]",
        status === "finished" && "border-mikiri-success/30 bg-background/80 text-mikiri-success",
        status === "owned" && "border-border bg-background/80 text-foreground/80",
        status === "wishlist" && "border-dashed border-foreground/30 bg-background/70 text-foreground/60",
        status === "stopped" && "border-border bg-background/75 text-muted-foreground",
      )}
    >
      <Icon aria-hidden="true" className="size-3.5" />
      {label}
    </span>
  )
}

export function MangaCard(props: MangaCardProps) {
  const reducedMotion = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const smoothX = useSpring(rotateX, { stiffness: 240, damping: 24 })
  const smoothY = useSpring(rotateY, { stiffness: 240, damping: 24 })
  const item = props.mode === "series" ? props.series.volumes[0] : props.volume
  const title = props.mode === "series" ? props.series.name : props.volume.title
  const status = props.mode === "series" ? props.series.status : props.volume.status
  const layoutId = props.mode === "series" ? `cover-${props.series.id}` : undefined

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (reducedMotion || event.pointerType === "touch") return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    rotateX.set(y * -5)
    rotateY.set(x * 5)
  }

  function resetTilt() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.button
      type="button"
      onClick={props.onSelect}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onBlur={resetTilt}
      aria-label={props.mode === "series" ? `Open ${title}, ${props.series.totalVolumes} volumes` : `Open ${title}`}
      className={cn(
        "group relative flex w-full min-w-0 flex-col rounded-md text-left outline-none [perspective:900px] focus-visible:ring-2 focus-visible:ring-sakura focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        status === "wishlist" && "opacity-70 hover:opacity-100 focus-visible:opacity-100",
      )}
      style={{ rotateX: smoothX, rotateY: smoothY, transformStyle: "preserve-3d" }}
      whileHover={reducedMotion ? undefined : { y: -7, scale: 1.015 }}
      whileFocus={reducedMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
    >
      <div
        className={cn(
          "relative aspect-[2/3] w-full overflow-hidden rounded-md border border-border bg-card shadow-[0_14px_26px_rgba(0,0,0,0.42)] transition-[border-color,box-shadow,filter] duration-300 after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-foreground/20",
          "group-hover:border-foreground/25 group-hover:shadow-[0_22px_45px_rgba(0,0,0,0.6)]",
          status === "reading" && "border-sakura/35 shadow-[0_14px_30px_rgba(0,0,0,0.45),0_0_20px_rgba(249,168,212,0.12)]",
          status === "finished" && "saturate-[0.82]",
          status === "wishlist" && "border-dashed grayscale-[0.25]",
          status === "stopped" && "saturate-[0.72]",
        )}
      >
        <motion.div layoutId={layoutId} className="absolute inset-0">
          <Image
            src={item.cover}
            alt={`${title} cover`}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1280px) 22vw, 16vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/45 to-transparent" aria-hidden="true" />
        <div className="absolute left-2 top-2">
          <StatusMark status={status} />
        </div>
        {status === "reading" && (
          <span className="absolute right-3 top-0 h-12 w-5 rounded-b-sm bg-sakura shadow-[0_0_15px_rgba(249,168,212,0.35)]" aria-hidden="true" />
        )}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-3 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
          <h2 className="line-clamp-2 font-serif text-sm leading-snug text-foreground sm:text-base">{title}</h2>
          <div className="flex items-center justify-between gap-2 font-sans text-xs text-foreground/70">
            <span>{props.mode === "series" ? `${props.series.totalVolumes} volumes` : props.volume.volume !== null ? `Volume ${props.volume.volume}` : "One-shot"}</span>
            {props.mode === "volume" && props.volume.level !== null && <span>Level {props.volume.level}</span>}
          </div>
        </div>
      </div>
      {props.mode === "volume" && props.volume.status === "finished" && props.volume.finishedAt && (
        <p className="mt-2 w-full truncate font-sans text-xs text-muted-foreground">Finished {formatDate(props.volume.finishedAt)}</p>
      )}
    </motion.button>
  )
}
