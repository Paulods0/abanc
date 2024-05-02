import { IoMdMenu } from "react-icons/io"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import { NAV_LINKS } from "@/constants"
import { Link } from "react-router-dom"
import { CgMail } from "react-icons/cg"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"

import { CiSearch } from "react-icons/ci"

const MobileMenu = () => {
  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger>
          <div className="text-[30px] p-4">
            <IoMdMenu />
          </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-start">
          {/* <SheetClose className="absolute right-2">fechar</SheetClose> */}

          <img
            src="/logo/logo-2.png"
            className="w-20 self-start object-cover"
          />

          <div className="flex items-center justify-between border-2 my-4 px-4 w-full py-3 text-vermelho rounded-full">
            <input
              type="text"
              placeholder="Pesquise algo..."
              className="border-none outline-none text-lg placeholder:text-lg text-black placeholder:text-black"
            />
            <button onClick={() => console.log("pesquisou mobile-navbar")}>
              <CiSearch size={22} />
            </button>
          </div>

          <section className="flex flex-col mt-12 w-full justify-between items-start">
            <h1 className="font-bold text-zinc-800 uppercase text-xl underline">
              Navegação
            </h1>

            <ul className="w-full flex flex-col items-start h-full justify-start gap-6 mt-8">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <SheetClose className="uppercase text-lg text-black text-start">
                      {link.label}
                    </SheetClose>
                  </Link>
                </li>
              ))}
            </ul>

            <SheetFooter className="self-center mt-36">
              <div className="flex flex-col">
                <h1 className="font-bold uppercase">Partilhe este site</h1>
                <div className="flex mt-4 items-center justify-between">
                  <FaFacebook size={24} />
                  <FaXTwitter size={24} />
                  <CgMail size={24} />
                </div>
              </div>
            </SheetFooter>
          </section>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
