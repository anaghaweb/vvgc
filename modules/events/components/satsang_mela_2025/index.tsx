import Link from 'next/link';
import React from 'react';

const imageUrls = [
  
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1750440338/vvgc/images/2025/june/20/july01_8to9pm.jpg',
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1750440339/vvgc/images/2025/june/20/july1_2.jpg',
];


const ImageTileGrid = ({ images }:{images:string[]}) => {
  return (
    
    <div className="max-w-full lg:max-w-[512px] xl:max-w-[648px] mx-auto  space-y-5">
      {images.map((src, index) => (
        <Link href={src} key={index}>
          <div className="w-full overflow-hidden shadow h-auto my-4">
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

const Vijay_Satsang_Mela = () => <ImageTileGrid images={imageUrls}/>

export default Vijay_Satsang_Mela;

