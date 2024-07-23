import React from "react";

const LakshmiGanapathiMapLocation = () => {
  const IframeURL =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d943.8068848783809!2d-121.83776058292534!3d37.28149680729865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e324114e97d6d%3A0x6669fb128082a9f3!2sSri%20Lakshmi%20Ganapathi%20Temple!5e0!3m2!1sen!2sin!4v1690648613216!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <section className="my-5">
      <iframe
        className="w-full h-[200px] md:h-[400px]"
        src={IframeURL}
      ></iframe>
    </section>
  );
};

export default LakshmiGanapathiMapLocation;
