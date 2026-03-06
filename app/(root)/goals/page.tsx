"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { CalendarIcon, Plus, Filter, ChevronDown, Copy } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dailyGoal, monthlyGoal } from "@/app/(root)/goals/data-table";

interface DataModel {
  monthlyGoals: monthlyGoal;
  dailyGoals: dailyGoal;
}
const dummyData: DataModel = {
  monthlyGoals: {
    month: "2025-12",
    goals: [
      {
        id: "manga_m",
        name: "Read Manga",
        target: 4,
        current: 2,
        unit: "volume",
      },
      {
        id: "podcast_m",
        name: "Listen Podcast",
        target: 69,
        current: 42.6,
        unit: "hours",
      },
      {
        id: "anime_m",
        name: "Watch Anime",
        target: 58,
        current: 22,
        unit: "episodes",
      },
      {
        id: "books_m",
        name: "Read Books",
        target: 5,
        current: 1,
        unit: "volume",
      },
      { id: "vn_d", name: "Play Game", target: 6, current: 0, unit: "hours" },
      {
        id: "kklc_m",
        name: "KKLC",
        target: 1540,
        current: 618,
        unit: "Kanji",
      },
      {
        id: "genki_m",
        name: "Genki",
        target: 26,
        current: 2,
        unit: "Lesson",
      },
    ],
  },
  dailyGoals: {
    day: "2025-12-02",
    goals: [
      {
        id: "manga_d",
        name: "Read Manga",
        target: 0.25,
        current: 0,
        unit: "volume",
      },
      {
        id: "podcast_d",
        name: "Listen Podcast",
        target: 3.3,
        current: 0,
        unit: "hours",
      },
      {
        id: "anime_d",
        name: "Watch Anime",
        target: 4.5,
        current: 0,
        unit: "episodes",
      },
      {
        id: "books_d",
        name: "Read Books",
        target: 0.5,
        current: 0,
        unit: "volume",
      },
      {
        id: "vn_d",
        name: "Play Game",
        target: 0.75,
        current: 0,
        unit: "hours",
      },
      {
        id: "kklc_d",
        name: "KKLC",
        target: 115,
        current: 100,
        unit: "",
      },
      {
        id: "genki_d",
        name: "Genki",
        target: 3,
        current: 0,
        unit: "Lesson",
      },
    ],
  },
};

// ---------- COMPONENT ----------
export default function GoalLayout() {
  const [tab, setTab] = useState("daily");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const data =
    tab === "daily" ? dummyData.dailyGoals.goals : dummyData.monthlyGoals.goals;

  const handleCopy = () => {
    const title =
      tab === "daily" ? "## 今日 Today Goals" : "## 今月 Monthly Goals";

    // 1. Prepare data rows
    const rawRows = data.map((goal) => {
      const rawPercent = Math.round((goal.current / goal.target) * 100);
      const displayPercent = rawPercent;
      const progressBarPercent = Math.min(100, rawPercent);

      const filled = Math.round((progressBarPercent / 100) * 10);
      const empty = 10 - filled;
      const bar = "■".repeat(filled) + "□".repeat(empty);

      return {
        name: goal.name,
        current: `${goal.current}/${goal.target}`,
        progress: bar,
        percent: `${displayPercent}%`,
      };
    });

    // 2. Calculate max width for each column (including headers)
    const headers = {
      name: "Goal",
      current: "Current",
      progress: "Progress",
      percent: "%",
    };

    const widths = {
      name: Math.max(headers.name.length, ...rawRows.map((r) => r.name.length)),
      current: Math.max(
        headers.current.length,
        ...rawRows.map((r) => r.current.length),
      ),
      progress: Math.max(
        headers.progress.length,
        ...rawRows.map((r) => r.progress.length),
      ),
      percent: Math.max(
        headers.percent.length,
        ...rawRows.map((r) => r.percent.length),
      ),
    };

    // 3. Format rows with padding
    const formatRow = (c1: string, c2: string, c3: string, c4: string) => {
      return `| ${c1.padEnd(widths.name)} | ${c2.padEnd(widths.current)} | ${c3.padEnd(widths.progress)} | ${c4.padEnd(widths.percent)} |`;
    };

    const headerRow = formatRow(
      headers.name,
      headers.current,
      headers.progress,
      headers.percent,
    );
    const separatorRow = `|:${"-".repeat(widths.name + 1)}|:${"-".repeat(widths.current + 1)}|:${"-".repeat(widths.progress + 1)}|:${"-".repeat(widths.percent + 1)}|`;

    const bodyRows = rawRows.map((r) =>
      formatRow(r.name, r.current, r.progress, r.percent),
    );

    const markdown = [title, headerRow, separatorRow, ...bodyRows].join("\n");
    navigator.clipboard.writeText(markdown);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto p-6 space-y-6"
    >
      {/* ---------------- TOP BAR ---------------- */}
      <div className="flex items-center justify-between">
        {/* Tabs */}
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="bg-muted">
            <TabsTrigger value="daily">Daily Goals</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Goals</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Buttons Right */}
        <div className="flex items-center gap-2">
          {/* Copy */}
          <Button variant="outline" size="icon" onClick={handleCopy}>
            <Copy className="w-4 h-4" />
          </Button>

          {/* Calendar */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="w-4 h-4" />
                {date?.toLocaleDateString() ?? "Pick Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>

          {/* Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Show Completed</DropdownMenuItem>
              <DropdownMenuItem>Sort by %</DropdownMenuItem>
              <DropdownMenuItem>Sort by Target</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Add */}
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Goal
          </Button>
        </div>
      </div>

      {/* ---------------- TABLE ---------------- */}
      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Goal</TableHead>
              <TableHead className="text-right">Atual</TableHead>
              <TableHead className="text-right">Meta</TableHead>
              <TableHead className="text-right">%</TableHead>
              <TableHead className="text-right">Progresso</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((goal) => {
              const rawPercent = Math.round((goal.current / goal.target) * 100);
              const displayPercent = rawPercent;
              const progressBarPercent = Math.min(100, rawPercent);

              return (
                <TableRow key={goal.id}>
                  <TableCell className="font-medium">{goal.name}</TableCell>
                  <TableCell className="text-right">
                    {goal.current} {goal.unit}
                  </TableCell>
                  <TableCell className="text-right">
                    {goal.target} {goal.unit}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {displayPercent}%
                  </TableCell>
                  <TableCell>
                    <div className="w-full bg-muted/50 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${progressBarPercent}%` }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
