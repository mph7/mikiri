import type * as React from "react";
import { Home, LucideTarget, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

type NavItem = {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: null | string;
};

const data: {
  user: {
    name: string;
    email: string;
    level: string;
    streak: number;
  };
  navigation: {
    main: NavItem[];
  };
} = {
  user: {
    name: "田中さん",
    email: "tanaka@example.com",
    level: "N4",
    streak: 15,
  },

  navigation: {
    main: [
      {
        title: "Home",
        url: `${URL}/home`,
        icon: Home,
        badge: null,
      },
      {
        title: "Goals",
        url: `${URL}/goals`,
        icon: LucideTarget,
        badge: null,
      },
    ],
  },
};

import { Session } from "next-auth";

export function AppSidebar({
  session,
  ...props
}: React.ComponentProps<typeof Sidebar> & { session: Session }) {
  return (
    <Sidebar collapsible="icon" className="text-white" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="font-semibold">
                <div className="flex aspect-square size-12 items-center justify-center rounded-lg  text-white group-data-[collapsible=icon]:size-8">
                  <Image src="/logo.png" alt="logo" width="150" height="150" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-yuji text-2xl">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                  </span>
                  <span className="truncate text-xs text-white">
                    Japanese Learning
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navigation.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex items-center gap-3">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-semibold">
                  {data.user.level}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {session.user?.name + "さん"}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <span>🔥 {data.user.streak} day streak</span>
                  </div>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Settings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
