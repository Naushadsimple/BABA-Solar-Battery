import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiChevronRight } from 'react-icons/fi'
import SafeImage from './SafeImage'

export default function PageHero({ title, subtitle, tag, breadcrumb, image }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={ref}
      className="relative min-h-[46vh] sm:min-h-[52vh] flex items-end pb-12 sm:pb-16 pt-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Image with Parallax & Fallback */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <SafeImage
          src={image || "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80"}
          alt={title}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/80 via-[#0B132B]/45 to-[#0B132B]/90" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Breadcrumb Pill */}
        <div className="inline-flex items-center gap-2 glass-pill-dark px-3.5 py-1.5 text-xs font-semibold mb-5 text-white/80">
          <Link to="/" className="hover:text-orange-light transition-colors flex items-center gap-1">
            <FiHome className="text-xs" /> Home
          </Link>
          <FiChevronRight className="text-white/40 text-xs" />
          <span className="text-orange-light font-bold">{breadcrumb || title}</span>
        </div>

        {/* Tag */}
        {tag && (
          <div className="mb-2">
            <span className="inline-block px-3.5 py-1 bg-gradient-to-r from-orange to-orange-light text-white font-extrabold text-[10px] uppercase tracking-widest rounded-full shadow-md">
              {tag}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="heading-hero text-white font-extrabold max-w-3xl drop-shadow-md leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/80 text-sm sm:text-base max-w-xl mt-3 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
