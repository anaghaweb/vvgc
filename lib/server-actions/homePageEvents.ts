"use server"
import type { CalendarEvent } from "types/global";
import { AllEventsData } from "./mainEvents"
import { revalidateTag } from "next/cache";
const getHomePageEventsData = async ():Promise<CalendarEvent[]> => { 
   let response, result;
   try{
      response = await AllEventsData();
      if(response)
         result = response.filter(event => event.type === "sponsor"); 
      else throw new Error("Error fetching data from server")
      return result;
   
   }  
   catch(err:any){
      return err.message
   }   
}

export default getHomePageEventsData