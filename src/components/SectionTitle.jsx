import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionTitle({ tag, title, subtitle, center = true, light = false }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {tag && (
        <span className={light ? 'tag-navy' : 'tag-orange'}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold leading-tight mt-3 tracking-tight ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`divider-orange mt-5 ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
