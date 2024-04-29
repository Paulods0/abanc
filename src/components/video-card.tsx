type Props = {
  videoURL: string
}

const VideoCard = ({ videoURL }: Props) => {
  return (
    <div className="rounded-lg">
      <video controls className="w-[35vw] h-[250px] rounded-lg object-cover">
        <source src={videoURL} />
      </video>
    </div>
  )
}

export default VideoCard
