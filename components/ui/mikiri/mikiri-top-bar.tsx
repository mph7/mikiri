"use client";

import { useState } from "react";
import { Menu, Plus, Search, X } from "lucide-react";
import { useSidebarStore } from "@/lib/stores/sidebarStore";
import { MikiriButton } from "@/components/ui/mikiri/mikiri-button";



export function MikiriTopBar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const { toggle } = useSidebarStore();

  return (
    <header className="flex items-center gap-4 border-b border-border bg-background/80 backdrop-blur-sm px-4 py-4 sm:px-6 lg:px-8">
      {/* Mobile menu button */}
      <button
        onClick={toggle}
        className="text-muted-foreground hover:text-foreground transition-colors lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Greeting */}
      <div className="hidden sm:flex flex-col min-w-0">
        <h1 className="text-sm font-medium text-foreground truncate">
          {"Hello user\u3055\u3093, ready to dive into Japanese today?"}
        </h1>
        <p className="text-xs text-muted-foreground">
          {"Your cozy reading corner awaits"}
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-1 justify-end items-center gap-3 sm:justify-center sm:max-w-md sm:mx-auto lg:max-w-lg">
        <div
          className={`
            relative flex items-center w-full bg-input border rounded-sm px-3 py-2
            transition-all duration-200
            ${searchFocused ? "border-sakura shadow-[0_0_0_3px_rgba(249,168,212,0.15)]" : "border-border"}
          `}
        >
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Search titles, authors..."
            className="flex-1 bg-transparent px-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          {searchFocused && (
            <button
              className="text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
      <MikiriButton
        variant="primary"
        showArrow
        className="hidden sm:inline-flex shrink-0 text-xs px-4 py-1.5"
      >
        <Plus className="h-3.5 w-3.5 -mr-0.5" />
        <span className="hidden md:inline">Import</span>
      </MikiriButton>
    </header>
  );
}
