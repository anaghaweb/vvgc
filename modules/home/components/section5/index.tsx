import { Card } from "@modules/common/components/ui/card";
import React, { Fragment } from "react";

const SectionFive = () => {
  return (
    <Fragment>
      <Card>
        <iframe
          className="w-full h-[200px] md:h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101884.10724336727!2d-121.596685!3d37.060382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e04d2c0127e7%3A0xe48ebd982c2bd31b!2s11355%20Monterey%20Hwy%2C%20San%20Martin%2C%20CA%2095046!5e0!3m2!1sen!2sus!4v1694500881687!5m2!1sen!2sus"
        ></iframe>
      </Card>
    </Fragment>
  );
};
export default SectionFive;
