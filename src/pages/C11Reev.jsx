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
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { CarSwiperInner } from "@/components";
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";






const C11Reev = () => {
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
  const carSwipper3 = [
    
    {
      title: "6D Ergonomic Seat* ",
      subTitle: "Nappa leather seats*, 6-way electric adjustment for driver's seat + 4-way lumbar support adjustment*  Ventilated and heated front seats with spa-level 8-point intelligent massage*",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d1903d0f-0e8c-4cd8-9f61-7bf5624c9df5-C11-Reev-section-12-slider-1-2bg.jpg`,
    },
    {
      title: "Rear-row Integrated Multimedia Control Panel*",
      subTitle: "Seat heating, volume, A/C, song switching, and other functions are also under one key control of the rear passengers",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6d7c8da5-3e54-495b-a345-8df650c50773-C11-Reev-section-12-slider-1-1bg.jpg`,
    },
  ];
  const carSwipper4 = [
    
    {
      title: "Luxury Independent Suspension",
      subTitle: "Front Double Wishbone / Rear Five Link Suspension Million-dollar luxury car driving experience, taking into account both comfort and controllability",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/07b7c1e6-e2e5-4b42-b1cb-6f47d23f1e3c-C11-Reev-section-16-slider-1-3bg.jpg`,
    },
    {
      title: "100% Independently Developed Variable-Structured Oil-Cooled Electric Drive, the First in the Industry",
      subTitle: "Maximum power of 200 kW     Designed compatible torque of 300—500 N·m Maximum speed of 16,000 rpm    Designed service life of 1 million km",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6713a7ab-04a3-4d33-a65d-6daa1f7bb466-C11-Reev-section-16-slider-1-1bg.jpg`,
    },
    {
      title: "100% Self-Developed Direct-Drive Oil-Cooled Extended-Range Generator System",
      subTitle: "110 kW/88 kW platform development Characterized by low noise and efficient matching of engine fuel",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5622e412-6d49-4723-90a6-267c69274305-C11-Reev-section-16-slider-1-2bg.jpg`,
    },
  ];
  const carSwipper5 = [
    
    {
      title: "Self-Developed AI Intelligent Battery Management System",
      subTitle: "Real-time monitoring of battery data, supporting early warning, and full-time active protection via the vehicle and cloud Thermal runaway BMS wakes up the vehicle and provides advanced early warning protection",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bda884f2-ee12-4c6c-b24f-a3a533930795-C11-Reev-section-18-slider-1-1bg.jpg`,
    },
    {
      title: "Self-Developed Through-Type Large Module Battery Pack",
      subTitle: "Large battery capacity of 43.74 kWh* The maximum CLTC battery endurance of 285 km*",
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
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Traffic Jam Assist (TJA)',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/341b133c-3ad4-4cda-a61f-6ce801cfe26a-16-3.mp4`
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Lane Change Assist (ALC)',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/7d7aec9e-85fc-424e-bd9c-d623498584a3-section-16-slide2.mp4`
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'SDIS Narrow Lane Assist System',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/eb4f0222-5ea3-4228-ad53-468ccb3d4618-section-16-slide3.mp4`
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Lane Change Alert (LCA)',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/a2dd8ae3-a67b-469d-8c5b-1540a7db6d16-section-16-slide4.mp4`
    },
  ]

  const carSwipper2 = [
    {
      title: "Flush Door Handle*",
      subTitle:
        "It improves the aerodynamic performance of the vehicle and reduces the wind resistance",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c3e21933-b421-4540-9b54-882cd2930afe-C11-Reev-section-7-slider-1-1bg.jpg`,
    },
    {
      title: "Time Capsule Sporty Front Head",
      subTitle: "23 high-power LEDs respectively on both sides, a new grille design, simple and powerful",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c781fd9e-1d86-477a-a8fc-f708ca452dc7-C11-Reev-section-7-slider-1-2bg.jpg`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front double-layer silent glass to make it quieter*",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e9f38cb7-79ef-498b-afee-e3f870305a25-C11-Reev-section-7-slider-1-3bg.jpg`,
    },
    {
      title: "Smooth Through-Type Taillights*",
      subTitle: "182 LED rear taillights create smooth and dynamic lighting effects in one go",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a51187c2-1118-4652-9f02-4992bf50409a-C11-Reev-section-7-slider-1-4bg.jpg`,
    },
  ];
  const carSwipper1 = [
    {
      title: "So \"Big\" as to Hold the Happy Family",
      subTitle: "Trunk volume is 375 L Fold the rear row forward and the trunk can be expanded up to 840 L",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/520256cf-35ef-4ecc-a953-793bbdc98ff7-C11-Reev-section-5-slider-1-1bg.jpg`,
    },
    {
      title: "Luxury Five Seats",
      subTitle:
        "Reduces wind resistance coefficient，showing a strong sense of science and technology",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/236c60a0-0d43-489d-9d2a-c7f7738c6598-C11-Reev-section-5-slider-1-2bg.jpg`,
    },
    {
      title: "Long Wheelbase and Large Space",
      subTitle: "Wheelbase of 2,930 mm, with encircling cockpit Be it sitting or lying, enjoy a great comfort",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/4dc447c6-9b74-4096-b0a1-fea07ba1032d-C11-Reev-section-5-slider-1-3bg.jpg`,
    }
  ];


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
          <meta property='og:title' content="Leapmotor uz C11REEV, Leapmotor uzbekistan C11REEV,Leap-motor C11REEV"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/brand.png"/>
        </Head>
    <main className={'bg-black'}>
       <CarDetailBanner
        imgLong={true}
        img={`${process.env.NEXT_PUBLIC_API_URL}/media/7761680e-347d-47c4-a96a-4eccfd8f2ec1-slide-01-logo.png`}
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7c0b9341-73dc-4f0c-a4f5-6853f6ed5751-C11-Reev-section-1bg.jpg`}
        text={"Intelligent Long Range Five-Seat SUV"}
      />
      <CarBannerC11Reev
        title={"C11 Extended Range"}
        subTitle={"Price in China"}
        banner={`${process.env.NEXT_PUBLIC_API_URL}/media/492a753d-0554-4942-8a59-193c60c6188c-C11-Reev-section-2-bg.jpg`}
      />
      <CarBannerC11Reev
        title={"Extended Range Vehicle With Longer Pure Electric Range"}
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
                “5+2”Travel Freely
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
                      For Urban Commuting
                    </p>
                    <p className="text-white font-arial-normal leading-[16px]">
                      Feel Free to Use Electricity
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:border-l border-[#ffffff57] md:pl-5">
                  <p className="text-[44px] md:text-[63px] text-white font-arial-semibold leading-[70px]">
                    2
                  </p>
                  <div className="flex flex-col h-full justify-evenly">
                    <p className="text-white font-arial-normal leading-[16px]">
                      For Holiday Travel
                    </p>
                    <p className="text-white font-arial-normal leading-[16px]">
                      No Worries About the Range
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarSwiper content={carSwipper1} />

      
      <CarBanner
        title={"Technology and Natural Aesthetics"}
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/2b51c4a8-4a25-4fb1-8a3b-40ac095761f7-C11-Reev-section-6-bg.jpg`}
        textColor="black"
      />
      <CarSwiper content={carSwipper2} textColor={"black"} />
      {/*<CarCharacteristics*/}
      {/*  textColor={"black"}*/}
      {/*  bg={`${process.env.NEXT_PUBLIC_API_URL}/media/72d9c4b3-5acd-4f3b-b167-7cb8ae8accf8-section-8-bg.jpg`}*/}
      {/*  characteristics={characteristics}*/}

      {/*  */}
      {/*/>*/}
      <CarBanner
        title={"Leapmotor OS 3.0 Smart Cockpit"}
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/8bfef56b-b41a-49f6-923d-3bed34ee9a1b-C11-Reev-section-8-bg.jpg`}
        bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/5541e411-9525-4191-87de-13fa5d592541-C11Reev-slide-08-res.jpg`}
      />
      <CarBanner bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7884874f-5ce2-4438-8cfc-415405d72e78-C11-Reev-section-9-bg.jpg`} bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/f79c95ac-797d-452a-8471-2958aea7252d-C11-Reev-section-9-bg-responsive.jpg`} />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/78b52aaa-4b94-472e-a313-13fc3b9eafd8-C11-Reev-section-10-bg.jpg`}
        title={"A real luxurious vehicle belongs to the whole family"}
      />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/f84154ae-126e-400a-a6b7-a34c442ab220-C11-Reev-section-11-bg.jpg`}
        title={"360° Wide Field of View 14,932 cm² Panoramic Starry Roof*"}
        subTitle={"8% improved field of view* and 99.5% UV isolation rate"}
      />
      <CarSwiper content={carSwipper3} />
       <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a344178d-336a-4a52-bb49-850cfe382850-C11-Reev-section-13-bg.jpg`}
        title={"Million-level Mobile Music Cockpit"}
        subTitle={
          "Standard 12 speakers, tuned by expert Arkamys from France 6 sound effects available with an immersive environment"
        }
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
                Leapmotor Pilot Intelligent Driving Assist Solution*
              </p>
              <p className="text-sm text-white font-arial-normal md:leading-5">
                28 pieces of intelligent perception hardware support L3-level
                assisted driving <br />
                12 ultrasonic radars｜5 millimeter-wave radars｜4 surround view
                cameras <br />4 blind spot cameras｜2 binocular camera｜1 face
                recognition camera
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
            videoBlog?.map((item, ind) =>(
                <SwiperSlide key={ind}>
                    <div className={"relative w-full h-full swiper1"}>
                        <CarSwiperInnerVideo content={item} video={item.video} />
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
      <CarSwiper content={carSwipper4} />

      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/01920bd1-0f12-437f-ac75-fa66272bf58a-C11-Reev-section-17-bg.jpg`}
        title={"High-Strength Armor Body"}
        subTitle={
          "High-strength steel utilization rate of 80.84% Hot-formed steel utilization rate of 16.79%"
        }

      />
      <CarSwiper content={carSwipper5} />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/d1f22c5d-25ba-41a8-a560-d33bb20c8928-C11-Reev-section-19-bg.jpg`}
        title={"Explore and Travel with Mobility"}
        subTitle={
          "3.3 kW external discharge* fits squarely , into outdoor camping"
        }

      />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e448970d-bb7b-4c6c-97e5-e529dcd883d7-C11-Reev-section-20-bg.jpg`}
        title={"Looking forward to your next mile"}
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
    <CarText content={disclaimers} />

    </main>
      </>

  );
};

export default C11Reev
