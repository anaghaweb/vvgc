
import type { CalendarEvent } from "types/global";
import { AllEventsData } from "./mainEvents";
import { unstable_cache } from "next/cache";

const getMainEventsData = unstable_cache(async ():Promise<CalendarEvent[]> => {         
    console.log("Getevent: unstable cache function called, " , Date.now());    
    return await AllEventsData(); 
  },
  ['google_sheet_cache'],
  {
    revalidate:3600,
    tags:['events']
  }
)

  export default getMainEventsData;