import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Image_Tiles = ({ urlset }:{urlset:string[]}) => {
  return (
    
    <div className="flex flex-col lg:flex-row flex-wrap
    mx-auto justify-evenly items-center gap-4">
      {urlset.map((src, index) => (
        <Link href={src} key={index} target='_blank'>
          <div className="relative overflow-hidden hover:transition hover:scale-105 w-64 h-64">
            <Image
             fill             
              src={src}
              alt={`Tile ${index}`}
              className={`absolute object-contain`}
            />
          </div>
        </Link>
      ))}
    </div>    
  );
};
export default Image_Tiles;

