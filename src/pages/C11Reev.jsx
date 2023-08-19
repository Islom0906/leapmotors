import {
  CarDetailBanner,
  CarBannerC11Reev,
  CarCharacteristics,
  CarSwiper,
  CarBanner,
  CarSwiperInnerVideo,
  CarText
} from "@/components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { CarSwiperInner } from "@/components";
import Head from "next/head";






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
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/2f85017d-2850-4e89-9d4f-84662d1e289e-slide-3-bg-1.jpg`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c90bed48-2162-403f-bb64-cf247ad27eae-slide-3-bg-2.jpg`,
    },
  ];
  const carSwipper4 = [
    
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/74d08da7-eb18-4d08-ae2e-35f744a569ed-section-17-slide-5-bg-1.jpg`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/26c80da0-74a6-4338-93cf-e35e51b2f670-section-17-slide-5-bg-2.jpg`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a05fd2d6-bbc7-42c0-95f0-4dd38835c1f4-section-17-slide-5-bg-3.jpg`,
    },
  ];
  const carSwipper5 = [
    
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f018bd26-8e8f-4d3a-af53-57cc96b585d7-slide-6-bg-1.jpg`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bf8282f7-c34d-45c0-8a8b-f920be749a88-slide-6-bg-2.jpg`,
    },
    
  ];

  const videoBlog = [ 
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Lane Change Alert (LCA)',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/90922059-80d8-426a-b6e0-2160de6b27e9-section-16-slide1.mp4`
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Lane Change Assist (ALC)',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/7d7aec9e-85fc-424e-bd9c-d623498584a3-section-16-slide2.mp4`
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Traffic Jam Assist (TJA)',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/eb4f0222-5ea3-4228-ad53-468ccb3d4618-section-16-slide3.mp4`
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Traffic Jam Assist (TJA)',
      video : `${process.env.NEXT_PUBLIC_API_URL}/media/a2dd8ae3-a67b-469d-8c5b-1540a7db6d16-section-16-slide4.mp4`
    },
  ]

  const carSwipper2 = [
    {
      title: "Energetic Curved Body",
      subTitle:
        "Reduces wind resistance coefficient，showing a strong sense of science and technology",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/78b6ef23-ce98-43da-8074-1609a273a67a-slide-2-bg-1.jpg`,
    },
    {
      title: "Through Headlamp",
      subTitle: "Digital crystalline headlamp with smooth dynamic effect",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/ee1652de-7ea4-4074-b45a-5f74f1143f8f-slide-2-bg-2.jpg`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/9f104634-1ab0-47c7-a3cf-5ae366888a65-slide-2-bg-3.png`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/2ff461be-1fa0-4ef0-88dd-0e5db2a1e9d7-slide-2-bg-4.png`,
    },
  ];
  const carSwipper1 = [
    {
      title: "Energetic Curved Body",
      subTitle:
        "Reduces wind resistance coefficient，showing a strong sense of science and technology",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f2c6411d-5afe-4b46-8959-88716544b6c5-slide-1-bg-1.jpg`,
    },
    {
      title: "Through Headlamp",
      subTitle: "Digital crystalline headlamp with smooth dynamic effect",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/ae3fe179-ec44-49c5-8efe-84d909d19016-slide-1-bg-2.jpg`,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e8e116fd-e431-4950-9699-d7e3b5186ed2-slide-1-bg-3.jpg`,
    },
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
          <title>Leapmotor-C11REEV</title>
          <meta property='og:title' content="Leapmotor uz C11REEV, Leapmotor uzbekistan C11REEV,Leap-motor C11REEV"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/brand.png"/>
        </Head>
    <main className={'bg-black'}>
      {/* <CarDetailBanner
        imgLong={true}
        img={sectionC11Reev}
        bg={section1}
        text={"Intelligent Long Range Five-Seat SUV"}
      /> */}
      <CarBannerC11Reev
        title={"C11 Extended Range"}
        subTitle={"Price in China"}
        banner={`${process.env.NEXT_PUBLIC_API_URL}/media/2113df8a-0039-4345-831f-79df7d0c12cb-section-2-bg.jpg`}
      />
      <CarBannerC11Reev
        title={"Extended Range Vehicle With Longer Pure Electric Range"}
        banner={`${process.env.NEXT_PUBLIC_API_URL}/media/4a239aa1-e8f5-4045-b290-bb1a81fcaecd-section-3-bg.jpg`}
      />

      <section className="h-screen ">
        <div className="relative w-full h-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/media/0cf19281-6dfa-4db4-9e8f-ba2fecd4a551-last-slide-bg-4.jpg`}
            alt="car"
            fill
            className="object-cover w-full h-full"
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
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/145e9e01-b7cc-425b-bde7-dd9688447dd8-section-5-bg.jpg`}
        textColor="black"
      />
      <CarSwiper content={carSwipper2} textColor={"black"} />
      <CarCharacteristics
        textColor={"black"}
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/72d9c4b3-5acd-4f3b-b167-7cb8ae8accf8-section-8-bg.jpg`}
        characteristics={characteristics}

        
      />
      <CarBanner
        title={"Leapmotor OS 3.0 Smart Cockpit"}
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/72d9c4b3-5acd-4f3b-b167-7cb8ae8accf8-section-8-bg.jpg`}
        bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/72d9c4b3-5acd-4f3b-b167-7cb8ae8accf8-section-8-bg.jpg`}
      />
      <CarBanner bg={`${process.env.NEXT_PUBLIC_API_URL}/media/45f45abd-c95f-4730-b317-176f03c35e21-section-9-bg.jpg`} bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/309b733a-854a-410e-80a0-650521fecc94-section-9-bg-res.jpg`} />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/667d54e2-374f-4723-b4c4-7acd61c3041c-section-10-bg.jpg`}
        title={"A real luxurious vehicle belongs to the whole family"}
      />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7bb16ad4-6969-47d2-8c38-c878bbc35d40-section-11-bg.jpg`}
        title={"360° Wide Field of View 14,932 cm² Panoramic Starry Roof*"}
        subTitle={"8% improved field of view* and 99.5% UV isolation rate"}
      />
      <CarSwiper content={carSwipper3} />
      {/* <CarBanner
        bg={section14}
        title={"360° Wide Field of View 14,932 cm² Panoramic Starry Roof*"}
        subTitle={
          "Standard 12 speakers, tuned by expert Arkamys from France 6 sound effects available with an immersive environment"
        }
        center={true}
      /> */}
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
        className="h-screen mySwiper"
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
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/73cd3996-94b7-4ef0-b4b0-fbe3a1de3620-section-19.jpg`}
        title={"Explore and Travel with Mobility"}
        subTitle={
          "3.3 kW external discharge* fits squarely , into outdoor camping"
        }

      />
      <CarSwiper content={carSwipper5} />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/3a561359-eb26-4a4e-b508-9802adddb4e8-section-21-bg.jpg`}
        title={"Explore and Travel with Mobility"}
        subTitle={
          "3.3 kW external discharge* fits squarely , into outdoor camping"
        }

      />
      <CarBanner
        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/ba2b8fe1-efb3-4ade-9339-1c1b88411a69-section-22-bg.jpg`}
        title={"Looking forward to your next mile"}
      />
    <CarText content={disclaimers} />

    </main>
      </>

  );
};

export default C11Reev
