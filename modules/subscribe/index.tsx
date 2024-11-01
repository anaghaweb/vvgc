import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@modules/common/components/ui/popover";
import { SubscribeForm } from "./form/template";
const SubscribeToVVGCNewsLetter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button title="Subscribe to Newsletter!"
          className="text-slate-800 hover:text-blue-800 text-[12px] min-w-fit max-w-fit font-roboto text-sm md:text-base "
        >
          Subscribe{" "}
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-gray-100">
        <SubscribeForm />
      </PopoverContent>
    </Popover>
  );
};

export default SubscribeToVVGCNewsLetter;
