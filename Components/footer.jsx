import { AiOutlineMenu, AiOutlineClose, AiFillHome, AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full max-w-full grid gap-2 grid-cols-1 md:grid-cols-5 text-white bg-sky-950 h-auto md:h-[275px] items-center justify-center px-4 py-4">
            <section className='grid grid-cols-3 lg:w-[200px] md:w-[150px] w-full'>
                <Link href={`https://www.youtube.com/live/mAH6q0YPwso?si=nAC-_69uH-ndKIV2`}><AiOutlineYoutube size={25} /></Link>
                <Link href={`https://www.instagram.com/explore/tags/vvgcsanmartin/`}><AiOutlineInstagram size={25} /></Link>
                <Link href={`https://www.facebook.com/vvgctemple`}><AiOutlineFacebook size={25} /></Link>
            </section>

            <section className='text-white flex flex-col text-sm md:text-base'>
                <p className='underline'>VVGC San Martin</p>
                <p>Phone: 4087596183</p>
                <p>Email: info@vvgc.org</p>
                <p>11355, Monterey Hwy,</p>
                <p>San Martin, CA 95046</p>
            </section>

            <section className='text-white flex flex-col text-sm md:text-base'>
                <p className='underline'>VVGC San Jose</p>
                <p>Phone: 4082263600</p>
                <p>Email: info@vvgc.org</p>
                <p>32, Rancho Drive</p>
                <p>San Jose CA 95111</p>
            </section>

            <section className='text-white flex flex-col text-sm md:text-base'>
                <p className='underline'>Temple Timings</p>
                <p>Weekdays:</p>
                <p>10:00AM to 12:00PM</p>
                <p>6:00PM to 8:00PM</p>
                <p>Weekends & Holidays</p>
                <p>10:00AM to 8:00PM</p>
                <p>Temple might be open for longer duration during special events.</p>
            </section>


            <section >

                <div
                    className='flex flex-col justify-center items-center lg:w-[200px]'>
                    <h1 htmlFor="">Subscribe to mailing list</h1>
                    <input className='w-full m-1 h-8' type="email" name="" id="" placeholder='email id' />
                    <button className='w-full m-1 h-8 shadow-md bg-blue-500 text-center text-sm md:text-base hover:bg-blue-600' type="button">Subscribe</button>
                </div>

            </section>
        </footer>
    )
}