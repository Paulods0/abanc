import { CgMail } from "react-icons/cg"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"

import Container from "./container"

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
    <footer className="w-full bg-black/20 flex flex-col">
      <Container>
        <p>footer-top</p>

        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center">

          <div className="flex flex-col">
           
          </div>

        </div>
      </Container>

      <section className="flex text-xs  py-3 bg-vermelho">
        <Container className="flex justify-between items-center text-white px-14">
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
