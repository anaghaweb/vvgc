import React from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const VerifyEmailPageView = ({ response }: { response: {Success:boolean, message:string} }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      
        {response.Success ? 
        (
          <div className="grid grid-cols-1 text-center rounded-md  gap-2 text-slate-700 leading-5 tracking-tight p-4 ring-2 ring-green-700">
        <FaCheckCircle className="text-green-700 text-xl size-8 mx-auto" />
        <p className="font-bold text-xl font-roboto text-sky-900">Thankyou for subscribing.</p>
        <p className="font-roboto font-semibold">You will receive weekly newsletter containing details of upcoming events</p>
        <p className="font-roboto font-semibold">You can close this window and go back to browsing.</p>
        </div>
      ) : (
          <div className="grid grid-cols-1 text-center rounded-md  gap-2 text-slate-700 leading-5 tracking-tight p-4 ring-2 ring-rose-700">
        <BsExclamationTriangleFill className="size-8 text-rose-700 mx-auto" />
        <p className="font-roboto font-semibold text-rose-700">{response.message}</p>
        <p className="font-roboto font-semibold">Please try again</p>
        </div>
      )
        }
     
    </div>
  );
};

export default VerifyEmailPageView;
