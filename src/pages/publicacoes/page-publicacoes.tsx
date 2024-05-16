import Container from "@/components/container"
import { Outlet } from "react-router-dom"

const PagePublicacoes = () => {
  return (
    <main className="w-full h-full lg:px-6 flex mb-20 mt-4 flex-col">
      <Container>
        <Outlet />
      </Container>
    </main>
  )
}

export default PagePublicacoes
