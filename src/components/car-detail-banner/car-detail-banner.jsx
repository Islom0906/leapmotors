import Image from "next/image";

const CarDetailBanner = ({ bg, img, text  , title}) => {
  return (
    <>
      <section className="relative h-screen">
          <Image fill src={bg} alt="car" className="object-cover w-full h-full" />
          <div className="absolute top-[140px] w-full text-center">
            <div className="flex items-center justify-center w-full ">
              <div className="h-10 md:h-[40px]  mb-3 relative w-[88px] sm:w-[95px]  ">
                {
                  img ?
                <Image fill src={img} alt="logo" className="mx-auto " />
                  :
                  <h3 className="text-white font-arial-semibold text-[22px] leading-7 md:leading-8"> {title} </h3>
              }
              </div>
            </div>
            <div className="mb-5 text-center">
              <p className="text-white text-lg font-arial-semibold md:text-2xl lg:text-[28px] leading-10 md:leading-[56px]">
                {text}
              </p>
            </div>
          </div>
      </section>
    </>
  );
};

export default CarDetailBanner;
