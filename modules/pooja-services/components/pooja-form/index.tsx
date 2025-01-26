import Divider from "@modules/common/components/divider";
import External_Link from "@modules/common/components/external-link";
import Link from "next/link";
import React, { Fragment } from "react";

const PoojaForm = () => {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScUfVMwLiLHa8UuEFO9rz1-k9JcK01AWD7PMu0DP0NBxcbpAQ/viewform";
  return (
    <Fragment>
      <section className="flex flex-col gap-4 w-full max-w-screen-md h-auto mx-auto my-10 p-5 text-left font-sans">
        <h3 className="text-3xl font-serif">Perform Events</h3>
        <Divider />
        <p>
          At VVGC, we perform a variety of poojas and events for our devotees.
          Our priests can conduct the events, both at home or at the temple
          premises. Please provide us with the details of the event you would
          like to perform by filling this :{" "}
        </p>

        <External_Link url={formURL} text="form" />
        <div className="mt-1 p-3 bg-blue-200 font-sans">
          <p> One of our priests will reach out to you regarding the same.</p>
        </div>
      </section>
    </Fragment>
  );
};

export default PoojaForm;
