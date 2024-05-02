import { Card } from "../ui/card"

type Props = {
  videoURL: string
}

const VideoCard = ({ videoURL }: Props) => {
  return (
    <Card className="rounded-lg">
      <video controls className="w-full h-auto rounded-lg object-cover">
        <source src={videoURL} />
      </video>
    </Card>
  )
}

export default VideoCard
