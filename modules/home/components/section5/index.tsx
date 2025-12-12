import { Card } from "@modules/common/components/ui/card";
import React, { Fragment } from "react";

const SectionFive = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.8255789514515!2d77.6304399269531!3d12.983005299999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16bcf64530e5%3A0x5b52ff50442484ac!2sShri%20Vallabha%20Mahaganapati%20Temple!5e0!3m2!1sen!2sin!4v1765519181981!5m2!1sen!2sin"
  return (
    <Fragment>
      <Card>
        <iframe
          className="w-full h-[200px] md:h-[400px]"
          src={mapUrl}
        ></iframe>
      </Card>
    </Fragment>
  );
};
export default SectionFive;
