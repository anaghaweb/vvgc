import { ImageResponse } from "next/og"; 
export const alt = "it is not working";
export const contentType = "image/png";
export const runtime = "edge";

export default function OpenGraphImage(){
    
    return new ImageResponse (
       <div style={{
        backgroundImage: `url("${process.env.BASE_URL}/images/og/hsbanner.jpg")`,         
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",}}>
        <p style={{color:'white', fontFamily:'inherit', fontSize:'2rem'}}>vvgc</p>
        </div>,
        {
            width:1200,
            height:630
        }

    )
}