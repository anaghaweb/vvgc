"use server"
import type { CalendarEvent } from "types/global";
import { AllEventsData } from "./mainEvents"
import { revalidateTag } from "next/cache";
const getHomePageEventsData = async ():Promise<CalendarEvent[]> => { 
   try{
      const response = await AllEventsData();
      const result = response.filter(event => event.type === "sponsor");  
      return result;
   }  
   catch(err:any){
      return err.message
   }   
}

export default getHomePageEventsData