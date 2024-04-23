import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"

const Navbar = () => {
  const navlinks = [
    "institucional",
    "publicações",
    "sistema financeiro",
    "educação financeira",
    "legislação e regulamentação",
  ]
  return (
    <header className="w-full flex items-center px-16 py-3 justify-between">
      <img src="/logo/logo-2.png" className="w-44 object-contain" alt="" />

      <nav className="w-full flex self-center justify-center mt-6">
        <ul className="flex items-center space-x-8">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-vermelho duration-300 transition-all"
            >
              <Link className="text-[14px] capitalize" to={"#"}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="mt-6">
        <CiSearch size={24} color="#c64034" />
      </button>
    </header>
  )
}

export default Navbar
