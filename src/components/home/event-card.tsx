import { RiArrowRightSLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type Props = {
  image: string
}

const EventCard = ({ image }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="bg-white w-[25vw] cursor-pointer h-auto md:h-auto lg:h-auto flex flex-col shadow-md rounded-3xl"
    >
      <img
        src={image}
        className="rounded-t-3xl h-48 md:h-80 lg:h-52 object-cover w-full"
        alt="lorem"
      />

      <div className="w-full lg:h-full p-3">
        <span className="text-xs font-semibold text-zinc-500">13, Março 2023</span>
        <div className="flex mt-1 gap-2 flex-col">
          <h4 className="md:text-base text-base line-clamp-2 text-vermelho font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <p className="text-xs text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?
          </p>
          <Link
            to=""
            className="self-end flex items-center text-xs text-vermelho font-medium"
          >
            <span>Ver mais</span>
            <RiArrowRightSLine />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default EventCard
