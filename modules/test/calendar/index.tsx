"use client"
import { Calendar } from "@modules/common/components/ui/calendar"
import { useState, useEffect } from "react"

export default function CalenderWithTimeZone() {

  const [date, setDate] = useState<Date | undefined>(undefined);
const [timezone, setTimezone] = useState<string | undefined>(undefined);

useEffect(()=>{
  setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
},[])
  
  return (
    <div className="p-4 mx-auto">
      <Calendar
        mode="single"
        selected={date}
        timeZone={timezone}
        onSelect={setDate}        
        className="rounded-lg border gap-4"
      />
     {
      date && <p>{date.toString()}</p>
     } 
    </div>
  )
}
