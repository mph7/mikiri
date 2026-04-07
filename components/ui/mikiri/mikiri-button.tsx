"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";

type MikiriButtonVariant = "primary" | "secondary" | "danger";

interface MikiriButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MikiriButtonVariant;
  showArrow?: boolean;
  href?: string;
}

const variantStyles: Record<MikiriButtonVariant, string> = {
  primary:
    "bg-sakura text-primary-foreground border-sakura hover:shadow-[0_0_24px_rgba(249,168,212,0.35)] hover:bg-[#fbbadc]",
  secondary:
    "bg-transparent text-foreground border-sakura/40 hover:border-sakura hover:bg-sakura/5 hover:shadow-[0_0_20px_rgba(249,168,212,0.15)]",
  danger:
    "bg-transparent text-destructive-foreground border-destructive hover:bg-destructive hover:text-foreground hover:shadow-[0_0_16px_rgba(225,29,72,0.2)]",
};

export const MikiriButton = forwardRef<HTMLButtonElement, MikiriButtonProps>(
  (
    { className, variant = "primary", showArrow = true, children, href, ...props },
    ref,
  ) => {
    const content = (
      <Button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center gap-2 px-5 py-1",
          "rounded-none border-2 text-sm font-medium tracking-wide",
          "transition-all duration-200 ease-out cursor-pointer",
          "active:scale-[0.97]",
          "disabled:pointer-events-none disabled:opacity-40",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </Button>
    )

    if (href) {
      return <Link href={href}>{content}</Link>
    }

    return (content);
  },
);

MikiriButton.displayName = "MikiriButton";
