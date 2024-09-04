import { Card } from "@modules/common/components/ui/card";
import React, { Fragment } from "react";
import GallerySection from "@modules/home/components/section4/gallery";
import History from "@modules/home/components/section4/history";
import PaybeeEventsLink from "@modules/home/components/section4/paybee-events";

const SectionFour = () => {
  return (
    <Fragment>
      <Card
        className={`w-[100%] md:max-w-screen h-auto p-1 md:p-10 
        my-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 
        justify-items-center gap-4`}>
        <GallerySection />
        <History />
        <PaybeeEventsLink />
      </Card>
    </Fragment>
  );
};

export default SectionFour;
