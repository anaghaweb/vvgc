import { ImageResponse } from "next/og"; 
export const alt = "it is not working";
export const contentType = "image/png";
export const runtime = "edge";
export const dynamic = "force-dynamic";
const size = {
    width: 1200,
    height: 630,
  };

export default async function Image({params}:{params:{id:string}}){
    const ID = params.id;
    return new ImageResponse (
       <div style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",}}>
        <p>{ID} no. is OpenGraph-Image Card</p>
        </div>,
        {
            ...size
        }

    )
}