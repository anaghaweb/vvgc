import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@modules/common/components/ui/popover";
import { SubscribeForm } from "./form";
const SubscribeToVVGCNewsLetter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="text-cyan-950 text-[12px] min-w-fit max-w-fit sm:text-base font-roboto text-sm md:text-base "
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
