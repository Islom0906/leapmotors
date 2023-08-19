
import {
  CarBanner,
  CarBannerContentBottom,
  CarCharacteristics,
  CarContentFooter,
  CarDetailBanner,
  CarSwiper,
  CarSwiperInner,
  CarText, HoverCard
} from '@/components'
import sectionC01  from '/public/section-2-logo.png'
import sectionC01bg  from '/public/section-bg-2.png'
import Head from "next/head";
import {useEffect} from "react";
import AOS from "aos";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const characteristics = {
  title : 'Technology and Natural Aesthetics',
  subTitle : ' Innovative technology integrated for the gentle,elegant appearance Creating a rich "vehicle style"',
  about: {
    lenght: '5050',
    width: '1902',
    height: '1509',
    wheelbase: '2930'
  }
}


const disclaimers= [
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
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d7e2636a-9f09-41e7-b138-bdb0dbbd515d-slide-1-bg-1.jpg`,
  },
  {
    title: 'Through Headlamp',
    subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c025fb0c-5a42-465f-8d43-f9d4c5f46d04-slide-1-bg-2.jpg`,
  },
  {
    title: 'Frameless Door',
    subTitle: 'Front laminated silent glass rear privacy glass',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/4b6469d6-3f66-4267-8395-87a49133a773-slide-1-bg-3.jpg`
  }
]

const carSwipper2 = [
  {
    title: 'Hollow Headrests for Front Seats',
    subTitle: 'Broad space and strong sense of fashion',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/74a540db-b00e-4029-9a7c-712e6d7e1214-slide-2-bg-4.jpg`,
  },
  {
    title: 'Suede Roof',
    subTitle: 'Softer and tender',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/b2e8605a-e7fa-49e0-adff-c2b88e7fb482-slide-2-bg-5.jpg`,
  },
  {
    title: 'Panoramic Glass Roof',
    subTitle: 'Coated heat-insulating glass,with a total area of 1.31 ㎡*',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/4b6469d6-3f66-4267-8395-87a49133a773-slide-1-bg-3.jpg`
  },
  {
    title: 'Suspended Door Handle + Electric Door Opening from the Interior',
    subTitle: 'One-button auto unlocking',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d64b52c8-a842-4a6b-a996-d411a34d5552-slide-2-bg-2.jpg`
  },
  {
    title: 'Nappa leather seat*',
    subTitle: 'Exquisite, luxurious',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c365fbc5-a4b2-463c-ab44-aa5259b88ecd-slide-2-bg-3.jpg`
  }
]
const carSwipper3 = [
  {
    title: 'Smart Connection',
    subTitle: 'Watch-based car control, all at your fingertips',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e679b6c9-1a6b-458c-90cd-6bab16a788f7-slide-3-bg-2.jpg`,
  },
  {
    title: 'Smart Connection',
    subTitle: 'Mobile phone interConnection, a car steward at hand',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/fd6e3f67-bad3-45bb-a651-0a73414a7791-slide-3-bg-1.jpg`,
  },
  {
    title: 'Smart Connection',
    subTitle: 'Watch-based car control, all at your fingertips',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e679b6c9-1a6b-458c-90cd-6bab16a788f7-slide-3-bg-2.jpg`
  },
  {
    title: 'Smart Connection',
    subTitle: 'Mobile phone interConnection, a car steward at hand',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/fd6e3f67-bad3-45bb-a651-0a73414a7791-slide-3-bg-1.jpg`
  }
]

const carSwipper4 = [
  {
    title: 'Quiet Space',
    subTitle: '135 improved NVH special items',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a3402ce4-ffb0-4e51-9054-b06bb6753886-slide-4-bg-3.jpg`,
  },
  {
    title: 'CEO Seat*',
    subTitle: 'One-button control for front and rear seat linkage',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/55bbacbe-ed1b-4123-b99d-c56497bdc76e-slide-4-bg-1.jpg`,
  },
  {
    title: 'Smart Massage Seat*',
    subTitle: 'Relaxes your tight muscles caused by long-term seating',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/ade2f728-f80b-473f-bc10-41099ad283a4-slide-4-bg-2.jpg`
  }
]

const carSwipper5 = [
  {
    title: 'Front Double Wishbone / Rear Five Link',
    subTitle: 'Accurate and reliable control, providing excellent driving experience',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/b2e610fe-2000-4319-b7f5-502f0e2bde38-slide-5-bg-2.jpg`,
  },
  {
    title: 'Acceleration from 0 to 100km/h in just over 3s*',
    subTitle: 'Rivaling the acceleration and driving control of professional racing vehicles',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e33dea55-7020-451f-b285-3669725e2691-slide-5-bg-3.jpg`,
  },
  {
    title: 'Ultra-low wind resistance: 0.226Cd *',
    subTitle: '16 optimized aerodynamic design items, presenting leading aerodynamic performance',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3dfdb7e7-4f59-4070-9f39-94c5312bec44-slide-5-bg-1.jpg`
  }
]

