import { FOOTER_LINKS } from "../constants"
import { TbWorld } from "react-icons/tb"
import { FiPhone } from "react-icons/fi"
import { LuMapPin } from "react-icons/lu"
import { CgMail } from "react-icons/cg"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"

const SOCIAL_MEDIAS = [
  {
    url: "#",
    icon: <FaFacebook />,
  },
  {
    url: "#",
    icon: <FaXTwitter />,
  },
  {
    url: "#",
    icon: <CgMail />,
  },
]

const Footer = () => {
  return (
    <footer className="w-full bg-black/20 rounded-t-2xl">
      <section className="w-[800px] space-x-6 flex items-center justify-center mx-auto h-44">
        <div className="flex flex-col">
          <div className="flex space-x-2 items-center">
            <span className="text-vermelho">
              <TbWorld />
            </span>
            <span>info@abanc.ao</span>
          </div>

          <div className="flex space-x-2 items-center">
            <span className="text-vermelho">
              <FiPhone />
            </span>
            <span>222 712 228</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className="text-vermelho">
            <LuMapPin size={22} />
          </div>

          <div className="w-full flex items-start flex-col capitalize">
            <span>travessa ho chi mihn,</span>
            <span>edifício garden</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className="text-vermelho">
            <LuMapPin size={22} />
          </div>

          <div className="w-full flex items-start flex-col capitalize">
            <span>torre b, piso 17, maianga,</span>
            <span>luanda, angola</span>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-2 ml-12">
          <h1 className="capitalize text-vermelho font-bold">
            partilhe este site
          </h1>
          <ul className="flex items-start space-x-3">
            {SOCIAL_MEDIAS.map((social, index) => (
              <li key={index}>
                <Link to={social.url}>{social.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-vermelho w-full h-[40px] flex ">

      </section>
    </footer>
  )
}

export default Footer
