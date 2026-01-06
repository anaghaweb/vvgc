import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

const MahaRudraYagnamSummaryLink = () => {
  const pongal = `https://vvgc.org/events/event_571`;
  const maharudra = `https://vvgc.org/events/event_661`;
  return (
    <div className="p-2 relative bg-yellow-50 bg-shiva bg-[bottom_-3rem_left_-2rem] bg-[180px_auto] bg-no-repeat w-full sm:w-80 m-2 rounded-sm shadow-sm font-sans"

    >
      {/* <div className="absolute left-0 bottom-0 bg-yellow-50 w-28">
        <img src="/images/home/maharudrayagnam/trishul_4.png" className="-z-10" alt="trishul" />
      </div> */}
      <p className="font-bold text-2xl text-center font-serif text-amber-950">Maha Rudra Yagnam</p>
      <p className="font-semibold  text-lg text-center text-fuchsia-950 underline underline-offset-8">April 18th, 2026</p>
      <div className="flex items-center">
        <div className="flex-1"></div>
        <Link href={maharudra} target="blank" className="flex items-center bg-yellow-100 p-1 mt-3">
          <p className=" p-1 font-bold  text-right text-lg text-blue-800 hover:cursor-pointer">Details </p><MdOpenInNew className="text-blue-800" />
        </Link>
      </div>
    </div>
  )
}

export default MahaRudraYagnamSummaryLink