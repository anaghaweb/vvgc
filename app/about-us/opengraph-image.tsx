import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
// export const runtime = 'edge'
// Image metadata
export const alt = "About VVGC";

// export const size = {
//   width: 1200,
//   height: 630,
//    fonts: [
//         {
//           name: 'Inter',
//           data: interBlack,
//           style: 'normal',
//         },
//       ],
// }[
//]

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // const flyerImage = await fetch(new URL('./images/about-us/hero/hero.jpg', import.meta.url)).then(
  //     (res) => res.arrayBuffer()
  //   )
  const interBlack = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/inter/static/Inter_18pt-Black.ttf")
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections

      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Welcome to VVGC Hindu Temple</p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.

      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interBlack,
          style: "normal",
        },
      ],
    }
  );
}
