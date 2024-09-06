import React from "react";
import PlantATree from "@modules/campaigns/components/plant-a-tree";
import KitchenVVGC from "@modules/campaigns/components/vvgc-kitchen";
import KumariSivaSriConcert from "@modules/campaigns/components/fundraisers/concert0922";

const SectionThree = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <div className="col-span-1">
        <KumariSivaSriConcert />
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
