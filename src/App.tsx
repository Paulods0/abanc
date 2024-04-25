import { Route, Routes } from "react-router-dom"
import Navbar from "./components/nav-bar"
import HomePage from "./pages/home-page"
import Footer from "./components/footer"
import PageEducacaoFinanceira from "./pages/page-educacao-financeira"
import PageLegislacao from "./pages/page-legislacao"
import PagePublicacoes from "./pages/page-publicacoes"
import PageSistemaFinanceiro from "./pages/page-sistema-financeiro"

function App() {
  return (
    <main className="h-screen flex-col font-montSerrat w-full">
      <Navbar />
      <main className="w-full px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publicações" element={<PagePublicacoes />} />
          <Route
            path="/sistema-financeiro"
            element={<PageSistemaFinanceiro />}
          />
          <Route
            path="/legislação-e-regulamentação"
            element={<PageLegislacao />}
          />
          <Route
            path="/educação-financeira"
            element={<PageEducacaoFinanceira />}
          />
        </Routes>
      </main>
      <Footer />
    </main>
  )
}

export default App
