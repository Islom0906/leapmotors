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
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/445a1d2b-3a77-4283-a623-dc1a0e1438e0-T03-section-4-slider-1-2bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/9f824a2f-6873-4dbc-9cdf-3bd13c1471c1-T03-section-4-slider-1-2bg-responsive.png`,
        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c40cdf72-0a6e-48bf-9f97-6f562547b4b0-T03-section-4-slider-1-3bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/95613ae1-9071-4201-8aef-08fcf05fdb8e-T03-section-4-slider-1-3bg-responsive.png`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7e006151-2435-4aaf-8c53-cabf6e2c9d14-T03-section-4-slider-1-4bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/41546e91-b553-43f7-864d-1ec3e8ac8542-T03-section-4-slider-1-4bg-responsive.png`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5196a6c8-646d-4a95-ac44-222f7e10094b-T03-slider-5.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/0e75d8c2-e01a-43a7-899e-e786b7d47a7d-T03-slider-5-responsive.png`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0c4362b2-fbca-4a69-843a-4bd1a27a34f8-T03-section-4-slider-1-5bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/0049fb38-5ade-454b-9159-9de1308181da-T03-section-4-slider-1-5bg-responsive.png`,

        },
    ]
    const carSwipper2 = [
        {
            title: t('T03.carswipper2.title'),
            subTitle: t('T03.carswipper2.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/ffb3e45f-f578-4d0b-8157-e73747122647-T03-section-5-slider-1-1bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/76e0fe00-6358-497b-885f-f720b8afe620-T03-section-5-slider-1-1bg-responsive.png`,

        },
        {
            title: t('T03.carswipper2.title2'),
            subTitle: t('T03.carswipper2.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/1a0634e9-7e4a-4a87-adfc-b2a5675380fe-T03-section-5-slider-1-2bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/e7af3608-25dd-4664-80ae-ce5d89d16f22-T03-section-5-slider-1-2bg-responsive.png`,
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
                            src={T03Data.section1.bg}
                            className="object-cover w-full h-full"
                            fill
                        />
                        <div
                            className="absolute  top-20 left-[50%] translate-x-[-50%] h-[calc(100%-80px)] flex flex-col items-center lg:justify-start justify-between">
                            <div>
                                <div className="relative h-[29px] mx-auto w-[60px]">
                                    <Image
                                        src={T03Data.logo}
                                        fill
                                        alt="logo"
                                        className="w-full h-full mx-auto"
                                        fill
                                    />
                                </div>
                                <div className="mb-3 text-center">
                                    <p className="text-white font-arial-normal min-w-[320px] text-[20px] leading-[30px] md:leading-[56px]">
                                        {T03Data.section1.subTitle}
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col items-center justify-center gap-5 pb-5">
                                <div className="flex flex-wrap items-center justify-start gap-10 text-white gap-y-5">
                                    {T03Data.section1.content.map((item, ind) => (
                                        <div className="" key={ind}>
                                            <p className="text-white text-[10px]  lg:text-[14px] font-arial-medium">
                                                {item.title}
                                            </p>
                                            <p className="text-[20px] font-arial-normal">
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
                            className="object-cover w-full h-full"
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
                                        className="flex flex-wrap justify-center  text-white md:gap-x-0 gap-x-2 gap-y-2"
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
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c6130371-42d6-4fe6-84f8-dfd52b99a638-T03-section-3-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/4a61b577-b2cf-4b1c-8d5b-ba03d750817c-T03-section-3bg-responsive.jpg`}
                           textColor={'black'}/>


                <CarSwiper content={carSwipper1} textColor={'black'}/>
                <CarSwiper content={carSwipper2}/>

                <CarBanner textColor={'black'} title={t('T03.carbanner.title')}
                           subTitle={t('T03.carbanner.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/f7a4746a-838c-4a48-aafa-34f6326ccbe3-T03-section-6-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/3e450220-8167-4391-b371-21610e422c8f-T03-section-6bg-responsive.jpg`}/>
                <CarBanner title={t('T03.carbanner2.title')}
                           subTitle={t('T03.carbanner2.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/92e586ac-173f-4c12-ad0d-8a8733b881bc-T03-section-7-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/1c6e7ff6-9216-4060-aa39-180e53fa330a-T03-section-7bg-responsive.jpg`}/>
                <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                    <div className="container mx-auto pb-10">
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
