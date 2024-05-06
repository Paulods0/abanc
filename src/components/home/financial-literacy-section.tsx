import Container from "../container"
import VideoDialog from "./video-dialog"

const FinancialLiteracySection = () => {
  return (
    <Container>
      <section className="flex flex-col">
        <h1 className="text-vermelho text-xl mt-4 mb-8 font-bold capitalize">
          literacia financeira
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <VideoDialog
              key={i}
              videoTitle={`Title test ${i + 1}`}
              videoURL="https://www.youtube.com/watch?v=kcVZknz-EfA"
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default FinancialLiteracySection
