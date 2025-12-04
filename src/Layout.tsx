import type React from "react"
import { Outlet } from "react-router-dom"

export default function Layout({ }: { children?: React.ReactNode }) {
    return (


        <main className="w-full" >
            {/* {children} */}
            <Outlet />
        </main>
    )
}
