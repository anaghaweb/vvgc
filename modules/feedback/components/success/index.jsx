import {Card, CardHeader, CardFooter, CardContent} from '@modules/common/components/ui/card'
import {FaCheckCircle} from "react-icons/fa";
import {Button} from '@modules/common/components/ui/button'
import Link from "next/link";

export function SuccessfulSubmit(){
    return(
       
            
            <div className="flex flex-col items-center justify-center gap-4 text-sm  text-center">
                <FaCheckCircle className="text-green-700 text-xl size-12"/>
                <p>Thankyou for submitting your feedback!</p>

            </div>
           
           
    )
}