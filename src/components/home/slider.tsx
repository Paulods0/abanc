import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

type Props = {
  image: string
}

const Slider = ({ image }: Props) => {
  return (
    <div className="w-full px-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        autoplay
        navigation
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <SwiperSlide key={i} className="rounded-xl">
            <div className="relative flex items-center justify-center">
              <img
                src={image}
                className="object-cover h-[250px] md:h-full lg:h-full rounded-xl"
                alt="slider-images"
              />

              <div className="absolute hidden md:block bottom-1/2 translate-y-1/2 right-12 lg:right-32">
                <h1 className="text-vermelho font-bold text:xl lg:text-2xl w-[200px] md:w-[300px] lg:w-[350px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h1>
                <p className="line-clamp-2 w-[200px] lg:w-[300px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  dignissimos adipisci unde similique nemo, soluta laborum
                  quisquam natus earum delectus.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
