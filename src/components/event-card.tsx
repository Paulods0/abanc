import { RiArrowRightSLine } from "react-icons/ri"
import { Link } from "react-router-dom"

type Props = {
  image: string
}

const EventCard = ({ image }: Props) => {
  return (
    <div className="bg-white shadow-md w-[250px] rounded-lg">
      <img
        src={image}
        className="rounded-t-lg h-40 object-cover w-full"
        alt="lorem"
      />
      <div className="w-full p-3">
        <span className="text-[9px] text-zinc-500">13, Março 2023</span>
        <div className="flex flex-col">
          <h4 className="text-[14px] text-vermelho font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <p className="text-[12px] text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?
          </p>
          <Link
            to=""
            className="self-end flex items-center text-[10px] text-vermelho font-medium"
          >
            <span>Ver mais</span>
            <RiArrowRightSLine />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventCard
