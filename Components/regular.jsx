import result from '@/json/regularevents.json'
import { Cormorant } from 'next/font/google'

const cormorant = Cormorant({subsets: ['latin'], variable:'--font-cormorant', fallback: 'serif'})
export default function regular() {

    
      return (
        <div >
              <h1 className={`py-2 px-1 md:font-semibold font-cormorant text-xl md:text-4xl text-red-950 ${cormorant.variable} font-cormorant `}>Regular Events</h1>
            {
                result.content.map((data, index) => {
                    
                    return(  
                                       
                    <section key={index} className="grid grid-cols-6 gap-x-1 gap-y-3 my-5">
                        <div className="p-2 text-start col-span-full text-lg  font-opensans text-red-700">{data.day}</div>
                         
                        <div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time}:</div>
                            <div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full text-start">{data.event}</div>
                    <div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time1}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full text-start">{data.event1}</div>
                            
                            { data.time2 && <> <div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time2}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full text-start">{data.event2}</div></>}
                            
                        {data.time3 &&  <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time3}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full text-start">{data.event3}</div></>}
                            
                        {data.time4  && <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time4}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full text-start">{data.event4}</div></>}
                            
                        {data.time5  && <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time5}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full text-start">{data.event5}</div></>}
                    <hr className='bg-black'/>        
                    </section>
                    )
                    
                 })
             
             }
        </div>)
    
}

// const jsondata = {
//     "content": [
//         {
//             "day": "Sunday",
//             "time": "1899-12-30T20:00:00.000Z",
//             "event": "Jai Jagadeesha Hare Aarati followed by Maha prasadam / Priti Bhoj",
//             "time1": "1899-12-31T00:00:00.000Z",
//             "event1": "Sri Vallabha Maha Ganapathi Homa, Sri Vallabha Maha Ganapathi Abhisheka, Sri Shiva, Sri Subramanya Abhisheka, Sri Ayyappa Swami Abhisheka, Aarathi and Manthra Pushpa",
//             "time2": "1899-12-31T01:00:00.000Z",
//             "event2": "Sri Gomatha (Cow) Pooja",
//             "time3": "1899-12-31T01:00:00.000Z",
//             "event3": "Sri Jai Jagadesha Hare Aarathi",
//             "time4": "",
//             "event4": ""
//         },
//         {
//             "day": "Monday",
//             "time": "1899-12-31T02:30:00.000Z",
//             "event": "Shiva Abisheka, Aarthi and Manthra Pushpa",
//             "time1": "1899-12-31T03:30:00.000Z",
//             "event1": "Shiva Chalisa Aarathi",
//             "time2": "1899-12-31T04:00:00.000Z",
//             "event2": "Sri Jai Jagadesha Hare Aarathi",
//             "time3": "",
//             "event3": "",
//             "time4": "",
//             "event4": ""
//         },
//         {
//             "day": "Tuesday",
//             "time": "1899-12-31T02:30:00.000Z",
//             "event": "Shiva Abisheka, Aarthi and Manthra Pushpa",
//             "time1": "1899-12-31T03:30:00.000Z",
//             "event1": "Sri Panduranga Vittala Aarathi and Sri Puri Jagannath Aarathi",
//             "time2": "1899-12-31T04:00:00.000Z",
//             "event2": "Sri Jai Jagadesha Hare Aarathi",
//             "time3": "",
//             "event3": "",
//             "time4": "",
//             "event4": ""
//         },
//         {
//             "day": "Wednesday",
//             "time": "1899-12-31T02:30:00.000Z",
//             "event": "Shiva Abisheka, Aarthi and Manthra Pushpa",
//             "time1": "1899-12-31T03:30:00.000Z",
//             "event1": "Sri Panduranga Vittala Aarathi and Sri Puri Jagannath Aarathi",
//             "time2": "1899-12-31T04:00:00.000Z",
//             "event2": "Sri Jai Jagadesha Hare Aarathi",
//             "time3": "",
//             "event3": "",
//             "time4": "",
//             "event4": ""
//         },
//         {
//             "day": "Thrusday",
//             "time": "1899-12-31T02:30:00.000Z",
//             "event": "Shiva Abisheka, Aarthi and Manthra Pushpa",
//             "time1": "1899-12-31T03:30:00.000Z",
//             "event1": "Sri Shridi Sai Haarathulu Dhoop Aarathi",
//             "time2": "1899-12-31T04:00:00.000Z",
//             "event2": "Sri Jai Jagadesha Hare Aarathi",
//             "time3": "",
//             "event3": "",
//             "time4": "",
//             "event4": ""
//         },
//         {
//             "day": "Friday",
//             "time": "1899-12-31T02:30:00.000Z",
//             "event": "Shiva Abisheka, Aarthi and Manthra Pushpa, Sri Lalitha Sahasranamam Chanting, Sri Vaishno Devi Chalisa Aarath",
//             "time1": "1899-12-31T04:00:00.000Z",
//             "event1": "Sri Jai Jagadesha Hare Aarathi",
//             "time2": "",
//             "event2": "",
//             "time3": "",
//             "event3": "",
//             "time4": "",
//             "event4": ""
//         },
//         {
//             "day": "Saturday",
//             "time": "1899-12-30T20:00:00.000Z",
//             "event": "Jai Jagadeesha Hare Aarati followed by Maha prasadam / Priti Bhoj",
//             "time1": "1899-12-31T00:00:00.000Z",
//             "event1": "Sri Venkateswara Abhisheka, Sri Vishnu Sahasra Nama Chanting, Aarathi and Manthra Pushpa",
//             "time2": "1899-12-31T01:00:00.000Z",
//             "event2": "Sri Gomatha (Cow) Pooja",
//             "time3": "1899-12-31T04:00:00.000Z",
//             "event3": "Sri Jai Jagadesha Hare Aarathi",
//             "time4": "",
//             "event4": ""
//         }
//     ]
// }