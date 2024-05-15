type Props = {
  image: string
  title: string
  text: string
}

const AnnouncementCard = ({ image, text, title }: Props) => {
  return (
    <div className="w-full flex items-center h-24 border">
      <img
        src={image}
        className="w-20 h-14 object-contain px-2 mr-3"
        alt={title}
      />
      <div className="flex flex-col items-start">
        <h3 className="text-zinc-500 font-semibold text-lg md:text-xl capitalize">
          {title}
        </h3>

        <h6 className="text-vermelho text-sm font-medium">{text}</h6>
      </div>
    </div>
  )
}

export default AnnouncementCard
