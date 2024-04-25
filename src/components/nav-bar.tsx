import { Link, useLocation } from "react-router-dom"
import { CiSearch } from "react-icons/ci"
import { FiPhone } from "react-icons/fi"
import MobileMenu from "./mobile-menu"
import { NAV_LINKS } from "@/constants"

const Navbar = () => {
  const { pathname } = useLocation()
  const page = decodeURIComponent(pathname)

  return (
    <header className="w-full flex flex-col">
      <section className="relative h-8 w-full bg-black/10 flex items-center justify-end space-x-4">
        <div className="absolute left-2 capitalize text-black/40 text-[12px] border-r pr-3 border-black/40">
          <p>mercados angola</p>
        </div>

        <div className="flex space-x-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex text-[10px] items-center space-x-1">
              <span className="capitalize">lorem</span>
              <span className="text-green-600">5,3%</span>
              {i !== 4 && <span>-</span>}
            </div>
          ))}
        </div>
        <div className="rounded-l-full bg-gradient-to-br from-[40%] from-vermelho to-black/70 px-4 py-2 h-full flex items-center space-x-4 text-[12px] text-white">
          <div className="flex items-center space-x-2">
            <FiPhone />
            <span className="capitalize">contacto</span>
          </div>
          <span className="uppercase">en</span>
        </div>
      </section>

      <section className="flex items-center lg:px-16 px-4 py-3 lg:py-1 justify-between w-full">
        <Link to={"/"}>
          <img
            src="/logo/logo-2.png"
            className="lg:w-44 lg:h-[60px] h-20 w-32 object-contain"
            alt="logo-marca"
          />
        </Link>
        <nav className="lg:flex w-full md:hidden hidden self-center justify-center mt-6">
          <ul className="flex items-center space-x-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  className={`
                  ${page === link.path && "text-vermelho"}
                  hover:text-vermelho duration-300 transition-all text-[13px] capitalize`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:flex md:hidden hidden mt-6 rounded-full w-[150px] px-2 shadow items-center space-x-2">
          <input
            type="text"
            className="border-none px-1 text-[12px] w-full outline-none"
          />
          <button className="text-vermelho text-[22px]">
            <CiSearch />
          </button>
        </div>

        <MobileMenu />
      </section>
    </header>
  )
}

export default Navbar
