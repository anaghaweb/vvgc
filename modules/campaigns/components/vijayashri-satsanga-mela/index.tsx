import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import Divider from "@modules/common/components/divider";

const Vijayashri_Satsanga_Mela = ({ cdn_cloudinary_urls }: { cdn_cloudinary_urls: string[] }) => {

  const paypal_emailid = "Vijayashri.usa@gmail.com";
  const paypal_link = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${paypal_emailid}&currency_code=USD&item_name=Donation`


  return (
    <article className="flex flex-col gap-2 text-center text-gray-900">
      <div className="h-auto flex-1 flex flex-col gap-2 p-2 md:pl-4  track-tight text-sm lg:text-base w-full font-serif">
        <h2 className="text-2xl md:text-3xl font-serif text-indigo-950 text-center">
        🪔 A very happy Tamil new year to you all! 🪔
        </h2>
        <p className=" font-semibold text-rose-600 my-2 text-center">
          🪔🪔Radhekrishna 🪔🪔
        </p>
        <p>
          On the auspicious occasion of the Tamil new year , we are very happy to announce 
        </p>
        <Divider />
        <p className="font-semibold  font-serif md:text-xl lg:text-2xl  text-rose-600 mt-4"> Vijayashri Fine Arts USA’s Satsanga Mela 2025</p>
        <p className="mb-4 font-cormorant text-xl italic font-semibold text-center">
          Inviting all Gurus , Shishyas , Rasikas , Bhaktas & Vijayashrians for an immersive spiritual retreat with Guru Smt Vishaka Hariji 💐
        </p>
        <Divider />
        <p className=" mt-4">
          Registration is mandatory and  please use the following link to register by May 26 2025
        </p>
        <div className="flex justify-center w-full mb-4">
          <Link
            className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full   bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
                        py-2 px-4 my-1 mx-auto
                        text-xl text-indigo-800 hover:text-blue-900`}
            target='_blank'
            href="https://forms.gle/t627hTvAQFQ18MBy7">Register <FaExternalLinkAlt className="size-4" /></Link>
        </div>

        <p className="text-center">Please circulate the flyer and registration link to all who may be interested. </p>
        <p>🙏 All are welcome 🙏</p>
        <Divider />
        <p>
          We are a volunteer driven organization and donations are appreciated and welcome!
        </p>
        <p className='font-opensans'>
          Suggested donations of 51$ for a single registrant and 101$ for a family can be transferred to:
        </p>
        <div className="flex justify-center w-full">
          <Link
            className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full   bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
                        py-2 px-4 my-1 mx-auto
                        text-xl text-indigo-800 hover:text-blue-900`}
            target='_blank'
            href="https://www.venmo.com/u/VijayashriUSA">Venmo <FaExternalLinkAlt className="size-4" /></Link>
        </div>
        <div className="flex justify-center w-full">
          <Link
            className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full   bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
                        py-2 px-4 my-1 mx-auto
                        text-xl text-indigo-800 hover:text-blue-900`}
            target='_blank'
            href={paypal_link}>Paypal: {paypal_emailid}<FaExternalLinkAlt className="size-4" /></Link>
        </div>

      </div>

      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] flex flex-col my-2 md:my-4 lg:my-auto p-1">
        <Link className="" href={cdn_cloudinary_urls[3]} target="_blank">
          <Image src={cdn_cloudinary_urls[3]}
            alt="event"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
            className="object-contain cursor-pointer mx-auto sm:w-full"
            fill
          />
        </Link>
      </div>
    </article>
  )
}

export default Vijayashri_Satsanga_Mela