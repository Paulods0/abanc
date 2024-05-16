// import Container from "@/components/container"
import FadeIn from "@/components/motion/fade-in"
import { Outlet } from "react-router-dom"

const PagePublicacoes = () => {
  return (
    <main>
      <FadeIn>
        <Outlet />
      </FadeIn>
    </main>
  )
}

export default PagePublicacoes
