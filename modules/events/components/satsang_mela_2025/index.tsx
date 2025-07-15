import Link from 'next/link';
import React from 'react';

const imageUrls = [
  
  
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1752598948/vvgc/images/2025/July/14/vmy_1.png',
  `https://res.cloudinary.com/dixkqgqsi/image/upload/v1752598947/vvgc/images/2025/July/14/vmy_2.png`,
];


const ImageTileGrid = ({ images }:{images:string[]}) => {
  return (
    
    <div className="max-w-full lg:max-w-[384px] m-auto space-y-5">
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

