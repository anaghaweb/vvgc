
import React from 'react'
import ReactPlayer from 'react-player'

const React_Video_Player = ({vsrc}:{vsrc:string}) => {
  return (
    
    <div className='w-full md:max-w-96 mx-auto'>
      <ReactPlayer controls 
      src={vsrc} 
      width="100%"
       height={320}          
      />
    </div>
    
    
  )
}

export default React_Video_Player