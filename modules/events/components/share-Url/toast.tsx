import React from 'react'
// import { IoClose } from 'react-icons/io5';
import { Toaster, toast } from 'sonner';

const CopiedLinkToaster = () => {
   
        toast.info("Link Copied!",{
         position: "top-right",          
         duration: 3000,
       })       

  return (
    <Toaster richColors/>
  )
}

export default CopiedLinkToaster