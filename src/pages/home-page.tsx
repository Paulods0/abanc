import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules"
import "swiper/css"

import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const HomePage = () => {
  return (
    <main className="flex items-center justify-center">
      <Swiper
        className="flex items-center mt-3 justify-center"
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        pagination={true}
        navigation={true}
        slidesPerView={1}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <SwiperSlide key={i} className="rounded-lg">
            <div className="relative w-[88vw] mx-auto h-[480px]">
              <img
                src={"/banner/banner.png"}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                alt=""
              />
              <div className="absolute max-w-[280px] flex-col top-1/3 right-24 flex items-start justify-center">
                <h3 className="text-vermelho text-3xl font-bold">
                  Lorem ipsum dolor sit
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  odit recusandae ducimus...
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  )
}

export default HomePage
