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
      <div className='text-xl bg-white w-full h-full flex justify-center items-center gap-y-2 p-2 font-inter font-semibold'>
        <h1 className='text-2xl font-inter font-bold'>About VVGC</h1>
        <h2 className='text-xl font-inter font-semibold max-w-96'>
            Our Mission
        </h2>
        <h3 className='text-xl font-inter max-w-96'>
        The Mission of Vaidica Vidhya Ganapathi Center (VVGC), a Sanatana Dharma Temple, is to provide a place for worship, educational and cultural services to the bay area community.
        </h3>
        <img src={"/images/about-us/hero/hero.jpg"} height="100" alt = 'About VVGC' />
        <div className='flex flex-row gap-2'>
            <p>
                Visit us at: 
            </p>
            <a href="https://vvgc.org" target='_break' className="underline text-blue-800">vvgc.org</a>
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