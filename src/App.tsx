import { Route, Routes } from "react-router-dom"
import Navbar from "./components/nav-bar"
import HomePage from "./pages/home-page"
import Footer from "./components/footer"
import PageEducacaoFinanceira from "./pages/page-educacao-financeira"
import PageInstitucional from "./pages/page-institucional"
import PageLegislacao from "./pages/page-legislacao"
import PagePublicacoes from "./pages/page-publicacoes"
import PageSistemaFinanceiro from "./pages/page-sistema-financeiro"

function App() {
  return (
    <main className="h-screen w-full">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/publicacoes" element={<PagePublicacoes />} />
        <Route path="/institucional" element={<PageInstitucional />} />
        <Route path="/sistema-financeiro" element={<PageSistemaFinanceiro />} />
        <Route path="/legislacao-e-regulamentacao" element={<PageLegislacao />}/>
        <Route path="/educacao-financeira" element={<PageEducacaoFinanceira />}
        />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
