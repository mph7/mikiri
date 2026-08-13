import { cn } from "@/lib/utils";

interface LevelSealProps {
  level: number;
  className?: string;
  size?: "sm" | "md";
}

/**
 * A hanko-style stamp badge used to show a JLPT reading level, styled like a
 * wax seal glued onto the corner of a book cover.
 */
export function LevelSeal({ level, className, size = "md" }: LevelSealProps) {
  const dimensions = size === "sm" ? "h-9 w-9 text-[11px]" : "h-11 w-11 text-[13px]";

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full",
        "bg-[#0d1a12] ring-2 ring-mikiri-success/70",
        "shadow-[0_2px_10px_rgba(0,0,0,0.5),0_0_14px_rgba(134,239,172,0.3),inset_0_0_10px_rgba(134,239,172,0.15)]",
        dimensions,
        className,
      )}
      style={{ transform: "rotate(-8deg)" }}
    >
      <span aria-hidden className="absolute inset-[3px] rounded-full border border-dashed border-mikiri-success/40" />
      <span className="relative font-serif font-medium leading-none text-mikiri-success">
        N{level}
      </span>
    </div>
  );
}
