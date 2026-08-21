import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Project Gallery', to: '/gallery' },
  { label: 'Solar Insights & Blogs', to: '/blogs' },
  { label: 'Contact Us', to: '/contact' },
]

const services = [
  'Residential Rooftop Solar',
  'Commercial Solar Plants',
  'Lithium Battery Storage Banks',
  'Smart Solar Inverters',
  'PM Surya Ghar Subsidy (Gujarat)',
  'Solar AMC & Maintenance',
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden pt-20 pb-10">
      {/* Background Watermark Typography */}
      <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none opacity-[0.03] text-center whitespace-nowrap overflow-hidden">
        <span className="text-[14vw] font-black uppercase tracking-tighter text-white">
          Powering The Future
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Newsletter & Consultation CTA Card */}
        <div className="glass-card-dark p-8 sm:p-12 mb-16 border border-white/10 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <span className="inline-block px-3 py-1 bg-orange/20 text-orange-light rounded-full text-xs font-extrabold uppercase tracking-wider">
                Stay In The Loop
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Sign up for our Solar Newsletter
              </h3>
              <p className="text-white/60 text-xs sm:text-sm max-w-md">
                Get monthly updates on Gujarat solar subsidies, PGVCL tariff changes, and energy saving tips.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!') }} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 rounded-full text-sm outline-none focus:border-orange flex-1"
                />
                <button
                  type="submit"
                  className="btn-orange text-xs font-black uppercase tracking-wider py-3.5 px-7 flex items-center justify-center gap-2 shadow-md"
                >
                  Subscribe <FiArrowRight className="text-base" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-md">
                <img src="/logo.jpg" alt="BABA Solar" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight block">BABA Solar</span>
                <span className="text-[10px] font-bold text-orange tracking-widest uppercase">& Battery</span>
              </div>
            </Link>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              Gujarat's trusted renewable energy engineering firm. Certified rooftop solar installations, advanced battery banks, and zero-hassle subsidy management.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass text-xs py-2 px-4 inline-flex items-center gap-2 hover:text-orange"
              >
                <FaWhatsapp className="text-green text-base" />
                Quick Support on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white/40">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/70 hover:text-orange text-xs font-semibold transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-orange transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white/40">Our Solutions</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/70 hover:text-orange text-xs font-semibold transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-orange transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white/40">Headquarters</h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-orange mt-0.5 shrink-0 text-sm" />
                <span>Office No.51, Plot No.57, Sector 8, Tagore Road, Near Maharashtra Mandal, Gandhidham (Kutch), Gujarat – 370201</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-orange shrink-0 text-sm" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-orange shrink-0 text-sm" />
                <a href="mailto:info@babasolar.in" className="hover:text-white transition-colors">info@babasolar.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} BABA Solar & Battery. All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            {[
              { icon: FaFacebookF, href: '#' },
              { icon: FaInstagram, href: '#' },
              { icon: FaLinkedinIn, href: '#' },
              { icon: FaWhatsapp, href: 'https://wa.me/919876543210' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-orange hover:border-orange transition-all duration-300"
              >
                <Icon className="text-xs" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
