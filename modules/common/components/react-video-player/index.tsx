
import React from 'react'
import ReactPlayer from 'react-player'

const React_Video_Player = () => {
  return (
    
    <div className='w-full md:max-w-96 mx-auto'>
      <ReactPlayer controls 
      src='https://youtube.com/shorts/R4S0e6DoZRc?si=-Gd46Eb-Bki6HtcN' 
      width="100%"
       height={320}          
      />
    </div>
    
    
  )
}

export default React_Video_Player