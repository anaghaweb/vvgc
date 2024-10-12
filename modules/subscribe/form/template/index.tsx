"use client";
import { SubscribeMessage } from "../components/formattedResponse";
import { useFormState } from "react-dom";
import { NewsLetterSubscription } from "@modules/subscribe/form/components/initiateSubProcess";
import SubscribeSubmitButton from "../components/subscribeSubmitButton";

export function SubscribeForm() {
  const [message, formAction] = useFormState(NewsLetterSubscription, null);

  if (message) {

    return (
      <SubscribeMessage message={message.message} Success={message.Success} />
    );
  } else {
    return (
     
        <div className="flex flex-col items-center gap-2 bg-inherit w-full p-1 ">         
            {/* <FormLabel className="text-gray-200 tracking-tight font-thin font-roboto font-sm leading-5">Subscribe to our weekly Newsletter</FormLabel> */}
            <p className="leading-5 tracking-tighter from-neutral-800 text-sm">We will send a verification link to your email. Click the link and get subscribed.</p>
            <form className="flex flex-col gap-2 w-full" action={formAction}>
              {/* EMAIL */}
              <input
                required
                className={`w-full border bg-white rounded-md border-slate-300 text-sm shadow-sm placeholder-slate-400 
                  focus:outline-none focus:ring-1 focus:border-sky-600 focus-ring-sky-500 p-2
                  `}
                placeholder="Email Address"
                name="email"
                type="email"
              />
              <SubscribeSubmitButton />
            </form>
          
        </div>
      
    );
  }
}
