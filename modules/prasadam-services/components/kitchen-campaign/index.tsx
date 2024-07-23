import Divider from "@modules/common/components/divider";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const KitchenCampaignFlyer = () => {
  return (
    <Fragment>
      <section className="flex flex-col w-full py-3 my-3 px-2 mx-auto">
        <div>
          <p className="text-center text-xl md:text-3xl font-[cormorant] ">
            An appeal for Standard Kitchen
          </p>
        </div>
        <Divider />

        <div className="relative overflow-hidden block mx-auto w-full h-48 md:w-3/4 lg:w-1/2 md:h-[400px] cursor-pointer">
          <Link
            href="/images/prasadam-services/kitchen/standard-kitchen.webp"
            target="_blank"
          >
            <Image
              fill
              alt="kitchen flyer"
              src="/images/prasadam-services/kitchen/standard-kitchen.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-scale-down"
            />
          </Link>
        </div>

        <span className="text-center">(Click to enlarge)</span>
      </section>
    </Fragment>
  );
};

export default KitchenCampaignFlyer;
