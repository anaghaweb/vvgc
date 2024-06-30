import {Card, CardHeader, CardFooter, CardContent} from '@components/ui/card'
import {FaCheckCircle} from "react-icons/fa";
import {Button} from '@components/ui/button'
import Link from "next/link";

export function SuccessfulSubmit(){
    return(
        <Card className="min-w-80 h-80">
            <CardHeader>
            <p className="text-2xl text-blue-500">Feedback Received!</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <FaCheckCircle className="text-green-700 text-xl size-12"/>
                <p>Thankyou for submitting your feedback!</p>

            </CardContent>
            <Button className="flex mx-auto p-6 my-1 items-center text-white bg-green-700"><Link href="/"> Return to VVGC homepage</Link></Button>
            </Card>
    )
}