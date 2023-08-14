
import Image from "next/image";
import logo from '/public/Logo.png'
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"
import { useState } from "react";

const Navbar = () => {

  const [openNavbar ,  setOpenNavbar] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 h-[60px] z-[999] " style={{background: "rgba(27, 27, 27, 0.85)"}}>
    <div className="container relative flex items-center justify-between w-full h-full">
      <div className="flex items-center justify-between sm:gap-20">
        <Link href="/" className="w-[154px] h-[34px] relative">
        <Image
              src={logo}
              alt="Leapmotor"
              className="object-contain"
              fill
            />

        </Link>
        <ul className="items-center hidden gap-10 text-white uppercase lg:flex">
          <li><Link href="/C11Reev" className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">C11 reev</Link></li>
          <li><Link href="/C11" className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">C11</Link></li>
          <li><Link href="/C01" className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">c01</Link></li>
          <li><Link href="/T03" className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">t03</Link></li>
          
        </ul>
      </div>
      <div className="flex items-center md:gap-14">
        <a href="/store" className="text-white hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-arial-semibold hidden lg:block">Store</a>
        <div className="side-r">
          <GiHamburgerMenu onClick={() => setOpenNavbar(true)} className="text-2xl text-white cursor-pointer"/>
          <div className={`fixed  ease-in-out  top-0 ${openNavbar ? 'right-0' : '-right-full'} transition-all duration-300 bg-white w-[200px] h-screen pt-5 pb-10 px-5 text-[#808080] shadow-2xl flex flex-col justify-between`}>
            <div>
              <div className="flex justify-end mb-16">
                <GrClose onClick={() => setOpenNavbar(false)} className="text-2xl cursor-pointer"/>
              </div>
              <ul className="space-y-10">
                <li><Link onClick={() => setOpenNavbar(false)} href="#" className="uppercase block lg:hidden ">c11 reev</Link></li>
                <li><Link onClick={() => setOpenNavbar(false)} href="/C01" className="uppercase block lg:hidden ">c01</Link></li>
                <li><Link onClick={() => setOpenNavbar(false)} href="#" className="uppercase block lg:hidden ">c11</Link></li>
                <li><Link onClick={() => setOpenNavbar(false)} href="#" className="uppercase block lg:hidden ">t03</Link></li>
                <li><Link onClick={() => setOpenNavbar(false)} href="#" className="uppercase block lg:hidden ">s01</Link></li>
                <li ><Link onClick={() => setOpenNavbar(false)} href="/about" className="capitalize">About Leapmotor</Link></li>
                <li ><Link onClick={() => setOpenNavbar(false)} href="/news" className="capitalize">News Room</Link></li>
                <li ><Link onClick={() => setOpenNavbar(false)} href="/store" className="capitalize">Store</Link></li>
                
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 relative flex-shrink-0">
                <Image src="/global.png" alt="global" className="w-full h-full" fill/>
              </div>
              <div className="flex items-center gap-2 divide-x">
                <a href="#">Chineese</a>
                <a href="#" className="pl-2">English</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
