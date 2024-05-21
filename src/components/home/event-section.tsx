import Container from "../container"
import { Button } from "../ui/button"
import AnnouncementCard from "./annoucement-card"
import EventCard from "./event-card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const swiperBreakPoints = {
  390: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
}
const EventSection = () => {
  return (
    <Container>
      <section className="space-y-14">
        <div className="w-full">
          <h1 className="text-xl text-vermelho font-bold capitalize mb-4">
            eventos
          </h1>

          <Swiper
            autoplay
            navigation
            spaceBetween={20}
            slidesPerView={4}
            modules={[Autoplay, Navigation]}
            breakpoints={swiperBreakPoints}
            className="py-2"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index} className="w-full">
                <EventCard image="/bfa-funcionário.jpeg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl text-vermelho mb-4 font-bold capitalize">
              anúncios, comunicados e avisos
            </h1>
            <Button
              variant={"link"}
              className="self-end underline text-vermelho text-xs"
            >
              Ver todos
            </Button>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <AnnouncementCard
              image="/bancos/atlantico.png"
              title="lorem ipsum"
              text="anúncio - 06/04/2024"
            />
            <AnnouncementCard
              image="/bancos/bfa.png"
              title="lorem ipsum"
              text="anúncio - 20/04/2024"
            />
            <AnnouncementCard
              image="/bancos/bfa.png"
              title="lorem ipsum"
              text="anúncio - 20/04/2024"
            />
            <AnnouncementCard
              image="/bancos/atlantico.png"
              title="lorem ipsum"
              text="anúncio - 06/04/2024"
            />
            <AnnouncementCard
              image="/bancos/bic-logo.png"
              title="lorem ipsum"
              text="anúncio - 06/04/2024"
            />
            <AnnouncementCard
              image="/bancos/bic-logo.png"
              title="lorem ipsum"
              text="anúncio - 06/04/2024"
            />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default EventSection
