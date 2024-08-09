import { BsTelephone } from "react-icons/bs"

const NavHeader = () => {
  return (
    <div className="flex justify-end bg-white  items-center">
      <div className="flex  items-center h-full gap-x-4 pr-2 md:pr-0">
        <div className="hidden bg-gradient-to-br rounded-l-full from-red-500 via-red-500 to-black/80 h-full md:flex items-center px-3 py-3 space-x-2">
          <a
            href="tel:+244-941-685-402"
            className="text-white text-xs flex items-center capitalize gap-x-2"
          >
            <BsTelephone color="#FFF" />
            contacto
          </a>

          <select className="border-none outline-none bg-transparent text-xs text-white">
            <option className="text-xs text-black" selected value="português">
              PT
            </option>
            <option className="text-xs text-black" value="inglês">
              EN
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default NavHeader
