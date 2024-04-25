import { FOOTER_LINKS } from "../constants"
import { TbWorld } from "react-icons/tb"
import { FiPhone } from "react-icons/fi"
import { LuMapPin } from "react-icons/lu"
import { CgMail } from "react-icons/cg"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"

import { CiDesktopMouse2 } from "react-icons/ci"
import { IoIosArrowRoundDown } from "react-icons/io"

import { motion } from "framer-motion"
import { useState } from "react"

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
  const [hovered, setHovered] = useState(false)
  const footer_animation = {
    initial: { height: "0px", opacity: 0 },
    animate: { height: "auto", opacity: 1 },
  }
  return (
    <footer className="relative mt-24 w-full pt-12 bg-black/20 rounded-t-2xl">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="absolute flex flex-col justify-center items-center -top-14 right-1/2 text-vermelho"
      >
        <CiDesktopMouse2 size={26} />
        <IoIosArrowRoundDown size={24} />
      </div>

      <motion.section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        variants={footer_animation}
        initial="initial"
        animate={hovered ? "animate" : "initial"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full px-12 overflow-hidden h-0 flex mx-auto items-center justify-center space-x-8"
      >
        <div className="w-full flex items-start justify-center space-x-16">
          <div>
            <h1 className="text-vermelho text-base font-bold capitalize">
              {FOOTER_LINKS[0].title}
            </h1>
            <ul>
              {FOOTER_LINKS[0].texts.map((text, index) => (
                <li
                  className="text-black/50 capitalize text-[13px]"
                  key={index}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[1].title}
              </h1>
              <ul>
                {FOOTER_LINKS[1].texts.map((text, index) => (
                  <li
                    className="text-black/50 capitalize text-[13px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[2].title}
              </h1>
              <ul>
                {FOOTER_LINKS[2].texts.map((text, index) => (
                  <li
                    className="text-black/50 capitalize text-[13px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[3].title}
              </h1>
              <ul>
                {FOOTER_LINKS[3].texts.map((text, index) => (
                  <li
                    className="text-black/50  capitalize text-[13px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[4].title}
              </h1>
              <ul>
                {FOOTER_LINKS[4].texts.map((text, index) => (
                  <li
                    className="text-black/50 line-clamp-2 capitalize text-[13px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="w-[800px] space-x-6 flex items-center justify-center mx-auto h-36">
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
            <LuMapPin size={20} />
          </div>

          <div className="w-full flex items-start flex-col capitalize">
            <span>travessa ho chi mihn,</span>
            <span>edifício garden</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className="text-vermelho">
            <LuMapPin size={20} />
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

      <section className="bg-vermelho text-[12px] justify-center space-x-12 text-white items-center w-full h-[40px] flex">
        <span>&copy;ABANC 2024 Todos os direitos reservados</span>
        <span>Política de Privacidade</span>
        <span>Política de cookies</span>
        <span>Cancelar newsletter</span>
        <span>Cancelar newsletter</span>
      </section>
    </footer>
  )
}

export default Footer
