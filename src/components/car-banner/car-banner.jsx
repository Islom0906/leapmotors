import Image from "next/image";


const CarBanner = ({title , subTitle , bg}) => {
  return (
    <>
     <section className="relative h-screen ">
        <Image src={bg} alt="car" className="object-cover w-full h-full"/>
        <div className="w-full h-[150px] absolute top-0 left-0 bg-gradient-to-b from-black via-black z-10 block md:hidden"></div>
        <div className="absolute top-[60px] w-full text-center z-20">
          <div className="mb-5 text-center">
            <p className="text-white font-arial-semibold text-[28px] leading-7 md:leading-8 mb-4">{title}</p>
            <p className="text-sm text-white font-arial-normal md:leading-5">{subTitle}</p>
          </div>
        </div>
        <div className="w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black z-10 block md:hidden"></div>
    </section> 
    </>
  )
}

export default CarBanner
