import { CgMail } from "react-icons/cg"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"
import { PiMouseSimpleLight } from "react-icons/pi"

import Container from "../container"
import FooterInfo from "./footer-info"
import { FOOTER_LINKS } from "@/constants"
import FooterHeadInfo from "./footer-head-info"
import { motion } from "framer-motion"
import { useState } from "react"

const Footer = () => {
  const [hovered, setHovered] = useState(false)

  const handleOnMouseEnter = () => setHovered(true)
  const handleOnMouseLeave = () => setHovered(false)

  return (
    <footer className="relative w-full bg-black/20 rounded-t-xl flex flex-col">

      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="size-8 cursor-pointer hidden lg:flex text-3xl text-vermelho rounded-full absolute left-1/2 -top-9 -translate-x-1/2"
      >
        <PiMouseSimpleLight />
      </div>

      <motion.section
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        animate={{
          height: hovered ? "250px" : "0px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="lg:grid grid-cols-3 place-items-center my-2 hidden overflow-hidden"
      >
        <FooterHeadInfo
          title={FOOTER_LINKS[0].title}
          texts={FOOTER_LINKS[0].texts}
        />
        <div className="grid grid-cols-1 capitalize gap-3">
          <FooterHeadInfo
            title={FOOTER_LINKS[1].title}
            texts={FOOTER_LINKS[1].texts}
          />

          <FooterHeadInfo
            title={FOOTER_LINKS[2].title}
            texts={FOOTER_LINKS[2].texts}
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <FooterHeadInfo
            title={FOOTER_LINKS[3].title}
            texts={FOOTER_LINKS[3].texts}
          />

          <FooterHeadInfo
            title={FOOTER_LINKS[4].title}
            texts={FOOTER_LINKS[4].texts}
          />
        </div>
      </motion.section>

      <Container className="px-6 lg:px-2 mt-2">
        <section className="grid grid-cols-2 lg:hidden place-items-start gap-6 my-2 overflow-hidden">
          <FooterHeadInfo
            title={FOOTER_LINKS[0].title}
            texts={FOOTER_LINKS[0].texts}
          />

          <FooterHeadInfo
            title={FOOTER_LINKS[2].title}
            texts={FOOTER_LINKS[2].texts}
          />
          <FooterHeadInfo
            title={FOOTER_LINKS[4].title}
            texts={FOOTER_LINKS[4].texts}
          />

          <FooterHeadInfo
            title={FOOTER_LINKS[3].title}
            texts={FOOTER_LINKS[3].texts}
          />
          <FooterHeadInfo
            title={FOOTER_LINKS[1].title}
            texts={FOOTER_LINKS[1].texts}
          />
        </section>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 my-4 lg:grid-cols-4 lg:gap-0 place-items-start lg:place-items-center">
          <div className="flex flex-col gap-y-2 ">
            <FooterInfo text="info@abanc.co" icon="world" />
            <FooterInfo text="222 712 228" icon="phone" />
          </div>

          <div className="flex flex-col">
            <FooterInfo
              type="uno"
              text="Travessa Ho Chin Min,"
              subtext=" Edifício Garden Towers"
              icon="pin"
            />
          </div>

          <div className="flex flex-col">
            <FooterInfo
              type="uno"
              text="Torre B, Piso 17, Maianga,"
              subtext=" Luanda, Angola"
              icon="pin"
            />
          </div>

          <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-vermelho font-bold">Partilhe este site</h1>
            <div className="flex items-center gap-x-4">
              <a href="https://facebook.com" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaXTwitter />
              </a>
              <a href="mailto:pauloluguenda0@gmail.com" target="_blank">
                <CgMail />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <section className="flex text-xs py-3 bg-vermelho">
        <Container className="grid grid-cols-2 gap-6 md:gap-0 md:grid-cols-4 text-xs text-white px-14">
          <p>&copy; ABANC Todos os direitos reservados</p>
          <p className="capitalize">política de privacidade</p>
          <p className="capitalize">política de cookies</p>
          <p className="capitalize">cancelar newsletter</p>
        </Container>
      </section>
      
    </footer>
  )
}

export default Footer
