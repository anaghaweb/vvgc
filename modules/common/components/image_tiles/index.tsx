import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Image_Tiles = ({ urlset }:{urlset:string[]}) => {
  return (
    
    <div className="flex flex-col lg:flex-row flex-wrap
    mx-auto justify-evenly items-center py-8 gap-4">
      {urlset.map((src, index) => (
        <Link href={src} key={index} target='_blank'>
          <div className="overflow-hiddenmy-4 hover:transition hover:scale-105">
            <Image
              width={284}
              height={400}
              src={src}
              alt={`Tile ${index}`}
             
            />
          </div>
        </Link>
      ))}
    </div>    
  );
};
export default Image_Tiles;

