import { vvgc_priest_contacts } from "@lib/data/priest-contacts";
import { Card } from "@modules/common/components/ui/card";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Fragment } from "react";
const Priests_Contacts = () => {
  return (
    <Fragment>
      <section className='flex flex-wrap gap-4 w-full justify-center items-center md:max-w-screen-md mx-auto my-8'>
        {
          vvgc_priest_contacts.map((elem, index) => {
            return <Card key={index} className="flex flex-col items-center justify-center p-4 bg-sky-950  w-72 md:w-80 h-28">
              <p className="font-sans font-semibold text-white">{elem.name}</p >
              <div className="text-blue-500 font-bold inline-flex items-center gap-1">
                <FaPhoneSquareAlt size={18} />
                <a href={`tel:${elem.phone}`} > {elem.phone}</a></div>
            </Card>
          })
        }
      </section>
      <section className='flex flex-wrap gap-4 w-full justify-center items-center md:max-w-screen-md mx-auto my-8'>
        <Card className="flex flex-col items-center justify-center p-4 bg-sky-950  w-72 md:w-96 h-28 gap-2">
          <p className="font-sans font-semibold text-white text-center">For any spiritual inquiries or to connect with a priest, kindly send us an email.</p >
          <div className="text-blue-500 font-bold inline-flex place-items-center gap-1">
            <IoMdMail size={20} />
            <a href={`mailto:priests@vvgc.org`} >priests@vvgc.org </a></div>
        </Card>
      </section>
    </Fragment>
  )
}

export default Priests_Contacts