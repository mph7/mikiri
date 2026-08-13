"use client";

import { MikiriSidebarItem } from "./mikiri-sidebar-item";
import { useSidebarStore } from "@/lib/stores/sidebarStore";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Library,
  Settings,
  Flame,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { icon: LayoutDashboard, label: "Home", id: "home", badge: "string" },
  // { icon: Settings, label: "Settings", id: "settings" },
];

export function MikiriSidebar() {
  const { open, close } = useSidebarStore();
  const pathname = usePathname();
  const activeItem = pathname === "/" ? "home" : pathname.split("/")[1];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="sticky inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={close}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50 flex h-100% max-h-dvh w-60 flex-col border-r border-border bg-sidebar
          transition-transform duration-300 ease-out
          lg:translate-x-0 bg-[#0E0E0E]
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo + close */}
        <div className="flex items-center gap-2 px-5 pt-6 pb-8">
          <Image src="/logo.png" alt="mikiri logo" width={28} height={28} />
          <h1 className="font-yuji  text-2xl">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
          <button
            onClick={close}
            className="text-muted-foreground hover:text-foreground transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1 px-3">
          <p className="px-3 pb-2 text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Menu
          </p>
          {navItems.map((item) => (
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/${item.id}`}
              key={item.id}
            >
              <MikiriSidebarItem
                icon={item.icon}
                label={item.label}
                active={activeItem === item.id}
                badge={item.badge ? item.badge : ''}
              />
            </Link>
          ))}
        </nav>
        {/* User section */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sakura/15 text-sakura text-xs font-bold ring-1 ring-sakura/30 shadow-[0_0_10px_rgba(249,168,212,0.15)]">
              M
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-foreground">
                {"mamaco\u3055\u3093"}
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-sakura">
                <Flame className="h-3 w-3 drop-shadow-[0_0_4px_rgba(249,168,212,0.5)]" />
                <span className="tabular-nums font-medium drop-shadow-[0_0_6px_rgba(249,168,212,0.3)]">
                  12 day streak
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
