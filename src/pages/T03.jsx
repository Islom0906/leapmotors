import Image from "next/image";
import { PiCaretDownBold } from "react-icons/pi";
import { CarSwiper ,CarText ,CarBanner } from "@/components";


import T03Logo from "/public/index/section-4-logo.png";
import section1 from "/public/index/section-bg-4.jpg";
import section2 from "/public/T03/T03-section-2.jpg";
import section3 from "/public/T03/T03-section-3.jpg";
import section3_res from '/public/T03/T03-section-3-responsive.jpg';
import section4_slider1 from "/public/T03/T03-slider-1.jpg";
import section4_slider1_res from "/public/T03/T03-slider-1-responsive.png";
import section4_slider2 from "/public/T03/T03-slider-2.jpg";
import section4_slider2_res from "/public/T03/T03-slider-2-responsive.png";
import section4_slider3 from "/public/T03/T03-slider-3.jpg";
import section4_slider3_res from "/public/T03/T03-slider-3-responsive.png";
import section4_slider4 from "/public/T03/T03-slider-4.jpg";
import section4_slider4_res from "/public/T03/T03-slider-4-responsive.png";
import section4_slider5 from "/public/T03/T03-slider-5.jpg";
import section4_slider5_res from "/public/T03/T03-slider-5-responsive.png";
import section5_slider1 from "public/T03/T03-slider-2-1.jpg";
import section5_slider1_res from "public/T03/T03-slider-2-1-responsive.png";
import section5_slider2 from "public/T03/T03-slider-2-2.jpg";
import section6 from "public/T03/T03-section-6.jpg";
import section6_res from "public/T03/T03-section-6-responsive.jpg";
import section7 from "public/T03/T03-lastsection.jpg";
import section7_res from "public/T03/T03-lastsection-responsive.jpg";




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

const carSwipper2 = [
  {
    title: 'Energetic Curved Body',
    subTitle: 'Reduces wind resistance coefficient，showing a strong sense of science and technology',
    bg: section5_slider1,
    bgRes: section5_slider1_res,

  },
  {
    title: 'Through Headlamp',
    subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
    bg: section5_slider2,

  }
]

const carSwipper1 = [
  {
    title: 'Energetic Curved Body',
    subTitle: 'Reduces wind resistance coefficient，showing a strong sense of science and technology',
    bg: section4_slider1,
    bgRes: section4_slider1_res,
  },
  {
    title: 'Through Headlamp',
    subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
    bg: section4_slider2,
    bgRes: section4_slider2_res,

  },
  {
    title: 'Frameless Door',
    subTitle: 'Front laminated silent glass rear privacy glass',
    bg: section4_slider3,
    bgRes: section4_slider3_res,

  },
  {
    title: 'Frameless Door',
    subTitle: 'Front laminated silent glass rear privacy glass',
    bg: section4_slider4,
    bgRes: section4_slider4_res,

  },
  {
    title: 'Frameless Door',
    subTitle: 'Front laminated silent glass rear privacy glass',
    bg: section4_slider5,
    bgRes: section4_slider5_res,

  },

]

const T03Data = {
  logo: T03Logo,
  section1: {
    subTitle: "Super-Safe Five-Door Pure Electric Model",
    bg: section1,
    content: [
      {
        title: "high-strength steel cage body",
        content: "68%",
      },
      {
        title: "CLTC range        ",
        content: "403km",
      },
      {
        title: "L2 safe driving assist system",
        content: "Leapmotor Pilot",
      },
    ],
  },

  
};

const T03 = () => {
  return (
    <main className={'bg-black'}>
      <section className="h-screen ">
        <div className="relative w-full h-full">
          <Image
            alt="car"
            src={T03Data.section1.bg}
            className="object-cover w-full h-full"
          />
          <div className="absolute  top-20 left-[50%] translate-x-[-50%] h-[calc(100%-80px)] flex flex-col items-center lg:justify-start justify-between">
            <div>
                <div className="relative h-[29px] mx-auto w-[60px]">
                  <Image
                    src={T03Data.logo}
                    fill
                    alt="logo"
                    className="w-full h-full mx-auto"
                  />
                </div>
              <div className="mb-3 text-center">
                <p className="text-white font-arial-normal min-w-[320px] text-[20px] leading-[30px] md:leading-[56px]">
                  {T03Data.section1.subTitle}
                </p>
              </div>
            </div>

          
            <div className="flex flex-col items-center justify-center gap-5 pb-5">
              <div className="flex flex-wrap items-center justify-start gap-10 text-white gap-y-5">
                {T03Data.section1.content.map((item, ind) => (
                  <div className="" key={ind}>
                    <p className="text-white text-[10px]  lg:text-[14px] font-arial-medium">
                      {item.title}
                    </p>
                    <p className="text-[20px] font-arial-normal">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
              <PiCaretDownBold className="block w-6 h-6 text-white lg:hidden"/>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen ">
        <div className="relative w-full h-full">
        <Image
            alt="car"
            src={section2}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="container flex flex-col justify-between h-full py-10 md:py-20 md:justify-start">
              <div className="mb-5 text-center">
                <p
                  className="text-white font-arial-semibold  text-[24px] md:text-[26px]"
                >
                  ￥59,900 or above
                </p>
                <p className="mt-[6px] lg:text-[14px] text-white font-arial-normal">
                  Reference Price for 2023 T03 in China
                </p>
              </div>
              <div className="flex justify-center">
                <div
                  className="flex flex-wrap justify-center gap-3 text-white sm:gap-8"
                >
                  <div className="flex gap-3 items-center justify-center md:w-[33%]">
                    <p className="text-white text-[21px] font-semibold">
                      200 Light Version
                    </p>
                    <div className="h-[23px] w-[3px] bg-white"></div>
                  </div>
                  <div className="flex gap-3 items-center justify-center md:w-[33%]">
                    <p className="text-white text-[21px] font-semibold">
                      200 Light Version
                    </p>
                    <div className="h-[23px] w-[3px] bg-white"></div>
                  </div>
                  <div className="flex gap-3 items-center justify-center md:w-[33%]">
                    <p className="text-white text-[21px] font-semibold">
                      200 Light Version
                    </p>
                    <div className="h-[23px] w-[3px] bg-white"></div>
                  </div>
                  <div className="flex gap-3 items-center justify-center md:w-[33%]">
                    <p className="text-white text-[21px] font-semibold">
                      200 Light Version
                    </p>
                    <div className="h-[23px] w-[3px] bg-white"></div>
                  </div>
                </div>
              </div>
           
            </div>
           
          </div>
        </div>
      </section>
      <CarBanner title={'Safer'} subTitle={'High-strength cage body for all-around safety protection'} bg={section3} bgRes={section3_res}/>
  
      
      <CarSwiper content={carSwipper1} />
      <CarSwiper content={carSwipper2} />

      <CarBanner title={'More Comfortable'} subTitle={'Efficient and powerful output, easily adaptable to various road conditions'} bg={section6} bgRes={section6_res}/>
      <CarBanner title={'More Convenient'} subTitle={'Technologies offer a more convenient , and efficient driving experience'} bg={section7} bgRes={section7_res}/>
      <CarText content={disclaimers} />
     
    </main>
  );
};

export default T03;
