"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link2Icon, CheckIcon } from "@radix-ui/react-icons";
import { useToast } from "../ui/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const UrlShareButton = () => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  // const url = `${window.location.origin}${pathname}`;


  // const handleShare = async (e:React.SyntheticEvent) => {
  //   e.preventDefault()    
  //   try {
  //     await navigator.clipboard.writeText(url)
  //       setCopied(true);
  //       setTimeout(() => setCopied(false), 5000);      
  //   } catch (error) {
  //     console.log(error);
  //   }};

    // const copyToClipboard = () => {
    //   const textField = document.createElement('textarea');
    //   textField.innerText = url;
    //   document.body.appendChild(textField);
    //   textField.select();
    //   document.execCommand('copy');
    //   textField.remove();
    // };

    const copyToClipboard = (e:React.SyntheticEvent) => {
      e.preventDefault()
      setCopied(true);
      navigator.clipboard.writeText(window.location.toString()) 
      toast({variant:"default", title: "Url copied!" });  
      setTimeout(()=>{setCopied(false)},5000)         
    }

  const { toast } = useToast();   
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          onClick={copyToClipboard}
          className="rounded-full bg-green-400 hover:bg-green-300 border-[0.1rem]"
        >
         {copied ? <CheckIcon className="w-4 h-4"/> : <Link2Icon className="w-4 h-4" />} 
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-blue-900 text-white">
        <p>Share url link</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default UrlShareButton;
