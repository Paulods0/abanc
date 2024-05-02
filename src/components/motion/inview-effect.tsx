import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
}

const InViewEffect = ({ children }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-250px",
    once: true,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

export default InViewEffect
