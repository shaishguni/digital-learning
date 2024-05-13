import { Divide, Menu, Sidebar } from "lucide-react";
import { Sheet,SheetContent,SheetTrigger } from "@/components/ui/sheet"

export const MobileSidebar = ()=>{
    return(
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 translate">
                <Menu/>
                <SheetContent side="left" className="p-0 bg-white">
                    <Sidebar/>
                </SheetContent>
            </SheetTrigger>
        </Sheet>
       
    )
}