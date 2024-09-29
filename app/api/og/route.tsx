import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server' 
 
export const runtime = 'edge'
 
export async function GET(request: NextRequest) {
  // const interBlack = fs.readFileSync(
  //   path.join(process.cwd(), "public/fonts/inter/static/Inter_18pt-Black.ttf")
  // );

  try {
    const { searchParams } = new URL(request.url)
 
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Default title'
 
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'url("/images/about-us/hero/hero.jpg")',
            backgroundSize: '100% 100%',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            fontFamily: 'Inter',
            padding: '40px 80px',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              color: 'white',
              marginBottom: 24,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
          {/* <img
            width="203"
            height="44"
            src={`https://cruip-tutorials-next.vercel.app/author.png`}
          /> */}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // fonts: [
        //   {
        //     name: 'Inter',
        //     data: await interBlack,
        //     style: 'normal',
        //     weight: 800,
        //   },
        // ],        
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}