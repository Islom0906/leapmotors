import {
    CarDetailBanner,
    CarBannerC11Reev,
    CarCharacteristics,
    CarSwiper,
    CarBanner,
    CarSwiperInnerVideo,
    CarText, HoverCard
} from "@/components";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Autoplay, Navigation} from "swiper";
import {CarSwiperInner} from "@/components";
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useTranslation} from "react-i18next";


const C11Reev = () => {
    const {t} = useTranslation()
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
    const carSwipper3 = [

        {
            title: t('c11reev.carSwipper3.title'),
            subTitle: t('c11reev.carSwipper3.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d1903d0f-0e8c-4cd8-9f61-7bf5624c9df5-C11-Reev-section-12-slider-1-2bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper3.title2'),
            subTitle: t('c11reev.carSwipper3.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6d7c8da5-3e54-495b-a345-8df650c50773-C11-Reev-section-12-slider-1-1bg.jpg`,
        },
    ];
    const carSwipper4 = [

        {
            title: t('c11reev.carSwipper4.title'),
            subTitle: t('c11reev.carSwipper4.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/07b7c1e6-e2e5-4b42-b1cb-6f47d23f1e3c-C11-Reev-section-16-slider-1-3bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper4.title2'),
            subTitle: t('c11reev.carSwipper4.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6713a7ab-04a3-4d33-a65d-6daa1f7bb466-C11-Reev-section-16-slider-1-1bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper4.title3'),
            subTitle: t('c11reev.carSwipper4.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5622e412-6d49-4723-90a6-267c69274305-C11-Reev-section-16-slider-1-2bg.jpg`,
        },
    ];
    const carSwipper5 = [

        {
            title: t('c11reev.carSwipper5.title'),
            subTitle: t('c11reev.carSwipper5.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bda884f2-ee12-4c6c-b24f-a3a533930795-C11-Reev-section-18-slider-1-1bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper5.title2'),
            subTitle: t('c11reev.carSwipper5.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a95900c4-3534-4053-86a3-8bec3a898aa7-C11-Reev-section-18-slider-1-2bg.jpg`,
        },

    ];

    const carSwipper6 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/cd8d1b69-e984-4eeb-aba2-aa4cba5de1df-last2.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/75581a25-717a-4287-95b0-909adc926f58-last1.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/fca63e41-6635-4bfa-8ffc-becdee688dbb-last3.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/78224616-b9f4-42c4-829b-6b8fb3c69e99-last4.jpg`,
        },
    ]

    const videoBlog = [
        {
            title: t('c11reev.videoBlog.title'),
            subTitle: t('c11reev.videoBlog.subtitle'),
            video: `${process.env.NEXT_PUBLIC_API_URL}/media/341b133c-3ad4-4cda-a61f-6ce801cfe26a-16-3.mp4`
        },
        {
            title: t('c11reev.videoBlog.title2'),
            subTitle: t('c11reev.videoBlog.subtitle2'),
            video: `${process.env.NEXT_PUBLIC_API_URL}/media/7d7aec9e-85fc-424e-bd9c-d623498584a3-section-16-slide2.mp4`
        },
        {
            title: t('c11reev.videoBlog.title3'),
            subTitle: t('c11reev.videoBlog.subtitle3'),
            video: `${process.env.NEXT_PUBLIC_API_URL}/media/eb4f0222-5ea3-4228-ad53-468ccb3d4618-section-16-slide3.mp4`
        },
        {
            title: t('c11reev.videoBlog.title4'),
            subTitle: t('c11reev.videoBlog.subtitle4'),
            video: `${process.env.NEXT_PUBLIC_API_URL}/media/a2dd8ae3-a67b-469d-8c5b-1540a7db6d16-section-16-slide4.mp4`
        },
    ]

    const carSwipper2 = [
        {
            title: t("c11reev.carSwipper2.title"),
            subTitle: t("c11reev.carSwipper2.subtitle"),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c3e21933-b421-4540-9b54-882cd2930afe-C11-Reev-section-7-slider-1-1bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper2.title2'),
            subTitle: t('c11reev.carSwipper2.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c781fd9e-1d86-477a-a8fc-f708ca452dc7-C11-Reev-section-7-slider-1-2bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper2.title3'),
            subTitle: t('c11reev.carSwipper2.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e9f38cb7-79ef-498b-afee-e3f870305a25-C11-Reev-section-7-slider-1-3bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper2.title4'),
            subTitle: t('c11reev.carSwipper2.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a51187c2-1118-4652-9f02-4992bf50409a-C11-Reev-section-7-slider-1-4bg.jpg`,
        },
    ];
    const carSwipper1 = [
        {
            title: t('c11reev.carSwipper1.title'),
            subTitle: t('c11reev.carSwipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/520256cf-35ef-4ecc-a953-793bbdc98ff7-C11-Reev-section-5-slider-1-1bg.jpg`,
        },
        {
            title: t("c11reev.carSwipper1.title2"),
            subTitle: t('c11reev.carSwipper1.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/236c60a0-0d43-489d-9d2a-c7f7738c6598-C11-Reev-section-5-slider-1-2bg.jpg`,
        },
        {
            title: t('c11reev.carSwipper1.title3'),
            subTitle: t('c11reev.carSwipper1.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/4dc447c6-9b74-4096-b0a1-fea07ba1032d-C11-Reev-section-5-slider-1-3bg.jpg`,
        }
    ];


    const carDataSectoin2 = [
        {
            title: 'c11reev.section2.carDataSectoin2.title1',
            data: 'c11reev.section2.carDataSectoin2.data1'
        },
        {
            title: 'c11reev.section2.carDataSectoin2.title2',
            data: 'c11reev.section2.carDataSectoin2.data2'
        },
        {
            title: 'c11reev.section2.carDataSectoin2.title3',
            data: 'c11reev.section2.carDataSectoin2.data3'
        }
    ]

    const carDataSectoin3 = [
        {
            title: 'c11reev.section3.carDataSectoin3.title1',
            data: 'c11reev.section3.carDataSectoin3.data1'
        },
        {
            title: 'c11reev.section3.carDataSectoin3.title2',
            data: 'c11reev.section3.carDataSectoin3.data2'
        },
        {
            title: 'c11reev.section3.carDataSectoin3.title3',
            data: 'c11reev.section3.carDataSectoin3.data3'
        }
    ]

    const characteristics = {
        title: "Luxury Five Seats",
        about: {
            lenght: "5050",
            width: "1902",
            height: "1509",
        },
    };

    return (
        <>
            <Head>
                <title>Leap-Motor C11REEV</title>
                <meta property='og:title'
                      content="Leapmotor uz C11REEV, Leapmotor uzbekistan C11REEV,Leap-motor C11REEV"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <main className={'bg-black'}>
                <CarDetailBanner
                    imgLong={true}
                    img={`${process.env.NEXT_PUBLIC_API_URL}/media/7761680e-347d-47c4-a96a-4eccfd8f2ec1-slide-01-logo.png`}
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7c0b9341-73dc-4f0c-a4f5-6853f6ed5751-C11-Reev-section-1bg.jpg`}
                    text={t('c11reev.section1')}
                />
                <CarBannerC11Reev
                    title={t('c11reev.section2.title')}
                    subTitle={t('c11reev.section2.sub-title')}
                    carData={carDataSectoin2}
                    banner={`${process.env.NEXT_PUBLIC_API_URL}/media/492a753d-0554-4942-8a59-193c60c6188c-C11-Reev-section-2-bg.jpg`}
                />
                <CarBannerC11Reev
                    title={t('c11reev.section3.title')}
                    carData={carDataSectoin3}
                    banner={`${process.env.NEXT_PUBLIC_API_URL}/media/c2331545-8907-4346-8c17-8a941364cc45-C11-Reev-section-3bg.jpg`}
                />

                <section className="h-screen ">
                    <div className="relative w-full h-full">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/media/d197cbbe-f6d9-4d46-ab91-f51a2d8ad41e-C11-Reev-section-4bg.jpg`}
                            alt="car"
                            fill
                            className="object-cover w-full h-full"
                            priority={true}
                        />
                        <div className="absolute top-[45px] md:top-20 w-full text-center z-20">
                            <div className="mb-5 text-center">
                                <p className="text-white text-[26px] font-arial-semibold md:font-arial-normal md:text-2xl lg:text-2xl leading-[44px] md:leading-[32px] mb-3">
                                    {t('c11reev.section4.title')}
                                </p>
                            </div>
                            <div>
                                <div className="mx-auto text-left md:flex sm:gap-6 w-fit">
                                    <div className="flex items-center gap-2">
                                        <p className="text-[44px] md:text-[63px] text-white font-arial-semibold leading-[70px]">
                                            5
                                        </p>
                                        <div className="flex flex-col h-full justify-evenly">
                                            <p className="text-white font-arial-normal leading-[16px]">
                                                {t('c11reev.section4.name1')}
                                            </p>
                                            <p className="text-white font-arial-normal leading-[16px]">
                                                {t('c11reev.section4.data1')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 md:border-l border-[#ffffff57] md:pl-5">
                                        <p className="text-[44px] md:text-[63px] text-white font-arial-semibold leading-[70px]">
                                            2
                                        </p>
                                        <div className="flex flex-col h-full justify-evenly">
                                            <p className="text-white font-arial-normal leading-[16px]">
                                                {t('c11reev.section4.name2')}
                                            </p>
                                            <p className="text-white font-arial-normal leading-[16px]">
                                                {t('c11reev.section4.data2')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CarSwiper content={carSwipper1}/>


                <CarBanner
                    title={t('c11reev.section5.name')}
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/2b51c4a8-4a25-4fb1-8a3b-40ac095761f7-C11-Reev-section-6-bg.jpg`}
                    textColor="black"
                />
                <CarSwiper content={carSwipper2} textColor={"black"}/>
                {/*<CarCharacteristics*/}
                {/*  textColor={"black"}*/}
                {/*  bg={`${process.env.NEXT_PUBLIC_API_URL}/media/72d9c4b3-5acd-4f3b-b167-7cb8ae8accf8-section-8-bg.jpg`}*/}
                {/*  characteristics={characteristics}*/}

                {/*  */}
                {/*/>*/}
                <CarBanner
                    title={t('c11reev.section6.name')}
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/8bfef56b-b41a-49f6-923d-3bed34ee9a1b-C11-Reev-section-8-bg.jpg`}
                    bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/5541e411-9525-4191-87de-13fa5d592541-C11Reev-slide-08-res.jpg`}
                />
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7884874f-5ce2-4438-8cfc-415405d72e78-C11-Reev-section-9-bg.jpg`}
                    bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/f79c95ac-797d-452a-8471-2958aea7252d-C11-Reev-section-9-bg-responsive.jpg`}/>
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/78b52aaa-4b94-472e-a313-13fc3b9eafd8-C11-Reev-section-10-bg.jpg`}
                    title={t('c11reev.section7.name')}
                />
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/f84154ae-126e-400a-a6b7-a34c442ab220-C11-Reev-section-11-bg.jpg`}
                    title={t('c11reev.section8.name')}
                    subTitle={t('c11reev.section8.title')}
                />
                <CarSwiper content={carSwipper3}/>
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a344178d-336a-4a52-bb49-850cfe382850-C11-Reev-section-13-bg.jpg`}
                    title={t('c11reev.section9.name')}
                    subTitle={t('c11reev.section9.title')}
                    center={true}
                />
                <section className=" h-screen">
                    <div className="relative w-full h-full">
                        <video className="object-cover w-full h-full" autoPlay loop muted>
                            <source
                                className="w-full"
                                src={`${process.env.NEXT_PUBLIC_API_URL}/media/5f5270eb-3e0c-42b3-b63a-79d00fc31296-section-15-bg.mp4`}
                                type="video/mp4"
                            />
                        </video>

                        <div className="absolute top-[60px] w-full text-center">
                            <div className="mb-5 text-center">
                                <p className="text-white text-lg font-arial-semibold lg:text-[22px] leading-7 md:leading-8 mb-2">
                                    {t('c11reev.section10.name')}
                                </p>
                                <p className="text-sm text-white font-arial-normal md:leading-5">
                                    {t('c11reev.section10.title')}<br/>
                                    {t('c11reev.section10.title2')}<br/>
                                    {t('c11reev.section10.title3')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Swiper
                    id={"mySwiper1"}
                    autoplay={{
                        delay: 4000,
                    }}
                    speed={1000}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                    }}
                    loop={"true"}
                    pagination={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="md:h-screen mySwiper"
                >
                    {
                        videoBlog?.map((item, ind) => (
                            <SwiperSlide key={ind}>
                                <div className={"relative w-full h-full swiper1"}>
                                    <CarSwiperInnerVideo content={item} video={item.video}/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <CarSwiper content={carSwipper4}/>

                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/01920bd1-0f12-437f-ac75-fa66272bf58a-C11-Reev-section-17-bg.jpg`}
                    title={t('c11reev.section11.title')}
                    subTitle={
                        t('c11reev.section11.name')
                    }

                />
                <CarSwiper content={carSwipper5}/>
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/d1f22c5d-25ba-41a8-a560-d33bb20c8928-C11-Reev-section-19-bg.jpg`}
                    title={t('c11reev.section12.name')}
                    subTitle={
                        t('c11reev.section12.title')
                    }

                />
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e448970d-bb7b-4c6c-97e5-e529dcd883d7-C11-Reev-section-20-bg.jpg`}
                    title={t('c11reev.section13.name')}
                />
                <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                    <div className="container mx-auto pb-10">
                        <p className={'text-[30px] font-semibold text-white'}>Picture</p>

                    </div>
                    <div
                        className={'overflow-x-hidden w-full  relative flex flex-col md:flex-row  md:h-[90vh] gap-y-6'}>
                        {
                            carSwipper6?.map((item, ind) => (
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

export default C11Reev
