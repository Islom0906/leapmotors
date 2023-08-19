import Aos from "aos";
import Image from "next/image";
import Link from "next/link";


const BannerImage = ({ bg , logo , text , link }) => {
  return (
      <section className="relative w-full h-screen  scroll-snap ">
        <div data-aos='fade' data-aos-anchor-placement="top-bottom" className="relative w-full h-full">
          <Image
            src={bg}
            fill
            alt="car"
            className="object-cover w-full h-full object-bottom"
          />
          <div className="absolute top-32 left-[50%]  translate-x-[-50%]">
            <div className="h-10 md:h-[60px] w-full" data-aos='fade-up' data-aos-anchor-placement="top-bottom">
              <Image
                src={logo}
                alt="logo"
                className="w-[280px] xs:w-[425px] lg:w-[637px] h-full mx-auto object-contain"
              />
            </div>
            <div className="mb-5 text-center">
              <p  data-aos='fade-up' data-aos-anchor-placement="top-bottom" className="text-white text-lg font-arial-normal min-w-[320px] md:text-2xl lg:text-[28px] leading-10 md:leading-[56px]">
                {text}
              </p>
            </div>
            <Link  data-aos='fade-up' data-aos-anchor-placement="top-bottom"
              href={link}
              className="text-white text-lg bg-transparent border border-white w-[145px] flex mx-auto justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
  );
};

export default BannerImage;
