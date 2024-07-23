import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SanMartin = () => {
  return (
    <>
    
  <section className="text-stone-300 flex flex-col col-span-1 text-sm ">
    <p className="font-bold text-base">VVGC San Martin</p>
    <div className="inline-flex gap-2 items-center">
      <FaPhoneAlt /> 4087596183
    </div>
    <div className="inline-flex gap-2 items-center">
      <IoMdMail /> info@vvgc.org
    </div>
    <p>11355, Monterey Hwy</p>
    <p>San Martin, CA 95046</p>
  </section>

  
  </>
  )
}

export default SanMartin   