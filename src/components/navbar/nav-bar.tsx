import { Link, useLocation } from "react-router-dom"

import MobileMenu from "./mobile-menu"
import { NAV_LINKS } from "@/constants"
import Container from "../container"
import NavHeader from "./nav-header"
import SearchBar from "./search-bar"

const Navbar = () => {
  const location = useLocation().pathname
  const currentPath = decodeURIComponent(location)

  return (
    <header className="flex flex-col border-b pb-4">
      <NavHeader />

      <Container>
        <section className="flex px-14 lg:px-0 items-center md:items-end lg:items-end justify-between py-2">
          <img
            src="/logo/logo-2.png"
            className="w-24 md:w-40 object-cover"
            alt="logotipo"
          />

          <nav className=" hidden md:hidden lg:flex items-center mb-[calc(160px/25)]">
            <ul className="flex items-center gap-x-6 ">
              {NAV_LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className={`capitalize text-sm hover:text-vermelho font-semibold duration-200 transition-all ${
                      currentPath === link.path ? "text-vermelho" : "text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
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
