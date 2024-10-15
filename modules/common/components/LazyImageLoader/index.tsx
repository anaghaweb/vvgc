import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LazyImageLoaderProps } from "types/global";

const LazyImageLoader = ({
  imageUrl,
  width = "100%",
  minHeight = "200px",
  maxHeight = "500px",
}: LazyImageLoaderProps) => {
  return (
    <Link href={imageUrl} target="_blank">
      <div className={`relative w-[${width}] h-[${minHeight}] md:h-[${maxHeight}]`}>
        <Image
          src={`${imageUrl}`}
          alt="Event"
          fill
          quality={75}
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
          className="absolute object-contain cursor-pointer"
        />
      </div>
    </Link>
  );
};

export default LazyImageLoader;
