import type { CalendarEvent } from "types/global";

const GetEndTime = (event:CalendarEvent):string=>{
   let End: string | undefined;
   let length = event.eventList.length > 1 ? event.eventList.length : 1 ;
   
    if(event.eventList.length === 1){
     if(event.eventList[0].startTime && event.eventList[0].endTime){
         End = event.eventList[0].endTime;
     }
     else if(event.eventList[0].startTime && !event.eventList[0].endTime){
         const a = event.eventList[0].startTime.split(":");
         let b = parseInt(a[0])+2;
         let c = a[1].split(" ");
         if(b > 12 && c[1] === "AM"){
             b = b - 12;``
             c[1] = "PM";
         }
      const result = b.toString()+":"+c[0]+" "+c[1];              
         End = result;
     }
    }
 
    else if(event.eventList.length > 1 ){
     const lastevent = event.eventList[length-1];
     const endTime = lastevent.endTime;
     const startTime = lastevent.startTime;
     if(endTime)
     {
         End = endTime;
     }
     else if
     (startTime && !endTime){        
         const a = startTime.split(":");
         let b = parseInt(a[0])+2;
         let c = a[1].split(" ");
         if(b > 12 && c[1] === "AM"){
             b = b - 12;
             c[1] = "PM";
         }
      const result = b.toString()+":"+c[0]+" "+c[1];
      End = result;
     } 
     
     else if(!startTime && !endTime){
         End = "9:00 PM";
     }
    }  
    
    return End || "9:00 PM";
}


export default GetEndTime;