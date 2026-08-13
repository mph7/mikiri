import { mockVolumes, type MockVolume } from "@/lib/data/mock-volumes";

export type VolumeStatus = MockVolume["status"];

export interface MangaSeries {
  /** Stable key derived from the series name. */
  slug: string;
  title: string;
  /** All known volumes for this series, sorted by volume number. */
  volumes: MockVolume[];
  /** Cover art used for the spine/stack — the lowest owned volume, falling back to volume 1. */
  cover: string;
  /** JLPT-style level, taken as the most common level across volumes. */
  level: number | null;
  totalVolumes: number;
  finishedVolumes: number;
  readingVolumes: number;
  /** 0-100 */
  progress: number;
  latestFinishedAt: string | null;
  /** True when there is at least one volume currently being read. */
  isReading: boolean;
}

function mostCommon<T>(values: T[]): T | null {
  if (values.length === 0) return null;
  const counts = new Map<T, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  let best: T = values[0];
  let bestCount = 0;
  for (const [value, count] of counts) {
    if (count > bestCount) {
      best = value;
      bestCount = count;
    }
  }
  return best;
}

/**
 * Groups the flat volume list into per-series aggregates, ready to feed
 * directly into <MangaSeriesCard />.
 */
export function groupVolumesBySeries(volumes: MockVolume[] = mockVolumes): MangaSeries[] {
  const bySeries = new Map<string, MockVolume[]>();

  for (const volume of volumes) {
    const key = volume.series;
    const existing = bySeries.get(key);
    if (existing) {
      existing.push(volume);
    } else {
      bySeries.set(key, [volume]);
    }
  }

  const series: MangaSeries[] = [];

  for (const [title, vols] of bySeries) {
    const sorted = [...vols].sort((a, b) => (a.volume ?? 0) - (b.volume ?? 0));
    const finished = sorted.filter((v) => v.status === "finished");
    const reading = sorted.filter((v) => v.status === "reading");
    const owned = sorted.filter((v) => v.status !== "wishlist");
    const levels = sorted.map((v) => v.level).filter((l): l is number => l != null);
    const finishedDates = finished
      .map((v) => v.finishedAt)
      .filter((d): d is string => Boolean(d))
      .sort()
      .reverse();

    const coverVolume =
      reading[0] ?? sorted.find((v) => v.status === "owned") ?? sorted[0];

    series.push({
      slug: title.toLowerCase().replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9faf]+/g, "-"),
      title,
      volumes: sorted,
      cover: coverVolume?.cover ?? sorted[0].cover,
      level: mostCommon(levels),
      totalVolumes: sorted.length,
      finishedVolumes: finished.length,
      readingVolumes: reading.length,
      progress: owned.length > 0 ? Math.round((finished.length / owned.length) * 100) : 0,
      latestFinishedAt: finishedDates[0] ?? null,
      isReading: reading.length > 0,
    });
  }

  // Surface series that are actively being read first, then most recently finished.
  return series.sort((a, b) => {
    if (a.isReading !== b.isReading) return a.isReading ? -1 : 1;
    const aDate = a.latestFinishedAt ?? "";
    const bDate = b.latestFinishedAt ?? "";
    return bDate.localeCompare(aDate);
  });
}
