import Image from "next/image";
import { Card } from "@modules/common/components/ui/card";

export default function ZellePayment() {
  return (
    <Card className="p-4 w-fit flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-10 bg-purple-800">
          <Image
            alt="zelle logo"
            src="/icons/zelle.png"
            className="object-contain"
            fill
          />
        </div>
        <h2 className="text-xl font-semibold ">Zelle Payments</h2>
      </div>

      <div>
        <p className="text-gray-700">You can send donations via Zelle to:</p>
        <p className="mt-2 text-lg font-bold text-purple-700">
          Phone Number: <span className="ml-1">9252097637</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          (Please include your name and purpose in the notes while sending)
        </p>
      </div>
    </Card>
  );
}
