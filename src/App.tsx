import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/nav-bar"
import HomePage from "./pages/home/home-page"
import Footer from "./components/footer/footer"
import PageEducacaoFinanceira from "./pages/educacao-financeira/page-educacao-financeira"
import PageLegislacao from "./pages/legislacao-e-regulamentacao/page-legislacao"
import PagePublicacoes from "./pages/publicacoes/page-publicacoes"
import PageSistemaFinanceiro from "./pages/sistema-financeiro/page-sistema-financeiro"

function App() {
  return (
    <main className="font-montSerrat">
      <Navbar />
      <main>
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
