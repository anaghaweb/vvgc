'use client'
import React from 'react'

// import {FaShareAlt} from "react-icons/fa";
import { IoMdShare } from 'react-icons/io';
// import { FcCalendar } from "react-icons/fc";
import { useState, useEffect, useRef } from 'react';
import copyToClipboard from './clipboard';
import DialogForSharingLinks from './dialog';
import CopiedLinkToaster from './toast';

const Share = ({ id }: { id: string }) => {
  
  const completeURL = `https://vvgc.org/events/${id}`;
  
  const [dialogue, setDialog] = useState(false);
  
    const handleClick = async () => {    
    await copyToClipboard({ completeURL });
    CopiedLinkToaster();
  }
  const diaRef = useRef<HTMLDialogElement | null>(null);

  useEffect(()=>{
   const handleClickAway = (e:MouseEvent) => {
      if(diaRef.current && !diaRef.current.contains(e.target as Node))
      {
        setDialog(false);
      }}
      const handleEscape=(e:KeyboardEventInit)=>{
        if(diaRef.current  && e.key === "Escape" ){
          setDialog(false);
        }
      }
   if(!window){
    return
  }    
    //window.addEventListener("mousedown", handleClickAway);
    window.addEventListener("mouseup", handleClickAway);
   window.addEventListener("keydown",handleEscape );
   return ()=>{  
      //window.removeEventListener("mousedown", handleClickAway);
      window.removeEventListener("mouseup", handleClickAway);
      window.removeEventListener("keydown",handleEscape );
  }     
  },[diaRef])
  const toggleDialog = () => {
    setDialog(state=>!state)
  }

  return (    
     
        <div className='inline-flex relative items-center justify-center p-2 gap-2'>
          <p >Share </p>
          <button 
        className="size-8 bg-gradient-to-r from-purple-700 via-fuchsia-800 backdrop-filter to-violet-800 backdrop-brightness-50 rounded-full flex justify-center items-center"
        onClick={toggleDialog}         
          > <IoMdShare size={18} className='text-white mx-auto font-semibold'/>
          </button>
           
            <DialogForSharingLinks
            handleClick={handleClick}
            completeURL={completeURL} 
            dialogue={dialogue} 
            diaRef={diaRef}
            toggleDialog={toggleDialog} />
        </div>       
    
  )
}
export default Share


