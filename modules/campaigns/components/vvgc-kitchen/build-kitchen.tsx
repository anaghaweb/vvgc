import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Build_Kitchen = () => {
  const pdf_path = 'https://drive.google.com/file/d/1gtbiJ4EbBgqTh9PZluZV4Cu8VP3QoM81/view?usp=sharing';
  return (
    <div className='flex flex-col gap-6 w-full p-4'>
      
      <div className='text-center mx-auto'>
        <h3 className='font-bold font-playfair text-indigo-950'>VVGC Kitchen Completion</h3>
        <Link href={pdf_path} target="_blank" rel="noopener noreferrer">
          <Image
            src='/images/donations/kitchen/1.jpg'
            alt="Preview of brochure PDF"
            width={500}
            height={600}
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            quality={75}
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
          />
          <p className='font-bold text-blue-500 underline'>Click to view full details</p>
        </Link>
      </div>
    </div>
  )
}

export default Build_Kitchen