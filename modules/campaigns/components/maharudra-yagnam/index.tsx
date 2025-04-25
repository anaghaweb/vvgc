import React from 'react'

const MahaRudraYagnaVideo = () => {
  const url="https://res.cloudinary.com/dixkqgqsi/video/upload/v1745568356/VVGC%20Events/Maharudra_Yagnam_20250426__wo.mp4";
  return (

    <video  
      controls
      className='mx-auto sm:w-80 md:w-96 lg:w-[400px]'      
    >
      <source src={url} type="video/mp4"/>  
      Watch This
    </video>
  )
}

export default MahaRudraYagnaVideo