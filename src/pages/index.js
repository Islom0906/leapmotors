

import AOS from 'aos';
import {useEffect} from 'react';


import Image from "next/image";
import brand from '/public/brand.png'
import logo from '/public/Logo.png'

import sectionC11 from '/public/section-1-logo.png'
import sectionC11Bg from '/public/section-bg-1.jpg'

import sectionC01  from '/public/section-2-logo.png'
import sectionC01bg  from '/public/section-bg-2.png'


import sectionC11Suv  from '/public/section-3-logo.png'
import sectionC11Suvbg  from '/public/section-bg-3.jpg'

import T03bg from "/public/index/section-bg-4.jpg";
import T03Logo from "/public/index/section-4-logo.png";

import { BannerImage } from "@/components";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Head from "next/head";


export default function Home() {


  useEffect(() => {
    AOS.init({
      once:true
    });
}, []);
  return (
      <>
      <Head>
          <title>Leapmotor-Home</title>
          <meta property='og:title' content="Leapmotor,Leapmotors,Leapmotor uz, Leapmotor uzbekistan,Leap-motor"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/brand.png"/>
      </Head>
   <main className={'bg-black section'} >
       <section className="relative w-full h-screen scroll-snap">
      <video className="object-cover w-full h-full"   autoPlay loop muted>
        <source className="w-full" src={`${process.env.NEXT_PUBLIC_API_URL}/media/25210b0f-2664-4c62-808e-c46d57ca4013-c01video.mp4`} type="video/mp4"/>
      </video>



      <div  className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] opacity-90">
        <div data-aos='fade-up' className="w-[180px] h-[180px] mx-auto bg-transparent relative">
          <Image  src={brand} alt="brand" fill className="object-contain w-full h-full"/>
        </div>
        <div data-aos='fade-up' className="md:w-[532px] md:h-[118px] bg-transparent relative">
          <Image src={logo} alt="logo" fill className="object-contain w-full h-full"/>
        </div>
      </div>
    </section>
      <BannerImage bg={sectionC11Bg} logo={sectionC11} text={'Intelligent Long Range Five-Seat SUV'} link={'C11Reev'}/>
      <BannerImage bg={sectionC01bg} logo={sectionC01} text={'Intelligent Long Range Five-Seat SUV'}  link={'C01'}/>
      <BannerImage bg={sectionC11Suvbg} logo={sectionC11Suv} text={'Intelligent Long Range Five-Seat SUV'} link={'C11'} />
      <BannerImage bg={T03bg} logo={T03Logo} text={'Smart Electric Mini Car'}  link={'/T03'} />

      </main>
      </>
  )
}
