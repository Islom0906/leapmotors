import Image from "next/image";
import {PiCaretDownBold} from "react-icons/pi";
import {CarSwiper, CarText, CarBanner, HoverCard} from "@/components";
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useTranslation} from "react-i18next";




const carSwipper3 = [
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/1512bb5e-bb4c-4ff3-833e-5fe7e7372849-t03-gallery-03.jpg`,
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/808cac2b-13b8-4729-9fd2-46a7ffa08a4c-t03-gallery-04.jpg`
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bc555983-6458-48be-ad47-3a70f7ac8191-t03-gallery-02.jpg`,
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/018e45a4-66a1-462f-9738-a2c775fed10f-t03-gallery-01.jpg`
    }
]

const T03 = () => {
    const {t} = useTranslation()
    const T03Data = {
        logo: `${process.env.NEXT_PUBLIC_API_URL}/media/9f538f2a-68ba-4199-97b0-05937e96bcbd-section-4-logo.png`,
        section1: {
            subTitle: t('T03.section1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/50b3343f-5dc5-4650-97ae-3ef817ff7b7a-T03-section-1-bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/d17c3ad5-a7fe-4660-ab27-2ae0ed35af39-screen1.jpg`,
            content: [
                {
                    title: t('T03.section1.title'),
                    content: t('T03.section1.content'),
                },
                {
                    title: t('T03.section1.title2'),
                    content: t('T03.section1.content2'),
                },
                {
                    title: t('T03.section1.title3'),
                    content: t('T03.section1.content3'),
                },
            ],
        },


    };
    const carSwipper1 = [

        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/ad0b2c5d-0d66-420a-a2f9-04b5727d9477-T03-section-4-slider-1-2bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/9f824a2f-6873-4dbc-9cdf-3bd13c1471c1-T03-section-4-slider-1-2bg-responsive.png`,
        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e226f9f7-aaf6-42eb-b8cc-eb82e4db554e-T03-section-4-slider-1-3bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/95613ae1-9071-4201-8aef-08fcf05fdb8e-T03-section-4-slider-1-3bg-responsive.png`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/9f137487-dded-4742-8313-f38b186e30e8-T03-section-4-slider-1-4bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/0cef2e79-0005-438e-9a1d-f059ebd74870-T03-section-4-slider-1-4bg-responsive-min.jpg`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/36a44e7c-f692-4c49-8481-105fb96da123-T03-section-4-slider-1-5bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/b382e5c3-2ac6-4768-b94a-3a41d59e1ca2-T03-section-4-slider-1-5bg-responsive-min.jpg`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7de7ff6b-e1fe-4b34-8607-fca1c2135021-T03-section-4-slider-1-1bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/0049fb38-5ade-454b-9159-9de1308181da-T03-section-4-slider-1-5bg-responsive.png`,

        },
    ]
    const carSwipper2 = [
        {
            title: t('T03.carswipper2.title'),
            subTitle: t('T03.carswipper2.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d20ff2a8-e5f7-4b11-be0a-9e60095e1d12-T03-section-5-slider-1-1bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/20ef0fca-189b-4d5e-9f7b-64fc5f189fc8-T03-section-5-slider-1-1bg-responsive-min.jpg`,

        },
        {
            title: t('T03.carswipper2.title2'),
            subTitle: t('T03.carswipper2.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/88c2b4b2-a1ca-4f34-849e-ee3b26c7fdbe-T03-section-5-slider-1-2bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/887d9f70-76da-4825-98b4-69ea9675fd79-T03-section-5-slider-1-2bg-responsive-min.jpg`,
        }
    ]
    const disclaimers = [
        t('c11reev.c11rev.name'),
        t('c11reev.c11rev.name2'),
        t('c11reev.c11rev.name3'),
        t('c11reev.c11rev.name4'),
        t('c11reev.c11rev.name5'),
        t('c11reev.c11rev.name6'),
        t('c11reev.c11rev.name7'),
        t('c11reev.c11rev.name8'),
        t('c11reev.c11rev.name9'),
        t('c11reev.c11rev.name10'),
    ]



    return (
        <>
            <Head>
                <title>Leap-Motor T03</title>
                <meta property='og:title' content="Leapmotor uz T03, Leapmotor uzbekistan T03,Leap-motor T03"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <main className={'bg-black'}>
                <section className="h-screen ">
                    <div className="relative w-full h-full">
                        <Image
                            alt="car"
                            src={T03Data.section1.bgRes}
                            className="block object-cover w-full h-full md:hidden"
                            fill
                        />
                        <Image
                            alt="car"
                            src={T03Data.section1.bg}
                            className="hidden object-cover w-full h-full md:block"
                            fill
                        />
                        <div
                            className="absolute  top-[140px] left-[50%] translate-x-[-50%] h-[calc(100%-80px)] flex flex-col items-center lg:justify-start justify-between">
                            <div>
                                <div className="relative h-[29px] mx-auto w-[60px]">
                                    <Image
                                        src={T03Data.logo}
                                        alt="logo"
                                        className="w-full h-full mx-auto"
                                        fill
                                    />
                                </div>
                                <div className="mb-3 text-center">
                                    <p className="text-white font-normal min-w-[320px] text-[20px] leading-[30px] md:leading-[56px]">
                                        {T03Data.section1.subTitle}
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col items-center justify-center gap-5 pb-5">
                                <div className="flex flex-wrap items-center justify-start gap-10 text-white gap-y-5">
                                    {T03Data.section1.content.map((item, ind) => (
                                        <div className="" key={ind}>
                                            <p className="text-white text-[10px]  lg:text-[14px] font-medium">
                                                {item.title}
                                            </p>
                                            <p className="text-[20px] font-normal">
                                                {item.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <PiCaretDownBold className="block w-6 h-6 text-white lg:hidden"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-screen ">
                    <div className="relative w-full h-full">
                        <Image
                            alt="car"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/media/8bd6857e-4221-4e86-9e42-b11626ebce1f-T03-section-2.jpg`}
                            className="hidden object-cover w-full h-full md:block"

                            fill
                        />
                         <Image
                            alt="car"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/media/91befc72-588a-4c60-a59c-e3c138975c60-screen2.jpg`}

                            className="block object-cover w-full h-full md:hidden"
                            fill
                        />
                       
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div
                                className="container flex flex-col justify-between h-full py-10 md:py-20 md:justify-start">
                                <div className="mb-5 text-center">
                                    <p
                                        className="text-white font-arial-semibold  text-[24px] md:text-[26px]"
                                    >
                                        {t('T03.section2.title')}
                                    </p>
                                    <p className="mt-[6px] lg:text-[14px] text-white font-arial-normal">
                                        {t('T03.section2.subtitle')}
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <div
                                        className="flex flex-wrap justify-center text-white md:gap-x-0 gap-x-2 gap-y-2"
                                    >
                                        <div
                                            className="flex gap-3 items-center justify-center md:w-[33%] md:border-r-2  ">
                                            <p className="text-white text-[21px] font-semibold">
                                                {t('T03.section2.name')}
                                            </p>

                                        </div>
                                        <div
                                            className="flex gap-3 items-center justify-center md:w-[33%] md:border-r-2 ">
                                            <p className="text-white text-[21px] font-semibold">
                                                {t('T03.section2.name2')}
                                            </p>

                                        </div>
                                        <div
                                            className="flex gap-3 items-center justify-center md:w-[33%] md:border-r-2 ">
                                            <p className="text-white text-[21px] font-semibold">
                                                {t('T03.section2.name3')}
                                            </p>

                                        </div>
                                        <div
                                            className="flex gap-3 items-center justify-center md:w-[33%] md:border-r-2 ">
                                            <p className="text-white text-[21px] font-semibold">
                                                {t('T03.section2.name4')}
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
                <CarBanner title={t('T03.section3.title')} subTitle={t('T03.section3.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a9765f3d-6b81-4c67-b4f0-f7c2b732fb5a-Group 49-min.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/57faae92-2f31-4786-875c-25f6b15bbf91-T03-section-3bg-responsive-min.jpg`}
                           textColor={'black'}/>


                <CarSwiper content={carSwipper1} textColor={'black'}/>
                <CarSwiper content={carSwipper2}/>

                <CarBanner textColor={'black'} title={t('T03.carbanner.title')}
                           subTitle={t('T03.carbanner.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/f1d80e68-31d1-430b-8f34-325c4380db8d-T03-section-6-bg-min.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/a8bba7fe-e1e4-44d2-ab1b-87e639857b98-T03-section-6bg-responsive-min.jpg`}/>
                <CarBanner title={t('T03.carbanner2.title')}
                           subTitle={t('T03.carbanner2.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/771c14e3-be5b-4e3e-845a-7ad65b8816ae-T03-section-7-bg-min.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/cd619eb4-443d-4f18-9749-a93b0e07c448-T03-section-7bg-responsive-min.jpg`}/>
                <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                    <div className="container pb-10 mx-auto">
                        <p className={'text-[30px] font-semibold text-white'}>{t('picture')}</p>

                    </div>
                    <div
                        className={'overflow-x-hidden w-full  relative flex flex-col md:flex-row  md:h-[90vh] gap-y-6'}>
                        {
                            carSwipper3?.map((item, ind) => (
                                <HoverCard
                                    image={item.bg}
                                    key={ind}
                                />
                            ))
                        }
                    </div>
                </section>
                <CarText content={disclaimers}/>

            </main>
        </>

    );
};

export default T03;
