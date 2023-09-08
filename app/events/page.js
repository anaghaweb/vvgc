import Image from "next/image";
import FetchData from "@/Components/fetchdata";
import CalenderLinks from "@/Components/calendarlinks";

export const metadata = {
    title: 'Events',
    description: 'VVGC- Temple',
}

export default async function Event() {
    const url = "https://script.google.com/macros/s/AKfycbwi1DRMxZlv8XkSIm0K_8nKMPukufofUvxF-wXYmiB9_E5uMhTF8-CyBNnzEFSoDHNy2g/exec";

    const data = await FetchData({ url });

    return (

        <>
            {
                <div className="w-full h-auto inset-0 shadow-md px-2 relative">
                    {data.content.map((data, index) => (
                        <section key={index} className="bg-white flex flex-col sm:w-full md:w-[600px] justify-start h-auto my-20 border-[1px] border-black p-10 ">
                            <div >{new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
                            <div>{data.title}</div>
                            <hr className="h-[1px] bg-green-300 " />

                            <div className="relative sm:w-[80%] sm:h-[200px] md:w-[400px] md:h-[300px]">
                                {<Image src={data.imageurl} alt="Event" fill quality={75} sizes={'100vw'} className="object-contain relative" />}</div>
                            <hr className="h-[1px] bg-green-300 " />
                            <div>
                                {data.startTime && data.endTime ? <><div>{data.startTime} - {data.endTime}</div><div>{data.description}</div></>
                                    : data.startTime && !data.endTime ? <><div>{data.startTime}:</div>
                                        <div>{data.description}</div></>
                                        : data.startTime && <div>{data.description}</div>
                                }
                                <CalenderLinks eventdata={{
                                    startdate: data.date,
                                    enddate: data.date,
                                    startTime: data.startTime,
                                    endTime: data.endTime,
                                    summary: data.title,
                                    description: data.description
                                }} /></div>
                            <div>{data.time_1 ? <><div>{data.time_1}:</div><div>{data.event_1}</div></>
                                : <div>{data.event_1}</div>}</div>
                            <div>{data.time_2 ? <><div>{data.time_2}:</div><div>{data.event_2}</div></>
                                : <div>{data.event_2}</div>}</div>
                            <div>{data.time_3 ? <><div>{data.time_3}:</div><div>{data.event_3}</div></>
                                : <div>{data.event_3}</div>}</div>
                            <div>{data.time_4 ? <><div>{data.time_4}:</div><div>{data.event_4}</div></>
                                : <div>{data.event_4}</div>}</div>
                            <div>{data.time_5 ? <><div>{data.time_5}:</div><div>{data.event_5}</div></>
                                : <div>{data.event_5}</div>}</div>
                            <div>{data.time_6 ? <><div>{data.time_6}:</div><div>{data.event_6}</div></>
                                : <div>{data.event_6}</div>}</div>

                        </section>
                    ))}
                </div>
            }
        </>
    );
}
