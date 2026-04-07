"use client";

import { ReactNode, forwardRef } from "react";
import { Card, CardTitle } from "../card";

interface MikiriCardProps {
  children: ReactNode;
  className?: string;
}

export const MikiriCard = forwardRef<HTMLDivElement, MikiriCardProps>(
  ({ children, className = "" }, ref) => {

    return (
      <Card
        ref={ref}
        className={`border rounded-sm bg-surface p-6 bg-[#171717] gap-0 shadow-sakura-dim
        hover:border-sakura hover:-translate-y-2.5 hover:shadow-[0_12px_40px_rgba(249,168,212,0.15),0_0_0_1px_rgba(249,168,212,0.25),0_4px_16px_rgba(0,0,0,0.3)]
        transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:rotate-[0.5deg]
        ${className}`}>
        {children}
      </Card>
    );
  })

interface MikiriCardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const MikiriCardHeader = forwardRef<HTMLDivElement, MikiriCardHeaderProps>(
  ({ children, className = '' }, ref) => {
    return (
      <CardTitle
        ref={ref}
        className={`font-serif text-l ${className}`}>
        {children}
      </CardTitle>
    )
  }
)

MikiriCard.displayName = "MikiriCard"
MikiriCardHeader.displayName = "MikiriCardHeader"
