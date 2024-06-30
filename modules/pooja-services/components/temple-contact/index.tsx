import Divider from "@modules/common/components/divider";
import React, { Fragment } from "react";

const TempleContact = () => {
  return (
    <Fragment>
      <section className="flex flex-col w-full max-w-screen-lg h-auto mx-auto my-10 p-5 gap-2  text-black shadow-slate-900 drop-shadow-md rounded-sm bg-slate-100">
        <ul>
          <li className="md:text-2xl font-[cormorant]">
            <h3 className="text-[1.9rem]">For Poojas and Rituals Contact:</h3>
          </li>
          <Divider />

          <li>Pandit Ganesh Shasthry</li>
          <li>880, E Fremont Ave, Apt#302,</li>
          <li>Sunnyvale, CA 94087</li>
          <li>Home: 4082455443</li>
          <li>Cell: 9252097637</li>
          <li>Email: srikalahatheeswara@yahoo.com</li>
        </ul>
      </section>
    </Fragment>
  );
};

export default TempleContact;
