import Divider from "@modules/common/components/divider";
import { opensans } from "@lib/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const LoanProgram = () => {
  return (
    <Fragment>
      <div
        className={`flex flex-col text-justify md:text-center max-w-full bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}
      >
        <div>
          <h1
            className={`text-xl text-center leading-8 my-2 font-[cormorant] font-medium py:2`}
          >
            VVGC San Martin Phase Loan Program
          </h1>
        </div>
        <Divider />
        <div>
          <h3 className={`my-2 md:w-3/4 mx-auto py:2 `}>
            If you would like to extend a loan to VVGC, you do so for a minimum
            of $10,000 on a 4 year term or more. VVGC will pay a 5% intereset
            rate at the end of the term.
            <Link
              className={`text-orange-500 font-[bold]`}
              href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bb4e1d3d-27ca-4f16-b54a-beb70d73e21a/a1414168-d09b-4818-8b5f-3163cffab505"
              target="_blank"
            >
              <span> Click here</span>
            </Link>{" "}
            for the Temple promissory note. Please call the Temple for any
            qustions about this loan program.
          </h3>
        </div>
        <div>
          <p>Temple promissory Note</p>
          <p className="text-center">(Click to enlarge)</p>
          <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[800px]">
            <Link href="/images/donations/loan/1.png" target="_blank">
              <Image
                quality={75}
                src="/images/donations/loan/1-thumb.png"
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
                className="absolute object-contain cursor-pointer"
                alt="vvgc san martin loan program"
              />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoanProgram;
