import Link from 'next/link';
import React from 'react';

const Image_Tiles = ({ urlset }:{urlset:string[]}) => {
  return (
    
    <div className="max-w-full 
    flex flex-col lg:flex-row flex-wrap
    mx-auto justify-evenly gap-5">
      {urlset.map((src, index) => (
        <Link href={src} key={index} target='_blank'>
          <div className="w-full lg:max-w-screen-sm overflow-hidden shadow h-auto my-4">
            <img
              src={src}
              alt={`Tile ${index}`}
              className="w-full object-cover"
            />
          </div>
        </Link>
      ))}
    </div>    
  );
};
export default Image_Tiles;