const carSwipper6 = [
  {
    title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
    subTitle: 'Automatic Emergency BraKing（AEB)',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/08087a35-2b0e-4ee9-956c-258a090514e4-slide-6-bg-1.jpg`,
  },
  {
    title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
    subTitle: 'NPA Intelligent Navigation Assistance*',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/2a029e40-154c-4828-a9a7-0f6751f781f9-slide-6-bg-2.jpg`,
  },
  {
    title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
    subTitle: 'APA Intelligent parking system',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e97af020-6e02-412f-bc8f-e5fd84193b66-slide-6-bg-3.jpg`
  },
  {
    title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
    subTitle: 'Automatic Lane Change Assistance（ALC）',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f6bbc0a6-1580-43be-ad01-1e6094759045-slide-6-bg-4.jpg`
  },
  {
    title: '28 High-precision Sensors, Standard for the Whole Series Realize 23 autonomous driving features*',
    subTitle: 'Traffic Jam Assist（TJA）',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/13691b1f-0f5a-4b46-90c9-1f81427383c1-slide-6-bg-5.jpg`
  }
]

const carSwipper7 = [
  {
    title: 'Excellent Quality, High Safety',
    subTitle: 'SRS System 2 front main airbags, 2 front side airbags 2 front-rear integrated side curtain airbags',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/1f0ba090-6cf4-4bca-a8d2-674290f5ec34-slide-7-bg-3.jpg`,
  },
  {
    title: 'Cloud AI BMS',
    subTitle: 'Cloud AI BMS Prolongs battery life and improves battery performance',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/323eb593-057a-41a7-b074-cb17f692722a-slide-7-bg-2.jpg`,
  },
  {
    title: 'Excellent Quality, High Safety',
    subTitle: 'High-strength Coupe Body 73.9% high strength steel, 24.1% thermoforming steel*',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/8bd91168-43f7-416b-85a5-3b9ad5531094-slide-7-bg-1.jpg`
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
    title : 'New 3D "Xiaoling" Virtual Image',
    subTitle: 'User-friendly, smart voice assistant'
  }
]

const C01 = () => {


  useEffect(() => {
    AOS.init({
      once:true
    });
  }, []);

  return (
      <>
        <Head>
          <title>Leapmotor-C01</title>
          <meta property='og:title' content="Leapmotor uz C01, Leapmotor uzbekistan C01,Leap-motor C01"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/brand.png"/>
        </Head>
    <main className={'bg-black'}>
      <CarDetailBanner img={`${process.env.NEXT_PUBLIC_API_URL}/media/e370fbc7-ad3c-4828-a089-2d424e67c0ac-section-2-logo.png`} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/72daca64-6efb-428c-8513-b2b4aa013a92-section-bg-2.png`} text={'Leapmotor C01 Advance your life– Deluxe Technology Electric Vehicle'}/>
      
      <CarCharacteristics bg={`${process.env.NEXT_PUBLIC_API_URL}/media/575d6f9b-e2a7-4225-acc1-27a2c30c3ba4-section-2-bg.jpg`} characteristics={characteristics} />


    <CarBanner title={'Simplicity'} subTitle={'Simple, elegant styling'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/f1a7c0d1-7054-48f5-8d86-82720a487129-section-3-bg.jpg`}/>
    <CarSwiper content={carSwipper1} />
    <CarBanner title={'Impeccable Experience'} subTitle={'Focusing on high-end quality，and satisfying various needs'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/33d3adcf-5aac-4834-aaf0-c04da62e166c-section-5-bg.jpg`}/>
    <CarSwiper content={carSwipper2} />
    <CarSwiper content={carSwipper3} />
    <CarBanner title={'AI Face Recognition Adaptive System'} subTitle={'Up to 8 face IDs can be set to give your family an exclusive sense of security'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/8e2a869e-746e-48a3-9180-4e6579da5c20-section-8-bg.jpg`}/>
    <CarSwiper content={carSwipper4} />
    <CarBanner title={'Leisure Scenario'} subTitle={'Poised to Drive with Confidence'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/02abe93e-bfee-4076-87a1-1634e7a55ec5-section-10-bg.jpg`}/>
    <CarBanner title={'CTC Technology'} subTitle={'High integration of battery and chassis Advanced technical solution that improves the EV range, performance and safety'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/cee2c13e-6d39-451e-b01a-ad5554812516-section-11-bg.jpg`}/>
    <CarBanner title={'100% Independently Developed Variable-structured Oil-cooled Electric Drive Assembly'} subTitle={'Max. power: 200 kW，Design compatible torque: 300 N·m - 500 N·m Max. speed: 16,000 rpm，Design life: 1,000,000 km'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/cc4eba44-b71e-4b39-96c4-40828d61f370-section-12-bg.jpg`}/>
    <CarSwiper content={carSwipper5} />
    <CarBanner title={'Leapmotor Pilot Intelligent Driving Assistance System*'} subTitle={'Comprehensively use the intelligent driving assistance system at chip level and use a complete set of intelligent driving assistance solutions with completely independent intellectual property rights　'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/63866df6-cef7-46c8-a425-161e73b01f29-section-14-bg.jpg`}/>
    <CarSwiper content={carSwipper6} />
    <CarBanner title={'Immersive Music Cabin*'} subTitle={'ARKAMYS 3D Sound 6 sound modes providing a more immersive experience'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/ac3941bf-52b7-41a4-b75c-533fa7d16d19-section-16-bg.jpg`}/>
    <CarBanner title={'CLTC Range: 717 km*'} subTitle={'Ultra-large-capacity power battery, meeting the needs of multiple scenarios and long-distance travel'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/53ab7a61-6c67-4c99-999e-78ba68aa55df-section-17-bg.jpg`}/>
    <CarBanner title={'AI Super Smart Cockpit'} subTitle={'Third-generation Qualcomm Snapdragon 8155P chip, realizing three-screen interaction'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/94126ddf-6dd8-4cdf-a502-322eba0bb61f-section-18-bg.jpg`}/>
    <CarBannerContentBottom content={carBottomContent} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/9baa7010-3d41-4bc1-8730-09112821f4f0-section-19-bg.jpg`} />
    <CarSwiper content={carSwipper7}  />
    <CarContentFooter title={'Leapmotor C01'} subTitle={'Advance Your Life'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c8d40601-b059-4056-a2d6-d2e61ddb1fe7-section-21-bg.jpg`} />
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

    <CarText content={disclaimers} />
    </main>
      </>

  )
}

export default C01
