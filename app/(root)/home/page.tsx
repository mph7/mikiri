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
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10 grid grid-cols-3 gap-6">
            {libraryItems.map((items) => (
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
            ))}
          </div>
        </main>
      </div>
    </div >
  );
}
