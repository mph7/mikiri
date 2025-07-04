import React from 'react'
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <main className=''>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

export default Layout