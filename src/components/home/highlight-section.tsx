import Container from "../container"
import HighlightCard from "./highlight-card"
import MiniSlider from "./mini-slider"

const HighlightSection = () => {
  return (
    <Container>
      <section className="flex flex-col gap-8">
        <div className="flex lg:col-span-4 items-center ">
          <h1 className="text-vermelho font-bold text-xl capitalize">
            destaques
          </h1>
          <hr className="border-b ml-4 w-full" />
        </div>

        <div className="lg:w-[650px]">
          <p className="text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            adipisci ab quos dignissimos? Mollitia quos optio obcaecati
            exercitationem similique.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 lg:place-self-end">
          <MiniSlider />
          {/* "mini slider" */}

          <div>
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
        </div>
      </section>
    </Container>
  )
}

export default HighlightSection
