import { ImageResponse } from "next/og"; 
export const alt = "it is not working";
export const contentType = "image/png";
export const runtime = "edge";

export default function OpenGraphImage(){
    const URL = process.env.NODE_ENV === "test" ? "https://vvgc-test.vercel.app/" : 
    process.env.NODE_ENV === "production" ? "https://vvgc.org/" : 
    process.env.NODE_ENV === "development" && "http://192.168.0.101:3000";
    
    return new ImageResponse (
       <div style={{
        backgroundImage: `url(${URL}/images/og/hsbanner.jpg)`,         
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",}}>
       "Opengraph"
        </div>,
        {
            width:1200,
            height:630
        }

    )
}