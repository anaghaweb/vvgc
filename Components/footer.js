import { AiOutlineMenu, AiOutlineClose, AiFillHome, AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full max-w-screen grid gap-3 grid-cols-1 md:grid-cols-4 text-white bg-sky-950 h-[250px] items-center justify-center px-4">
            <section className='grid grid-cols-3 w-[200px] justify-evenly'>
                <Link href={`https://www.youtube.com/live/mAH6q0YPwso?si=nAC-_69uH-ndKIV2`}><AiOutlineYoutube size={25} /></Link>
                <Link href={`https://www.instagram.com/explore/tags/vvgcsanmartin/`}><AiOutlineInstagram size={25} /></Link>
                <Link href={`https://www.facebook.com/vvgctemple`}><AiOutlineFacebook size={25} /></Link>
            </section>
            <section className='text-white flex flex-col text-sm md:text-xl'>
                <p className='underline'>VVGC San Martin</p>
                <p>Phone: 4087596183</p>
                <p>Email: info@vvgc.org</p>
                <p>11355, Monterey Hwy,</p>
                <p>San Martin, CA 95046</p>
            </section>
            <section className='text-white flex flex-col text-sm md:text-xl'>
                <p className='underline'>VVGC San Hose</p>
                <p>Phone: 4082263600</p>
                <p>Email: info@vvgc.org</p>
                <p>32, Rancho Drive</p>
                <p>San Jose CA 95111</p>
            </section>
            <section >

                <form action="" method="get"
                    className='flex flex-col justify-center items-center w-[200px]'>
                    <label htmlFor="">Subscribe to mailing list</label>
                    <input className='w-full m-1 h-8' type="email" name="" id="" placeholder='email id' />
                    <button className='w-full m-1 h-8 shadow-md bg-blue-500 text-center hover:bg-blue-600' type="button">Subscribe</button>
                </form>

            </section>
        </footer>
    )
}