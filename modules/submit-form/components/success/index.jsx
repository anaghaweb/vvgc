import {Card, CardHeader, CardFooter, CardContent} from '@modules/common/components/ui/card'
import {FaCheckCircle} from "react-icons/fa";
import { Button } from '@modules/common/components/ui/button';
import Link from "next/link";

export function SubscribeSuccess(){
    return(
        <Card className="min-w-24 h-24">
           
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <FaCheckCircle className="text-green-700 text-xl size-8"/>
                <p>You are Subscribed!</p>
            </CardContent>
            
            </Card>
    )
}