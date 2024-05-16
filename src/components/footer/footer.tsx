// import { CgMail } from "react-icons/cg"
// import { FaXTwitter } from "react-icons/fa6"
// import { FaFacebook } from "react-icons/fa"
import { PiMouseSimpleLight } from "react-icons/pi"

// import Container from "../container"
// import FooterInfo from "./footer-info"
// import { FOOTER_LINKS } from "@/constants"
// import FooterHeadInfo from "./footer-head-info"
import { motion } from "framer-motion"
import { useState } from "react"

const Footer = () => {
  const [hovered, setHovered] = useState(false)

  const handleOnMouseEnter = () => setHovered(true)
  const handleOnMouseLeave = () => setHovered(false)

  return (
    <footer className="w-full h-32 flex flex-col justify-end relative">
      <section className="flex flex-col z-10 items-center">
        <HoverButton mEnter={handleOnMouseEnter} mLeave={handleOnMouseLeave} />
        <motion.div
          initial={{ height: 0 }}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          animate={{ height: hovered ? 300 : 0 }}
          className="w-full bg-neutral-400 grid grid-cols-1 lg:grid-cols-3 text-white place-items-center px-8 gap-4"
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            sapiente ab optio reiciendis ad, quaerat dignissimos. Nostrum autem
            pariatur molestias modi similique aperiam maiores, porro fugit,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            sapiente ab optio reiciendis ad, quaerat dignissimos. Nostrum autem
            pariatur molestias modi similique aperiam maiores, porro fugit,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            sapiente ab optio reiciendis ad, quaerat dignissimos. Nostrum autem
            pariatur molestias modi similique aperiam maiores, porro fugit,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          </p>
        </motion.div>
      </section>

      <section className="w-full flex flex-col z-20 self-end">
        <div className="w-full bg-neutral-400 h-28"></div>
        <div className="bg-vermelho w-full h-10"></div>
      </section>
    </footer>
  )
}

export default Footer

const HoverButton = ({
  mEnter,
  mLeave,
}: {
  mEnter: () => void
  mLeave: () => void
}) => {
  return (
    <div
      onMouseEnter={mEnter}
      onMouseLeave={mLeave}
      className="p-4 text-4xl text-vermelho capitalize w-fit"
    >
      <PiMouseSimpleLight />
    </div>
  )
}
