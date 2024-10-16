/* eslint-disable @next/next/no-img-element */
import { AllEventsData } from "@lib/server-actions/mainEvents";
import { ImageResponse } from "next/og"; 
export const alt = "VVGC events";
export const contentType = "image/png";
// export const runtime = "edge";

const size = {
    width: 1200,
    height: 630,
  };

  export async function generateStaticParams(){
    const events = await AllEventsData();
    return events.map((event)=>({
      id:event.id
    }))
  }

export default async function TwitterEventImage({params}:{params:{id:string}}){
    const {id} =params;
    const events = await AllEventsData();
    const event = events.find(e=>e.id === id);
    const localImage = `${process.env.BASE_URL}/images/og/inner.jpg`;
    const cl = event?.eventList.map((e)=> e.imageUrl);
    const cloudImage = cl && `${cl[0]}`;
    const image = cloudImage ? cloudImage : localImage;
    try{
        return new ImageResponse(
            (
              <div
              style={{
                // backgroundImage: `url("${cloudImage}")`,
                background:'#fafafa',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',                
                padding: '40px 80px',
              }}
            >
             <div
                style={{
                  display:'flex',
                  flexDirection:'column',
                  fontSize: 60,
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  lineHeight: 1,
                  color: 'white',
                  marginBottom: 24,
                  whiteSpace: 'pre-wrap',
                  gap:4,
                }}
              >
                <a href={`${process.env.BASE_URL}/events/${id}`} target="_break" style={{color:'black', fontFamily:'inherit', fontSize:'2rem'}}>
               {event?.title}
               </a>
              </div>
              <a href={`${process.env.BASE_URL}/events/${id}`} target="_break">
              <img
                width="200"
                height="200"
                src={image}
                alt="Social Media Card Image"
              />
              </a>
            </div>
            ),
            {
            ...size,     
            },
          )
    }
    catch(e: unknown){
        if(e instanceof Error){
            console.log(`${e.message}`)
        }
        else{
            console.log(String(e));
        }
        return new Response(
            'Failed to generate an Image',
            {
                status:500,
            }
        )
    }
    
}