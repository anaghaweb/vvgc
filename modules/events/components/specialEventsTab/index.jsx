import {CardHeader} from "@modules/common/components/ui/card";
import SpecialEventCard from "@modules/common/components/specialEventCard";

export default function SpecialEventTab({ data }) {
  return (
   
      <div className="flex flex-col max-w-full lg:w-[900px] mx-auto h-auto  px-1 relative">
        <CardHeader className=" text-[2rem] leading-7 px-1 py-2 md:text-4xl text-orange-600 border-b-2 border-b-indigo-800 md:leading-10 md:font-semibold">
          Special Events
        </CardHeader>
        <hr />
        {data.content.map((data) =>
          !!data.title ? (         
            <SpecialEventCard data={data} key={data.id} />
          ) : (
            ""
          )
        )}
      </div>
    
  );
}
