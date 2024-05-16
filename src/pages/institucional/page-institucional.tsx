import Container from "@/components/container"
import FadeIn from "@/components/motion/fade-in"
import { Outlet } from "react-router-dom"

const PageInstitucional = () => {
  return (
    <main className="w-full lg:px-6 flex mb-20 mt-12 flex-col">
      <Container>
        <FadeIn>
          <Outlet />
        </FadeIn>
      </Container>
    </main>
  )
}

export default PageInstitucional
