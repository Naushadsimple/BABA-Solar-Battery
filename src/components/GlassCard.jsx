import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 50px rgba(0,0,0,0.12)' } : {}}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  )
}
