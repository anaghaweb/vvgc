import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SanJose = () => {
  return (
    <section className="text-stone-300 flex flex-col text-sm font-sans gap-2">
      <p className="font-bold text-xl">VVGC San Jose</p>
      <div className="text-blue-300 font-bold inline-flex place-items-center gap-1">
        <FaPhoneAlt /> <a href="tel:4082263600">4082263600</a>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-blue-300 font-bold inline-flex place-items-center gap-1">
          <IoMdMail size={20} />
          <a href={`mailto:info@vvgc.org`}>info@vvgc.org </a>
        </div>
      
      </div>
      <div>
        <p>32, Rancho Drive</p>
        <p>San Jose CA 95111</p>
      </div>
      <section className="text-stone-300 flex flex-col text-sm gap-2">
        <p className="font-bold text-base">Temple Timings:</p>
        <div>
          <p className="underline">Monday - Thursday:</p>
          <p> 10:00 AM - 12:00 noon</p>
          <p> 6:00 PM - 8:00 PM</p>
        </div>
        <div>
          <p className="underline">Friday</p>
          <p> 8:00 AM - 10:00 AM</p>
          <p> 5:00 PM - 8:00 PM</p>
        </div>
        <div>
          <p className="underline">Saturday & Sunday</p>
          <p> 10:00 AM - 1:00 PM</p>
          <p> 4:00 PM - 8:00 PM </p>
        </div>
      </section>
    </section>
  );
};

export default SanJose;
