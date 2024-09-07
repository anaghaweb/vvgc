import { Card, CardContent } from "@modules/common/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const KumariSivaSriConcert = () => {
  return (
    <Card className="h-auto w-full sm:p-2 text-rose-900">
      <CardContent className="">
        <p className="mt-12 mb-2 font-bold lg:text-2xl text-center font-cormorant">
          Fund Raisng Event VVGC San Martin Hindu Temple
        </p>
        <h3 className="text-center font-roboto text-blue-950">
            Sunday September 22nd 2024 Evening 5.00pm to 8.00pm
          </h3>  
        <hr className="h-[2px] bg-blue-800 my-2" />
       
        {/* <div className="flex flex-col text-rose-900 font-bold font-cormorant">
        {section1.map((element, index) => (
           <>
           {
            element === "Kum Sivasri Skandaprasad" ? 
            <p key={index} className="font-bold text-xl text-center"><span className="text-sm">&#10070; </span> {element} <span className="text-sm"> &#10070;</span></p>
            :
            <p key={index} className="text-center text-xl"><span className="text-sm">&#10070; </span> {element} <span className="text-sm"> &#10070;</span></p>
           }
           </>
          ))}
        </div>       
        */}
        <div className="font-roboto justify-center w-full items-center ">
          {eventDetails.map((element, index) => (
            <p key={index}></p>
          ))}
        </div>
        <div className="relative w-[100%] min-h-[300px] h-[300px] md:h-[300px] lg:h-[600px] p-2">
          <Link href="/images/campaigns/namaYatra.png" target="_blank">
            <Image
              src="/images/campaigns/namaYatra.png"
              alt="Event"
               fill
              quality={100}
              sizes={"100vw"}              
              className="absolute object-scale-down cursor-pointer"
            />
          </Link>
          
        </div>
         <div className="flex gap-2 items-center justify-center py-2 underline font-roboto text-xl text-blue-950 font-bold">
        
            <Link  className="py-2" target="_blank" href="https://paybee.io/@vvgc@71">
              Register for FREE!
            </Link>
            <LiaExternalLinkSquareAltSolid/>
        </div>
         <div className="flex gap-2 items-center justify-center underline font-roboto text-xl text-blue-950 font-bold ">
        
            <Link  className="py-2" target="_blank" href="https://paybee.io/@vvgc@72">
              Become a sponsor!
            </Link>
            <LiaExternalLinkSquareAltSolid/>
        </div>
        {/* <h4 className="py-2 text-center">
          Maha prasadam/ Priti Bhoj will be served after the Event
        </h4> */}
        <div className="flex flex-col font-roboto_mono text-blue-800 font-bold text-center">
          {mediaLinks.map((element, index) => (
            <Link key={index} className="py-1" target="_blank" href={`https://${element}`}>
              {element}
            </Link>
          ))}
        </div>
        <p className="text-center text-rose-700 font-playfair font-semibold"><span>&#10070; </span>Subham bhuyath mangalani bhavanthu loka samastha sukino bhavanthu<span> &#10070; </span></p>
      </CardContent>
    </Card>
  );
};

const mediaLinks = [
  "www.vvgc.org",
  "facebook.com/vvgctemple",
  "youtube.com/@vaidicavidhyaganapathicent2187",
];

const section1 = [
  "Radhe Krishna",
  "Vittala Vittala Panduranga",
  "Chalo panduranga",
  "Nama Yatra",
  "Kum Sivasri Skandaprasad",
  "Sri Skandaprasad",
  "Sri Shankarraman",
  "Sri Jayadev",
];

const eventDetails = [
  "11355 monterey hwy San Martin ca 95046",
  "All Are Welcome with rsvp registration",
  "Sponsors Welcome",
  "Gold sponsor $5001",
  "Sponsor Flowers $1001",
  "Anna Dhanam $2500",
  "Silver sponsor $101",
  "Bronze sponsor family $51",
  "Individual $25",
];

export default KumariSivaSriConcert;
