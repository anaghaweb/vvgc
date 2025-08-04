export function Next_Video() {
  return (
    
<div className="w-screen flex justify-center py-8">
    <video className="w-full max-w-md" controls preload="none" 
     poster="images/og/varalakshmi_videoframe.png"    >
      <source src="https://cp30cky8vva110s1.public.blob.vercel-storage.com/varalakshmi_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
</div>    
  )
}