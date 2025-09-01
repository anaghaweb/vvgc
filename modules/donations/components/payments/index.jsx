import Image from "next/image";
import React from "react";

import Link from "next/link";
import { Card } from "@modules/common/components/ui/card";
import Divider from "@modules/common/components/divider";
import { opensans } from "@lib/fonts/fonts";
import ZellePayment from "./zelle-payment";

const PaymentsContainer = () => {
  return (
    <div
      className={`flex flex-col w-full max-w-full font-sans col-span-2 p-6 px-3 leading-6 gap-4 text-base md:max-w-screen-md mx-auto`}
    >
      <div>
        <h1 className={`text-2xl md:text-4xl font-serif text-cyan-950`}>
          Choose your payment type
        </h1>
        <Divider />
      </div>

      <p className="md:max-w-screen-md ">
        Donate using PayPal Giving Fund (requires PayPal account) and 100% of
        your donations will go to the Temple.
      </p>

      <p className=" font-semibold">Click Here to donate through:</p>
      <Link
        href="https://www.paypal.com/US/fundraiser/charity/1269532"
        target="blank"
      >
        <Card className="p-3 bg-yellow-300 w-72 ">
          <div className="relative w-32 h-10 mx-auto">
            <Image
              alt="paypal logo"
              src="/icons/paypal.png"
              className="object-scale-down"
              fill
            />
          </div>
        </Card>
      </Link>

      <p className="md:max-w-screen-md">
        If you prefer to donate without logging into PayPal or if you don't have
        a PayPal account, click on the Donate button below. After a small
        credit/debit card processing fee, the rest of your donations will go to
        the Temple.
      </p>

      <p className="font-semibold">Donate using Debit / Credit Cards: </p>
      <Link
        href="https://www.paypal.com/donate/?hosted_button_id=ZPJQND4F58NHE"
        target="blank"
      >
        <Card className="p-3 bg-yellow-300 w-72">
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
        </Card>
      </Link>
     
        <ZellePayment />
    </div>
  );
};

export default PaymentsContainer;
