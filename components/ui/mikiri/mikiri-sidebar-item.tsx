"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface MikiriSidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  badge?: string;
  onClick?: () => void;
}

export function MikiriSidebarItem({
  icon: Icon,
  label,
  active = false,
  badge,
  onClick,
}: MikiriSidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200",
        "rounded-sm",
        active
          ? "bg-sakura/10 text-sakura border-l-[3px] border-sakura shadow-[inset_0_0_20px_rgba(249,168,212,0.1),-4px_0_16px_rgba(249,168,212,0.08)]"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 border-l-[3px] border-transparent hover:border-sakura/20",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="flex-1 text-left truncate">{label}</span>
      {badge && (
        <span className="text-[10px] font-medium bg-sakura/15 text-sakura px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
