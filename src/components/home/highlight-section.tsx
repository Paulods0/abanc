import Container from "../container"
import HighlightCard from "./highlight-card"
import MiniSlider from "./mini-slider"

const HighlightSection = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 lg:py-0 lg:grid-cols-4 gap-8">
        <div className="flex lg:col-span-4 items-center ">
          <h1 className="text-vermelho font-bold text-xl capitalize">
            destaques
          </h1>
          <hr className="border-b ml-4 w-full" />
        </div>

        <div className="grid grid-cols-1 col-span-2 gap-6">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            adipisci ab quos dignissimos? Mollitia quos optio obcaecati
            exercitationem similique.
          </p>
          <MiniSlider />
        </div>

        <div className="lg:col-span-2 lg:place-self-end">
          <HighlightCard
            title="investimentos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          adipisci ab quos dignissimos"
          />
          <HighlightCard
            title="em análise"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            adipisci ab quos dignissimos"
          />
          <HighlightCard
            title="lorem ipsum"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          adipisci ab quos dignissimos"
          />
          <HighlightCard
            title="lorem ipsum"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          adipisci ab quos dignissimos"
          />
        </div>
      </section>
    </Container>
  )
}

export default HighlightSection
