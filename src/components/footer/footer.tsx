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
import NewsletterDialog from "./newsletter-dialog"

const Footer = () => {
  const [hovered, setHovered] = useState(false)

  const handleOnMouseEnter = () => setHovered(true)
  const handleOnMouseLeave = () => setHovered(false)

  return (
    <footer className="w-full h-32 flex flex-col mt-28 md:mt-0 justify-end relative">
      <section className="relative flex flex-col z-10 items-center">
        <HoverButton mEnter={handleOnMouseEnter} mLeave={handleOnMouseLeave} />
        <motion.div
          initial={{ height: 0 }}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          animate={{ height: hovered ? 300 : 0 }}
          className="w-full bg-neutral-300 overflow-y-hidden"
        >
          <div className="w-full lg:w-[1540px] mx-auto flex items-start pt-8 justify-between px-24">
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
          </div>
        </motion.div>
      </section>

      <section className="w-full flex flex-col z-20 self-end">
        <div className="w-full bg-neutral-300 p-8 lg:py-3 lg:h-28 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 place-items-start md:place-items-center mt-5 lg:mt-0">
          <div className="flex  flex-col gap-y-2 lg:w-auto md:items-center lg:items-start w-full ">
            <FooterInfo text="info@abanc.co" icon="world" />
            <FooterInfo text="222 712 228" icon="phone" />
          </div>

          <div className="flex md:items-center lg:items-start flex-col w-full lg:w-auto ">
            <FooterInfo
              type="uno"
              text="Travessa Ho Chin Min,"
              subtext=" Edifício Garden Towers"
              icon="pin"
            />
          </div>

          <div className="flex  flex-col w-full lg:w-auto  md:items-center lg:items-start">
            <FooterInfo
              type="uno"
              text="Torre B, Piso 17, Maianga,"
              subtext=" Luanda, Angola"
              icon="pin"
            />
          </div>

          <div className="flex  flex-col items-start gap-y-2 w-full lg:w-auto  md:items-center lg:items-start">
            <h1 className="text-vermelho text-sm font-bold">
              Partilhe este site
            </h1>
            <div className="flex items-center gap-x-4">
              <a href="https://facebook.com" target="_blank">
                <FaFacebook size={20} />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaXTwitter size={20} />
              </a>
              <a href="mailto:pauloluguenda0@gmail.com" target="_blank">
                <CgMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <section className="flex text-xs py-3 bg-vermelho">
          <Container className="flex items-start md:justify-around md:space-x-10 gap-4 lg:gap-0 flex-col-reverse md:flex-row md:gap-0 text-xs text-white px-14">
            <p className="text-base lg:text-sm">
              &copy; ABANC Todos os direitos reservados
            </p>
            <p className="text-base lg:text-sm capitalize">
              política de privacidade
            </p>
            <p className="text-base lg:text-sm capitalize">
              política de cookies
            </p>

            <NewsletterDialog />
          </Container>
        </section>
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
      className="p-4 text-3xl text-vermelho hidden lg:flex capitalize w-fit"
    >
      <PiMouseSimpleLight />
    </div>
  )
}
