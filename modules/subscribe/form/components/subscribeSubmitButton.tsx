import { Button } from "@modules/common/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
const SubscribeSubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <Button
      variant="secondary"
      type="submit"
      disabled={pending}
      className="bg-blue-600 hover:bg-blue-900 text-white min-w-full "
    >
      {pending ? <div className="size-6 bg-white customspinner"></div> : "Send Verification Link"}
    </Button>
  );
};

export default SubscribeSubmitButton;

/* HTML: <div class="loader"></div> */
