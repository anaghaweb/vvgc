'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import RenderEvent from "../event"
import Regular from "../regular"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
export const EventTabs = ({data, regularEventData}) =>{

  const searchParams = useSearchParams()
    const router = useRouter();
    const pathname = usePathname();
    const isSpecial = searchParams.get("type") === "special";
    const isRegular = searchParams.get("type") === "regular";

    const handleSpecial =()=>{
      router.push(pathname + "?type=special", {scroll:false})
    }

    const handleRegular = () => {
      router.push(pathname + "?type=regular", {scroll:false})
    }

  return (
    
    <>
      <div className="min-h-screen bg-white" id="eventpagetabs">
      <Tabs defaultValue={isSpecial ? "special" : "regular"} className="w-[full]">
        <TabsList className="gap-x-4 p-4 h-auto" >
          <TabsTrigger
            onClick={handleSpecial}
          value="special" className="rounded-xl p-4 text-sm">Special Events</TabsTrigger>
          <TabsTrigger onClick={handleRegular} value="regular" className="rounded-xl p-4 text-sm">Regular Events</TabsTrigger>
        </TabsList>
       { isSpecial && <TabsContent value="special"><RenderEvent data={data}/></TabsContent>}
       {isRegular && <TabsContent value="regular"><Regular regularEventData={regularEventData}/></TabsContent>} 
      </Tabs>
      </div>
    </>
  )
}
