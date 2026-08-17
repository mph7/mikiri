import { MangaSeries } from "@/app/(root)/mockVolumes";
import React, { ReactNode } from "react";
import MikiriMangaCard from "./mikiri-manga-card";
import { motion } from "framer-motion";

type Props = {
  series: MangaSeries[];
};

const MangaLibrary = ({ series }: Props): ReactNode => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.26,
        ease: [0.23, 1, 0.32, 1],
        delay: Math.min(1, 11) * 0.035,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 grid grid-cols-5 gap-6">
        {series.map((entry, i) => (
          <MikiriMangaCard
            key={i}
            mode="series"
            volumes={entry.volumes}
            seriesName={entry.name}
            totalVolumes={entry.totalVolumes}
          />
        ))}
      </div>
    </motion.li>
  );
};

export default MangaLibrary;
