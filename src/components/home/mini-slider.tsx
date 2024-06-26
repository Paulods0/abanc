import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"

import "swiper/css/pagination"

const MiniSlider = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            <img
              loading="lazy"
              src="/cifrao.jpg"
              className="rounded-t-xl h-60 md:h-80 w-full aspect-square lg:h-80"
              alt="slider-images"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MiniSlider
