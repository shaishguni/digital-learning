"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname,useRouter } from "next/navigation"


export const NavbarRoutes = ()=>{
    const pathname = usePathname()
    const router = useRouter()
    const isTeacherPage = pathname?.startsWith("/teacher")
    const isPlayerPage = pathname?.includes("/student")
    return(
        <div className="flex gap-x-2 ml-auto">
            <UserButton/>

        </div>
    )
}