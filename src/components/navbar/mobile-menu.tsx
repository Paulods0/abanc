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
import { RiArrowDropDownLine } from "react-icons/ri"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"
import { useState } from "react"

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

          <div className="flex items-center justify-between border-2 my-4 p-2 w-full text-vermelho rounded-full">
            <input
              type="text"
              placeholder="Pesquise algo..."
              className="border-none outline-none text-sm placeholder:text-sm text-black placeholder:text-black"
            />
            <button onClick={() => console.log("pesquisou mobile-navbar")}>
              <CiSearch size={22} />
            </button>
          </div>

          <ul className="w-full flex flex-col items-start h-[300px] custom-scrollbar overflow-y-auto justify-start gap-2 mt-2">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <Collapsible>
                  <CollapsibleTrigger
                    className="font-semibold uppercase"
                    asChild
                  >
                    <div className="flex items-center text-vermelho line-clamp-1 gap-2 w-full">
                      {link.label}
                      <RiArrowDropDownLine />
                    </div>
                  </CollapsibleTrigger>

                  {link.links.map((sublink, index) => (
                    <CollapsibleContent key={index} className="ml-4 mb-3">
                      <SheetClose asChild className="underline capitalize">
                        <Link to={`/${link.label}/${sublink.link}`}>
                          {sublink.label}
                        </Link>
                      </SheetClose>
                    </CollapsibleContent>
                  ))}
                </Collapsible>
              </li>
            ))}
          </ul>

          <SheetFooter className="self-center mt-16">
            <div className="flex flex-col">
              <h1 className="font-bold text-xs uppercase">
                Partilhe este site
              </h1>
              <div className="flex mt-4 items-center justify-between">
                <FaFacebook size={24} />
                <FaXTwitter size={24} />
                <CgMail size={24} />
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
