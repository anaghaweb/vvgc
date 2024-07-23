import Image from "next/image";
import React from "react";

import Link from "next/link";
import { Card } from "@modules/common/components/ui/card";
import Divider from "@modules/common/components/divider";
import { opensans } from "app/fonts";

const PaymentsContainer = () => {
  return (
    <div
      className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}
    >
      <div className="w-full">
        <h1 className={`text-2xl leading-8 font-[cormorant] font-medium `}>
          Choose your payment type
        </h1>
        <Divider />
      </div>
      <div
        className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}
      >
        <div className="text-center text-base font-normal md:px-5 md:w-3/4">
          <h3 className={` md:text-xl text-justify md:text-center md:py-5`}>
            Donate using PayPal Giving Fund (requires PayPal account) and 100%
            of your donations will go to the Temple. Click below
          </h3>
        </div>

        <Link
          href="https://www.paypal.com/US/fundraiser/charity/1269532"
          target="blank"
        >
          <Card className="p-3 bg-yellow-300 w-72">
            <div className="mx-auto my-2 w-full ">
              <p className=" relative ">Click Here to donate through</p>
              <div className="relative w-32 h-10 mx-auto">
                <Image
                  alt="paypal logo"
                  src="/icons/paypal.png"
                  className="object-scale-down"
                  fill
                />
              </div>
            </div>
          </Card>
        </Link>
      </div>
      <div
        className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}
      >
        <div className="text-center text-base font-normal md:px-5 md:w-3/4">
          <h3 className={` md:text-xl text-justify md:text-center md:py-5`}>
            If you prefer to donate without logging into PayPal or if you don't
            have a PayPal account, click on the Donate button below. After a
            small credit/debit card processing fee, the rest of your donations
            will go to the Temple.
          </h3>
        </div>

        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=ZPJQND4F58NHE"
          target="blank"
        >
          <Card className="p-3 bg-yellow-300 w-72">
            <div className="mx-auto my-2 w-full ">
              <p className=" relative ">Donate using Debit / Credit Cards </p>
              <div className="relative flex justify-between items-center w-32 h-10 mx-auto gap-x-1">
                <div className="relative w-16 h-10">
                  <Image
                    alt="paypal logo"
                    src="/icons/003-american express.svg"
                    className="object-scale-down"
                    fill
                  />
                </div>
                <div className="relative w-16 h-10">
                  <Image
                    alt="paypal logo"
                    src="/icons/master-card.png"
                    className="object-scale-down"
                    fill
                  />
                </div>
                <div className="relative w-16 h-10">
                  {" "}
                  <Image
                    alt="paypal logo"
                    src="/icons/visa.png"
                    className="object-scale-down"
                    fill
                  />
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default PaymentsContainer;
