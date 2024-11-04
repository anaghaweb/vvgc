'use server'
import type { CalendarEvent } from "types/global";
import { AllEventsData } from "./mainEvents";
import { revalidateTag } from "next/cache";

const getMainEventsData = async ():Promise<CalendarEvent[]> => {   
    const result = await AllEventsData(); 
    revalidateTag("result");
    return result;
  }

  export default getMainEventsData;