import VideoCard from "./video-card"

const FinancialLiteracySection = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-vermelho text-xl mt-4 mb-8 font-bold capitalize">
        literacia financeira
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
        <VideoCard videoURL="/videos/atlantico.mp4" />
        <VideoCard videoURL="/videos/monetario.mp4" />
        <VideoCard videoURL="/videos/notas.mp4" />
      </div>
    </section>
  )
}

export default FinancialLiteracySection
