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
      <SidebarProvider>
        <AppSidebar session={session} />
        <SidebarInset>
          <main className="">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
