import {
    CarBanner,
    CarBannerContentBottom,
    CarCharacteristics,
    CarContentFooter,
    CarDetailBanner,
    CarSwiper,
    CarText, HoverCard
} from '@/components'

import Head from "next/head";
import {useEffect} from "react";
import AOS from "aos";

import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useTranslation} from "react-i18next";
const C01 = () => {
    const {t} = useTranslation()

const characteristics = {
    title: t('c01.characteristics.title'),
    subTitle:t('c01.characteristics.subtitle'),
    about: [
        {
            title: t('c01.characteristics.title3'),
            text: "5050"
        },
        {
            title: t('c01.characteristics.title4'),
            text: "1902"
        },
        {
            title:t('c01.characteristics.title5'),
            text: "1509"
        },
        {
            title: t('c01.characteristics.title6'),
            text: "2930"
        }
    ]
}


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

    const carSwipper1 = [
        {
            title: t('c01.carswipper.title'),
            subTitle: t('c01.carswipper.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/18c2109a-4996-460e-a16e-775a84ddee18-C01-section-4-slider-1-4bg.jpg`,
        },
        {
            title: t('c01.carswipper.title2'),
            subTitle: t('c01.carswipper.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0fca70d1-6658-44f9-b6a6-fea407043515-C01-section-4-slider-1-5bg.jpg`,
        },
        {
            title: t('c01.carswipper.title3'),
            subTitle: t('c01.carswipper.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0e56a5ed-533f-43ea-b3cc-183069fde3c1-C01-section-4-slider-1-1bg.jpg`
        },
        {
            title: t('c01.carswipper.title4'),
            subTitle: t('c01.carswipper.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7094a559-efab-459b-bfb1-6a4f6e96865b-C01-section-4-slider-1-2bg.jpg`
        },
        {
            title: t('c01.carswipper.title5'),
            subTitle: t('c01.carswipper.subtitle5'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c4cc8226-0933-4a12-a5c5-19180b1d5871-C01-section-4-slider-1-3bg.jpg`
        }
    ]

    const carSwipper2 = [
        {
            title: t('c01.carswip2.title'),
            subTitle: t('c01.carswip2.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/03978497-5c57-48d7-b3f5-dd7b1ed37552-C01-section-6-slider-1-4bg.jpg`,
        },
        {
            title: t('c01.carswip2.title2'),
            subTitle: t('c01.carswip2.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5a8ad784-8bc2-4a17-89f8-a6f0be25d42a-C01-section-6-slider-1-5bg.jpg`,
        },
        {
            title: t('c01.carswip2.title3'),
            subTitle: t('c01.carswip2.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/06fd9c11-74e6-4790-800b-bd753959eca9-C01-section-6-slider-1-1bg.jpg`
        },
        {
            title: t('c01.carswip2.title4'),
            subTitle: t('c01.carswip2.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7a500359-921d-4762-a020-ed2b4f29c5aa-C01-section-6-slider-1-2bg.jpg`
        },
        {
            title: t('c01.carswip2.title5'),
            subTitle: t('c01.carswip2.subtitle5'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6687cf48-d19b-4dcd-9674-8457ac05eb7e-C01-section-6-slider-1-3bg.jpg`
        }
    ]
    const carSwipper3 = [
        {
            title: t('c01.carswip3.title'),
            subTitle: t('c01.carswip3.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3978b103-5203-4305-935a-90c728bb6e40-C01-section-7-slider-1-2bg.jpg`,
        },
        {
            title: t('c01.carswip3.title'),
            subTitle: t('c01.carswip3.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3325ff16-020d-4b3d-8aec-fa259a08989b-C01-section-7-slider-1-1bg.jpg`,
        },
        {
            title: t('c01.carswip3.title'),
            subTitle: t('c01.carswip3.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3978b103-5203-4305-935a-90c728bb6e40-C01-section-7-slider-1-2bg.jpg`
        },
        {
            title: t('c01.carswip3.title'),
            subTitle: t('c01.carswip3.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3325ff16-020d-4b3d-8aec-fa259a08989b-C01-section-7-slider-1-1bg.jpg`
        }
    ]

    const carSwipper4 = [
        {
            title: t('c01.carswip4.title'),
            subTitle: t('c01.carswip4.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/8312fd36-8737-4a9f-99d5-6e8a826b5f57-C01-section-9-slider-1-3bg.jpg`,
        },
        {
            title: t('c01.carswip4.title2'),
            subTitle: t('c01.carswip4.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7e0c54dd-b9be-41fb-89e4-03984e953d12-C01-section-9-slider-1-1bg.jpg`,
        },
        {
            title: t('c01.carswip4.title3'),
            subTitle: t('c01.carswip4.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7518ebbd-dc36-42ed-af64-7ce21ab869b5-C01-section-9-slider-1-2bg.jpg`
        }
    ]

    const carSwipper5 = [
        {
            title: t('c01.carswip5.title'),
            subTitle: t('c01.carswip5.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d8e81c64-7716-4d53-a0a5-2edff10a2526-C01-section-13-slider-1-2bg.jpg`,
        },
        {
            title: t('c01.carswip5.title2'),
            subTitle: t('c01.carswip5.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7e40fe58-61f5-4d54-9605-47f00c0a63ee-C01-section-13-slider-1-3bg.jpg`,
        },
        {
            title: t('c01.carswip5.title3'),
            subTitle: t('c01.carswip5.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/51a72064-69b6-4cd9-844e-054af6c09af5-C01-section-13-slider-1-1bg.jpg`
        }
    ]

    const carSwipper6 = [
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0db43d37-0038-4fb0-b9c9-54255155ac49-C01-section-15-slider-1-5bg.jpg`,
        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/606516e3-028d-413a-b80b-c40e08b44e8c-C01-section-15-slider-1-1bg.jpg`,
        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e96d6a69-e9c2-4327-b47f-035234fe58a5-C01-section-15-slider-1-2bg.jpg`
        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c387ee53-c353-460a-8874-4f623ccc095e-C01-section-15-slider-1-3bg.jpg`
        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle5'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d641c800-eaff-45ca-9b80-11f095f3f963-C01-section-15-slider-1-4bg.jpg`
        }
    ]

    const carSwipper7 = [
        {
            title: t('c01.carswip7.title'),
            subTitle: t('c01.carswip7.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6fcb0581-c1eb-4bae-9927-5bee33704446-C01-section-20-slider-1-1bg.jpg`,
        },
        {
            title:t('c01.carswip7.title2'),
            subTitle: t('c01.carswip7.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/98c12efa-cad6-4caf-baa4-fe64d64b8cc8-C01-section-20-slider-1-2bg.jpg`,
        },
        {
            title: t('c01.carswip7.title3'),
            subTitle:t('c01.carswip7.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/34aebebd-8c2f-406f-8593-685c84c37a03-C01-section-20-slider-1-3bg.jpg`
        }
    ]

    const carSwipper8 = [
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/64658804-7565-4b55-9d2a-230a2e0b398e-last-section-bg-1.jpg`,
        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bfbc3383-960c-4c4f-b108-3d7462e351b0-last-section-bg-2.jpg`,
        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/556e9b8a-cca9-4a38-a05f-e6b46e5c4ac0-last-section-bg-3.jpg`
        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/dfb55ceb-7ef7-47cb-8a63-dd1505ecef68-last-section-bg-4.jpg`
        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/936f0f29-e3f3-4a99-b863-11a09e2ac88e-last-section-bg-5.jpg`
        }
    ]


    const carBottomContent = [
        {
            title: t('c01.carbootincontent.title'),
            subTitle: t('c01.carbootincontent.subTitle'),
        },
        {
            title: t('c01.carbootincontent.title2'),
            subTitle: t('c01.carbootincontent.subTitle2'),
        }
    ]





    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    return (
        <>
            <Head>
                <title>Leap-Motor C01</title>
                <meta property='og:title' content="Leapmotor uz C01, Leapmotor uzbekistan C01,Leap-motor C01"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <main className={'bg-black'}>
                <CarDetailBanner
                    img={`${process.env.NEXT_PUBLIC_API_URL}/media/e370fbc7-ad3c-4828-a089-2d424e67c0ac-section-2-logo.png`}
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/3b3cabd0-04eb-438b-b1f0-c56cb93d72cc-C01-1-section-bg.jpg`}
                    text={t('c01.CarDetailBanner.title')}/>

                <CarCharacteristics
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/32b56318-d01e-477e-b75d-1bcb823dde04-C01-section-2-bg.jpg`}
                    characteristics={characteristics}/>


                <CarBanner title={t('c01.characteristics.title2')} subTitle={t('c01.characteristics.subtitle2')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/bad5f69f-3de0-4ab3-ba9b-821151127dad-C01-section-3-bg.jpg`}/>
                <CarSwiper content={carSwipper1}/>
                <CarBanner title={t('c01.carbanner.title')}
                           subTitle={t('c01.carbanner.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/46cff7b1-ee9b-4a5c-b5a1-3a0938c11259-C01-section-5-bg.jpg`}/>
                <CarSwiper content={carSwipper2}/>
                <CarSwiper content={carSwipper3}/>
                <CarBanner title={t('c01.carbanner2.title')}
                           subTitle={t('c01.carbanner2.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/30019250-262c-48e6-bc00-24c6702b4dd2-C01-section-8-bg.jpg`}/>
                <CarSwiper content={carSwipper4}/>
                <CarBanner title={t('c01.carbanner3.title')} subTitle={t('c01.carbanner3.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e398c0e4-61bc-4aab-a570-83dc04cbdd9d-C01-section-10-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner3.title2')}
                           subTitle={t('c01.carbanner3.subtitle2')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/cddff61c-1e1b-4206-be40-c374abc798cf-C01-section-11-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner3.title3')}
                           subTitle={t('c01.carbanner3.subtitle3')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7bb8b225-df81-4e77-b018-b28514246559-C01-section-12-bg.jpg`}/>
                <CarSwiper content={carSwipper5}/>
                <CarBanner title={t('c01.carbanner4.title')}
                           subTitle={t('c01.carbanner4.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e856ae06-84bf-4332-8a55-2130d9d90809-C01-section-14-bg.jpg`}/>
                <CarSwiper content={carSwipper6}/>
                <CarBanner title={t('c01.carbanner4.title2')}
                           subTitle={t('c01.carbanner4.subtitle2')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/76045aab-832d-4b30-a863-cb965f4fa2c4-C01-section-16-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner4.title3')}
                           subTitle={t('c01.carbanner4.subtitle3')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/b5e5383b-23ea-4af7-89b7-0f76c96d1210-C01-section-17-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner4.title4')}
                           subTitle={t('c01.carbanner4.subtitle4')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/b2157a6e-aa3a-4d70-8da7-4c514d57991e-C01-section-18-bg.jpg`}/>
                <CarBannerContentBottom content={carBottomContent}
                                        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/185d134a-e9a4-4ef1-9731-92ffd35fc9dd-C01-section-19-bg.jpg`}/>
                <CarSwiper content={carSwipper7}/>
                <CarContentFooter title={t('c01.carcontentfooter.title')} subTitle={t('c01.carcontentfooter.subtitle')}
                                  bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a5c21aec-6a91-4953-b46d-e80e16646baf-C01-section-21-bg.jpg`}/>
                <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                    <div className="container pb-10 mx-auto">
                        <p className={'text-[30px] font-semibold text-white'}>{t('picture')}</p>

                    </div>
                    <div
                        className={'overflow-x-hidden w-full  relative flex flex-col md:flex-row  md:h-[90vh] gap-y-6'}>
                        {
                            carSwipper8?.map((item, ind) => (
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

    )
}

export default C01
