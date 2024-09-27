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

  <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Welcome to VVGC Hindu Temple
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