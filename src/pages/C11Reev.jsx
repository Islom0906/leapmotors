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


import sectionC11Reev from "/public/section-1-logo.png";
import sectionC11ReevBg from "/public/section-bg-1.jpg";

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

  const carSwipper1 = [
    {
      title: "Energetic Curved Body",
      subTitle:
        "Reduces wind resistance coefficient，showing a strong sense of science and technology",
      bg: sectionC11ReevBg,
    },
    {
      title: "Through Headlamp",
      subTitle: "Digital crystalline headlamp with smooth dynamic effect",
      bg: sectionC11ReevBg,
    },
    {
      title: "Frameless Door",
      subTitle: "Front laminated silent glass rear privacy glass",
      bg: sectionC11ReevBg,
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
      <CarDetailBanner
        imgLong={true}
        img={sectionC11Reev}
        bg={sectionC11ReevBg}
        text={"Intelligent Long Range Five-Seat SUV"}
      />
      <CarBannerC11Reev
        title={"C11 Extended Range"}
        subTitle={"Price in China"}
        banner={sectionC11ReevBg}
      />
      <CarBannerC11Reev
        title={"Extended Range Vehicle With Longer Pure Electric Range"}
        banner={sectionC11ReevBg}
      />

      <section class="h-screen ">
        <div class="relative w-full h-full">
          <Image
            src={sectionC11ReevBg}
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

      <CarCharacteristics
        textColor={"black"}
        bg={sectionC11ReevBg}
        characteristics={characteristics}
      />
      <CarBanner
        title={"Technology and Natural Aesthetics"}
        bg={sectionC11ReevBg}
        textColor="black"
      />
      <CarSwiper content={carSwipper1} textColor={"black"} />
      <CarBanner
        title={"Leapmotor OS 3.0 Smart Cockpit"}
        bg={sectionC11ReevBg}
        textColor="black"
        bgRes={sectionC11ReevBg}
      />
      <CarBanner bg={sectionC11ReevBg} bgRes={sectionC11ReevBg} />
      <CarBanner
        bg={sectionC11ReevBg}
        title={"A real luxurious vehicle belongs to the whole family"}
      />
      <CarBanner
        bg={sectionC11ReevBg}
        title={"360° Wide Field of View 14,932 cm² Panoramic Starry Roof*"}
        subTitle={"8% improved field of view* and 99.5% UV isolation rate"}
      />
      <CarSwiper content={carSwipper1} />
      <CarBanner
        bg={sectionC11ReevBg}
        title={"360° Wide Field of View 14,932 cm² Panoramic Starry Roof*"}
        subTitle={
          "Standard 12 speakers, tuned by expert Arkamys from France 6 sound effects available with an immersive environment"
        }
        center={true}
      />
      <section class=" h-screen">
        <div class="relative w-full h-full">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source
              className="w-full"
              src="https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C11-new/video/15.mp4"
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
            Array(3).fill('').map((item, ind) =>(
                <SwiperSlide key={ind}>
                    <div className={"relative w-full h-full swiper1"}>
                        <CarSwiperInnerVideo />
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
      <CarBanner
        bg={sectionC11ReevBg}
        title={"Explore and Travel with Mobility"}
        subTitle={
          "3.3 kW external discharge* fits squarely , into outdoor camping"
        }

      />
      <CarBanner
        bg={sectionC11ReevBg}
        title={"Looking forward"}
      />
    <CarText content={disclaimers} />

    </main>
  );
};

export default C11Reev
