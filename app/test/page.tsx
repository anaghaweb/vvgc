import React, { Fragment } from "react";
import TestPage from "@modules/test/page";
import { getCampaignData } from "@lib/server-actions/actions";
import { AllEventsData } from "@lib/server-actions/mainEvents";
import { SpecialEvent } from "types/global";
import LazyImageLoader from "@modules/common/components/LazyImageLoader";
import CardUpdated from "@modules/test/components/eventCard";
import {
  Card,
  CardContent,
  CardHeader,
} from "@modules/common/components/ui/card";
import SingleEventPage from "app/events/[id]/page";
import ExternalLink from "@modules/common/components/ExternalLink";
import ListEachEvent from "@modules/test/components/eachEvent";

const Test = async ({
  params,
  searchParams,
}: {
  params: {
    camid: string;
  };
  searchParams: {
    evtype: "regular" | "special" | "weekly" | "festival";
  };
}) => {
  const campaign = await getCampaignData();
  const data: SpecialEvent[] = await AllEventsData();

  return (
    <Fragment>
      <TestPage 
        // camid={params.camid} 
         campaign={campaign}
         searchParams={searchParams}
        />
     
    </Fragment>
  );
};

export default Test;
