import Image from "next/image";


const CarBanner = ({title , subTitle , bg , bgRes , center}) => {
  return (
    <>
     <section className="relative h-screen ">
     
     {
        bgRes ?
          <>  
            <Image src={bgRes} alt="car" className="block object-cover w-full h-full md:hidden" />
            <Image src={bg} alt="car" className="hidden object-cover w-full h-full md:block" />
          </>
          :
          <Image src={bg} alt="car" className="object-cover w-full h-full" />
        }

        <div className="w-full h-[150px] absolute top-0 left-0 bg-gradient-to-b from-black via-black z-10 block md:hidden"></div>
        <div className={` absolute top-0 left-0 py-[60px] z-20 w-full h-full text-center ${center ? 'flex justify-center items-center' : ''} `}>
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
