"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, BookOpen } from "lucide-react"
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"
import { MangaCard } from "@/components/ui/mikiri/manga-card"
import { MikiriTopBar } from "@/components/ui/mikiri/mikiri-top-bar"
import { SakuraPetals } from "@/components/ui/mikiri/sakura-petals"
import { mangaSeries, type MangaSeries } from "./manga-data"

export default function Dashboard() {
  const [selectedSeries, setSelectedSeries] = useState<MangaSeries | null>(null)
  const reducedMotion = useReducedMotion()

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
        <MikiriTopBar />
        <SakuraPetals />
        <div className="kanji-overlay" aria-hidden="true" />
        <main className="w-full flex-1 overflow-y-auto">
          <LayoutGroup>
            <AnimatePresence mode="wait" initial={false}>
              {selectedSeries ? (
                <motion.section
                  key="series-detail"
                  aria-labelledby="series-title"
                  className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10 lg:py-10"
                  initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, x: 16 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <header className="flex flex-col gap-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedSeries(null)}
                      className="w-fit text-muted-foreground"
                    >
                      <ArrowLeft data-icon="inline-start" />
                      All series
                    </Button>
                    <div className="flex items-end gap-5 sm:gap-7">
                      <motion.div
                        layoutId={`cover-${selectedSeries.id}`}
                        className="relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-md border border-border bg-card shadow-[0_18px_40px_rgba(0,0,0,0.55)] sm:w-32"
                        transition={{ type: "spring", stiffness: 210, damping: 28 }}
                      >
                        <Image
                          src={selectedSeries.volumes[0].cover}
                          alt=""
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="flex min-w-0 flex-col gap-2 pb-1">
                        <p className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-sakura">
                          <BookOpen aria-hidden="true" className="size-4" />
                          Series
                        </p>
                        <h1 id="series-title" className="text-balance font-serif text-2xl leading-tight text-foreground sm:text-4xl">
                          {selectedSeries.name}
                        </h1>
                        <p className="font-sans text-sm text-muted-foreground">
                          {selectedSeries.totalVolumes} volumes in this series
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {selectedSeries.volumes.map((volume, index) => (
                      <motion.div
                        key={volume.id}
                        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.045, duration: 0.3 }}
                      >
                        <MangaCard mode="volume" volume={volume} />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ) : (
                <motion.section
                  key="library"
                  aria-labelledby="library-title"
                  className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10 lg:py-10"
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                >
                  <header className="flex flex-col gap-2">
                    <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sakura">Your shelf</p>
                    <h1 id="library-title" className="text-balance font-serif text-3xl text-foreground sm:text-4xl">Manga library</h1>
                    <p className="max-w-xl text-pretty font-sans text-sm leading-relaxed text-muted-foreground">
                      Pick up a series to browse its volumes. Every cover keeps its place, like a familiar book on the shelf.
                    </p>
                  </header>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {mangaSeries.map((series, index) => (
                      <motion.div
                        key={series.id}
                        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.055, duration: 0.35 }}
                      >
                        <MangaCard mode="series" series={series} onSelect={() => setSelectedSeries(series)} />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </main>
      </div>
    </div>
  )
}
