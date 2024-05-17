import { CiSearch } from "react-icons/ci"
import { motion } from "framer-motion"
import { ChangeEvent, useState } from "react"

const SearchBar = () => {
  const [search, setSearch] = useState("")

  const [hovered, setHovered] = useState(false)
  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)
  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSearch = () => {
    if (!search) return alert("Pesquise por algo")
    alert(search)
    console.log(search)
  }
  return (
    <motion.div
      animate={{
        border: hovered ? "1px solid #dddddd" : "1px solid transparent",
        marginLeft: hovered ? "50px" : "0px",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative hidden md:hidden lg:flex text-vermelho items-center h-[35px] px-2 justify-center gap-x-2 rounded-full text-base"
    >
      <motion.input
        type="text"
        initial={{ width: 0 }}
        animate={{
          width: hovered ? 100 : 0,
        }}
        onChange={handleSetSearch}
        className="outline-none text-xs px-2 py-1 text-black border-none"
      />

      <button onClick={handleSearch}>
        <CiSearch size={28} />
      </button>
    </motion.div>
  )
}

export default SearchBar
