import React, { Fragment } from "react";
import Link from "next/link";
import watchLiveOnSocial from "@lib/data/liveMediaLinks";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@modules/common/components/ui/card";
import { Button } from "@modules/common/components/ui/button";

const MediaCard = () => {
  return (
    <Fragment>
      <Card className="m-1">
        <div className="text-xl pl-2 text-sky-950">Watch events live:</div>

       
          <div className="flex pl-2 gap-4 my-2 items-center">
            {watchLiveOnSocial.map((media, index) => {
              return (
                <div key={index} className="flex gap-1 items-center justify-start">             
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-500 w-10 h-10 md:w-12 md:h-12 border-[1px]"
                  >
                    <Link href={media.url} target="_blank">
                      {media.icon}
                    </Link>
                    
                  </Button>
                  {media.title === "Zoom" && (
                    <div className="flex flex-col text-left text-[12px] md:text-sm font-roboto">
                      <p className="underline">zoom login:</p>
                      <p><span className="text-blue-950 font-semibold">Meeting-id:</span> {media.userid}</p>
                      <p><span className="text-blue-950 font-semibold">Password:</span> {media.password}</p>
                    </div>
                  )}                  
                  </div>
                
              );
            })}
         </div>
        
      </Card>
    </Fragment>
  );
};

export default MediaCard;
