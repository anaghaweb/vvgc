import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SanJose = () => {
  return (
    <section className="text-stone-300 flex flex-col col-span-1 text-sm font-sans">
    <p className="font-bold text-base">VVGC San Jose</p>
    <div className="inline-flex gap-2 items-center">
      <FaPhoneAlt /> 4082263600
    </div>
    <div className="inline-flex gap-2 items-center">
      <IoMdMail /> info@vvgc.org
    </div>

    <p>32, Rancho Drive</p>
    <p>San Jose CA 95111</p>
  </section>
  )
}

export default SanJose