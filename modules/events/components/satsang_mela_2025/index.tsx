import Link from 'next/link';
import React from 'react';

const imageUrls = [
  
  
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1754189530/vvgc/images/2025/august/upakarma.jpg',
  
];


const ImageTileGrid = ({ images }:{images:string[]}) => {
  return (
    
    <div className="max-w-full lg:max-w-[575px] m-auto space-y-5">
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

