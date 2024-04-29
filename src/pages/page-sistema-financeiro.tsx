import AnnouncementCard from "@/components/annoucement-card"
import EventCard from "@/components/event-card"
import { Link } from "react-router-dom"
import { RiArrowRightSLine } from "react-icons/ri"
import Container from "@/components/container"

const PageSistemaFinanceiro = () => {
  return (
    <main className="w-full mt-12 flex flex-col">
      <Container>
        <section className="w-full grid grid-cols-2 gap-x-2 place-items-center">
          <div className="flex-col flex gap-x-4">
            <h1 className="mb-6 text-vermelho font-bold">Eventos</h1>
            <div className="w-full flex items-center gap-x-6">
              <EventCard image="/cifrao.jpg" />
              <EventCard image="/bfa-funcionário.jpeg" />
            </div>
          </div>

          <div className="w-full flex-col flex gap-x-6">
            <h1 className="mb-6 text-vermelho font-bold">
              Anúncios, Comunicados e Avisos
            </h1>
            <div className="w-full flex flex-col items-center gap-x-6">
              <div className="flex flex-col w-full">
                <AnnouncementCard
                  image="/bancos/bic-logo.png"
                  title="lorem ipsum dolor sit a 2024"
                  text="Anúncio - 12/04/2024"
                />
                <AnnouncementCard
                  image="/bancos/atlantico.png"
                  title="lorem ipsum dolor sit a 2024"
                  text="Anúncio - 05/02/2024"
                />
                <AnnouncementCard
                  image="/bancos/bfa.png"
                  title="lorem ipsum dolor sit a 2024"
                  text="Anúncio - 20/05/2024"
                />
              </div>
              <Link
                to={`/`}
                className="self-end items-center mt-2 flex text-[10px] font-semibold text-vermelho"
              >
                <span>Ver todos</span>
                <RiArrowRightSLine />
              </Link>

              <div className="flex items-start flex-col w-full">
                <h1 className="text-vermelho font-bold">Eventos</h1>
                <ul className="space-y-4 w-full">
                  <li className="flex py-2 border-b items-center space-x-4">
                    <h1 className="text-[12px] font-bold text-vermelho">
                      14 Março.
                    </h1>
                    <h4 className="text-zinc-500 text-[10px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste similique ullam ad.
                    </h4>
                  </li>
                  <li className="flex border-b items-center space-x-4">
                    <h1 className="text-[12px] font-bold text-vermelho">
                      21 Abril.
                    </h1>
                    <h4 className="text-zinc-500 text-[10px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste similique ullam ad.
                    </h4>
                  </li>
                </ul>
                <Link
                  to={`/`}
                  className="self-end items-center mt-2 flex text-[10px] font-semibold text-vermelho"
                >
                  <span>Ver todos</span>
                  <RiArrowRightSLine />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default PageSistemaFinanceiro
