import { MobileSidebar } from "./mobile-sidebar"
import { Sheet,SheetContent,SheetTrigger } from "@/components/ui/sheet"

export const  Navbar= ()=>{
    return(
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <MobileSidebar/>
        </div>
    )
}