import Link from 'next/link';
import React from 'react';

const imageUrls = [
  
  
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1751992707/vvgc/images/2025/July/08/bhagwati_jagran.jpg',
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1751856122/vvgc/images/2025/July/07/hanuman_chalisa_chanting.jpg',
  `https://res.cloudinary.com/dixkqgqsi/image/upload/v1749753566/vvgc/images/2025/june/23/ekadasha_vara_sri_rudrabhisheka.jpg`,
];


const Grid_Component = ({ images }:{images:string[]}) => {
  return (
    
    <div className="max-w-full 
    flex flex-col lg:flex-row flex-wrap
    mx-auto justify-evenly gap-5">
      {images.map((src, index) => (
        <Link href={src} key={index}>
          <div className="w-full lg:w-96 overflow-hidden shadow h-auto my-4">
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

const Image_Grid = () => <Grid_Component images={imageUrls}/>

export default Image_Grid;

