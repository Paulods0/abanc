import { MdKeyboardArrowDown } from "react-icons/md"
import { Button } from "../ui/button"

import { motion } from "framer-motion"

type Props = {
  title: string
  content: string
}

const HighlightCard = ({ content, title }: Props) => {
  const BACKGROUND_COLOR_HOVER = "#E8E8E8"

  return (
    <motion.div
      whileHover={{
        backgroundColor: BACKGROUND_COLOR_HOVER,
      }}
      transition={{ duration: 0.2 }}
      className="border-b mt-2 items-start bg-white flex flex-col space-y--3 lg:space-y-1 "
    >
      <h1 className="text-vermelho text-lg lg:text-xl capitalize font-semibold">
        {title}
      </h1>

      <div className="flex">
        <div className="text-md lg:text-sm font-medium line-clamp-2 text-black/20">
          {content}
        </div>

        <Button
          variant={"link"}
          className="hidden lg:flex space-x-1 items-center text-xs text-vermelho font-semibold"
        >
          <p>Leia mais</p>
          <MdKeyboardArrowDown />
        </Button>
      </div>
    </motion.div>
  )
}

export default HighlightCard
