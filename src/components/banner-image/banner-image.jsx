import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const BannerImage = ({ bg, logo, text, link }) => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-screen scroll-snap ">
      <div
        data-aos="fade"
        data-aos-anchor-placement="top-bottom"
        className="relative w-full h-full"
      >
        <Image
          src={bg}
          fill
          alt={logo}
          priority={true}
          className="object-cover object-bottom w-full h-full z-[3]"
        />
        <div className="relative z-[10]  w-full h-screen flex justify-center pt-[30%] md:block  md:pt-32  ">
          <div>
            <div
              className="h-10 md:h-[60px] w-full"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Image
                src={logo}
                alt={logo}
                fill
                priority={true}
                className="w-[280px] xs:w-[425px] lg:w-[637px] h-full mx-auto object-contain"
              />
            </div>
            <div className="mb-5 text-center">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-white text-lg font-arial-normal min-w-[320px] md:text-2xl lg:text-[28px]"
              >
                {text}
    </p>
            </div>
            <Link
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              href={link}
              className="text-white text-lg bg-transparent border border-white w-[185px] flex mx-auto justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"
            >
              {t("more")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerImage;
