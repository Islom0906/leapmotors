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

import section1 from "public/index/section-bg-1.jpg";
import section2 from "public/Leapmotor-C11-REEV/section-2-bg.jpg";
import section3 from "public/Leapmotor-C11-REEV/section-3-bg.jpg";
import section4 from "public/Leapmotor-C11-REEV/last-slide-bg-4.jpg";
import section5_slide1 from "public/Leapmotor-C11-REEV/slide-1-bg-1.jpg";
import section5_slide2 from "public/Leapmotor-C11-REEV/slide-1-bg-2.jpg";
import section5_slide3 from "public/Leapmotor-C11-REEV/slide-1-bg-3.jpg";
import section6 from "public/Leapmotor-C11-REEV/section-5-bg.jpg";
import section7_slide1 from "public/Leapmotor-C11-REEV/slide-2-bg-1.jpg";
import section7_slide2 from "public/Leapmotor-C11-REEV/slide-2-bg-2.jpg";
import section7_slide3 from "public/Leapmotor-C11-REEV/slide-2-bg-3.png";
import section7_slide4 from "public/Leapmotor-C11-REEV/slide-2-bg-4.png";
import section8 from "public/Leapmotor-C11-REEV/section-8-bg.jpg";
import section9 from "public/Leapmotor-C11-REEV/section-9-bg.jpg";
import section9_res from "public/Leapmotor-C11-REEV/section-9-bg-res.jpg";
import section10 from "public/Leapmotor-C11-REEV/section-10-bg.jpg";
import section11 from "public/Leapmotor-C11-REEV/section-11-bg.jpg";
import section12_slide3 from "public/Leapmotor-C11-REEV/slide-3-bg-1.jpg";
import section12_slide4 from "public/Leapmotor-C11-REEV/slide-3-bg-2.jpg";
import section13 from "public/Leapmotor-C11-REEV/section-14.jpg";


