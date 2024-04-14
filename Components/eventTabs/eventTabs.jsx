import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import RenderEvent from "../event"
import Regular from "../regular"

export const EventTabs = ({data}) =>{

  return (
    <>
      <div className="min-h-screen bg-white">
      <Tabs defaultValue="account" className="w-[full]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Special Events</TabsTrigger>
          <TabsTrigger value="password">Regular Events</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><RenderEvent data={data}/></TabsContent>
        <TabsContent value="password"><Regular /></TabsContent>
      </Tabs>
      </div>
    </>
  )
}
