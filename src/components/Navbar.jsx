import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiArrowUpRight, FiPhone } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-400 rounded-full ${
            scrolled
              ? 'glass-card bg-white/85 border border-white/95 shadow-xl'
              : 'glass-pill bg-white/80 border border-white/90 shadow-md'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange/20 shadow-sm bg-white p-0.5">
              <img
                src="/logo.jpg"
                alt="BABA Solar"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <div className="leading-none">
              <span className="text-base font-extrabold text-navy tracking-tight block">BABA Solar</span>
              <span className="text-[9px] font-bold text-orange tracking-widest uppercase">& Battery</span>
            </div>
          </Link>

          {/* Desktop Nav Links in Centered Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-100/90 backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-200/60">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-orange bg-white shadow-sm'
                      : 'text-gray-600 hover:text-navy hover:bg-white/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button (Orange) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="text-xs font-bold text-navy hover:text-orange transition-colors flex items-center gap-1"
            >
              <FiPhone className="text-orange text-xs" />
              +91 98765 43210
            </a>
            <Link
              to="/contact"
              className="btn-orange text-xs py-2 px-5 font-extrabold flex items-center gap-1 shadow-md"
            >
              Get Free Quote <FiArrowUpRight className="text-sm font-black" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 text-xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass-card bg-white/95 border border-gray-200 mt-2 p-4 md:hidden shadow-2xl rounded-3xl"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-orange text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="btn-orange w-full justify-center text-sm py-3 font-bold"
                  >
                    Get Free Quote <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
