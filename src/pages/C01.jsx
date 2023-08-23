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

const characteristics = {
    title: 'Technology and Natural Aesthetics',
    subTitle: ' Innovative technology integrated for the gentle,elegant appearance Creating a rich "vehicle style"',
    about: [
        {
            title: "lenght",
            text: "5050"
        },
        {
            title: "width",
            text: "1902"
        },
        {
            title: "height",
            text: "1509"
        },
        {
            title: "wheelbase",
            text: "2930"
        }
    ]
}


const disclaimers = [
    '*1 The data are for reference only as there may be errors due to manual measurement.',

    "*2*3 *4*10*11Some configurations are optional for users and not standard when the vehicle is off the assembly line."
    ,
    '*6 The wind resistance coefficient shown in the advertisement/page is from the test result of CATARC (Tianjin) Automotive Engineering Research Institute Co., Ltd. *7*8*9'
    ,
    'Some features may not be available immediately upon vehicle delivery. They will be gradually enabled by remote OTA update in the future.',
    '*5 The time required from 0 to 100 km/h shown on the page is from the test result of CATARC Automotive Test Center (Ningbo) Co., Ltd. for the 4WD dual-motor high-performance model.'
    ,

    "*7 The Leapmotor Pilot intelligent driving assistance system cannot completely replace the driver's control, nor fully cope with all possible situations that may arise from traffic, weather and road conditions. The driver is required to maintain the necessary duty of care at all times and to intervene or take over in a timely manner according to the surrounding environment. In the case of complex traffic conditions, bad weather, special road conditions and etc., it is necessary to choose and use it carefully.",

    "*11The range shown on the page is from the test result of the National Passenger Car Quality Supervision and Test Center for the RWD ultra-long-range model."
    ,
    "*12 Meditation mode and Camping mode will be released through OTA by Q2 2023"
    ,
    "*13 The contents shown on the page are prepared based on the vehicle configuration status information at the time of preparation. The actual vehicle may differ from the introductory information to some extent due to some objective reasons, such as the continuous changes in laws and regulations, different understanding of relevant information by individuals, and possible late update of introductory information. Please refer to actual vehicles on sale."
    ,
    '*14 Leapmotor reserves the right to interpret and change product information such as technical parameters and configuration within the law.'
]

const carSwipper1 = [
    {
        title: 'Energetic Curved Body',
        subTitle: 'Reduces wind resistance coefficient，showing a strong sense of science and technology',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/18c2109a-4996-460e-a16e-775a84ddee18-C01-section-4-slider-1-4bg.jpg`,
    },
    {
        title: 'Through Headlamp',
        subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0fca70d1-6658-44f9-b6a6-fea407043515-C01-section-4-slider-1-5bg.jpg`,
    },
    {
        title: 'Frameless Door',
        subTitle: 'Front laminated silent glass rear privacy glass',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0e56a5ed-533f-43ea-b3cc-183069fde3c1-C01-section-4-slider-1-1bg.jpg`
    },
    {
        title: 'Frameless Door',
        subTitle: 'Front laminated silent glass rear privacy glass',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7094a559-efab-459b-bfb1-6a4f6e96865b-C01-section-4-slider-1-2bg.jpg`
    },
    {
        title: 'Flush Door Handle',
        subTitle: 'Reduces wind resistance coefficient，showing a strong sense of science and technology',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c4cc8226-0933-4a12-a5c5-19180b1d5871-C01-section-4-slider-1-3bg.jpg`
    }
]

const carSwipper2 = [
    {
        title: 'Hollow Headrests for Front Seats',
        subTitle: 'Broad space and strong sense of fashion',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/03978497-5c57-48d7-b3f5-dd7b1ed37552-C01-section-6-slider-1-4bg.jpg`,
    },
    {
        title: 'Suede Roof',
        subTitle: 'Softer and tender',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5a8ad784-8bc2-4a17-89f8-a6f0be25d42a-C01-section-6-slider-1-5bg.jpg`,
    },
    {
        title: 'Panoramic Glass Roof',
        subTitle: 'Coated heat-insulating glass,with a total area of 1.31 ㎡*',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/06fd9c11-74e6-4790-800b-bd753959eca9-C01-section-6-slider-1-1bg.jpg`
    },
    {
        title: 'Suspended Door Handle + Electric Door Opening from the Interior',
        subTitle: 'One-button auto unlocking',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7a500359-921d-4762-a020-ed2b4f29c5aa-C01-section-6-slider-1-2bg.jpg`
    },
    {
        title: 'Nappa leather seat*',
        subTitle: 'Exquisite, luxurious',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6687cf48-d19b-4dcd-9674-8457ac05eb7e-C01-section-6-slider-1-3bg.jpg`
    }
]
const carSwipper3 = [
    {
        title: 'Smart Connection',
        subTitle: 'Watch-based car control, all at your fingertips',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3978b103-5203-4305-935a-90c728bb6e40-C01-section-7-slider-1-2bg.jpg`,
    },
    {
        title: 'Smart Connection',
        subTitle: 'Mobile phone interConnection, a car steward at hand',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3325ff16-020d-4b3d-8aec-fa259a08989b-C01-section-7-slider-1-1bg.jpg`,
    },
    {
        title: 'Smart Connection',
        subTitle: 'Watch-based car control, all at your fingertips',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3978b103-5203-4305-935a-90c728bb6e40-C01-section-7-slider-1-2bg.jpg`
    },
    {
        title: 'Smart Connection',
        subTitle: 'Mobile phone interConnection, a car steward at hand',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3325ff16-020d-4b3d-8aec-fa259a08989b-C01-section-7-slider-1-1bg.jpg`
    }
]

