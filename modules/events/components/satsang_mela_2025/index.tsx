import Link from 'next/link';
import React from 'react';

const imageUrls = [
  
  
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1751856122/vvgc/images/2025/July/07/hanuman_chalisa_chanting.jpg',
  `https://res.cloudinary.com/dixkqgqsi/image/upload/v1749753566/vvgc/images/2025/june/23/ekadasha_vara_sri_rudrabhisheka.jpg`,
];


const ImageTileGrid = ({ images }:{images:string[]}) => {
  return (
    
    <div className="max-w-full lg:max-w-[400px] xl:max-w-[512px] mx-auto  space-y-5">
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

