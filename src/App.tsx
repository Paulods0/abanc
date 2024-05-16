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
import ReportPage from "./pages/publicacoes/report-page"
// import { lazy, Suspense } from "react"

// const HomePage = lazy(() => import("./pages/home/home-page"))
// const Navbar = lazy(() => import("./components/navbar/nav-bar"))
// const Footer = lazy(() => import("./components/footer/footer"))

function App() {
  return (
    <main className="font-montSerrat">
      <NavHeader />

      <main className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/institucional" element={<PageInstitucional />} />

          <Route path="/publicações" element={<PagePublicacoes />}>
            <Route path="relatorios" element={<ReportPage />} />
          </Route>

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
