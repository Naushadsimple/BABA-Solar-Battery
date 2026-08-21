import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowUpRight, FiCheck, FiChevronRight, FiChevronLeft,
  FiSun, FiZap, FiShield, FiUsers, FiStar, FiPhone
} from 'react-icons/fi'
import { FaWhatsapp, FaLeaf, FaSolarPanel } from 'react-icons/fa'
import SafeImage from '../components/SafeImage'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Accordion state for "Solar Energy in Every Step"
  const [activeStep, setActiveStep] = useState(3)

  // Testimonial carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const steps = [
    {
      num: '1',
      title: 'Residential Rooftop Solar for Homes & Villas',
      desc: 'Custom-designed on-grid solar systems that cut domestic electricity bills by up to 90% and qualify for ₹78,000 direct PM Surya Ghar government subsidies.'
    },
    {
      num: '2',
      title: 'Lithium Battery Storage & Uninterrupted Power',
      desc: 'High-cycle LiFePO4 battery storage banks ensuring continuous zero-delay power backup during grid outages and night-time consumption.'
    },
    {
      num: '3',
      title: 'Solar-Powered Agricultural & Farm Solutions',
      desc: 'Dedicated solar water pumps, cold storage systems, and off-grid power packs that boost agricultural yields and eliminate diesel generator expenses completely across Kutch and Gujarat.'
    },
    {
      num: '4',
      title: 'Commercial & Industrial Solar Power Plants',
      desc: 'Turnkey 50kW to 1MW+ solar arrays for factories, ports, schools, and commercial units in Gandhidham & Kandla with 40% accelerated tax depreciation and 3 to 4 year financial payback.'
    },
    {
      num: '5',
      title: 'Solar AMC, Diagnostics & Panel Deep Cleaning',
      desc: 'Routine demineralized panel washing, thermal drone imaging, string diagnostics, and preventive electrical servicing to maximize power harvest year-round.'
    },
  ]

  const testimonials = [
    {
      name: 'Pravinbhai Patel',
      role: 'Farm & Villa Owner, Kutch, Gujarat',
      quote: 'Partnering with BABA Solar was one of the best decisions for our estate. Not only did our electricity bill drop from ₹9,000 to nearly zero, but their team handled all PGVCL paperwork flawlessly.',
      image: '/images/team1.jpg',
      system: '10 kW Solar + Lithium Storage'
    },
    {
      name: 'Bhavik Shah',
      role: 'Homeowner, Sector 8, Gandhidham',
      quote: 'The glassmorphic design and the clean installation were beyond our expectations. Zero roof leaks, top-tier Tata panels, and the government subsidy was credited right on time!',
      image: '/images/team2.jpg',
      system: '5 kW On-Grid Rooftop'
    },
    {
      name: 'Hitesh Mehta',
      role: 'Director, Kutch Logistics & Warehousing',
      quote: 'We commissioned a 100kW rooftop array for our warehouse facility in Gandhidham. Our operational power costs reduced significantly, allowing us to hit ROI in less than 3.5 years.',
      image: '/images/team3.jpg',
      system: '100 kW Industrial Array'
    }
  ]

  return (
    <div className="bg-[#FAFAFA] text-[#0F172A] overflow-hidden">
      
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO SECTION (Gujarat & Gandhidham Context)
      ══════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 px-4 sm:px-6">
        
        {/* Background Image with Parallax & Dark Overlay */}
        <motion.div style={{ y: heroImgY }} className="absolute inset-0 z-0">
          <SafeImage
            src="/images/hero.jpg"
            alt="Solar Field Sky Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/60 via-[#0B132B]/35 to-[#0B132B]/75" />
        </motion.div>

        {/* Center Hero Heading & Floating Badges */}
        <div className="relative z-10 max-w-5xl mx-auto text-center my-auto pt-6 sm:pt-10">
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heading-hero text-white font-extrabold max-w-4xl mx-auto drop-shadow-md"
          >
            Powering the Future of Solar & Battery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 font-normal leading-relaxed"
          >
            Harnessing Gujarat's abundant clean solar energy for modern homes, farms, and industrial hubs.
          </motion.p>

          {/* Floating Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8"
          >
            {/* Left Pill */}
            <div className="glass-pill-dark px-4 sm:px-5 py-2.5 flex items-center gap-2.5 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Bill Savings: <strong className="text-orange-light">Up to 90%</strong></span>
            </div>

            {/* Center Pill Button in Vibrant Orange */}
            <Link
              to="/services"
              className="btn-orange py-2.5 px-6 font-extrabold text-xs uppercase tracking-wider flex items-center gap-3 group shadow-lg"
            >
              <span>Our Services</span>
              <span className="w-6 h-6 rounded-full bg-white text-orange flex items-center justify-center text-xs group-hover:rotate-45 transition-transform duration-300 font-black">
                ↗
              </span>
            </Link>

            {/* Right Pill */}
            <div className="glass-pill-dark px-4 sm:px-5 py-2.5 flex items-center gap-2.5 text-xs font-bold">
              <FiSun className="text-orange" />
              <span>Clean Capacity: <strong className="text-white">2.8 MW+</strong></span>
            </div>
          </motion.div>
        </div>

        {/* 3 Bottom Floating Frosted Glass Cards */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Card 1: Success Stories */}
            <Link to="/gallery" className="glass-card bg-white/85 p-4 sm:p-5 flex items-center gap-4 group hover:bg-white transition-all shadow-xl">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-gray-100">
                <SafeImage
                  src="/images/engineer.jpg"
                  alt="Solar Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-[#0B132B] leading-snug">
                  View Our Success Stories in Solar Energy
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">500+ Rooftop projects across Gujarat</p>
              </div>
              <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-700 group-hover:bg-orange group-hover:text-white group-hover:border-orange transition-all shrink-0">
                ↗
              </span>
            </Link>

            {/* Card 2: 500+ Happy Customers */}
            <div className="glass-card bg-white/85 p-4 sm:p-5 flex items-center justify-between shadow-xl">
              <div className="space-y-1">
                <div className="flex -space-x-2">
                  {['/images/client1.jpg', '/images/client2.jpg', '/images/client3.jpg', '/images/client4.jpg'].map((src, i) => (
                    <SafeImage key={i} src={src} alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="text-xs font-bold text-gray-900 pt-1">
                  140+ Commercial & Farm Clients
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-orange leading-none block">500+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Happy Homes</span>
              </div>
            </div>

            {/* Card 3: Bright Future & Warranty */}
            <Link to="/about" className="glass-card bg-white/85 p-4 sm:p-5 flex items-center gap-4 group hover:bg-white transition-all shadow-xl">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-gray-100">
                <SafeImage
                  src="/images/commercial.jpg"
                  alt="Solar Panels Future"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-[#0B132B] leading-snug">
                  Bright Future with Clean Energy
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">25-Year performance warranty guaranteed</p>
              </div>
              <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-700 group-hover:bg-orange group-hover:text-white group-hover:border-orange transition-all shrink-0">
                ↗
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. STATEMENT / ABOUT INTRO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Label Pill */}
          <div className="mb-6">
            <span className="pill-tag">About Us</span>
          </div>

          {/* Big Typography Statement */}
          <div className="max-w-5xl mb-16">
            <h2 className="heading-section text-gray-900 font-extrabold leading-[1.2]">
              We are cultivating more than just power. We are cultivating a cleaner,{' '}
              <span className="text-gray-400 font-semibold">
                greener future by harnessing Gujarat's sun for homes, farms & businesses.
              </span>
            </h2>
          </div>

          {/* 2-Column Bottom Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Big Curved Solar Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] overflow-hidden shadow-lg border border-gray-200 h-[280px] sm:h-[340px] bg-gray-100">
                <SafeImage
                  src="/images/residential.jpg"
                  alt="Solar Field Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Stats & Pill Photos */}
            <div className="lg:col-span-7 space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-orange">12+</span>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
                </div>
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-navy">500+</span>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Rooftops Installed</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Delivering high-yield solar modules, lithium storage arrays, and complete PGVCL net metering.
                  </p>
                </div>
              </div>

              {/* Action Button & Pill Photos */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-gray-100">
                <Link to="/about" className="btn-orange py-3 px-8 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2">
                  Discover More ↗
                </Link>

                <div className="flex gap-3">
                  <div className="w-28 sm:w-36 h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-100">
                    <SafeImage
                      src="/images/team.jpg"
                      alt="Engineers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-28 sm:w-36 h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-100">
                    <SafeImage
                      src="/images/farm.jpg"
                      alt="Solar Installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. INTERACTIVE SERVICES ACCORDION SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Right Button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="pill-tag mb-3">Our Solutions</span>
              <h2 className="heading-section text-gray-900 font-extrabold mt-2">
                Solar Energy in Every<br />Step of Your Life
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-xs sm:text-sm text-gray-500 max-w-xs">
                Comprehensive renewable solutions engineered for residential, commercial & agricultural applications in Gujarat.
              </p>
              <Link to="/services" className="btn-orange text-xs font-black uppercase tracking-wider py-3 px-6 shrink-0">
                See All Services ↗
              </Link>
            </div>
          </div>

          {/* 2-Column Split: Image Card & Accordion */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Big Card with Image & Bottom Glass Pill Tags */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] overflow-hidden relative h-full min-h-[400px] shadow-lg border border-gray-200 flex flex-col justify-end p-6 bg-gray-100">
                <SafeImage
                  src="/images/commercial.jpg"
                  alt="Solar Rooftop Plant"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/85 via-transparent to-transparent" />
                
                <div className="relative z-10 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="glass-pill px-3 py-1 text-[11px] font-bold text-[#0B132B]">Rooftop Solar</span>
                    <span className="glass-pill px-3 py-1 text-[11px] font-bold text-[#0B132B]">Battery Storage</span>
                    <span className="glass-pill px-3 py-1 text-[11px] font-bold text-[#0B132B]">Net Metering</span>
                  </div>
                  <h4 className="text-lg font-black text-white">Commercial Rooftop Power Plant</h4>
                  <p className="text-white/80 text-xs">50kW System installed in Gandhidham (Kutch)</p>
                </div>
              </div>
            </div>

            {/* Right Numbered Accordion List in Brand Orange Theme */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
              {steps.map((st, idx) => {
                const isActive = activeStep === idx + 1
                return (
                  <motion.div
                    key={st.num}
                    onClick={() => setActiveStep(idx + 1)}
                    className={`rounded-[24px] p-5 cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-orange to-orange-light text-white shadow-xl scale-[1.01]'
                        : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-base font-black ${isActive ? 'text-white' : 'text-gray-400'}`}>
                          {st.num}
                        </span>
                        <h4 className="font-extrabold text-sm sm:text-base">{st.title}</h4>
                      </div>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 transition-transform ${
                        isActive ? 'bg-white text-orange rotate-90 font-bold' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {isActive ? '−' : '↗'}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 pt-3 border-t border-white/20 text-xs sm:text-sm text-white/90 leading-relaxed font-medium"
                      >
                        {st.desc}
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. COMMITMENT SPLIT BANNER SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-4 sm:px-6 min-h-[600px] flex items-center">
        {/* Full width background */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/images/sky.jpg"
            alt="Solar Wind Clean Horizon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B132B]/30 to-[#0B132B]/75" />
        </div>

        {/* Right Frosted White Glass Card */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end">
          <div className="glass-card bg-white/90 p-8 sm:p-12 max-w-xl shadow-2xl border border-white/95 rounded-[32px] space-y-6">
            
            <span className="pill-tag">Why Choose Us</span>
            
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] leading-tight">
              Our Commitment to Solar Excellence
            </h3>
            
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We engineer dependable renewable systems built with top-grade Tier-1 modules, high-capacity lithium banks, and full statutory PGVCL / GUVNL approvals.
            </p>

            <div className="space-y-3">
              {[
                'Tier-1 Solar Modules (Tata, Waaree, Adani)',
                '25-Year Linear Performance Warranty',
                'PM Surya Ghar Subsidy Direct to Bank (Gujarat)',
                'Rapid 48-Hour Professional Installation',
                '100% In-House Certified Electrical Engineers'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-orange text-white flex items-center justify-center text-xs font-black shrink-0 shadow-sm">
                    <FiCheck />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/contact" className="btn-orange text-xs font-extrabold uppercase tracking-wider py-3 px-8">
                Learn More ↗
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. PROJECT SHOWCASE GALLERY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="pill-tag mb-3">Recent Work</span>
              <h2 className="heading-section text-gray-900 font-extrabold mt-2">
                Discover Our Successful<br />Solar Projects
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-xs sm:text-sm text-gray-500 max-w-xs">
                Real rooftop and industrial arrays installed by BABA Solar & Battery across Gujarat.
              </p>
              <Link to="/gallery" className="btn-orange text-xs font-black uppercase tracking-wider py-3 px-6 shrink-0">
                See All Projects ↗
              </Link>
            </div>
          </div>

          {/* Reference Grid: 1 Big Left Card + 4 Smaller Right Cards */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Big Left Project Card */}
            <div className="lg:col-span-6">
              <Link to="/gallery" className="modern-card overflow-hidden block group h-full flex flex-col justify-between">
                <div className="h-72 sm:h-96 overflow-hidden relative bg-gray-100">
                  <SafeImage
                    src="/images/hero.jpg"
                    alt="50kW Solar Farm"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 glass-pill px-3 py-1 text-xs font-black text-orange">
                    Industrial 120 kW
                  </span>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-extrabold text-lg text-[#0B132B] group-hover:text-orange transition-colors">
                    Gandhidham Industrial Logistics Solar Plant
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">
                    Gandhidham, Kutch, Gujarat • Generating 175,000 kWh/yr • 40% Tax Depreciation Applied
                  </p>
                </div>
              </Link>
            </div>

            {/* 4 Smaller Right Project Cards (2x2 Grid) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: '5kW Rooftop Villa System',
                  loc: 'Sector 8, Gandhidham (Kutch)',
                  kw: '5 kW On-Grid',
                  img: '/images/residential.jpg'
                },
                {
                  title: '20kWh Lithium Battery Wall',
                  loc: 'Bhuj Medical Center, Gujarat',
                  kw: '20 kWh LiFePO4',
                  img: '/images/battery.jpg'
                },
                {
                  title: '30kW Commercial Complex',
                  loc: 'Tagore Road, Gandhidham',
                  kw: '30 kW Solar',
                  img: '/images/commercial.jpg'
                },
                {
                  title: 'Agricultural Solar Pump',
                  loc: 'Anjar Agro Fields, Kutch',
                  kw: '10 HP Solar Pump',
                  img: '/images/engineer.jpg'
                }
              ].map((p) => (
                <Link key={p.title} to="/gallery" className="modern-card overflow-hidden block group">
                  <div className="h-44 overflow-hidden relative bg-gray-100">
                    <SafeImage
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 glass-pill px-2.5 py-0.5 text-[10px] font-black text-orange">
                      {p.kw}
                    </span>
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="font-bold text-xs sm:text-sm text-[#0B132B] group-hover:text-orange transition-colors">
                      {p.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-0.5">{p.loc}</p>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. TESTIMONIALS SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          
          <span className="pill-tag mb-3">Testimonials</span>
          
          <h2 className="heading-section text-gray-900 font-extrabold mt-2">
            Hear From Those Who Power<br />the Future With Us
          </h2>
          
          <p className="text-gray-500 text-xs sm:text-sm mt-3 max-w-md mx-auto">
            Real experiences from property owners who made the switch to clean solar energy with BABA Solar in Gujarat.
          </p>

          {/* Customer Avatar Row with Active Indicator */}
          <div className="flex justify-center items-center gap-3 my-10">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                  activeTestimonial === idx
                    ? 'ring-4 ring-orange scale-110 shadow-lg'
                    : 'opacity-50 hover:opacity-100 scale-95'
                }`}
              >
                <SafeImage src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Testimonial Card */}
          <div className="modern-card p-8 sm:p-12 bg-white text-left shadow-xl relative">
            <span className="text-6xl font-serif text-orange font-black leading-none block mb-4">“</span>
            
            <p className="text-base sm:text-xl font-bold text-gray-800 leading-relaxed mb-8">
              {testimonials[activeTestimonial].quote}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <SafeImage
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-11 h-11 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-[#0B132B]">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="btn-circle"
                  aria-label="Previous Testimonial"
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="btn-circle-dark"
                  aria-label="Next Testimonial"
                >
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
