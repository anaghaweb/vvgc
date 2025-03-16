import Divider from "@modules/common/components/divider";
import React, { Fragment } from "react";

const TempleContact = () => {
  return (
    <Fragment>
      <section className="flex flex-col w-full text-left max-w-screen-md h-auto mx-auto my-10 p-5 gap-4 text-black ">
        <ul className="text-base font-sans">
          <li >
            <h3 className="text-lg md:text-3xl font-serif mb-4">For Poojas and Rituals Contact:</h3>
          </li>
          <Divider className="my-4" />

          <li>Pandit Ganesh Shasthry</li>
          <li>880, E Fremont Ave, Apt#302,</li>
          <li>Sunnyvale, CA 94087</li>
          <li>Home: <a href="tel:4082455443" className="text-blue-800 font-semibold">4082455443</a>
            {" / "}
            <a href="tel:4082455443" className="text-blue-800 font-semibold">4082455443</a>
          </li>
          <li>Cell: <a href="tel:9252097637" className="text-blue-800 font-semibold">9252097637</a></li>
          <li>Email:{" "}
            <a href="mailto:srikalahatheeswara@yahoo.com" className="text-blue-800 font-semibold">
              priests@vvgc.org
            </a>
            {" / "}
            <a href="mailto:srikalahatheeswara@yahoo.com" className="text-blue-800 font-semibold">
            srikalahatheeswara@yahoo.com
            </a>
          </li>



        </ul>
        <div className="mt-1 p-3 bg-blue-200 font-sans">
          <p>
            Note: Please note that these are the specified dollar amounts set by the temple.
            Devotees are welcome to make additional dakshina contributions directly to the priests during the event
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default TempleContact;
