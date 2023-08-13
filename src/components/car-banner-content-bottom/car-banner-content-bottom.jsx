import Image from "next/image";

const CarBannerContentBottom = ({ content , bg  }) => {
  return (
    <>
      <section className="h-screen">
        <div className="relative w-full h-full">
        <Image src={bg} alt="car" className="object-cover w-full h-full" />

          <div className="absolute z-20 block w-full text-center top-10 md:hidden">
            <div className="mb-5">
              {content?.map((item, ind) => (
                <div
                  key={ind}
                  className="text-white font-arial-normal leading-[34px] text-center pl-5 mb-6"
                >
                  <p> {item.title} </p>
                  <p className="text-sm">
                    {item.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute z-20 hidden w-full text-center bottom-10 md:block">
            <div className="flex justify-center gap-10 mb-5">
              {content?.map((item, ind) => (
                <div
                  key={ind}
                  className="text-white font-arial-normal leading-[34px] border-l-[2px] border-white text-left pl-5 mb-6"
                >
                  <p className="text-2xl ">{item.title}</p>
                  <p>{item.subTitle} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black via-50% z-10 block md:hidden"></div>
        </div>
      </section>
    </>
  );
};

export default CarBannerContentBottom;
