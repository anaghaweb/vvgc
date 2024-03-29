'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillHome, AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { Cormorant } from 'next/font/google';
import { Button } from "./ui/button";


const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: 'serif' });

// Navigation bar Item list
const navLinks = [
  {
    name: 'Home',
    link: '/'
  },

  {
    name: 'Events',
    link: '/events/special'
  },
  {
    name: 'Pooja Services',
    link: '/pooja-services'
  },
  {
    name: 'Prasadam Services',
    link: '/prasadam-services'
  },
  {
    name: 'Priests',
    link: '/priests'
  },

  {
    name: 'About Us',
    link: '/about-us'
  },

  {
    name: 'San Jose Temple',
    link: '/san-jose-temple'
  },
  {
    name:'Goshala',
    link: '/goshala'
  }

];



export default function Header() {

  //state to manage hamburger menu open & close icons
  const [menuIcon, setMenuIcon] = useState(false);
  function smallScreenNavigation() {
    setMenuIcon(!menuIcon);
  }

  const pathname = usePathname();

  return (
    <header className={`flex flex-col w-full h-44 md:h-40 bg-[#FF9933] min-w-full ${cormorant.variable}`}>
      <nav
        className="justify-between md:min-w-fit lg:w-full h-14 flex lg:justify-center items-center"
      >
        <ul className=" text-base list-none hidden w-full h-full lg:flex lg:justify-center  xl:text-xl font-normal font-cormorant
        text-[#000033]">

          {/* Large to medium scree navigation bar */}
          {/* {navLinks.map(({ name, link }) => {
            return (
              <li key={name} className={
                `${pathname === link ?
                  'p-2 md:text-[12px] lg:text-xl m-[4px] text-center border-b-2 border-indigo-950 hover:border-b-transparent'
                  : 
                  'p-2 text-center m-[4px]'}                 
                  hover:border-b-2  hover:border-b-black`} >
                <Link href={link}>{name}</Link></li>
            )
          })} */}
          {navLinks.map(({ name, link }) => {
            return (
              <li key={name} className={
  pathname === link ?
    
    'p-2 md:text-[12px] lg:text-xl m-[4px] text-center border-b-2 border-indigo-950 hover:border-b-transparent' : 
    (name === 'Maharudram') ? 'p-2 bg-red-500 text-white hover:bg-red-700 rounded-md m-[4px]' :
    'p-2 text-center m-[4px] hover:border-b-2 hover:border-b-black'
                }>
                <Link href={link}>{name}</Link></li>
            )
          })}
        </ul>

        {/* Support us button leads to Donations page */}

        <Button type="button" variant="outlined"
          className="self-center mx-2  md:m-1 min-w-max py-1 px-2 h-9 w-[100px]
        shadow-lg  bg-emerald-600 rounded-md hover:bg-green-700 hover:text-white text-white
           right-3 font-cormorant font-large
        "
        >
          <Link href={"/donations"}>Support Us</Link>

        </Button>
        
        {/* {hamburger menu icon open and close } */}
        <div onClick={smallScreenNavigation} className="flex flex-col lg:hidden p-3">
          {
            menuIcon ? <AiOutlineClose size={25} className="text-black self-end" /> : <AiOutlineMenu size={25} className="text-black self-end " />
          }

          {/*Mobile navbar drops down/close*/}
          <div onClick={smallScreenNavigation}
            className={
              menuIcon ? "flex flex-col absolute left-0 top-0 w-full h-screen justify-start items-center text-center bg-[#FF9933] p-2 z-10"
                :
                "flex flex-col absolute left-[-100%] top-[-144px] w-full h-full justify-center items-center text-center"
            }>
            {
              menuIcon ?
                <AiOutlineClose size={25} className="text-white self-end" /> :
                <AiOutlineMenu size={25} className="text-white self-end " />
            }

            {/* Populate the navbar with navbar links from navLinks Array */}
            <ul className="text-white text-2xl my-4">
              {
                navLinks.map(({ name, link }) => {
                  return (
                    <li key={name} onClick={smallScreenNavigation} className={(name === 'Maharudram') ? 'p-2 bg-red-500 text-white hover:bg-red-700 rounded-md m-[4px]' :"my-2 hover:cursor-pointer"}><Link href={link}>{name}</Link> </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>

      {/* Temple Title */}
      <section className="py-1 my-1 flex flex-col justify-center h-24 text-center text-[#000033] tracking-tight">
        <p className={`tracking-tight font-cormorant text-2xl md:text-2xl lg:text-3xl font-large`}>
          Vaidica Vidhya Ganapathi Center
        </p>
        <p className={`tracking-tighter font-cormorant text-xl md:text-xl lg:text-2xl `}>
          Sri Vallabha Maha Ganapathi Temple
        </p>
        <p className={`tracking-tighter font-cormorant text-[12px] md:text-[14px]  `}>
          (A Registered Non-Profit Organization - CA Tax ID: 61-1449457)
        </p>
      </section>
    </header>
  );
}
