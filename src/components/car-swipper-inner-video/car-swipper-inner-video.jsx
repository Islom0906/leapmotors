
const CarSwiperInnerVideo = ({textColor , content , video}) => {

  console.log(content.video);
  return (
    <>
       <section class="relative h-full bg-white md:h-screen">
      <div class="relative w-full h-full px-5 pt-5 pb-10 md:p-0">
        <div className="w-full h-[470px] md:h-full  rounded-lg md:rounded-none mb-5">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source
              className="w-full"
              src={video}
              type="video/mp4"
            />
          </video>
        </div>
        <div class="md:absolute top-[60px] w-full text-center">
          <div class={`w-full  mb-5 text-center ${textColor ? `text-${textColor} ` : 'md:text-white'} `}>
            <p class={` font-semibold text-[22px] leading-7 md:leading-8 mb-2`}>{content.title}</p>
            <p class="text-sm  font-normal md:leading-5">{content.subTitle}</p>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default CarSwiperInnerVideo
