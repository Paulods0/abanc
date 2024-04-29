import { Link, useLocation } from "react-router-dom"
import { CiSearch } from "react-icons/ci"
import { FiPhone } from "react-icons/fi"
import MobileMenu from "./mobile-menu"
import { NAV_LINKS } from "@/constants"
import Container from "./container"
import NavHeader from "./nav-header"

const Navbar = () => {
  return (
    <header className="bg-black/30 flex flex-col">
      <NavHeader />
      navbar
    </header>
  )
}

export default Navbar
