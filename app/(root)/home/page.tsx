"use client";

import { MikiriTopBar } from "@/components/ui/mikiri/mikiri-top-bar";
import { MikiriCard, MikiriCardHeader } from "@/components/ui/mikiri/mikiri-card";
import { libraryItems } from "./dummyMaterial";
import { MikiriButton } from "@/components/ui/mikiri/mikiri-button";
import { MikiriBadge } from "@/components/ui/mikiri/mikiri-badge";
import { MikiriProgress } from "@/components/ui/mikiri/mikiri-progress";
import { SakuraPetals } from "@/components/ui/mikiri/sakura-petals";

export default function Dashboard() {

  return (
    <div className="flex h-screen bg-background overflow-hidden">

      <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
        <MikiriTopBar />
        <SakuraPetals />
        <div
          className="pointer-events-none fixed inset-0 -z-20 opacity-[0.02]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ctext x='20' y='60' fill='%23E8E0D8' font-size='40' font-family='serif'%3E%E8%AA%AD%3C/text%3E%3Ctext x='100' y='120' fill='%23E8E0D8' font-size='40' font-family='serif'%3E%E6%9C%AC%3C/text%3E%3Ctext x='40' y='180' fill='%23E8E0D8' font-size='40' font-family='serif'%3E%E5%AD%97%3C/text%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <main className="flex-1 overflow-y-auto w-full">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10">
            {/* {libraryItems.map((items) => (
              <MikiriCard key={items.id}>
                <MikiriCardHeader>
                  <div className="flex justify-between w-full">
                    <h3 className="font-normal">
                      {items.title}
                    </h3>
                    <MikiriBadge className="bg-[#243129] ring-[#86EFAC44] ring-2 shadow-[0px_0px_15px_0px_#86EFAC77] text-mikiri-success">
                      {items.level}
                    </MikiriBadge>
                  </div>
                </MikiriCardHeader>
                <br />
                <p className="text-muted-foreground">
                  {items.description}
                </p>
                <br />

                <MikiriBadge className="bg-sakura/12 text-sakura border-sakura/25 shadow-[0_0_12px_rgba(249,168,212,0.25),inset_0_0_6px_rgba(249,168,212,0.08)]">
                  {items.coverage}% Coverage
                </MikiriBadge>
                <br />
                <MikiriProgress value={items.progress} />

                <br />

                <MikiriButton>Continue</MikiriButton>
              </MikiriCard>
            ))} */}
            {/* Stats Bar */}
            <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-10">
              <div className="grid grid-cols-5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03]">
                {[
                  {
                    label: "streak",
                    value: "12",
                    sub: "days in a row",
                    icon: "dot", // dot rosa sakura
                  },
                  {
                    label: "today",
                    value: "47",
                    unit: "min",
                    sub: "goal: 60 min",
                    icon: "ti-clock",
                  },
                  {
                    label: "characters",
                    value: "2.4k",
                    sub: "read today",
                    icon: "ti-typography",
                  },
                  {
                    label: "mined",
                    value: "8",
                    sub: "words to anki",
                    icon: "ti-vocabulary",
                  },
                  {
                    label: "coverage",
                    value: "74%",
                    sub: "last text read",
                    icon: "ti-chart-bar",
                    green: true,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 border-r border-white/[0.06] px-5 py-4 last:border-r-0 hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-white/30">
                      {stat.icon === "dot" ? (
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-sakura shadow-[0_0_6px_theme(colors.sakura/70)]" />
                      ) : (
                        <i className={`ti ${stat.icon} text-[11px]`} aria-hidden />
                      )}
                      {stat.label}
                    </div>
                    <div
                      className={`text-[22px] font-medium leading-none tracking-tight ${stat.green ? "text-mikiri-success" : "text-sakura"
                        }`}
                    >
                      {stat.value}
                      {stat.unit && (
                        <span className="ml-0.5 text-[13px] font  -normal text-white/30">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-white/25">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Reading */}
            <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-10">
              <h2 className="mb-3 text-sm font-medium text-muted-foreground">Continue reading</h2>
              <div className="grid grid-cols-3 gap-4">
                {/* placeholder — trocar por dados reais depois */}
                {[1, 2, 3].map((i) => (
                  <MikiriCard key={i} className="opacity-40">
                    <p className="text-xs text-muted-foreground">Coming soon</p>
                  </MikiriCard>
                ))}
              </div>
            </section>

            {/* Manga */}
            <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-10">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-medium text-muted-foreground">🖼️ Manga</h2>
                <span className="text-xs text-muted-foreground">View all →</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4 rounded-lg border border-dashed border-border/40 py-10 text-center text-xs text-muted-foreground">
                  Local library — coming soon
                </div>
              </div>
            </section>

            {/* Light Novel */}
            <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-10">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-medium text-muted-foreground">📖 Light Novel</h2>
                <span className="text-xs text-muted-foreground">View all →</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 rounded-lg border border-dashed border-border/40 py-10 text-center text-xs text-muted-foreground">
                  Reader — coming soon
                </div>
              </div>
            </section>

            {/* Anime */}
            <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 lg:px-10">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-medium text-muted-foreground">🎌 Anime</h2>
                <span className="text-xs text-muted-foreground">View all →</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 rounded-lg border border-dashed border-border/40 py-10 text-center text-xs text-muted-foreground">
                  Player — coming soon
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div >
  );
}
