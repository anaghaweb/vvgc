"use server"
import type { CalendarEvent } from "types/global";
import { AllEventsData } from "./mainEvents"
const getHomePageEventsData = async ():Promise<CalendarEvent[]> => {
   
    const response = await AllEventsData();
   const result = response.filter(event => event.type === "sponsor");   
   return result;
}

export default getHomePageEventsData