import React from 'react'
import { 
    Popover,
    PopoverContent,
  PopoverTrigger,
 } from '@modules/common/components/ui/popover'
const SubscribeToVVGC = () => {
  return (
    <Popover>
  <PopoverTrigger asChild>
  <div className="text-cyan-950 text-[12px] sm:text-base font-roboto 
        text-sm md:text-base ">Subscribe </div>
  </PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
  )
}

export default SubscribeToVVGC