import Head from "next/head";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation} from "swiper";
import section1image1 from '/public/About-us/about us section 1.jpg'
import section1image2 from '/public/About-us/about us section 1 image2.jpg'
import teamImage from '/public/About-us/section-3 img1.jpg'
import {AboutTeam} from "@/components";

SwiperCore.use([Autoplay]);

const team=[
    {
        id:1,
        image:teamImage,
        name:'Jun Xu',
        level:'President'
    },
    {
        id:2,
        image:teamImage,
        name:'Jun Xu',
        level:'President'
    },
    {
        id:3,
        image:teamImage,
        name:'Jun Xu',
        level:'President'
    },
    {
        id:4,
        image:teamImage,
        name:'Jun Xu',
        level:'President'
    },
    {
        id:5,
        image:teamImage,
        name:'Jun Xu',
        level:'President'
    },
    {
        id:6,
        image:teamImage,
        name:'Jun Xu',
        level:'President'
    }
]

export default function About() {

    return (
        <>
            <Head>
                <title>Leapmotor-About Leapmotor</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

            </Head>
            <main>
                {/*section banner*/}
                <section className="w-full h-screen relative bg-[#000]">
                    <Image src={section1image2} alt="Leapmotor Image"
                           className="w-full h-full  z-[2] lg:hidden object-cover" fill/>
                    <Image src={section1image1} alt="Leapmotor Image"
                           className="w-full h-full absolute top-0 right-0 z-[2] object-cover hidden lg:block " fill/>
                    <div className="px-3 flex flex-col items-center absolute z-10 w-full top-48">
                        <h1 className="text-white text-center text-xl font-semibold md:text-[28px] w-full lg:max-w-[844.425px]">We
                            are a leading smart EV company based in China that strives to deliver the finest
                            smart mobility experience to all consumers</h1>
                    </div>
                </section>
                {/*section video*/}
                <section className="w-full h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source data-v-9a2df41a=""
                                src="https://lp-website-oss-static.leapmotor.com/Leapmotor-English-web/leapmotor-PCmp4/Leapmotor-car-ai-gongchang.mp4"/>
                    </video>
                </section>
            {/*section about company*/}
                <section className="px-4 sm:pt-16 pt-10 swiper-about sm:pb-20 pb-12 w-full h-screen flex flex-col justify-between gap-10" style={{backgroundImage:`linear-gradient(#080808, rgba(0, 0, 0, 0.7)),url('/About-us/background.jpg')`}}>
                    <Swiper
                        id={'mySwiper1'}
                        autoplay={{
                            delay: 5000
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1, spaceBetween: 10
                            },
                            450: {
                                slidesPerView: 1.5, spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2, spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 3, spaceBetween: 10

                            },
                            1024: {
                                slidesPerView: 4, spaceBetween: 10
                            }
                        }}
                        pagination={true}
                        modules={[Navigation]}
                        className="  mySwiper w-full ">
                        {
                            team?.map(item => (
                                <SwiperSlide key={item?.id}>
                                    <AboutTeam team={item}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="container ">
                        <p className="text-white text-[10px] md:text-2xl leading-[25px] md:leading-[25px]">  Founded in 2015 by a world-class engineer and visionary entrepreneur with nearly 30 years of experience in electronics and AI technologies. Harnessing our proprietary technologies and capacity for innovation, we design and build EVs by approaching them as electronics products characterized by smart features and rapid product iterations, amid the ongoing transformation of automobiles from a means of transport into intelligent mobile spaces.
                        </p>
                        <p className="text-white text-[10px] md:text-2xl leading-[25px] md:leading-[25px] mt-5">We have a deep management team with diverse backgrounds who worked at world-renowned automotive and technology companies and financial institutions to bring us years of in-depth expertise and business acumen.</p>
                    </div>
                </section>
            </main>

        </>
    )
}
