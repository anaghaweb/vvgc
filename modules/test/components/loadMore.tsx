
import { Button } from "@modules/common/components/ui/button";
import React from 'react'
import type { EventTypes } from "types/global";

const LoadMore = ({num, total, handleClick}:{handleClick:()=>void, num:number, total:number, searchParams:EventTypes}) => {
    
  return (
    <>
    <Button color="secondary" disabled={(num>=total) ? true: false}  
    onClick={handleClick}
    className="w-full md:max-w-44 mx-auto bg-indigo-800 text-white text-base"> View More </Button>    
    </>    
  )
}

export default LoadMore