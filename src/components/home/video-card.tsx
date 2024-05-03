import { Card } from "../ui/card"

type Props = {
  youtubeVideoURL: string
}

const VideoCard = ({ youtubeVideoURL }: Props) => {
  const videoURL = youtubeVideoURL.split("/watch?v=").join("/embed/")!!

  return (
    <Card className="rounded-lg">
      <iframe
        src={videoURL}
        className="w-full h-full aspect-video rounded-lg object-cover"
      />
    </Card>
  )
}

export default VideoCard
