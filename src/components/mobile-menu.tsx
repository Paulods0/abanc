import { IoMdMenu } from "react-icons/io"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"
import { NAV_LINKS } from "@/constants"
import { Link } from "react-router-dom"

const MobileMenu = () => {
  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger>
          <div className="text-[40px]">
            <IoMdMenu />
          </div>
        </SheetTrigger>
        <SheetContent className="flex items-center justify-center">
          <ul className="w-full flex flex-col items-start justify-center gap-y-8">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  className="capitalize text-[25px] text-black"
                  to={link.path}
                >
                  <SheetClose className="capitalize">{link.label}</SheetClose>
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
