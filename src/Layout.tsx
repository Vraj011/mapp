import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./Component/Sidebar/Sidebar"
import type React from "react"
import { Outlet } from "react-router-dom"

export default function Layout({ }: { children?: React.ReactNode }) {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full" >
                <SidebarTrigger />
                {/* {children} */}
                <Outlet />
            </main>
        </SidebarProvider>
    )
}
