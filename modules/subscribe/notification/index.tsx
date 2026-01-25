"use client";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import { debounce } from "@lib/hooks/debounce";
import { IoClose } from "react-icons/io5";

export const SubscribeToast = () => {
  const debouncedCustomToast = debounce(() => {
    toast.custom(
      (t) => (
        <div
          className={`mt-12 p-3 text-black h-20 w-84 flex flex-shrink-0 items-start
        gap-4 text-sm text-left font-roboto rounded-md shadow-md tracking-tighter leading-5
        bg-gradient-to-r  from-blue-200 to-purple-300
        `}
        >
          <p className="items-center align-baseline">
            Get the latest event details in your inbox! <br />
            click{" "}
            <span className="font-bold text-red-900">
              {" "}
              &apos;SUBSCRIBE&apos;{" "}
            </span>
            in the menu to sign up for our{" "}
            <span className="font-semibold font-cyan-700">
              {" "}
              Weekly Newsletter
            </span>
          </p>
          <button
            onClick={() => toast.dismiss(t)}
            className=" text-xl flex items-center justify-center size-5 font-bold text-black"
          >
            <IoClose />
          </button>
        </div>
      ),
      {
        position: "bottom-right",
        duration: 10000,
      }
    );
  }, 2000);
  useEffect(() => {
    const hasShownToast = window.sessionStorage.getItem("subscribe-toast");
    if (!hasShownToast) {
      window.sessionStorage.setItem("subscribe-toast", "true");
      console.log("setting toast session storage item");
      debouncedCustomToast();
    }
  }, []);
  return <Toaster expand={false} richColors />;
};
