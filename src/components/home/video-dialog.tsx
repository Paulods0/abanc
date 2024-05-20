import { motion } from "framer-motion"
import {
  Dialog,
  DialogTitle,
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
        <motion.div
          whileTap={{ scale: 1.05 }}
          className="relative cursor-pointer "
        >
          <div className="absolute inset-0 rounded-2xl w-full h-full z-20 " />
          <VideoCard youtubeVideoURL={videoURL} />
        </motion.div>
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