// video
import section14 from "public/Leapmotor-C11-REEV/last-slide-bg-1.jpg";
// video
import section15_slide1 from 'public/Leapmotor-C11-REEV/last-slide-bg-1.jpg';
import section15_slide2 from 'public/Leapmotor-C11-REEV/last-slide-bg-1.jpg';
import section15_slide3 from 'public/Leapmotor-C11-REEV/last-slide-bg-1.jpg';
import section15_slide4 from 'public/Leapmotor-C11-REEV/last-slide-bg-1.jpg';
import section16_slide1 from "public/Leapmotor-C11-REEV/section-17-slide-5-bg-1.jpg";
import section16_slide2 from "public/Leapmotor-C11-REEV/section-17-slide-5-bg-2.jpg";
import section16_slide3 from "public/Leapmotor-C11-REEV/section-17-slide-5-bg-3.jpg";
import section17 from "public/Leapmotor-C11-REEV/section-19.jpg";
import section18_slide1 from "public/Leapmotor-C11-REEV/slide-6-bg-1.jpg";
import section18_slide2 from "public/Leapmotor-C11-REEV/slide-6-bg-2.jpg";
import section19 from "public/Leapmotor-C11-REEV/section-21-bg.jpg";
import section20 from "public/Leapmotor-C11-REEV/section-22-bg.jpg";





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
      bg: section12_slide3,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section12_slide4,
    },
  ];
  const carSwipper4 = [
    
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section16_slide1,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section16_slide2,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section16_slide3,
    },
  ];
  const carSwipper5 = [
    
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section18_slide1,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section18_slide2,
    },
    
  ];

  const videoBlog = [ 
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Lane Change Alert (LCA)',
      video : '/Leapmotor-C11-REEV/section-16-slide1.mp4'
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Lane Change Assist (ALC)',
      video : '/Leapmotor-C11-REEV/section-16-slide2.mp4'
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Traffic Jam Assist (TJA)',
      video : '/Leapmotor-C11-REEV/section-16-slide3.mp4'
    },
    {
      title: 'Implementation of 23 Intelligent Driving Assist Functions*',
      subTitle : 'Traffic Jam Assist (TJA)',
      video : '/Leapmotor-C11-REEV/section-16-slide4.mp4'
    },
  ]

  const carSwipper2 = [
    {
      title: "Energetic Curved Body",
      subTitle:
        "Reduces wind resistance coefficient，showing a strong sense of science and technology",
      bg: section7_slide1,
    },
    {
      title: "Through Headlamp",
      subTitle: "Digital crystalline headlamp with smooth dynamic effect",
      bg: section7_slide2,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section7_slide3,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section7_slide4,
    },
  ];
  const carSwipper1 = [
    {
      title: "Energetic Curved Body",
      subTitle:
        "Reduces wind resistance coefficient，showing a strong sense of science and technology",
      bg: section5_slide1,
    },
    {
      title: "Through Headlamp",
      subTitle: "Digital crystalline headlamp with smooth dynamic effect",
      bg: section5_slide2,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: section5_slide3,
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
        banner={section2}
      />
      <CarBannerC11Reev
        title={"Extended Range Vehicle With Longer Pure Electric Range"}
        banner={section3}
      />

      <section class="h-screen ">
        <div class="relative w-full h-full">
          <Image
            src={section4}
            alt="car"
            class="object-cover w-full h-full"
          />
          <div class="absolute top-[45px] md:top-20 w-full text-center z-20">
            <div class="mb-5 text-center">
              <p class="text-white text-[26px] font-arial-semibold md:font-arial-normal md:text-2xl lg:text-2xl leading-[44px] md:leading-[32px] mb-3">
                “5+2”Travel Freely
              </p>
            </div>
            <div>
              <div class="mx-auto text-left md:flex sm:gap-6 w-fit">
                <div class="flex items-center gap-2">
                  <p class="text-[44px] md:text-[63px] text-white font-arial-semibold leading-[70px]">
                    5
                  </p>
                  <div class="flex flex-col h-full justify-evenly">
                    <p class="text-white font-arial-normal leading-[16px]">
                      For Urban Commuting
                    </p>
                    <p class="text-white font-arial-normal leading-[16px]">
                      Feel Free to Use Electricity
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2 md:border-l border-[#ffffff57] md:pl-5">
                  <p class="text-[44px] md:text-[63px] text-white font-arial-semibold leading-[70px]">
                    2
                  </p>
                  <div class="flex flex-col h-full justify-evenly">
                    <p class="text-white font-arial-normal leading-[16px]">
                      For Holiday Travel
                    </p>
                    <p class="text-white font-arial-normal leading-[16px]">
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
        bg={section6}
        textColor="black"
      />
      <CarSwiper content={carSwipper2} textColor={"black"} />
      <CarCharacteristics
        textColor={"black"}
        bg={section8}
        characteristics={characteristics}

        
      />
      <CarBanner
        title={"Leapmotor OS 3.0 Smart Cockpit"}
        bg={section8}
        bgRes={section8}
      />
      <CarBanner bg={section9} bgRes={section9_res} />
      <CarBanner
        bg={section10}
        title={"A real luxurious vehicle belongs to the whole family"}
      />
      <CarBanner
        bg={section11}
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
      <section class=" h-screen">
        <div class="relative w-full h-full">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source
              className="w-full"
              src='/Leapmotor-C11-REEV/section-15-bg.mp4'
              type="video/mp4"
            />
          </video>
 
          <div class="absolute top-[60px] w-full text-center">
            <div class="mb-5 text-center">
              <p class="text-white text-lg font-arial-semibold lg:text-[22px] leading-7 md:leading-8 mb-2">
                Leapmotor Pilot Intelligent Driving Assist Solution*
              </p>
              <p class="text-sm text-white font-arial-normal md:leading-5">
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
        bg={section17}
        title={"Explore and Travel with Mobility"}
        subTitle={
          "3.3 kW external discharge* fits squarely , into outdoor camping"
        }

      />
      <CarSwiper content={carSwipper5} />
      <CarBanner
        bg={section19}
        title={"Explore and Travel with Mobility"}
        subTitle={
          "3.3 kW external discharge* fits squarely , into outdoor camping"
        }

      />
      <CarBanner
        bg={section20}
        title={"Looking forward to your next mile"}
      />
    <CarText content={disclaimers} />

    </main>
  );
};

export default C11Reev
