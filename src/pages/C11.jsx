import {CarCharacteristics, CarSwiper, CarBanner, CarText, HoverCard} from "@/components"
import sectionC11 from '/public/section-3-logo.png'
import sectionC11bg from '/public/section-bg-3.jpg'
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


const characteristics1 = {
    title: 'Best-in-Class Smart Electric SUV',
    subTitle: '',
    about: {
        'Ultra-long range (CLTC)': '650km*',
        'Acceleration from 0 to 100 km/h': '3.94s*',
        'Utra long wheelbase': '2930mm\n',
        '23 intelligent driving assist functions': 'Leapmotor Pilot*'
    }
}
const characteristics2 = {
    title: 'Reference Price in China',
    subTitle: '',
    about: {
        'C11 500 Comfortable Vers': 'RMB 155,800',
        'C11 500 Smart Version': 'RMB 169,800',
        'C11 650 Smart Version': 'RMB 189,800',
        'C11 580 4WD Performance Version': 'RMB 209,800'
    }
}

const carSwipper1 = [
    {
        title: 'Digital Technology Integrated with Natural Affinity',
        subTitle: 'High-Performance Sports Wheel Hub',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e5a77f71-741f-41c8-b290-c66aac64af78-slider-1-2bg.jpg`,
    },
    {
        title: 'Digital Technology Integrated with Natural Affinity',
        subTitle: 'Through-Type Digital Crystal Headlights Flush Door Handle* Wind resistance coefficient: 0.282cd',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/36b1830d-edf9-4ac0-aa9f-d5e62c9a7a69-slider-1-3bg.jpg`,
    },
    {
        title: 'Digital Technology Integrated with Natural Affinity',
        subTitle: 'Frameless Door',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/87b5f845-7ae2-4459-869a-079178ba635b-slider-1bg.jpg`,
    }
]
const carSwipper2 = [
    {
        title: 'Panoramic Sunroof, Panoramic View　',
        subTitle: ' 14,932 cm² Panoramic Starry Roof* , 8% improved field of view* and 99.5% UV isolation rate',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c2ead447-62a8-468c-bb54-2706c1c4d24c-slide-2-bg.jpg`,
    },
    {
        title: 'Panoramic Sunroof, Panoramic View',
        subTitle: '11,400 c㎡ Openable Panoramic Sunroof* Work on voice commands and automatically close on rainy days',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/301a8992-2a3b-4ebb-9573-698d22167648-slider-2-1bg.jpg`,
    },

]
const carSwipper3 = [
    {
        title: 'Rear-row Integrated Multimedia Control Panel*',
        subTitle: ' Seat heating, volume, A/C, song switching, and other functions are also under one key control of the rear passengers',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/76314646-4135-49d7-a665-1287d03a0106-slider-1bg.jpg`,
    },
    {
        title: 'Panoramic Sunroof, Panoramic View',
        subTitle: '11,400 c㎡ Openable Panoramic Sunroof* Work on voice commands and automatically close on rainy days',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/648664ec-ef69-4145-a4e5-cb93702074da-slider-3-1bg.png`,
    },
    {
        title: 'Rear-row Integrated Multimedia Control Panel*',
        subTitle: '11,400 c㎡ Openable Panoramic Sunroof* Work on voice commands and automatically close on rainy days',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/30fafbbc-fbe7-4423-ba32-68c70d53677e-slider-3-2bg.jpg`,
    },

]

const carSwipper4 = [
    {
        title: 'Implementation of 23 Intelligent Driving Assist Functions*',
        subTitle: 'Low speed, congestion, expressway, parking, and more scenarios, catering to local driving styles',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/ff9eafe7-79c9-4ea4-825a-25fae0c752c0-slider-4bg.jpg`,
    },
    {
        title: 'Implementation of 23 Intelligent Driving Assist Functions*',
        subTitle: 'Low speed, congestion, expressway, parking, and more scenarios, catering to local driving styles',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/b4207b01-0131-4ea8-a367-4a4e607422a7-slider-4-1bg.jpg`,
    }
]

const carSwipper5 = [
    {
        title: '100% Independently Developed Variable-Structured Oil-Cooled Electric Drive, the First in the Industry',
        subTitle: 'Maximum power of 200 kW and designed compatible torque of 300–500 N·m Maximum speed of 16,000 rpm and designed service life of 1 million km',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a456b0e1-8ad9-4d01-a391-d4ba0655bd06-slider-5-1bg.jpg`,
    },
    {
        title: 'High-Performance 4WD Pure Electric Platform Accelerating from 0 to 100 km/h only requires 3.94s*',
        subTitle: 'Powerful 4WD with Front and Rear Oil-Cooled Electric Drives for Constant Performance Peak power of 400 kW and maximum torque of 720 N·m',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/eae27798-27ce-4895-bab8-8f0ac9eb968d-slider-5bg.jpg`,
    }
]

