import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="">
      <SidebarProvider className="">
        <AppSidebar session={session} />
        <SidebarInset className="">
          <main className="m-2 p-4 h-full bg-background rounded-xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(255,255,255,0.2)] dark:text-gray-300">
            <SidebarTrigger />
            AAAA
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
