import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/nav-bar"
import HomePage from "./pages/home/home-page"
import Footer from "./components/footer/footer"
import PageEducacaoFinanceira from "./pages/educacao-financeira/page-educacao-financeira"
import PageLegislacao from "./pages/legislacao-e-regulamentacao/page-legislacao"
import PagePublicacoes from "./pages/publicacoes/page-publicacoes"
import PageSistemaFinanceiro from "./pages/sistema-financeiro/page-sistema-financeiro"
import PageInstitucional from "./pages/institucional/page-institucional"
import NavHeader from "./components/navbar/nav-header"
import PageNotFound from "./pages/page-not-found"

function App() {
  return (
    <main className="font-montSerrat">
      <NavHeader />

      <main className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/institucional" element={<PageInstitucional />} />
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
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </main>
  )
}

export default App
