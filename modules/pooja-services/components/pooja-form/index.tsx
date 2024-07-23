import Divider from "@modules/common/components/divider";
import Link from "next/link";
import React, { Fragment } from "react";

const PoojaForm = () => {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScUfVMwLiLHa8UuEFO9rz1-k9JcK01AWD7PMu0DP0NBxcbpAQ/viewform";
  return (
    <Fragment>
      <section className="flex flex-col w-full max-w-screen-lg text-[1rem]  h-auto mx-auto my-10 p-5  shadow-slate-900 drop-shadow-md rounded-sm bg-slate-100">
        <h3 className="text-[1.9rem] font-[cormorant]">Perform Events</h3>
        <Divider />
        <p className="sm:font-medium ">
          At VVGC, we perform a variety of poojas and events for our devotees.
          Our priests can conduct the events, both at home or at the temple
          premises.
        </p>

        <span>
          Please provide us with the details of the event you would like to
          perform by filling this :{" "}
        </span>
        <Link href={formURL} target="_blank">
          <span className="text-2xl text-orange-600 font-bold cursor-pointer underline">
            form
          </span>
        </Link>
        <p> One of our priests will reach out to you regarding the same.</p>

       
      </section>
    </Fragment>
  );
};

export default PoojaForm;
