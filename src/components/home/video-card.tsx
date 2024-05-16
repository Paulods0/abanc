import { Card } from "../ui/card"

type Props = {
  youtubeVideoURL: string
}

const VideoCard = ({ youtubeVideoURL }: Props) => {
  const videoURL = youtubeVideoURL.split("/watch?v=").join("/embed/")!!

  return (
    <Card className="rounded-2xl">
      <iframe
        src={videoURL}
        className="w-full h-full aspect-video rounded-2xl object-cover"
      />
    </Card>
  )
}

export default VideoCard
