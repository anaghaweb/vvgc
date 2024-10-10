'use client'
import React, { Fragment } from 'react'
import {useFormState, useFormStatus } from 'react-dom';
import { NewsLetterSubscription } from "../server-actions/initiateSubProcess";

const PageView = () => {
    const [message, formAction] = useFormState(NewsLetterSubscription, null);
    console.log(message);
    return (
      <Fragment>
        <div className=" w-48 h-auto my-4 mx-auto bg-green-200">
          <form className="grid grid-cols-1 my-auto justify-items-center p-2 gap-y-4"
          action={formAction}
          >
            <input type="email" name="email" placeholder="Email Address" />
            < SubmitButton />
          </form>
        </div>
        {message?.Success ? (
          <div className="flex flex-col gap-2 w-48 h-52 p-4 my-4 mx-auto text-blue-700 bg-amber-200 animate-in text-center place-content-center">
            <div className="size-30 p-1 border-[1px]  hover:text-blue-900 border-black">
             {message.Success && message.message.toLocaleString()}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-48 h-52 p-4 my-4 mx-auto text-blue-700 bg-amber-200 animate-in text-center place-content-center">
          <div className="size-30 p-1 border-[1px]  hover:text-blue-900 border-black">
         {!message?.Success && message?.message?.toLocaleString()}
          </div>
        </div>
        )}
      </Fragment>
    );
}

const SubmitButton = () => {
  const {pending, data, method, action} = useFormStatus();
  return  <button type="submit" disabled={pending} className=" text-white py-2 px-4 ring-1 rounded-md bg-indigo-500">
   {pending ?
   "Processing..."
   :"Subscribe"}  
</button>
}
export default PageView 