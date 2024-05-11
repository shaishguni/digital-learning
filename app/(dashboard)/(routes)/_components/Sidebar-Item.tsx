"use client"
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { usePathname,useRouter } from 'next/navigation'
import path from 'path'
import React from 'react'

interface SidebarItemProps {
    icon:LucideIcon,
    label:string,
    href:string,

}


const SidebarItem = (
    {icon:Icon,label,href}:SidebarItemProps
) => {
    const pathname = usePathname( );
    const router = useRouter();
    const isActive = ( pathname==='/'&& href==="/")||pathname===href||pathname?.startsWith(`${href}/`)
    const onClick = ()=>{
      router.push(href)
    }
  return (
   
    <button 
    onClick={onClick}
    type='button'
    className={cn("flex items-center gap-x-2 text-slate-500 text-small font-[500] pl-6 transition-all hover:text-slate-600  hover:bg-slate-300/20",isActive && "text-skay-700 bg-sky-200-20 hover:bg-sky-200/20 hover:text-sky-700 ")}>
      <div className='flex items-center gap-x-2 py-4'>
        <Icon size={22} className={cn("text-slate-500 ", isActive&&"text-sky-700")}/>
      </div>
      {label}
     < div className={cn("ml=auto opacity-0 border-0 border-sky-700 h-full translate-all",isActive&&"opacity-100")}/>
    </button>
  )
}

export default SidebarItem