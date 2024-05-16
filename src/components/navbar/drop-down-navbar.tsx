import { motion } from "framer-motion"
import { Link } from "react-router-dom"
type LinkProps = {
  link: string
  label: string
}
type Props = {
  link: { path: string; label: string; links: LinkProps[] }
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
      {link.links.map((li, i) => (
        <motion.li
          className={`${i !== link.links.length - 1 ? "border-b" : ""} w-auto h-auto py-1`}
          whileHover={{ color: "#c64034" }}
          key={i}
        >
          <Link
            className="capitalize text-sm line-clamp-2"
            to={`${link.path}/${handleNavigate(li.link)}`}
          >
            {li.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default DropDownNavbar
