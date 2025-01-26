import Divider from "@modules/common/components/divider";
import { opensans } from "@lib/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const LoanProgram = () => {
  return (
    <Fragment>
      <div
        className={`flex flex-col w-full font-sans gap-4 p-6 px-3 leading-6 md:max-w-screen-md mx-auto`}
      >
        <div>
          <h1 className={`text-2xl md:text-4xl font-serif text-cyan-950`}>
            VVGC San Martin Phase Loan Program
          </h1>
          <Divider />
        </div>

        <div>
          <p>
            If you would like to extend a loan to VVGC, you do so for a minimum
            of $10,000 on a 4 year term or more. VVGC will pay a 5% interest
            rate at the end of the term.
            <Link
              className={`text-blue-500 font-bold underline`}
              href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bb4e1d3d-27ca-4f16-b54a-beb70d73e21a/a1414168-d09b-4818-8b5f-3163cffab505"
              target="_blank"
            >
              <span> Click here</span>
            </Link>{" "}
            for the Temple promissory note. Please call the Temple for any
            qustions about this loan program.
          </p>
        </div>
        <div>
          <p className="text-center font-semibold text-cyan-950">
            Temple Promissory Note
          </p>
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
