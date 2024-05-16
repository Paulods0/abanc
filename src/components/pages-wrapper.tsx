import { Outlet, useLocation } from "react-router-dom"
import { FaXTwitter } from "react-icons/fa6"
import { TiSocialGooglePlus } from "react-icons/ti"
import { Link } from "react-router-dom"
import { BsFilePdfFill } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import Container from "./container"

const SOCIAL_MEDIAS = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/",
    color: "bg-black text-white",
  },
  {
    icon: <TiSocialGooglePlus />,
    link: "https://www.google.co.ao/?hl=pt",
    color: "bg-red-600 text-white",
  },
]

const PagesWrapper = () => {
  const location = useLocation().pathname
  const urlDecoded = decodeURIComponent(location.split("/")[2])
  const currentURL = urlDecoded.replace(/-/g, " ")

  return (
    <Container className="flex flex-col pt-6 pb-12">
      <div className="flex flex-col w-full">
        <h1 className="text-[#A39161] border-b pb-3 uppercase text-lg md:text-xl lg:text-2xl font-semibold">
          {currentURL}
        </h1>

        <div className="w-full border-b pb-3 flex mt-4 justify-between items-center">
          <div className="flex items-center gap-4">
            {SOCIAL_MEDIAS.map((link, indx) => (
              <Link
                key={indx}
                className={`text-lg p-2 rounded-full ${link.color}`}
                to={link.link}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <div className="flex items-center text-vermelho gap-2 text-lg">
            <span className="text-2xl">
              <BsFilePdfFill />
            </span>
            <a
              href="/ABANC-PDF.pdf"
              download
              target="_blank"
              className="underline capitalize"
            >
              imprimir
            </a>
          </div>
        </div>
      </div>

      <Outlet />
    </Container>
  )
}

export default PagesWrapper
