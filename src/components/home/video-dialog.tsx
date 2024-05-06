import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "../ui/dialog"
import VideoCard from "./video-card"

type Props = {
  videoURL: string
  videoTitle: string
}

const VideoDialog = ({ videoTitle, videoURL }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer">
          <div className="absolute inset-0 w-full h-full z-20 bg-black/10" />
          <VideoCard youtubeVideoURL={videoURL} />
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{videoTitle}</DialogTitle>
          <DialogDescription>Descrição do video.</DialogDescription>
        </DialogHeader>

        <VideoCard youtubeVideoURL={videoURL} />
      </DialogContent>
    </Dialog>
  )
}

export default VideoDialog
