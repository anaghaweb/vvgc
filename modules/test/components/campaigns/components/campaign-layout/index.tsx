
import React, { Fragment } from "react";
import { Campaign } from "types/global";
import CampaignSideNav from "../side-nav";
import CampaignCarousel from "../carousel";

const CampaignLayout = ({
  camid,
  campaign,
  children,
}: {
  camid: string;
  campaign?: Campaign[];
  children: React.ReactNode;
}) => {
  return (
    <div className="md:top-[10rem] md:left-0 container flex gap-2 p-4">
      {/* <CampaignSideNav camid={camid} campaign={campaign} /> */}
      <div className="flex flex-col p-2 mx-auto w-full md:max-w-[calc(100%-300px)]">
        {/* <CampaignCarousel camid={camid} campaign={campaign} />        */}
          {children}        
      </div>
    </div>
  );
};
export default CampaignLayout;
