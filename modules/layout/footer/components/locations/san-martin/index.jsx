import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SanMartin = () => {
  return (
    <>
      <section className="text-stone-300 flex flex-col text-sm font-sans gap-2 ">
        <p className="font-bold text-xl">VVGC San Martin</p>
        
        <div className="text-blue-300 font-bold inline-flex place-items-center gap-1">
              <FaPhoneAlt /> <a href="tel:4087596183">4087596183</a> 
            </div>
        <div className="flex flex-col gap-2">
          <div className="text-blue-300 font-bold inline-flex place-items-center gap-1">
            <IoMdMail size={20} />
            <a href={`mailto:info@vvgc.org`}>info@vvgc.org </a>
          </div>
         
        </div>
        <div>
          <p>11355, Monterey Hwy</p>
          <p>San Martin, CA 95046</p>
        </div>
        <section className="text-stone-300 flex flex-col text-sm gap-2">
          <p className="font-bold text-base">Temple Timings:</p>
          <div>
            <p className="underline">Weekdays:</p>
            <p> 10:00AM to 12:00PM</p>
            <p> 6:00PM to 8:00PM</p>
          </div>
          <div>
            <p className="underline">Weekends & Holidays</p>
            <p> 10:00AM to 8:00PM</p>
          </div>
        </section>
        
      </section>
    </>
  );
};

export default SanMartin;
