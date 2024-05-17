import { motion } from "framer-motion"
import { FC } from "react"

type Props = {
  children: React.ReactNode
}

const CardScaleDownEffect: FC<Props> = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}

export default CardScaleDownEffect
