import Image from "next/image";
import { PiCaretDownBold } from "react-icons/pi";
import { CarSwiper ,CarText ,CarBanner } from "@/components";





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
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/86f110e8-26bd-4302-8e7a-00daa0a1e746-T03-slider-2-1.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/4f9844d6-14cf-42d0-8800-d2d3ad0e0753-T03-slider-2-1-responsive.png`,

  },
  {
    title: 'Through Headlamp',
    subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/ad5e2492-9cd0-42fe-a374-9088a3dbbde5-T03-slider-2-2.jpg`,

  }
]

const carSwipper1 = [
  {
    title: 'Energetic Curved Body',
    subTitle: 'Reduces wind resistance coefficient，showing a strong sense of science and technology',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3d32a252-29de-4759-9235-09c008417d1a-T03-slider-1.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/1b0fb212-bbe2-478a-87a6-eb4e40cb891c-T03-slider-1-responsive.png`,
  },
  {
    title: 'Through Headlamp',
    subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/af716b54-4cc1-457e-93bf-8dfc5e732c6c-T03-slider-2.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/82da93d0-5505-4666-b8aa-17315b0b0452-T03-slider-2-responsive.png`,

  },
  {
    title: 'Frameless Door',
    subTitle: 'Front laminated silent glass rear privacy glass',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3ac5e9a3-5935-4c20-b936-ebb2263aa384-T03-slider-3.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/6a9e99f3-7b05-43ee-baf2-4c13e6257676-T03-slider-3-responsive.png`,

  },
  {
    title: 'Frameless Door',
    subTitle: 'Front laminated silent glass rear privacy glass',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bac53e31-8e74-46bd-9fdf-e67a87606bb4-T03-slider-4.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/3b2e2ae5-4a12-4783-8955-fd0c44ee3712-T03-slider-4-responsive.png`,

  },
  {
    title: 'Frameless Door',
    subTitle: 'Front laminated silent glass rear privacy glass',
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5196a6c8-646d-4a95-ac44-222f7e10094b-T03-slider-5.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/0e75d8c2-e01a-43a7-899e-e786b7d47a7d-T03-slider-5-responsive.png`,

  },

]

const T03Data = {
  logo: `${process.env.NEXT_PUBLIC_API_URL}/media/9f538f2a-68ba-4199-97b0-05937e96bcbd-section-4-logo.png`,
  section1: {
    subTitle: "Super-Safe Five-Door Pure Electric Model",
    bg: `${process.env.NEXT_PUBLIC_API_URL}/media/9ef38574-78be-4774-a14d-abbf3612f709-section-bg-4.jpg`,
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
            fill
          />
          <div className="absolute  top-20 left-[50%] translate-x-[-50%] h-[calc(100%-80px)] flex flex-col items-center lg:justify-start justify-between">
            <div>
                <div className="relative h-[29px] mx-auto w-[60px]">
                  <Image
                    src={T03Data.logo}
                    fill
                    alt="logo"
                    className="w-full h-full mx-auto"
                    fill
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
            src={`${process.env.NEXT_PUBLIC_API_URL}/media/8bd6857e-4221-4e86-9e42-b11626ebce1f-T03-section-2.jpg`}
            className="object-cover w-full h-full"
            fill
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
      <CarBanner title={'Safer'} subTitle={'High-strength cage body for all-around safety protection'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/d8c17662-76c3-4e70-a4b8-81afced59727-T03-section-3.jpg`} bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c8f47102-0e43-478b-93cb-1040d67b0da9-T03-section-3-responsive.jpg`}/>
  
      
      <CarSwiper content={carSwipper1} />
      <CarSwiper content={carSwipper2} />

      <CarBanner title={'More Comfortable'} subTitle={'Efficient and powerful output, easily adaptable to various road conditions'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7a188914-b863-49b9-82a5-daf8b03b49b7-T03-section-6.jpg`} bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/ec3abf0b-21af-4ca0-9c6a-1b241f353e5f-T03-section-6-responsive.jpg`}/>
      <CarBanner title={'More Convenient'} subTitle={'Technologies offer a more convenient , and efficient driving experience'} bg={`${process.env.NEXT_PUBLIC_API_URL}/media/3f69c6d2-209b-4176-893c-08b7d8404388-T03-lastsection.jpg`} bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/bb0a3cea-1023-4109-8ca6-b8b86fe74f52-T03-lastsection-responsive.jpg`}/>
      <CarText content={disclaimers} />
     
    </main>
  );
};

export default T03;
