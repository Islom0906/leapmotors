import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { CarBanner } from "@/components";

SwiperCore.use([Autoplay]);
const CarSwiper = ({ content }) => {
  return (
    <>
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
        loop={"true"}
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-screen mySwiper"
      >
        {content?.map((item, ind) => {
          <SwiperSlide key={ind}>
            <div className={"relative w-full h-full swiper1"}>
              <CarBanner
                title={item.title}
                subTitle={item.subTitle}
                bg={item.bg}
              />
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default CarSwiper;
