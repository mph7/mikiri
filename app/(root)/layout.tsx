import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MikiriSidebar } from "@/components/ui/mikiri/mikiri-sidebar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="">
      <SidebarProvider className="flex relative">
        <MikiriSidebar />

        <main className="w-full">{children}</main>

      </SidebarProvider>
    </div>
  );
};

export default Layout;
