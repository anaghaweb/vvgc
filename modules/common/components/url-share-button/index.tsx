'use client'

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Link2Icon } from '@radix-ui/react-icons';
import { useToast } from '../ui/use-toast';
import { Tooltip, TooltipContent, TooltipTrigger, } from '../ui/tooltip';

const UrlShareButton = () => {
  
  const [copied, setCopied] = useState(false);
    const pathname = usePathname();
  const handleShare = async () => {

    const url = `${window.location.origin}${pathname}`;      
    try{
      await navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }catch(error){
      console.log(error)
    }}
  
    const {toast} = useToast()
    {copied && toast({title:"Url copied!"})                  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
    <Button size="icon" variant="outline"  onClick={handleShare} className="rounded-full bg-green-400 hover:bg-green-300 border-[0.1rem]">
        <Link2Icon className='w-4 h-4' />
    </Button>
    </TooltipTrigger>
    <TooltipContent className="bg-blue-900 text-white">
      <p>Share this link</p>
    </TooltipContent>
    </Tooltip>
  );
};

export default UrlShareButton;
