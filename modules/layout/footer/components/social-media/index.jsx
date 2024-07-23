import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const SocialMediaLinks = () => {
  return (
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
        <Link href={`https://www.instagram.com/vvgctemple/`}>
          <AiFillInstagram size={25} />
        </Link>
        <Link href={`https://www.facebook.com/vvgctemple`}>
          <FaFacebook size={23} />
        </Link>
      </div>
    </section>
  </div>
  )
}

export default SocialMediaLinks