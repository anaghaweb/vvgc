import { Card } from '@modules/common/components/ui/card';
import SponsorEvent from '@modules/events/components/sponsor-event-card';
import React, {Fragment} from 'react'
import PlantATree from '@modules/campaigns/components/plant-a-tree';
const SectionTwo = ({data}) => {
  return (
    <Fragment>
         <div className="grid grid-col-1 lg:grid-cols-2 p-4 gap-4 w-full">
          {/* Special Event Card */}
          <div className="col-span-1 w-full">
         <Card className="w-[100%] h-auto md:p-10">
              <div className="p-2">
                <h1 className="text-2xl lg:text-3xl font-cormorant text-blue-500">
                  Upcoming Special Events
                </h1>
              </div>
              <hr className="h-[2px] bg-red-800 my-2 " />
              <div className="my-[16px] w-[100%] ">
                {data.content.map((data, index) => {
                  return data.homepage === "sponsor" ? (
                    <SponsorEvent data={data} key={index} />
                  ) : (
                    ""
                  );
                })}
              </div>
             
            </Card>
            </div>
            <div className="col-span-1 w-full">
              <PlantATree />
            </div>
            </div>
    </Fragment>
  )
}

export default SectionTwo