import { motion } from "framer-motion"
import { Link } from "react-router-dom"

type Props = {
  link: string[]
}

const DropDownNavbar = ({ link }: Props) => {
  const handleNavigate = (link: string) => {
    return decodeURIComponent(link).replace(/ /g, "-")
  }
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="absolute left-0 top-5 gap-2 flex-col w-[250px] group-hover:flex hidden py-2 px-6 rounded-lg bg-white shadow-md"
    >
      {link.map((li, i) => (
        <motion.li
          className={`${i !== link.length - 1 ? "border-b" : ""} w-auto`}
          whileHover={{ color: "#c64034" }}
          key={i}
        >
          <Link className="capitalize text-sm" to={`/${handleNavigate(li)}`}>
            {li}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default DropDownNavbar