const carSwipper4 = [
    {
        title: 'Quiet Space',
        subTitle: '135 improved NVH special items',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/8312fd36-8737-4a9f-99d5-6e8a826b5f57-C01-section-9-slider-1-3bg.jpg`,
    },
    {
        title: 'CEO Seat*',
        subTitle: 'One-button control for front and rear seat linkage',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7e0c54dd-b9be-41fb-89e4-03984e953d12-C01-section-9-slider-1-1bg.jpg`,
    },
    {
        title: 'Smart Massage Seat*',
        subTitle: 'Relaxes your tight muscles caused by long-term seating',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7518ebbd-dc36-42ed-af64-7ce21ab869b5-C01-section-9-slider-1-2bg.jpg`
    }
]

const carSwipper5 = [
    {
        title: 'Front Double Wishbone / Rear Five Link',
        subTitle: 'Accurate and reliable control, providing excellent driving experience',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d8e81c64-7716-4d53-a0a5-2edff10a2526-C01-section-13-slider-1-2bg.jpg`,
    },
    {
        title: 'Acceleration from 0 to 100km/h in just over 3s*',
        subTitle: 'Rivaling the acceleration and driving control of professional racing vehicles',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7e40fe58-61f5-4d54-9605-47f00c0a63ee-C01-section-13-slider-1-3bg.jpg`,
    },
    {
        title: 'Ultra-low wind resistance: 0.226Cd *',
        subTitle: '16 optimized aerodynamic design items, presenting leading aerodynamic performance',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/51a72064-69b6-4cd9-844e-054af6c09af5-C01-section-13-slider-1-1bg.jpg`
    }
]

