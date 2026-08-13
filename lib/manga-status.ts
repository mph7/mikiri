import type { VolumeStatus } from "@/lib/manga";

export const statusConfig: Record<
  NonNullable<VolumeStatus>,
  { label: string; jp: string; dot: string; badge: string }
> = {
  finished: {
    label: "Read",
    jp: "読了",
    dot: "bg-mikiri-success",
    badge: "bg-[#243129] text-mikiri-success border-mikiri-success/30",
  },
  reading: {
    label: "Reading",
    jp: "読書中",
    dot: "bg-sakura",
    badge: "bg-sakura/12 text-sakura border-sakura/30",
  },
  owned: {
    label: "Owned",
    jp: "所持",
    dot: "bg-mikiri-muted",
    badge: "bg-white/5 text-foreground/80 border-white/10",
  },
  wishlist: {
    label: "Wishlist",
    jp: "欲しい",
    dot: "bg-mikiri-muted/60",
    badge: "bg-transparent text-muted-foreground border-white/10",
  },
  stopped: {
    label: "On hold",
    jp: "中断",
    dot: "bg-mikiri-red",
    badge: "bg-mikiri-red/10 text-mikiri-red border-mikiri-red/30",
  },
};

export function getStatusConfig(status: VolumeStatus) {
  if (!status) return statusConfig.wishlist;
  return statusConfig[status];
}
