import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import news1 from '/public/About-us/about us section 1.jpg'
import Head from "next/head";


const NewsInner = () => {
    return (
        <>
            <Head>
                <title>Leap-Motor  Slug</title>
                <meta property='og:title' content="Leapmotor uz News, Leapmotor uzbekistan News,Leap-motor News"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <section className={''}>
                <div className="container ">
                    <div className="mt-[95px] mb-[35px] md:mb-[40px]">
                        <Link
                            href="/news"
                            className="text-[#4d5d81] text-[20px] font-semibold"
                        >News Room
                        </Link>
                    </div>
                    <h1
                        className="font-bold text-justify text-[18px] leading-[35px] md:leading-[60px] md:text-[30px]"
                    >
                        Leapmotor’s First Mass Production Model with CTC Technology
                    </h1>
                    <p className="tracking-[.12rem] text-justify text-[18px] leading-[35px] mt-3">
                        February 25, 2022

                        — Leapmotor for the first time announced some of the highlights of
                        its new model C01. Leapmotor C01 is an electric mid-to-large-sized
                        sedan developed on its C-Vehicle Platform, and also the first mass
                        production model equipped with CTC battery technology, featured by
                        0-100 km/h acceleration in less than 4 seconds, 5-meter plus
                        length and 700km ultra-long range. As the new flagship model of
                        Leapmotor, it will further expand the Leapmotor’s smart EV
                        portfolio. Leapmotor plans to launch C01 in the second quarter of
                        2022.
                    </p>
                    <div className='mb-10'>
                        <p className="text-[20px] mt-7 font-bold">
                            Technological and Natural Aesthetics to Create an Inner "Style"
                        </p>
                        <p
                            className="tracking-[.12rem] text-justify text-[18px] leading-[35px] mt-3"
                        >
                            Leapmotor C01 takes the natural aesthetics as the design concept,
                            emphasizing on smart mobility experience while reducing redundant
                            features. The design of C01 is featured with technical and gentle
                            geometric elements without any superfluous lines, making it
                            elegant yet powerful. The immersive audio-visual cabin brings
                            intelligent travel experience with nteraction, and provides a
                            light luxurious travel experience for young, high-end, urban
                            families
                        </p>
                        <Image
                            className="mt-[35px] aspect-video w-full object-cover"
                            src={news1}
                            alt="news name"
                        />
                    </div>


                </div>
            </section>
        </>
    )
}

export default NewsInner
