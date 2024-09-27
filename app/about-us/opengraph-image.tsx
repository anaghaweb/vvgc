import { ImageResponse } from 'next/og'
export const runtime = 'edge' 
// Image metadata
export const alt = 'About VVGC'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

// Image generation
export default async function Image() {
    // const flyerImage = await fetch(new URL('./images/about-us/hero/hero.jpg', import.meta.url)).then(
    //     (res) => res.arrayBuffer()
    //   )

    
  return new ImageResponse(
    (
      // ImageResponse JSX element
     // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections

 <div tw='text-xl bg-white w-full h-full flex flex-col justify-center items-center p-2 font-inter font-semibold'>
 
 <h1 tw='text-2xl font-inter font-bold'>About VVGC</h1>
        
        <h3 tw='text-xl font-inter my-1 max-w-[768px] text-center'>
        The Mission of Vaidica Vidhya Ganapathi Center (VVGC), a Sanatana Dharma Temple, is to provide a place for worship, educational and cultural services to the bay area community.
        </h3>       
        
        <div tw='flex flex-row gap-2 items-center'>
            <p>
                Visit us at: 
            </p>
            <a href="https://vvgc.org" target='_break' tw="underline text-blue-800"> vvgc.org</a>
        </div>
        <div tw="flex">
        <img src={"/images/about-us/hero/hero.jpg"} height="400" width="100%" alt = 'About VVGC'/>
        </div>
        
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}