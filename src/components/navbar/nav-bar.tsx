import { Link, useLocation } from "react-router-dom"

import MobileMenu from "./mobile-menu"
import { NAV_LINKS } from "@/constants"
import Container from "../container"
import SearchBar from "./search-bar"
import { motion } from "framer-motion"
import DropDownNavbar from "./drop-down-navbar"

const Navbar = () => {
  const location = useLocation().pathname
  const currentPath = decodeURIComponent(location)

  return (
    <header className="flex sticky top-0 flex-col pb-4 pt-1 border-b z-20 bg-white">
      <Container>
        <section className="flex px-3 lg:px-0 items-center md:items-end lg:items-end justify-between">
          <Link to={"/"}>
            <img
              src="/logo/logo-2.png"
              className="w-20 h-auto md:w-40 object-cover"
              alt="logotipo"
            />
          </Link>

          <nav className=" hidden md:hidden lg:flex items-center mb-[calc(160px/20)]">
            <ul className="flex items-center gap-x-6 ">
              {NAV_LINKS.map((link, i) => (
                <motion.li key={i} className="relative cursor-pointer group">
                  <p
                    className={`capitalize  text-sm hover:text-vermelho font-semibold duration-200 transition-all ${
                      currentPath === link.path ? "text-vermelho" : "text-black"
                    }`}
                  >
                    {link.label}
                  </p>

                  <DropDownNavbar link={link.links} />
                </motion.li>
              ))}
            </ul>
          </nav>
          <SearchBar />

          <div className="mt-2">
            <MobileMenu />
          </div>
        </section>
      </Container>
    </header>
  )
}

export default Navbar
