import Container from "@/components/container"
import VideoCard from "@/components/video-card"

const PageLegislacao = () => {
  return (
    <main className="my-12">
      <Container>
        <div className="flex flex-col items-start">
          <h1 className="text-vermelho text-xl mt-4 mb-8 font-bold capitalize">
            literacia financeira
          </h1>

          <div className="w-full flex items-center  gap-x-5">
            <VideoCard videoURL="/videos/atlantico.mp4" />
            <VideoCard videoURL="/videos/monetario.mp4" />
            <VideoCard videoURL="/videos/notas.mp4" />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default PageLegislacao
