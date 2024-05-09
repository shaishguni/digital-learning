"use client"

import { Compass, Layout } from "lucide-react"
import SidebarItem from "./Sidebar-Item";


const guestRoutes =[ {
    icon:Layout,
    label:"Dashboard",
    href:"/"

},
{
    icon:Compass,
    label:"Browse",
    href:"/search"

},



]


export const SidebarRoutes = () =>{
    const Routes = guestRoutes;
    return(
        <div>
           {
            Routes.map((routes)=>(
                <SidebarItem
                key={routes.href}
                icon={routes.icon}
                label={routes.label}
                href = {routes.href}

                
                />
            ))
           }
        </div>
    )
}