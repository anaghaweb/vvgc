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
      <div className={`relative w-[${width}] min-h-[${minHeight}] md:max-h-[${maxHeight}]`}
      style={{width:width ? width : '100%', 
        minHeight:minHeight ? minHeight : '200px',
        maxHeight: maxHeight ? maxHeight : '300px,',
        height: maxHeight,
        }}
      >
        <Image
          src={imageUrl || '/images/og/inner.jpg'}
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
