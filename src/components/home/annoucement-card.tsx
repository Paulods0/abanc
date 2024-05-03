type Props = {
  image: string
  title: string
  text: string
}

const AnnouncementCard = ({ image, text, title }: Props) => {
  return (
    <div className="w-full flex items-center h-14 border">
      <img
        src={image}
        className="w-16 h-14 object-contain px-2 mr-3"
        alt={title}
      />
      <div className="flex flex-col items-start">
        <h3 className="text-zinc-500 font-semibold text-xs uppercase">
          {title}
        </h3>
        <h6 className="text-vermelho text-xs font-medium">{text}</h6>
      </div>
    </div>
  )
}

export default AnnouncementCard
