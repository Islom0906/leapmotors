import Image from 'next/image'

const CarCharacteristics = ({bg , characteristics , logo}) => {
  return (
    <>
      <section className="w-full h-screen mb-20 overflow-hidden md:mb-0">
      <div className="relative w-full h-full">
        <Image src={bg} alt="car" className="object-cover w-full h-full shadow-inner"/>
        <div className="w-full h-[150px] absolute top-0 left-0 bg-gradient-to-b from-black via-black z-10 block md:hidden object-bototm"></div>
        <div className="absolute top-[45px] md:top-20 w-full text-center z-20">
          <div className="mb-5 text-center">
          {
                  logo ?
                  <div className='flex items-center justify-center'>
                  <div className="h-10 md:h-[40px]  mb-3 relative w-[88px] sm:w-[95px]  ">
                <Image  src={logo} alt="logo" className="object-contain w-full h-full " />
            </div>

                  </div>
                  :
                  <h3 className="text-white font-arial-semibold text-[22px] leading-7 md:leading-8"> {characteristics.title} </h3>
              }
            <p className="text-base leading-9 text-white font-arial-normal md:text-lg lg:text-xl" > {characteristics.subTitle} </p>
          </div>
          <div className="hidden md:block">
            <div className="mx-auto text-left grid grid-cols-2 md:grid-cols-4 gap-[30px] w-fit">
              <div>
                <p className="text-white opacity-80 font-arial-thin leading-[28px]">Lenght</p>
                <p className="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.lenght} <span className="text-base">mm</span></p>
              </div>
              <div>
                <p className="text-white opacity-80 font-arial-thin leading-[28px]">Width</p>
                <p className="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.width} <span className="text-base">mm</span></p>
              </div>
              <div>
                <p className="text-white opacity-80 font-arial-thin leading-[28px]">Height</p>
                <p className="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.height} <span className="text-base">mm</span></p>
              </div>
              <div>
                <p className="text-white opacity-80 font-arial-thin leading-[28px]">Wheelbase</p>
                <p className="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.wheelbase} <span class="text-base">mm</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute z-20 block w-full text-center bottom-5 md:hidden">
          <div class="mx-auto text-left grid grid-cols-2 md:grid-cols-4 gap-[30px] w-fit">
            <div>
              <p class="text-white opacity-80 font-arial-thin leading-[28px]">Lenght</p>
              <p class="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.lenght} <span class="text-base">mm</span></p>
            </div>
            <div>
              <p class="text-white opacity-80 font-arial-thin leading-[28px]">Width</p>
              <p class="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.width} <span class="text-base">mm</span></p>
            </div>
            <div>
              <p class="text-white opacity-80 font-arial-thin leading-[28px]">Height</p>
              <p class="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.height} <span class="text-base">mm</span></p>
            </div>
            <div>
              <p class="text-white opacity-80 font-arial-thin leading-[28px]">Wheelbase</p>
              <p class="text-2xl text-white font-arial-medium leading-[24px]">{characteristics.about.wheelbase} <span class="text-base">mm</span></p>
            </div>
          </div>
        </div>
        <div class="w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black z-10 block md:hidden"></div>
        </div>
    </section>
    </>
  )
}

export default CarCharacteristics
