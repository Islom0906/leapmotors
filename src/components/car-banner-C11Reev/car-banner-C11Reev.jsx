import Image from "next/image"
import Aos from "aos"

const carBannerC11Reev = ({banner, title , subTitle  } ) => {
  return (
    <section className="h-screen   mb-20 md:mb-0">
        <div className="h-full w-full relative">
          <Image
            src={banner}
            alt="car"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[45px] md:top-20 w-full text-center z-20">
            <div className="text-center mb-5">
              <p  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-white text-lg font-medium md:text-2xl lg:text-[36px] leading-10 md:leading-[36px] mb-2">
                {title}
              </p>
              <p  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-white text-base font-normal md:text-lg lg:text-xl">
                {subTitle}
              </p>
            </div>
            <div>
              {/* <div className="mx-auto text-left flex  md:flex-row flex-col justify-between md:justify-start items-center gap-y-[10px] gap-x-[30px] px-5 sm:px-20 md:px-0 w-full md:w-fit">
                <div className="flex flex-row md:flex-col justify-between md:justify-start items-center w-full">
                  <div className="mb-3">
                    <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xs md:text-base text-white opacity-80 font-thin leadin-[16px]">
                      C11 Extended Range
                    </p>
                    <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xs md:text-base text-white opacity-80 font-thin leadin-[16px]">
                      180 Comfortable Version
                    </p>
                  </div>
                  <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xl md:text-[28px] text-white font-semibold md:font-medium leading-[24px]">
                    RMB 149,800
                  </p>
                </div>
                <div className="md:border-x border-white box-border md:px-[30px] flex flex-row md:flex-col justify-between md:justify-start items-center w-full">
                  <div className="mb-3">
                    <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xs md:text-base text-white opacity-80 font-thin leadin-[16px]">
                      C11 Extended Range
                    </p>
                    <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xs md:text-base text-white opacity-80 font-thin leadin-[16px]">
                      285 Comfortable Version
                    </p>
                  </div>
                  <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xl md:text-[28px] text-left md:w-[200px] text-white font-semibold md:font-medium leading-[24px]">
                    RMB 165,800
                  </p>
                </div>
                <div className="flex flex-row md:flex-col justify-between md:justify-start items-center w-full">
                  <div className="mb-3">
                    <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xs md:text-base text-white opacity-80 font-thin leadin-[16px]">
                      C11 Extended Range
                    </p>
                    <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xs md:text-base text-white opacity-80 font-thin leadin-[16px]">
                      285 Comfortable Version
                    </p>
                  </div>
                  <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-xl md:text-[28px] text-white font-semibold md:font-medium leading-[24px]">
                    RMB 185,800
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black z-10 block md:hidden"></div>
        </div>
      </section>
  )
}

export default carBannerC11Reev
