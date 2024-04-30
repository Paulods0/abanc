import { TfiWorld } from "react-icons/tfi"
import { GrLocation } from "react-icons/gr"
import { FiPhone } from "react-icons/fi"

type Props = {
  text: string
  subtext?: string
  type?: "uno" | "default"
  icon: "world" | "pin" | "phone"
}

const icons = {
  world: <TfiWorld size={18} />,
  pin: <GrLocation size={18} />,
  phone: <FiPhone size={18} />,
}

const FooterInfo = ({ type = "default", text, subtext, icon }: Props) => {
  return (
    <>
      {type === "default" ? (
        <div className="flex text-vermelho items-center text-xs gap-x-2">
          {icons[icon]}
          <span className="text-black">{text}</span>
        </div>
      ) : (
        <div className="flex text-vermelho items-center text-xs gap-x-2">
          <span>{icons[icon]}</span>
          <div className="flex flex-col">
            <span className="text-black">{text}</span>
            <span className="text-black">{subtext}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default FooterInfo
