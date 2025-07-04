import type * as React from "react"
import {
    BookOpen,
    Brain,
    Calendar,
    ChevronDown,
    FileText,
    Gamepad2,
    GraduationCap,
    Home,
    Languages,
    MessageCircle,
    PenTool,
    Settings,
    Star,
    Target,
    Trophy,
    Volume2,
    Inbox,
    Search,
    Zap
} from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"


const data = {
    user: {
        name: "田中さん",
        email: "tanaka@example.com",
        level: "N4",
        streak: 15,
    },
    navigation: {
        main: [
            {
                title: "Dashboard",
                url: "#",
                icon: Home,
                badge: null,
            },
            {
                title: "Daily Lesson",
                url: "#",
                icon: Calendar,
                badge: "New",
            },
        ],
        learning: [
            {
                title: "Lessons",
                icon: BookOpen,
                items: [
                    { title: "Hiragana & Katakana", url: "#", progress: 100 },
                    { title: "Basic Kanji", url: "#", progress: 75 },
                    { title: "Grammar Basics", url: "#", progress: 60 },
                    { title: "Conversation", url: "#", progress: 30 },
                ],
            },
            {
                title: "Vocabulary",
                icon: Languages,
                items: [
                    { title: "JLPT N5", url: "#", progress: 90 },
                    { title: "JLPT N4", url: "#", progress: 45 },
                    { title: "Daily Words", url: "#", progress: 80 },
                    { title: "Business Japanese", url: "#", progress: 20 },
                ],
            },
            {
                title: "Grammar",
                icon: FileText,
                items: [
                    { title: "Particles", url: "#" },
                    { title: "Verb Forms", url: "#" },
                    { title: "Adjectives", url: "#" },
                    { title: "Sentence Patterns", url: "#" },
                ],
            },
        ],
        practice: [
            {
                title: "Flashcards",
                url: "#",
                icon: Brain,
            },
            {
                title: "Writing Practice",
                url: "#",
                icon: PenTool,
            },
            {
                title: "Listening",
                url: "#",
                icon: Volume2,
            },
            {
                title: "Speaking",
                url: "#",
                icon: MessageCircle,
            },
            {
                title: "Games",
                url: "#",
                icon: Gamepad2,
                badge: "3",
            },
        ],
        progress: [
            {
                title: "Achievements",
                url: "#",
                icon: Trophy,
            },
            {
                title: "Statistics",
                url: "#",
                icon: Target,
            },
            {
                title: "Study Goals",
                url: "#",
                icon: Star,
            },
        ],
    },
}

// className="bg-gradient-to-r from-gray-700 to-gray-800 border-r-4 border-gray-300"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="bg-gradient-to-br from-gray-700 to-gray-800 border-r-4 border-gray-300 text-white" {...props}>
            <SidebarHeader >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#" className="font-semibold">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-pink-500 text-white">
                                    <GraduationCap className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">日本語学習</span>
                                    <span className="truncate text-xs text-muted-foreground">Japanese Learning</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {/* Main Navigation */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navigation.main.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
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

                {/* Learning Sections */}
                <SidebarGroup>
                    <SidebarGroupLabel>Learning</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navigation.learning.map((item) => (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.title === "Lessons"}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip={item.title}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                                <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild>
                                                            <a href={subItem.url} className="flex flex-col gap-1">
                                                                <div className="flex items-center justify-between w-full">
                                                                    <span className="text-sm">{subItem.title}</span>
                                                                    {subItem.progress && (
                                                                        <span className="text-xs text-muted-foreground">{subItem.progress}%</span>
                                                                    )}
                                                                </div>
                                                                {subItem.progress && <Progress value={subItem.progress} className="h-1 w-full" />}
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Practice Section */}
                <SidebarGroup>
                    <SidebarGroupLabel>Practice</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navigation.practice.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="flex items-center gap-2">
                                            <item.icon className="size-4" />
                                            <span>{item.title}</span>
                                            {item.badge && (
                                                <Badge variant="outline" className="ml-auto text-xs">
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

                {/* Progress Section */}
                <SidebarGroup>
                    <SidebarGroupLabel>Progress</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navigation.progress.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
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
                                    <span className="truncate font-semibold">{data.user.name}</span>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
            <SidebarRail />
        </Sidebar>
    )
}