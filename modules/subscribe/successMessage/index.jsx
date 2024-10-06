import {Card, CardHeader, CardFooter, CardContent} from '@modules/common/components/ui/card'
import {FaCheckCircle} from "react-icons/fa";
import { Button } from '@modules/common/components/ui/button';
import Link from "next/link";

export function SubscribeSuccess(){
    return(
                  
            <div className="min-w-24 h-24 flex flex-col items-center justify-center text-blue-950 gap-4">
                <FaCheckCircle className="text-green-700 text-xl size-8 animate-bounce"/>
                <p>You are Subscribed!</p>
            </div>
            
           
    )
}