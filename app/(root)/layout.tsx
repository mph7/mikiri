import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MikiriSidebar } from "@/components/ui/mikiri/mikiri-sidebar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
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
