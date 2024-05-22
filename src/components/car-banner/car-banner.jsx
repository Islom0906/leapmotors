import Image from "next/image";
import {useEffect} from "react";
import AOS from "aos";

    const CarBanner = ({title , subTitle , bg , bgRes , center ,textColor ,imgStyle,bottom,bottomTitle,bottomSectitle,content,bottomList}) => {
    useEffect(() => {
        AOS.init({
            once:true
        });
    }, []);
  return (
      <>
      <section className="relative h-screen ">

          {
              bgRes ?
                  <>
                      <Image src={bgRes} alt="car" className="block object-cover object-center w-full h-full md:hidden"
                             fill priority={true}/>
                      <Image src={bg} alt="car" className="hidden object-cover object-center w-full h-full md:block"
                             fill priority={true}/>
                  </>
                  :
                  <Image src={bg} alt="car" className="object-cover w-full h-full" fill priority={true}/>
          }

          {/*<div className="w-full h-[150px] absolute  top-0 left-0 bg-gradient-to-b from-black via-black z-10 block md:hidden"></div>*/}
          <div
              className={`container mx-auto absolute top-0 left-1/2 -translate-x-1/2 py-[60px] z-[100] w-full h-full text-center  ${imgStyle}  ${center ? 'flex justify-center items-center' : ''} ${bottom ? `flex flex-col ${bottomList ? "justify-start lg:justify-between lg:items-center":"justify-between items-center"}  ` : ""}`}>
              <div
                  className={` mt-10 lg:mb-5 ${bottomList? " text-start lg:text-center":"text-center mx-auto "}  w-[90%] ${textColor ? `text-${textColor}` : 'text-white'} `}>
                  {title &&
                      <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                         className="  text-[28px] leading-7 md:leading-8 mb-4 ">{title}</p>
                  }
                  {
                      subTitle &&
                      <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                         className={`text-sm md:leading-5 w-[90%] ${bottomList ? "lg:mx-auto":"mx-auto"} `}>{subTitle}</p>
                  }
              </div>
              {
                  bottomList ?
                      <div className="flex flex-col lg:flex-row justify-center gap-3 lg:gap-10 mb-5">
                          {content?.map((item, ind) => (
                              <div
                                  key={ind}
                                  className="text-white font-arial-normal  lg:border-l-[2px] lg:border-white text-left lg:pl-5 lg:mb-6"
                              >
                                  <div className={'flex items-center gap-1'}>
                                      <div className={'lg:hidden w-4 h-4 bg-white border-[3px] border-black/70 rounded-full'}></div>
                                  <p>{item.subTitle} </p>
                                  </div>
                              </div>
                          ))}
                      </div>
                      :
                      <div
                          className={` mt-10 mb-5 text-center mx-auto w-[90%] ${textColor ? `text-${textColor}` : 'text-white'} `}>
                          {title &&
                              <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                                 className=" text-sm md:leading-5 w-[90%]  mx-auto ">{bottomTitle}</p>
                          }
                          {
                              subTitle &&
                              <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                                 className="text-sm md:leading-5 w-[90%]  mx-auto">{bottomSectitle}</p>
                          }
                      </div>
              }

          </div>

          {/*</div>*/}
          {/*<div className="w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black z-10 block md:hidden"></div>*/}
      </section>
      </>
  )
}

export default CarBanner
