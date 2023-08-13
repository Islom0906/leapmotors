import Image from "next/image";

const CarDetailBanner = ({ bg, img, text, title ,imgLong }) => {
  return (
    <>
      <section className="relative h-screen">
        <Image fill src={bg} alt="car" className="object-cover w-full h-full" />
        <div className="absolute top-[140px] w-full text-center">
          <div className="flex items-center justify-center w-full ">
              {img ? (
            <div className={`h-10 mb-3 relative  ${imgLong ? 'w-[500px]' : 'w-[88px] sm:w-[95px]'} `}>
                <Image  src={img} alt="logo" className="object-contain w-full h-full " />
            </div>
              ) : (
                <h3 className="text-white font-arial-semibold text-[22px] leading-7 md:leading-8">
                  {title}
                </h3>
              )}
          </div>
          <div className="mb-5 text-center">
            <p className={`text-white text-lg   font-arial-semibold ${imgLong ? 'text-[20px] md:text-[24px]' : ' md:text-2xl lg:text-[28px]'} leading-10 md:leading-[56px]`}>
              {text}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetailBanner;
