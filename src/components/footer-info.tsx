import { TfiWorld } from "react-icons/tfi"
import { GrLocation } from "react-icons/gr"
import { FiPhone } from "react-icons/fi"

type Props = {
  text: string
  icon: "world" | "pin" | "phone"
}

const icons = {
  world: <TfiWorld />,
  pin: <GrLocation />,
  phone: <FiPhone />,
}

const FooterInfo = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center text-base gap-x-2">
      {icons[icon]}
      <span>{text}</span>
    </div>
  )
}

export default FooterInfo
