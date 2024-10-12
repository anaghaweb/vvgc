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
          className="text-slate-800 hover:text-blue-800 text-[12px] min-w-fit max-w-fit font-roboto text-sm md:text-base "
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
