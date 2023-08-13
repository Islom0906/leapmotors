import Image from 'next/image'


const CarSwiperInner = ({title , subTitle , bg}) => {
  return (
    <>
      <section class="relative h-full bg-white md:h-screen">
      <div class="relative w-full h-full px-5 pt-5 pb-10 md:p-0">
        <div className="w-full h-[470px] md:h-full  rounded-lg md:rounded-none">
          <Image src={bg} alt="car" className="object-cover w-full h-full"/>
        </div>
        <div class="md:absolute top-[60px] w-full text-center">
          <div class="w-full  mb-5 text-center">
            <p class="md:text-white font-arial-semibold text-[22px] leading-7 md:leading-8 mb-2">{title}</p>
            <p class="text-sm md:text-white font-arial-normal md:leading-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </section> 
    
    </>
  )
}

export default CarSwiperInner
