import { CiSearch } from "react-icons/ci"
import { motion } from "framer-motion"
import { useState } from "react"

const SearchBar = () => {
  const [hovered, setHovered] = useState(false)
  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)
  return (
    <motion.div
      animate={{
        border: hovered ? "1px solid #dddddd" : "1px solid transparent",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative hidden md:hidden lg:flex text-vermelho items-center h-[35px] px-2 justify-center gap-x-2 rounded-full text-base"
    >
      <div className="flex items-center">
        <motion.input
          animate={{
            width: hovered ? "100px" : "0px",
          }}
          type="text"
          className="outline-none text-xs px-2 py-1 text-black border-none "
        />
      </div>

      <button onClick={() => console.log("pesquisou")}>
        <CiSearch size={22} />
      </button>
    </motion.div>
  )
}

export default SearchBar
