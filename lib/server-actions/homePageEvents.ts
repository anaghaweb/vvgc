"use server"
import type { CalendarEvent } from "types/global";
import { AllEventsData } from "./mainEvents"
import { revalidateTag } from "next/cache";
const getHomePageEventsData = async ():Promise<CalendarEvent[]> => {
   
   const response = await AllEventsData();
   const result = response.filter(event => event.type === "sponsor");   
   revalidateTag("result");
   return result;
}

export default getHomePageEventsData