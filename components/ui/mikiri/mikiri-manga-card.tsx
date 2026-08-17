/* eslint-disable @next/next/no-img-element */
import { MockVolume } from "@/app/(root)/mockVolumes";
import { ReadingStatus } from "@/types/manga";
import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  mode: "series" | "volume";
  volumes: MockVolume[];
  seriesName?: string;
  totalVolumes?: number;
  coverLayoutId?: string;
  onSelect?: () => void;
}

const MikiriMangaCard = ({
  mode,
  volumes,
  seriesName,
  totalVolumes,
  coverLayoutId,
}: Props) => {
  const finishedVolumes: number = volumes.filter(
    (x: MockVolume) => x.status === "finished",
  ).length;
  const representative =
    volumes.find((x: MockVolume) => x.volume === 1) ?? volumes[0];

  function aggregateStatus(volumes: MockVolume[]): ReadingStatus {
    if (volumes.find((x: MockVolume) => x.status === "reading")) {
      return "reading";
    } else if (volumes.find((x: MockVolume) => x.status === "owned")) {
      return "owned";
    } else if (volumes.find((x: MockVolume) => x.status === "wishlist")) {
      return "wishlist";
    } else if (volumes.find((x: MockVolume) => x.status === "stopped")) {
      return "stopped";
    } else return "finished";
  }

  const effectiveStatus = aggregateStatus(volumes);

  const statusTreatments = {
    reading: {
      label: "Reading",
      cover: "",
      shell: "border-sakura/35 bg-surface ring-1 ring-sakura/15",
      text: "text-sakura",
    },
    finished: {
      label: "Finished",
      cover: "saturate-[0.82] brightness-[0.88]",
      shell: "border-hairline bg-surface",
      text: "text-mikiri-success/80",
    },
    owned: {
      label: "On the shelf",
      cover: "",
      shell: "border-hairline bg-surface",
      text: "text-neutral-400",
    },
    wishlist: {
      label: "Wishlist",
      cover: "opacity-35 grayscale",
      shell: "border-dashed border-white/15 bg-transparent",
      text: "text-neutral-500",
    },
    stopped: {
      label: "Paused",
      cover: "brightness-[0.7] saturate-[0.7]",
      shell: "border-hairline bg-surface",
      text: "text-neutral-500",
    },
  };

  const effectiveTreatment = statusTreatments[effectiveStatus];

  const ref = useRef<HTMLButtonElement>(null);

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 240,
    damping: 26,
    mass: 0.5,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 240,
    damping: 26,
    mass: 0.5,
  });

  function handlePointerMove(event: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10 * 2);
    rotateX.set(-py * 4 * 2);
  }

  return (
    <motion.button
      onClick={() => console.log(effectiveTreatment)}
      className="h-full perspective-distant cursor-pointer text-left"
      onMouseMove={handlePointerMove}
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, transformStyle: "preserve-3d" }}
        className={`h-full flex flex-col overflow-hidden rounded ring-sakura border bg-mikiri-surface hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.95)] ${effectiveTreatment.shell}`}
      >
        <div className="aspect-2/3 w-full overflow-hidden rounded-t-lg bg-mikiri-surface">
          <img
            src={representative.cover}
            alt={`${seriesName ?? representative.title} Cover`}
            className={`h-full w-full object-cover group-hover:scale-[1.015] ${effectiveTreatment.cover}`}
          />
        </div>
        <div className="p-2 flex flex-col justify-between flex-1">
          <div>
            <h3 className="mt-1 text-base text-foreground line-clamp-2 font-serif">
              {mode === "series" ? seriesName : representative.title}
            </h3>
            <h4 className="text-xs text-mikiri-muted">{`${totalVolumes} Volumes · ${finishedVolumes} Read`}</h4>
          </div>
          <div className="flex gap-2 m-t-auto align-self">
            <p
              className={[
                "h-1.5 w-1.5 shrink-0 rounded-full my-auto",
                effectiveStatus === "reading"
                  ? "bg-sakura shadow-[0_0_6px_rgba(249,168,212,0.8)]"
                  : effectiveStatus === "finished"
                    ? "bg-mikiri-success/70"
                    : effectiveStatus === "wishlist"
                      ? "border border-dashed border-neutral-500 bg-transparent"
                      : "bg-neutral-600",
              ].join(" ")}
            ></p>
            <p className={`text-xs ${effectiveTreatment.text}`}>
              {effectiveTreatment.label}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.button>
  );
};

export default MikiriMangaCard;
