import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMapPin, FiZap, FiCalendar, FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SafeImage from '../components/SafeImage'

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Battery Systems']

const projects = [
  {
    id: 1,
    category: 'Residential',
    title: '5kW On-Grid Rooftop System',
    location: 'Sector 8, Gandhidham (Kutch)',
    capacity: '5 kW Capacity',
    panels: 'Tata Power 540W Mono PERC',
    annualGen: '7,200 kWh/yr',
    date: 'January 2026',
    image: '/images/residential.jpg',
    desc: 'Installed on a residential villa near Tagore Road, Gandhidham with elevated GI structure for rooftop access. Client saves over ₹85,000 annually with PGVCL Net Metering.'
  },
  {
    id: 2,
    category: 'Commercial',
    title: '30kW Commercial Complex System',
    location: 'Tagore Road, Gandhidham',
    capacity: '30 kW Capacity',
    panels: 'Waaree 550W Bi-facial Modules',
    annualGen: '44,000 kWh/yr',
    date: 'November 2025',
    image: '/images/commercial.jpg',
    desc: 'Custom engineered for a commercial shipping and logistics building in Gandhidham. Powers HVAC and office server systems with cloud telemetry.'
  },
  {
    id: 3,
    category: 'Industrial',
    title: '120kW Industrial Factory Plant',
    location: 'Kandla Free Trade Zone (KASEZ), Gujarat',
    capacity: '120 kW Capacity',
    panels: 'Adani 580W TOPCon Modules',
    annualGen: '175,000 kWh/yr',
    date: 'December 2025',
    image: '/images/farm.jpg',
    desc: 'Turnkey industrial solar plant on corrugated metal shed roofs. Slashed manufacturing peak demand charges and secured 40% accelerated tax depreciation.'
  },
  {
    id: 4,
    category: 'Battery Systems',
    title: '20kWh LiFePO4 Energy Storage Wall',
    location: 'Bhuj, Kutch, Gujarat',
    capacity: '20 kWh Storage',
    panels: 'Paired with 10kW Solar Array',
    annualGen: 'Zero Grid Dependency',
    date: 'February 2026',
    image: '/images/battery.jpg',
    desc: 'Emergency backup battery bank for private hospital clinic in Kutch. Instantaneous UPS switchover with smart BMS thermal protection.'
  },
  {
    id: 5,
    category: 'Residential',
    title: '8kW High-Yield Home Installation',
    location: 'Adipur, Gandhidham, Gujarat',
    capacity: '8 kW Capacity',
    panels: 'Vikram Solar 545W Mono PERC',
    annualGen: '11,500 kWh/yr',
    date: 'October 2025',
    image: '/images/hero.jpg',
    desc: 'Elevated pergola solar design providing both abundant clean solar power and a shaded leisure terrace for the homeowner.'
  },
  {
    id: 6,
    category: 'Commercial',
    title: '50kW Resort & Hotel Solar Plant',
    location: 'Rann of Kutch Eco Resort, Gujarat',
    capacity: '50 kW Hybrid System',
    panels: 'Bifacial Solar Modules',
    annualGen: '72,000 kWh/yr',
    date: 'September 2025',
    image: '/images/engineer.jpg',
    desc: 'Eco-tourism resort solar initiative in Kutch reducing diesel generator runtime by 85% during peak desert festival tourist seasons.'
  },
  {
    id: 7,
    category: 'Industrial',
    title: '250kW Warehouse Rooftop Array',
    location: 'Mundra Logistics Park, Gujarat',
    capacity: '250 kW Capacity',
    panels: 'Tier-1 Mono Half-Cut',
    annualGen: '360,000 kWh/yr',
    date: 'August 2025',
    image: '/images/sky.jpg',
    desc: 'Massive distribution center solar retrofit powering refrigerated cold storage logistics with automated PGVCL grid export.'
  },
  {
    id: 8,
    category: 'Battery Systems',
    title: 'Commercial 50kWh Battery Hub',
    location: 'Anjar Industrial Corridor, Kutch',
    capacity: '50 kWh Hybrid Storage',
    panels: 'Integrated High-Voltage Inverter',
    annualGen: 'Peak Shaving System',
    date: 'July 2025',
    image: '/images/inverter.jpg',
    desc: 'Automated peak shaving setup reducing commercial time-of-day (ToD) tariff penalties for manufacturing workshops.'
  }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
      <PageHero
        tag="Verified Portfolio"
        title="Our Solar Installations"
        subtitle="Explore real rooftop, commercial, and battery storage projects completed by BABA Solar & Battery across Gandhidham, Kutch & Gujarat."
        breadcrumb="Gallery"
        image="/images/farm.jpg"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="pill-tag mb-2">Proven Track Record</span>
            <h2 className="heading-section text-gray-900 font-extrabold mt-2">
              500+ Projects, <span className="gradient-text">Zero Compromises</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-orange to-orange-light text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(item)}
                  className="modern-card overflow-hidden bg-white border border-gray-200 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 text-navy font-bold text-[10px] rounded-full shadow-sm">
                      {item.category}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-gradient-to-r from-orange to-orange-light text-white font-bold text-[10px] rounded-full shadow-sm">
                      {item.capacity}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs flex items-center gap-1 mb-2">
                      <FiMapPin className="text-orange text-xs" /> {item.location}
                    </p>
                    <span className="text-[11px] text-orange font-bold flex items-center gap-1">
                      View details <FiArrowRight className="text-orange" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROJECT DETAIL MODAL ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-gray-700 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
              >
                <FiX className="text-lg" />
              </button>

              <div className="h-64 sm:h-80 w-full relative bg-gray-100">
                <SafeImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange to-orange-light text-white font-bold text-xs rounded-full shadow-md">
                    {selectedProject.capacity}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <span className="pill-tag mb-2">{selectedProject.category}</span>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{selectedProject.title}</h3>
                <p className="text-gray-500 text-xs flex items-center gap-1.5 mb-4">
                  <FiMapPin className="text-orange" /> {selectedProject.location} • <FiCalendar /> Commissioned {selectedProject.date}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {selectedProject.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200/80 mb-6">
                  <div>
                    <span className="text-[11px] text-gray-400 block uppercase font-bold">Hardware Used</span>
                    <span className="text-xs font-bold text-navy">{selectedProject.panels}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block uppercase font-bold">Est. Yield</span>
                    <span className="text-xs font-bold text-orange">{selectedProject.annualGen}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919876543210?text=Hi%20BABA%20Solar,%20I%20saw%20your%20project%20gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orange flex-1 justify-center text-sm py-3 shadow-md"
                  >
                    Inquire About Similar Setup
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
