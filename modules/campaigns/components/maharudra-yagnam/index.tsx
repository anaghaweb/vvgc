import React from 'react'

const MahaRudraYagnaVideo = () => {
  const url="https://res.cloudinary.com/dixkqgqsi/video/upload/v1745568356/VVGC%20Events/Maharudra_Yagnam_20250426__wo.mp4";
  return (

    <video  
      width="300" height="240"
      controls      
    >
      <source src={url} type="video/mp4"/>  
      Watch This
    </video>
  )
}

export default MahaRudraYagnaVideo