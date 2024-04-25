import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"

import "swiper/css/pagination"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { MdKeyboardArrowDown } from "react-icons/md"

const PagePublicacoes = () => {
  return (
    <main className="w-full px-6  flex mb-12 mt-12 flex-col">
      <section>
        <div className="flex gap-x-4 items-center">
          <h1 className="capitalize font-bold text-vermelho text-lg">
            destaques
          </h1>
          <hr className="w-full h-[1px] bg-black/10" />
        </div>
      </section>
      <section className="mt-8 w-full items-end flex gap-x-6">
        <div className="w-[700px] flex flex-col items-start gap-y-4">
          <p className="w-full text-[14px] text-black/40 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vel
            numquam ab. Ipsa nesciunt excepturi quas earum praesentium doloribus
            repellat cumque expedita itaque ducimus quisquam magni magnam
            possimus, tempore ullam eos id consectetur doloremque nam error
            accusantium, ut iusto dicta reprehenderit. Obcaecati, sequi ullam
            blanditiis illo esse quos perspiciatis corrupti!
          </p>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={true}
            pagination={true}
            spaceBetween={12}
            className="w-full rounded-t-2xl bg-rose-300"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <SwiperSlide key={i} className="rounded-t-2xl">
                <img
                  src="cifrao.jpg"
                  className="h-[350px] rounded-t-2xl"
                  alt="cifrao-imagem"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex-1">
          <ul className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="border-b space-y-1">
                <h1 className="capitalize text-vermelho font-semibold">
                  investimentos
                </h1>
                <div className="flex items-end w-full justify-between">
                  <p className=" flex-[2] text-[12px] font-medium line-clamp-2 text-black/20">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, cupiditate?
                  </p>
                  <button className="flex space-x-1 items-center flex-[0.4] text-[10px] w-[80px] text-vermelho font-semibold">
                    <p>Leia mais</p>
                    <MdKeyboardArrowDown />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default PagePublicacoes
