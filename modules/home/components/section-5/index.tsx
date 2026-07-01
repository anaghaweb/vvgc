import { Card } from "@modules/common/components/ui/card";
import React, { Fragment } from "react";

const SectionFive = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.8792494328704!2d-121.5966966!3d37.060360599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e10075a7bfd9%3A0x97d1c05afb683a94!2sVaidica%20Vidhya%20Ganapathi%20Center!5e0!3m2!1sen!2sin!4v1782921537197!5m2!1sen!2sin"
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
