import { motion } from "framer-motion"

const PageNotFound = () => {
  return (
    <main className="h-screen w-full justify-center flex items-center flex-col">
      <h1 className="font-bold text-4xl mb-12">Página não encontrada</h1>

      <motion.a
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        href="/"
        className="px-6 py-2 text-white bg-vermelho"
      >
        voltar ao menu inicial
      </motion.a>
    </main>
  )
}

export default PageNotFound
