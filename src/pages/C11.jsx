import {CarCharacteristics, CarSwiper, CarBanner, CarText, HoverCard} from "@/components"
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
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/23337230-0163-43b0-9493-01f01ec23167-C11-section-3-slider-1-2bg.jpg`,
    },
    {
        title: 'Digital Technology Integrated with Natural Affinity',
        subTitle: 'Through-Type Digital Crystal Headlights Flush Door Handle* Wind resistance coefficient: 0.282cd',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bb01e599-9cc4-4cb7-8d98-6ddb61521708-C11-section-3-slider-1-3bg.jpg`,
    },
    {
        title: 'Digital Technology Integrated with Natural Affinity',
        subTitle: 'Frameless Door',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/b36d9ec0-a7d5-42df-a312-851704b1f11c-C11-section-3-slider-1-1bg.jpg`,
    }
]
const carSwipper2 = [
    {
        title: 'Panoramic Sunroof, Panoramic View　',
        subTitle: ' 14,932 cm² Panoramic Starry Roof* , 8% improved field of view* and 99.5% UV isolation rate',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/2eee31cd-e306-4bda-8a78-992ec9637bc4-C11-section-4-slider-1-1bg.jpg`,
    },
    {
        title: 'Panoramic Sunroof, Panoramic View',
        subTitle: '11,400 c㎡ Openable Panoramic Sunroof* Work on voice commands and automatically close on rainy days',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f557c7ff-d137-43aa-b975-421bbdf19243-C11-section-4-slider-2bg.jpg`,
    },

]
const carSwipper3 = [
    {
        title: '8 Well-Arranged Charging Units*',
        subTitle: 'Mobile phone wireless charging × 1 | front row USB × 2 | rear row TYPE-C × 2 front row 12 V outlet × 1 | Trunk 12 V power supply × 1 | V2L discharge outlet × 1',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/17ce7405-cb69-4e26-b9b1-555d2c5fe070-C11-section-5-slider-1bg.jpg`,
    },
    {
        title: '',
        subTitle: '',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c3e041b5-a755-4f56-b681-2baad3550bf9-C11-section-5-slider-1-3bg.jpg`,
    },
    {
        title: 'Rear-row Integrated Multimedia Control Panel*',
        subTitle: 'Seat heating, volume, A/C, song switching, and other functions are also under one key control of the rear passengers',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/945c2f54-3920-4c61-851c-2f7dd32371d3-C11-section-5-slider-1-2bg.jpg`,
    },

]

const carSwipper4 = [
    {
        title: 'Implementation of 23 Intelligent Driving Assist Functions*',
        subTitle: 'Low speed, congestion, expressway, parking, and more scenarios, catering to local driving styles',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3c99beed-4ac7-4643-bf59-b53bb7779636-C11-section-10-slider-1-1bg.jpg`,
    },
    {
        title: 'Implementation of 23 Intelligent Driving Assist Functions*',
        subTitle: 'Low speed, congestion, expressway, parking, and more scenarios, catering to local driving styles',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/124ff533-f4d3-4a25-948a-a6eb1f558d6c-C11-section-10-slider-1-2bg.jpg`,
    }
]

const carSwipper5 = [
    {
        title: '100% Independently Developed Variable-Structured Oil-Cooled Electric Drive, the First in the Industry',
        subTitle: 'Maximum power of 200 kW and designed compatible torque of 300–500 N·m Maximum speed of 16,000 rpm and designed service life of 1 million km',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bb59b523-8982-4113-8be6-969379e6f826-C11-section-11-slider-1-2bg.jpg`,
    },
    {
        title: 'High-Performance 4WD Pure Electric Platform Accelerating from 0 to 100 km/h only requires 3.94s*',
        subTitle: 'Powerful 4WD with Front and Rear Oil-Cooled Electric Drives for Constant Performance Peak power of 400 kW and maximum torque of 720 N·m',
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/8bd90ef7-58de-47d8-95fd-5a0a168a19b5-C11-section-11-slider-1-1bg.jpg`,
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
                <CarBanner center={true} title={'Impeccable Experience'}
                           subTitle={'Focusing on high-end quality，and satisfying various needs'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/4658f37f-4537-44d8-929c-dfbd6f1f3b71-C11-section-6-bg.jpg`}/>
                <CarBanner title={'Leapmotor OS 3.0 Smart Cockpit'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/9f3c13fa-6810-468f-8f2d-56d9b24e60ce-C11-section-7-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/d7b5e1e5-fc7d-467e-a463-a6544e57b8e8-C11-section-7-bg-responsive.jpg`}/>
                <CarBanner
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/0bc23872-9c09-4034-82cf-1b411cd67d4c-C11-section-8-bg.jpg`}
                    bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/72879c1c-b942-4453-85e6-d468b6869282-C11-section-8-bg-responsive.jpg`}/>
                <CarBanner title={'Leapmotor Pilot Intelligent Driving Assist Solution*'}
                           subTitle={'28 pieces of intelligent perception hardware support L3-level assisted driving 12 ultrasonic radars｜5 millimeter-wave radars 4 blind spot cameras｜1 face recognition camera｜4 surround view cameras 1 binocular camera (2 integrated cameras)'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/1e2cd239-f6b8-4890-8942-8552a239d10f-C11-section-9-bg.png`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c443ca09-0d4a-4541-b083-50382b7e0d8a-C11-section-9-bg-responsive.jpg`}/>
                <CarSwiper content={carSwipper4}/>
                <CarSwiper content={carSwipper5}/>
                <CarBanner title={'Perfectly Balanced Steadiness and Speed.Luxury Independent Suspension'}
                           subTitle={'Standard Front Double Wishbone / Rear Five Link Suspension Million-dollar luxury car driving experience, taking into account both comfort and controllability'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/2103fe1e-aafc-4c9d-9ded-bca0c97f20cd-C11-section-12-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/f18f4115-00d3-4e38-8f3f-333d119126a1-section-10-responsive.jpg`}
                />
                <CarBanner title={'Self-researched Through-Type Large Module Battery Pack'}
                           subTitle={'Battery Capacity: 69.2-89.97kWh* Average CLTC Range: 502–650 km'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c8900689-5ed3-4831-8e20-489b2b39a75f-C11-section-13bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/a2d228b8-2adc-4c3a-a0f3-ea06d91fd06a-section-11-responsive.jpg`}
                />
                <CarBanner title={'Self-researched AI Intelligent Battery Management System'}
                           subTitle={'Real-time Battery Monitoring and Pre-warning Thermal runaway BMS vehicle wake-up Full-time active protection via the vehicle and cloud'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/59e651e7-77cb-41c5-b3d7-2564f1e979ba-C11-section-14-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/9eec51a3-4e30-4667-a880-af894dbcff11-section-12-responsive.jpg`}/>
                <CarBanner title={'Superior Materials with Proven Dependability High-Strength Armor Body'}
                           subTitle={'High-strength steel utilization rate of 76.2%  Hot-formed steel utilization rate of 17.4%'}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/124bc9bb-1857-45fa-ab23-1a52e4115302-C11-section-15-bg.jpg`}
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
