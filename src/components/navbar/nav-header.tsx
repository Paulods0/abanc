import { BsTelephone } from "react-icons/bs"

const NavHeader = () => {
  return (
    <div className="flex justify-end bg-black/10  items-center">
      <div className="flex  items-center h-full gap-x-4 pr-2 md:pr-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <p key={i} className="text-[9px] md:text-xs">
            Lorem
            <span className="text-green-600 ml-1">0.5%</span>
          </p>
        ))}

        <div className="hidden rounded-l-full bg-gradient-to-br from-vermelho to-black/70 h-full md:flex items-center px-3 py-3 space-x-2">
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
