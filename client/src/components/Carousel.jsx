import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import CaroBanner from "./CaroBanner";

export const Carousel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CaroBanner />
      </SwiperSlide>
      <SwiperSlide>
        <CaroBanner />
      </SwiperSlide>
      <SwiperSlide>
        <CaroBanner />
      </SwiperSlide>
      <SwiperSlide>
        <CaroBanner />
      </SwiperSlide>
    </Swiper>
  );
};