const carSwipper6 = [
    {
        title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
        subTitle: 'Automatic Emergency BraKing（AEB)',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0db43d37-0038-4fb0-b9c9-54255155ac49-C01-section-15-slider-1-5bg.jpg`,
    },
    {
        title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
        subTitle: 'NPA Intelligent Navigation Assistance*',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/606516e3-028d-413a-b80b-c40e08b44e8c-C01-section-15-slider-1-1bg.jpg`,
    },
    {
        title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
        subTitle: 'APA Intelligent parking system',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e96d6a69-e9c2-4327-b47f-035234fe58a5-C01-section-15-slider-1-2bg.jpg`
    },
    {
        title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
        subTitle: 'Automatic Lane Change Assistance（ALC）',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c387ee53-c353-460a-8874-4f623ccc095e-C01-section-15-slider-1-3bg.jpg`
    },
    {
        title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
        subTitle: 'Traffic Jam Assist（TJA）',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d641c800-eaff-45ca-9b80-11f095f3f963-C01-section-15-slider-1-4bg.jpg`
    }
]

const carSwipper7 = [
    {
        title: 'Excellent Quality, High Safety',
        subTitle: 'SRS System 2 front main airbags, 2 front side airbags 2 front-rear integrated side curtain airbags',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6fcb0581-c1eb-4bae-9927-5bee33704446-C01-section-20-slider-1-1bg.jpg`,
    },
    {
        title: 'Cloud AI BMS',
        subTitle: 'Cloud AI BMS Prolongs battery life and improves battery performance',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/98c12efa-cad6-4caf-baa4-fe64d64b8cc8-C01-section-20-slider-1-2bg.jpg`,
    },
    {
        title: 'Excellent Quality, High Safety',
        subTitle: 'High-strength Coupe Body 73.9% high strength steel, 24.1% thermoforming steel*',
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
        title: 'Guardian/Nap/ECO/Meditation/Camping*',
        subTitle: 'the five scenario modes give you intimate care'
    },
    {
        title: 'New 3D "Xiaoling" Virtual Image',
        subTitle: 'User-friendly, smart voice assistant'
    }
]

const C01 = () => {


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
                    text={'Leapmotor C01 Advance your life– Deluxe Technology Electric Vehicle'}/>

                <CarCharacteristics
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/32b56318-d01e-477e-b75d-1bcb823dde04-C01-section-2-bg.jpg`}
                    characteristics={characteristics}/>


                <CarBanner title={'Simplicity'} subTitle={'Simple, elegant styling'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/bad5f69f-3de0-4ab3-ba9b-821151127dad-C01-section-3-bg.jpg`}/>
                <CarSwiper content={carSwipper1}/>
                <CarBanner title={'Impeccable Experience'}
                           subTitle={'Focusing on high-end quality，and satisfying various needs'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/46cff7b1-ee9b-4a5c-b5a1-3a0938c11259-C01-section-5-bg.jpg`}/>
                <CarSwiper content={carSwipper2}/>
                <CarSwiper content={carSwipper3}/>
                <CarBanner title={'AI Face Recognition Adaptive System'}
                           subTitle={'Up to 8 face IDs can be set to give your family an exclusive sense of security'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/30019250-262c-48e6-bc00-24c6702b4dd2-C01-section-8-bg.jpg`}/>
                <CarSwiper content={carSwipper4}/>
                <CarBanner title={'Leisure Scenario'} subTitle={'Poised to Drive with Confidence'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e398c0e4-61bc-4aab-a570-83dc04cbdd9d-C01-section-10-bg.jpg`}/>
                <CarBanner title={'CTC Technology'}
                           subTitle={'High integration of battery and chassis Advanced technical solution that improves the EV range, performance and safety'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/cddff61c-1e1b-4206-be40-c374abc798cf-C01-section-11-bg.jpg`}/>
                <CarBanner title={'100% Independently Developed Variable-structured Oil-cooled Electric Drive Assembly'}
                           subTitle={'Max. power: 200 kW，Design compatible torque: 300 N·m - 500 N·m Max. speed: 16,000 rpm，Design life: 1,000,000 km'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7bb8b225-df81-4e77-b018-b28514246559-C01-section-12-bg.jpg`}/>
                <CarSwiper content={carSwipper5}/>
                <CarBanner title={'Leapmotor Pilot Intelligent Driving Assistance System*'}
                           subTitle={'Comprehensively use the intelligent driving assistance system at chip level and use a complete set of intelligent driving assistance solutions with completely independent intellectual property rights　'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e856ae06-84bf-4332-8a55-2130d9d90809-C01-section-14-bg.jpg`}/>
                <CarSwiper content={carSwipper6}/>
                <CarBanner title={'Immersive Music Cabin*'}
                           subTitle={'ARKAMYS 3D Sound 6 sound modes providing a more immersive experience'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/76045aab-832d-4b30-a863-cb965f4fa2c4-C01-section-16-bg.jpg`}/>
                <CarBanner title={'CLTC Range: 717 km*'}
                           subTitle={'Ultra-large-capacity power battery, meeting the needs of multiple scenarios and long-distance travel'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/b5e5383b-23ea-4af7-89b7-0f76c96d1210-C01-section-17-bg.jpg`}/>
                <CarBanner title={'AI Super Smart Cockpit'}
                           subTitle={'Third-generation Qualcomm Snapdragon 8155P chip, realizing three-screen interaction'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/b2157a6e-aa3a-4d70-8da7-4c514d57991e-C01-section-18-bg.jpg`}/>
                <CarBannerContentBottom content={carBottomContent}
                                        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/185d134a-e9a4-4ef1-9731-92ffd35fc9dd-C01-section-19-bg.jpg`}/>
                <CarSwiper content={carSwipper7}/>
                <CarContentFooter title={'Leapmotor C01'} subTitle={'Advance Your Life'}
                                  bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a5c21aec-6a91-4953-b46d-e80e16646baf-C01-section-21-bg.jpg`}/>
                <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                    <div className="container mx-auto pb-10">
                        <p className={'text-[30px] font-semibold text-white'}>Picture</p>

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
