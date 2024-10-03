export type NavbarNavigation = (
    | {
        title: string;
        url: string;
        id: number;
        child?: undefined;
      }
    | {
        title: string;
        id: number;
        child: (
          | {
              title: string;
              url: string;
              id: number;
              child?: undefined;
            }
          | {
              title: string;
              id: number;
              child: {
                title: string;
                url: string;
                id: number;
              }[];
              url?: undefined;
            }
        )[];
        url?: undefined;
      }
  )[];
  
  export type EventTypes = {
      evtype: "regular" | "special" | "weekly" | "festival",
      numberofevents?:string,
  }
  
  export type WeeklyEvents = 
  {
    day:string,
    events:
      {
        time:string,
        
        details:string,
      }[]  
  }
  
  
  export type Campaign = {
    id: string;
    start?: string;
    end?: string;
    duration: string;
    title: string;
    subtitle?: string;
    description: string;
    paragraphs: string[];
    imageUrl: string;
    sponsor_link: string;
    register_link?: string;
  };
  
  export type CalendarEvent = {
    id: string;
    date: Date;
    title: string;
    subtitle?: string | "";
    type?: string | "";
    location?: string | "";
    eventList: {
      details?: string | "";
      startTime?: string | "";
      endTime?: string | "";
      imageUrl?: string| "";
      sponsorLink?: string| "";
      registerLink?: string| "";
    }[];
   
  };
  
  export type LazyImageLoaderProps = {
      imageUrl: string;
      width?: string ;
      minHeight?: string ;
      maxHeight?: string ;
    };
  
    export interface Calendar {
      startingDate:string,
      endingDate:string,
      startTime:string,
      endTime:string,
      title:string,
      details:string,
      location:string,
      timeZone:string,
      recurringRule?:[] | null;
    }
  