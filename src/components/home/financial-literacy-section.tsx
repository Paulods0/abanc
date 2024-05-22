import Container from "../container"
import VideoDialog from "./video-dialog"

const FinancialLiteracySection = () => {
  return (
    <Container>
      <section className="flex mb-20 flex-col">
        <div className="w-full flex items-center mt-4 mb-5 gap-1">
          <h1 className="text-vermelho text-xl font-bold capitalize">
            literacia financeira
          </h1>
          <hr className="flex-1 border-b ml-4" />
        </div>

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
