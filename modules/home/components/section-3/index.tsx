import React from "react";
import PlantATree from "@modules/campaigns/components/plant-a-tree";
import KitchenVVGC from "@modules/campaigns/components/vvgc-kitchen";
import MahaPrasadamSanMartin from "@modules/campaigns/components/maha-prasadam/maha-prasadam";

import MahaRudraYagnaVideo from "@modules/campaigns/components/maharudra-yagnam";

const SectionThree = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1">
      <MahaRudraYagnaVideo />
      </div>
      <div className="col-span-1">
        <MahaPrasadamSanMartin />
      </div>
      <div className="col-span-1">
        <KitchenVVGC />
      </div>
      <div className="col-span-1">
        <PlantATree />
      </div>
    </div>
  );
};

export default SectionThree;
