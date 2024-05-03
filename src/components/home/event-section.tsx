import Container from "../container"
import { Button } from "../ui/button"
import AnnouncementCard from "./annoucement-card"
import EventCard from "./event-card"

const EventSection = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 place-items-start lg:grid-cols-4 gap-14 lg:gap-10">
        <div className="lg:col-span-2 grid-rows-2 w-full">
          <h1 className="text-xl text-vermelho font-bold capitalize mb-4">
            eventos
          </h1>

          <div className="grid lg:place-items-center lg:place-self-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <EventCard image="/bfa-funcionário.jpeg" />
            <EventCard image="/bfa-funcionário.jpeg" />
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col w-full">
          <h1 className="text-xl text-vermelho mb-4 font-bold capitalize">
            anúncios, comunicados e avisos
          </h1>
          <div className="w-full flex flex-col">
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
              image="/bancos/bic-logo.png"
              title="lorem ipsum"
              text="anúncio - 06/04/2024"
            />

            <Button
              variant={"link"}
              className="self-end underline text-vermelho text-xs"
            >
              Ver todos
            </Button>
          </div>

          {/**bottom */}
          <div>
            <h1 className="text-xl mb-4 text-vermelho font-bold capitalize">
              eventos
            </h1>

            <>
              <ul className="flex flex-col gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex gap-4 lg:gap-2 items-center border-b"
                  >
                    <h1 className="text-vermelho font-bold text-base">
                      14 Mar.
                    </h1>

                    <p className="text-sm lg:text-sm text-zinc-400 line-clamp-none">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      adipisicing cing.
                    </p>
                  </li>
                ))}
                <a
                  href={""}
                  className="text-xs underline text-vermelho font-medium self-end"
                >
                  Ver todos
                </a>
              </ul>
            </>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default EventSection
