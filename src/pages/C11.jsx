import {CarCharacteristics, CarSwiper, CarBanner, CarText, HoverCard} from "@/components"
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useTranslation} from "react-i18next";

const C11 = () => {
    const {t}=useTranslation()
const characteristics1 = {
    title: t('C11.section1.title'),
    subTitle: t('C11.section1.subTitle'),
    about: [
        {
            title:t('C11.section1.about.title1'),
            text:t('C11.section1.about.text1')
        },
        {
            title:t('C11.section1.about.title2'),
            text:t('C11.section1.about.text2')
        },
        {
            title:t('C11.section1.about.title3'),
            text:t('C11.section1.about.text3')
        },
        {
            title:t('C11.section1.about.title4'),
            text:t('C11.section1.about.text4')
        }
    ]
}
const characteristics2 = {
    title: '',
    priceCountry:"Reference Price in China",
    subTitle: '',
    about: [
        {
            title:t('C11.section2.about.title1'),
            text:t('C11.section2.about.text1')
        },
        {
            title:t('C11.section2.about.title2'),
            text:t('C11.section2.about.text2')
        },
        {
            title:t('C11.section2.about.title3'),
            text:t('C11.section2.about.text3')
        },
        {
            title:t('C11.section2.about.title4'),
            text:t('C11.section2.about.text4')
        }
    ]
}

const carSwipper1 = [
    {
        title: t('C11.section3.title1'),
        subTitle: t('C11.section3.subTitle1'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/23337230-0163-43b0-9493-01f01ec23167-C11-section-3-slider-1-2bg.jpg`,
    },
    {
        title: t('C11.section3.title2'),
        subTitle:t('C11.section3.subTitle2'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bb01e599-9cc4-4cb7-8d98-6ddb61521708-C11-section-3-slider-1-3bg.jpg`,
    },
    {
        title: t('C11.section3.title3'),
        subTitle: t('C11.section3.subTitle3'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/b36d9ec0-a7d5-42df-a312-851704b1f11c-C11-section-3-slider-1-1bg.jpg`,
    }
]
const carSwipper2 = [
    {
        title: t('C11.section4.title1'),
        subTitle: t('C11.section4.subTitle1'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/2eee31cd-e306-4bda-8a78-992ec9637bc4-C11-section-4-slider-1-1bg.jpg`,
    },
    {
        title: t('C11.section4.title2'),
        subTitle: t('C11.section4.subTitle2'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f557c7ff-d137-43aa-b975-421bbdf19243-C11-section-4-slider-2bg.jpg`,
    },

]
const carSwipper3 = [
    {
        title: t('C11.section5.title1'),
        subTitle: t('C11.section5.subTitle1'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/17ce7405-cb69-4e26-b9b1-555d2c5fe070-C11-section-5-slider-1bg.jpg`,
    },
    {
        title: t('C11.section5.title2'),
        subTitle: t('C11.section5.subTitle2'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f5fb5d5f-c108-45a7-b79e-043dd225b058-C11-section-5-slider-1-3bg-min.jpg`,
    },
    {
        title: t('C11.section5.title3'),
        subTitle: t('C11.section5.subTitle3'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/945c2f54-3920-4c61-851c-2f7dd32371d3-C11-section-5-slider-1-2bg.jpg`,
    },

]

const carSwipper4 = [
    {
        title: t('C11.section9.title1'),
        subTitle: t('C11.section9.subTitle1'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3c99beed-4ac7-4643-bf59-b53bb7779636-C11-section-10-slider-1-1bg.jpg`,
    },
    {
        title: t('C11.section9.title2'),
        subTitle: t('C11.section9.subTitle2'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/124ff533-f4d3-4a25-948a-a6eb1f558d6c-C11-section-10-slider-1-2bg.jpg`,
    }
]

const carSwipper5 = [
    {
        title: t('C11.section10.title1'),
        subTitle: t('C11.section10.subTitle1'),
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/8bd90ef7-58de-47d8-95fd-5a0a168a19b5-C11-section-11-slider-1-1bg.jpg`,
    },
    {
        title: t('C11.section10.title2'),
        subTitle: t('C11.section10.subTitle2'),

        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bb59b523-8982-4113-8be6-969379e6f826-C11-section-11-slider-1-2bg.jpg`,
    }
]

const carSwipper6 = [
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d0cd8b94-d99a-4530-a1d6-f25256b2b921-slide-gallery-3.jpg`,
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/adceae5f-ba4e-4e47-ab99-922eebcbb878-C11-section-2-bg.jpg`
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f338e05f-8ab3-45d4-aa4e-247e0909045e-slide-gallery-1.jpg`
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/2eee31cd-e306-4bda-8a78-992ec9637bc4-C11-section-4-slider-1-1bg.jpg`,
    },

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
                <title>Leap-Motor C11</title>
                <meta property='og:title' content="Leapmotor uz C11, Leapmotor uzbekistan C11,Leap-motor C11"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <main className={'bg-black'}>
                <CarCharacteristics
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/41e0fc8d-704a-493a-b7fc-cb2f23a1a20f-index-4-section-bg.jpg`}
                    logo={`${process.env.NEXT_PUBLIC_API_URL}/media/ab46d0a8-9d58-41e8-ba6d-06d50dadcc3d-logo-C11.png`}
                    characteristics={characteristics1}/>
                <CarCharacteristics
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/adceae5f-ba4e-4e47-ab99-922eebcbb878-C11-section-2-bg.jpg`}
                    characteristics={characteristics2}/>
                <CarSwiper content={carSwipper1}/>
                <CarSwiper content={carSwipper2}/>
                <CarSwiper content={carSwipper3}/>
                <CarBanner center={true} title={t('C11.section6.title')}
                           subTitle={t('C11.section6.subTitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/4658f37f-4537-44d8-929c-dfbd6f1f3b71-C11-section-6-bg.jpg`}/>
                <CarBanner title={t('C11.section7.title')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/9f3c13fa-6810-468f-8f2d-56d9b24e60ce-C11-section-7-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/d7b5e1e5-fc7d-467e-a463-a6544e57b8e8-C11-section-7-bg-responsive.jpg`}/>
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/0bc23872-9c09-4034-82cf-1b411cd67d4c-C11-section-8-bg.jpg`}
                    bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/72879c1c-b942-4453-85e6-d468b6869282-C11-section-8-bg-responsive.jpg`}/>
                <CarBanner title={t('C11.section8.title')}
                           subTitle={t('C11.section8.subTitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/1e2cd239-f6b8-4890-8942-8552a239d10f-C11-section-9-bg.png`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c443ca09-0d4a-4541-b083-50382b7e0d8a-C11-section-9-bg-responsive.jpg`}/>
                <CarSwiper content={carSwipper4}/>
                <CarSwiper content={carSwipper5}/>
                <CarBanner title={t('C11.section11.title')}
                           subTitle={t('C11.section11.subTitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/2103fe1e-aafc-4c9d-9ded-bca0c97f20cd-C11-section-12-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/f18f4115-00d3-4e38-8f3f-333d119126a1-section-10-responsive.jpg`}
                />
                <CarBanner title={t('C11.section12.title')}
                           subTitle={t('C11.section12.subTitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c8900689-5ed3-4831-8e20-489b2b39a75f-C11-section-13bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/a2d228b8-2adc-4c3a-a0f3-ea06d91fd06a-section-11-responsive.jpg`}
                />
                <CarBanner title={t('C11.section13.title')}
                           subTitle={t('C11.section13.subTitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/59e651e7-77cb-41c5-b3d7-2564f1e979ba-C11-section-14-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/9eec51a3-4e30-4667-a880-af894dbcff11-section-12-responsive.jpg`}/>
                <CarBanner title={t('C11.section14.title')}
                           subTitle={t('C11.section14.subTitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/124bc9bb-1857-45fa-ab23-1a52e4115302-C11-section-15-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/21afa095-f51e-47b1-9b14-d1ff5e0275eb-section-13-responsive.jpg`}
                />
                <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                    <div className="container pb-10 mx-auto">
                        <p className={'text-[30px] font-semibold text-white'}>{t('picture')}</p>

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

    )
}

export default C11
