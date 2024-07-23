import clsx from "clsx"
import React from "react"

const Divider = ({ className }: { className?: string }) => (
  <div className={clsx("h-px w-full border-b  mt-1", className)}/>    
  
)
export default Divider
