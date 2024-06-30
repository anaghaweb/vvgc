
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@modules/common/components/ui/tabs"
import RenderEvent from "../event-card-1"
import Regular from "../event-card-2"

export const EventTabs = ({data, regularEventData}) =>{   
  return (    
    <>
      <div className="min-h-screen bg-white" id="eventpagetabs">
      <Tabs defaultValue="regular" className="w-[full]">
        <TabsList className="gap-x-4 p-4 h-auto" >
          <TabsTrigger
            
          value="special" className="rounded-xl p-4 text-sm">Special Events</TabsTrigger>
          <TabsTrigger  value="regular" className="rounded-xl p-4 text-sm">Regular Events</TabsTrigger>
        </TabsList>
        <TabsContent value="special"><RenderEvent data={data}/></TabsContent>
      <TabsContent value="regular"><Regular regularEventData={regularEventData}/></TabsContent>
      </Tabs>
      </div>
    </>
  )
}