const carSwipper6 = [
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d37f7a34-dbfa-49d2-8ded-f2818472e9aa-section-bg-3.jpg`,
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/301a8992-2a3b-4ebb-9573-698d22167648-slider-2-1bg.jpg`
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d0cd8b94-d99a-4530-a1d6-f25256b2b921-slide-gallery-3.jpg`,
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f338e05f-8ab3-45d4-aa4e-247e0909045e-slide-gallery-1.jpg`
    }
]

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


const C11 = () => {

    return (
        <>
            <Head>
                <title>Leapmotor-C11</title>
                <meta property='og:title' content="Leapmotor uz C11, Leapmotor uzbekistan C11,Leap-motor C11"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <main className={'bg-black'}>
                <CarCharacteristics
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/d37f7a34-dbfa-49d2-8ded-f2818472e9aa-section-bg-3.jpg`}
                    logo={`${process.env.NEXT_PUBLIC_API_URL}/media/ab46d0a8-9d58-41e8-ba6d-06d50dadcc3d-logo-C11.png`}
                    characteristics={characteristics1}/>
                <CarCharacteristics
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/1c4200ba-24d4-4ebb-8d9c-497301dfbc2c-section-2bg.jpg`}
                    characteristics={characteristics2}/>
                <CarSwiper content={carSwipper1}/>
                <CarSwiper content={carSwipper2}/>
                <CarSwiper content={carSwipper3}/>
                <CarBanner center={true} title={'Impeccable Experience'}
                           subTitle={'Focusing on high-end quality，and satisfying various needs'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a38e2763-c558-4120-884d-5d9aacea7209-section-6bg.jpg`}/>
                <CarBanner title={'Leapmotor OS 3.0 Smart Cockpit'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/45b20ebd-b7ae-4a29-97ac-a95d4b2bb58f-section-7bg.png`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/41ee1a69-910a-48bd-8ad3-afeaa95b87f9-section-7bg-responsive.png`}/>
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7300b2f3-88ae-4e56-9e57-9bc42f9ad57d-section-8bg.jpeg`}
                    bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/a49621dd-a5de-40c7-a634-0691040c5fc4-section-8bg-responsive.png`}/>
                <CarBanner title={'Leapmotor Pilot Intelligent Driving Assist Solution*'}
                           subTitle={'28 pieces of intelligent perception hardware support L3-level assisted driving 12 ultrasonic radars｜5 millimeter-wave radars 4 blind spot cameras｜1 face recognition camera｜4 surround view cameras 1 binocular camera (2 integrated cameras)'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/16a4b157-f01d-4037-9e43-96deae35379b-section-9bg.png`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/9ec1da29-1441-4d0e-b11d-d0aa1974c77e-section-9bg-responsive.png`}/>
                <CarSwiper content={carSwipper4}/>
                <CarSwiper content={carSwipper5}/>
                <CarBanner title={'Perfectly Balanced Steadiness and Speed.Luxury Independent Suspension'}
                           subTitle={'Standard Front Double Wishbone / Rear Five Link Suspension Million-dollar luxury car driving experience, taking into account both comfort and controllability'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/92290950-a771-43e5-91d5-b903a9eb4ba6-section-10bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/f18f4115-00d3-4e38-8f3f-333d119126a1-section-10-responsive.jpg`}
                />
                <CarBanner title={'Self-researched Through-Type Large Module Battery Pack'}
                           subTitle={'Battery Capacity: 69.2-89.97kWh* Average CLTC Range: 502–650 km'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/da3f4d07-ba7d-4e44-9435-c3ba62607f93-section-11-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/a2d228b8-2adc-4c3a-a0f3-ea06d91fd06a-section-11-responsive.jpg`}
                />
                <CarBanner title={'Self-researched AI Intelligent Battery Management System'}
                           subTitle={'Real-time Battery Monitoring and Pre-warning Thermal runaway BMS vehicle wake-up Full-time active protection via the vehicle and cloud'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/1e24adc7-4c4e-4da1-8345-75aa704b83fb-section-12-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/9eec51a3-4e30-4667-a880-af894dbcff11-section-12-responsive.jpg`}/>
                <CarBanner title={'Superior Materials with Proven Dependability High-Strength Armor Body'}
                           subTitle={'High-strength steel utilization rate of 76.2% <br> Hot-formed steel utilization rate of 17.4%'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/ad4dc7ba-45ad-4bc6-a110-11cd8addadfa-section-13-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/21afa095-f51e-47b1-9b14-d1ff5e0275eb-section-13-responsive.jpg`}
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

    )
}

export default C11
