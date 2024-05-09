"use client"
import { LucideIcon } from 'lucide-react'
import { usePathname,useRouter } from 'next/navigation'
import React from 'react'

interface SidebarItemProps {
    icon:LucideIcon,
    label:string,
    href:string,

}


const SidebarItem = (
    {icon:Icon,label:Label,href:Href}:SidebarItemProps
) => {
    const Pathname = usePathname( );
    const Router = useRouter();
    const isActive = (pathname==="/"&)

  return (
   
    <div>SidebarItem</div>
  )
}

export default SidebarItem