import {FaCheckCircle} from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";

export function SubscribeMessage({message,Success}:{message:string, Success:boolean}){
    return(
                  
            <div className="min-w-24 h-24 flex flex-col items-center justify-center text-blue-950 gap-4">
              {
                Success ?<FaCheckCircle className="text-blue-700 text-xl size-8"/>
                :
                <BsExclamationTriangleFill className="size-8 text-rose-700"/>
              }  
                <p className="leading-5 tracking-tighter font-semibold font-roboto from-neutral-800 text-center">{message}</p>
            </div>
            
           
    )
}