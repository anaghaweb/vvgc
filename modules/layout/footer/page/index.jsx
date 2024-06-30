import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { SubscribeForm } from "@modules/submit-form/components/subscribe";
import { FaFacebook, FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { IoLogoYoutube, IoMdMail } from "react-icons/io";
import { Separator } from "@modules/common/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full max-w-full grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-5  bg-sky-950 max-h-full h-auto items-center justify-center px-4 py-4">
      <section className="text-stone-300 flex flex-col col-span-full text-sm ">
        <p className="font-bold text-base">Temple Timings</p>
        <p>Weekdays:</p>
        <p>10:00AM to 12:00PM</p>
        <p>6:00PM to 8:00PM</p>
        <p>Weekends & Holidays</p>
        <p>10:00AM to 8:00PM</p>
        <p>Temple might be open for longer duration during special events.</p>
      </section>
      <Separator className=" bg-slate-600 col-span-full my-2" />

      <div className="text-stone-300 flex flex-col col-span-full text-base font-bold">
        Our Locations
      </div>
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

      <Separator className=" bg-slate-600 col-span-full " />
      <section className="col-span-full gap-6">
      <div className="col-span-full inline-flex w-full justify-center items-center text-stone-300 my-2 ">
          <FaRegCopyright />
          <span>Copyright VVGC</span>{" "}
        </div>
        <div className="flex flex-col  justify-start items-center md:flex-row md:justify-between">
        

        <section  className="flex flex-col col-span-full items-center bg-blue-300 my-5">
          
            <SubscribeForm />
          
        </section>

        <div className="flex justify-start md:justify-end items-start">
          <section className="flex flex-col w-44  ">
            <p className="text-stone-300 font-bold text-base text-center">
              Social Media
            </p>
            <div className="flex  text-stone-300 items-center justify-center gap-3">
              <Link
                href={`https://www.youtube.com/@vaidicavidhyaganapathicent2187`}
              >
                <IoLogoYoutube size={25} />
              </Link>
              <Link
                href={`https://www.instagram.com/vvgctemple/`}
              >
                <AiFillInstagram size={25} />
              </Link>
              <Link href={`https://www.facebook.com/vvgctemple`}>
                <FaFacebook size={23} />
              </Link>
            </div>
          </section>
        </div>
        </div>
      </section>
    </footer>
  );
}
