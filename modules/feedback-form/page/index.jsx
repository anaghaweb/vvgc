import { Button } from '@modules/common/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@modules/common/components/ui/card'
import Link from 'next/link'
import React, {Fragment} from 'react'

const FeedBackFormPageLink = () => {
  return (
    <Fragment>
         <Card className={`w-[100%] h-auto mb-4 p-1 md:p-1`}>
              <CardHeader className="text-2xl md:text-4xl font-cormorant text-sky-900">
                Feedback
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="text-sm md:text-base ">
                  Please consider sharing a few words about your recent
                  experiences. Your feedback plays a crucial role in shaping the
                  services we provide.{" "}
                </div>
                <div className="text-sm md:text-base ">
                  Thank you for being an integral part of our temple community
                </div>
                <div className="text-sm md:text-base ">
                  Click to provide feedback
                </div>
              </CardContent>
              <CardFooter>
                <Button className="flex w-full sm:w-44 mx-auto p-6 my-1 items-center text-white bg-green-700">
                  <Link href={"/feedback"}> Feedback</Link>
                </Button>
              </CardFooter>
            </Card>
    </Fragment>
  )
}

export default FeedBackFormPageLink