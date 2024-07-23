import clsx from "clsx";
import React, { Fragment } from "react";
import type { Campaign } from "types/global";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import UrlShareButton from "@modules/common/components/url-share-button";

const RightContentTemplate = ({
  camid,
  campaign,
}: {
  camid: string;
  campaign: Campaign;
}) => {
  return (
    <div className="flex flex-col max-w-xl mx-auto px-2 py-4 gap-4 bg-slate-100 font-roboto text-justify md:text-center">
      {/* Title  */}
      <h3 className=" text-lg md:text-xl font-semibold text-blue-950 tracking-tight text-center font-inter">
        {campaign.title}
      </h3>
      {/* Image */}
      <div className="relative w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[380px] md:h-[275px] mx-auto">
        <Image
          // width={280}
          // height={250}
          fill
          sizes="100vw"
          src={campaign.imageUrl}
          alt={campaign.title}
          className="object-contain mx-auto"
        />
      </div>

      {/* Sub Title */}
      {campaign.subtitle && (
        <h5 className="scroll-m-10 text-sm font-semibold tracking-tight text-center text-muted">
          {campaign.subtitle}
        </h5>
      )}
      {/* Description */}

      {campaign.description && (
        <p className="scroll-m-10 text-sm md:text-base text-justify md:text-center font-normal text-black tracking-normal">
          {campaign.description}
        </p>
      )}
      {campaign.paragraphs.map((data, index) => (
        <li
          key={index}
          className="text-[12px] md:text-base text-left text-gray-950"
        >
          {data}
        </li>
      ))}

      {/* sponsored link */}
      <Link
        className="scroll-m-10 text-sm md:text-base inline-flex gap-2 items-center font-semibold text-blue-900"
        href={campaign.sponsor_link}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        I wish to Sponsor this campaign <ExternalLinkIcon className="w-4 h-4" />
      </Link>

      <div className="inline-flex gap-2 items-center">
        Share Campaign <UrlShareButton />
      </div>
    </div>
  );
};

export default RightContentTemplate;
