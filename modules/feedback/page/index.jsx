import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@modules/common/components/ui/popover";
import { FeedbackForm } from "../components/feedback";
const FeedbackByDevotees = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="text-cyan-950 text-[12px] min-w-fit max-w-fit sm:text-base font-roboto text-sm md:text-base "
        >
          Feedback{" "}
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-gray-100">
        <FeedbackForm />
      </PopoverContent>
    </Popover>
  );
};

export default FeedbackByDevotees;
