'use client'
import { IoMdLink } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ShareOnFacebook, shareOnTwitter, ShareOnWhatsApp, ShareOnInstagram } from './social-media';
import { CgClose } from "react-icons/cg";
import { useEffect } from "react";
const DialogForSharingLinks = ({ handleClick, completeURL, dialogue, diaRef, toggleDialog }: {
  handleClick: () => void,
  completeURL: string,
  dialogue: boolean,
  diaRef: React.MutableRefObject<HTMLDialogElement | null>,
  setDialog?: React.Dispatch<React.SetStateAction<boolean>>,
  toggleDialog: () => void;
}) => {
  // Remove BACKGROUND SCROLL WHEN DIALOG IS OPEN
  useEffect(() => {
    if (!document) {
      return
    }
    if (dialogue) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
  }, [dialogue])

  return <dialog ref={diaRef} id="dial"
    className={`z-10 w-full min-h-screen grid justify-center items-center overflow-y-hidden
      fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity
      ${dialogue ? " block " : "hidden "}`}>

    <div className={`p-1 font-roboto text-sm rounded-md shadow-md  
    min-h-60 min-w-64 max-w-sm top-auto bottom-auto mx-auto border-2 bg-slate-50
            flex flex-col gap-y-4   
        `}>
      <p className="font-playfair text-gray-900">Share this Event:</p>
      <div className='flex gap-2 items-center justify-center'>
        <button className='flex flex-col justify-center items-center text-blue-950 text-[0.7rem]' type="button"
          onClick={() => {
            ShareOnWhatsApp({ urlToShare: completeURL })
          }}> <FaWhatsapp size={28} /> Whatsapp</button>
        <button className='flex flex-col justify-center items-center text-blue-950 text-[0.7rem]' type="button" onClick={() => {
          ShareOnFacebook({ urlToShare: completeURL })
        }}> <FaFacebook size={28} /> facebook</button>
        <button className='flex flex-col justify-center items-center text-blue-950 text-[0.7rem]' type="button" onClick={() => {
          shareOnTwitter({ urlToShare: completeURL })
        }}> <FaXTwitter size={28} /> Twitter</button>
        <button className='flex flex-col justify-center items-center text-blue-950 text-[0.7rem]' type="button" onClick={() => {
          ShareOnInstagram({ urlToShare: completeURL })
        }}> <FaInstagram size={28} /> Instagram</button>
      </div>
      {/* ShareOnInstagram */}
      <button onClick={handleClick}>
        <input value={completeURL} readOnly className='overflow-hidden text-clip w-full p-1 text-[0.7rem] font-roboto text-gray-800 text-center active:bg-blue-200 focus:bg-blue-200 border-none outline-none' />
      </button>
      <button onClick={handleClick} className='inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit mx-auto px-2 py-2 rounded-md font-roboto text-[0.8rem] bg-gray-100 text-blue-800'>
        <IoMdLink size={24}/> <span>Copy Link</span></button>
    </div>
    <button className="top-2 right-2 text-white absolute" onClick={toggleDialog}><CgClose size={36} /></button>
  </dialog>
}

export default DialogForSharingLinks