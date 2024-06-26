import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import {CarSwiperInner, CarSwiperInnerVideo} from "@/components";

SwiperCore.use([Autoplay]);
const CarSwiper = ({ content , textColor ,isRes=true}) => {
  return (
    <section className={`${isRes ? "": "hidden md:block" }`}>
      <Swiper
        id={"mySwiper1"}
        autoplay={{
          delay: 4000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        speed={1000}
        loop={"true"}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="md:h-screen mySwiper-team"
      >
        {
            content?.map((item, ind) =>(
                <SwiperSlide key={ind}>
                    <div className={"relative w-full h-full swiper1"}>
                        {
                            item.video ?
                                <CarSwiperInnerVideo content={item} video={item.video} />
                                :

                        <CarSwiperInner
                            bgResp={item.bgResp}
                            textColor={textColor}
                            title={item.title}
                            subTitle={item?.subTitle}
                            bg={item.bg}
                        />
                        }
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
    </section>
  );
};

export default CarSwiper;
