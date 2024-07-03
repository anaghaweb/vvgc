import clsx from "clsx"
import React from "react"

const Seperator = ({ className }: { className?: string }) => (
  <div className={clsx("h-px w-full border-b border-gray-200 mt-1", className)}/>    
  
)
export default Seperator
