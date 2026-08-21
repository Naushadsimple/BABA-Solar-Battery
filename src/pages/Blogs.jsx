import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiUser, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SafeImage from '../components/SafeImage'

const categories = ['All', 'Govt Subsidies', 'Solar Guides', 'Battery Tech', 'Maintenance']

const blogs = [
  {
    id: 1,
    category: 'Govt Subsidies',
    title: 'PM Surya Ghar Scheme 2026: How to Claim ₹78,000 Direct Bank Subsidy in Gujarat',
    excerpt: 'A complete step-by-step walkthrough of the national rooftop solar portal, eligible vendor verification, inspection steps, and direct bank account disbursement for Gujarat and Kutch homeowners.',
    author: 'Mohammed Babu',
    date: 'August 14, 2026',
    readTime: '6 min read',
    image: '/images/commercial.jpg',
    featured: true
  },
  {
    id: 2,
    category: 'Solar Guides',
    title: 'How to Size Your Rooftop Solar System Based on Your Electricity Bill',
    excerpt: 'Confused between 3kW, 5kW, and 10kW? Learn how to calculate daily kWh units, account for high solar irradiance in Kutch & Gujarat, and choose between On-grid and Hybrid systems.',
    author: 'Ravi Shankar',
    date: 'August 02, 2026',
    readTime: '5 min read',
    image: '/images/hero.jpg'
  },
  {
    id: 3,
    category: 'Battery Tech',
    title: 'LiFePO4 Lithium vs Tubular Batteries: The Honest Comparison',
    excerpt: 'Comparing lifecycle durability, depth of discharge (DoD), ambient room temperature resilience in Gujarat summers, footprint, and actual 10-year cost per kWh for residential power backups.',
    author: 'Ravi Shankar',
    date: 'July 24, 2026',
    readTime: '7 min read',
    image: '/images/battery.jpg'
  },
  {
    id: 4,
    category: 'Maintenance',
    title: 'Why Solar Panel Cleaning Increases Generation by 25% in Summer',
    excerpt: 'Soiling losses from coastal air, desert sands, and dust in Kutch can silently degrade your solar ROI. Discover the correct cleaning frequencies, demineralized water techniques, and safety protocols.',
    author: 'Vinay Kumar',
    date: 'July 11, 2026',
    readTime: '4 min read',
    image: '/images/engineer.jpg'
  },
  {
    id: 5,
    category: 'Solar Guides',
    title: 'PGVCL & GUVNL Net Metering Guide: How Export Tariffs and Bi-directional Meters Work',
    excerpt: 'Everything you need to know about the zero-export rules, gross vs net metering tariff slabs in Gujarat, and how banking credits roll over on your electricity bill.',
    author: 'Kavitha Hegde',
    date: 'June 29, 2026',
    readTime: '8 min read',
    image: '/images/residential.jpg'
  },
  {
    id: 6,
    category: 'Govt Subsidies',
    title: 'Commercial Solar in Gujarat: Claiming 40% Accelerated Depreciation & GST Benefits',
    excerpt: 'How businesses, private hospitals, shipping firms, and factory owners in Gandhidham & Gujarat can leverage section 32 of the Indian Income Tax Act to write off solar capital investments.',
    author: 'Mohammed Babu',
    date: 'June 18, 2026',
    readTime: '6 min read',
    image: '/images/farm.jpg'
  }
]

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
      <PageHero
        tag="Solar Knowledge Center"
        title="Guides, Subsidies & Insights"
        subtitle="Practical, unbiased articles written by our engineering team to help you make informed clean energy decisions in Gujarat."
        breadcrumb="Blogs"
        image="/images/sky.jpg"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="pill-tag mb-2">Latest Insights</span>
            <h2 className="heading-section text-gray-900 font-extrabold mt-2">
              Learn from <span className="gradient-text">Solar Engineers</span>
            </h2>
          </div>

          {/* Category Filter */}
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

          {/* Featured Post */}
          {activeCategory === 'All' && (
            <div className="mb-12">
              <div className="modern-card overflow-hidden bg-white border border-gray-200 group">
                <div className="grid lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 h-72 lg:h-96 relative overflow-hidden bg-gray-100">
                    <SafeImage
                      src={blogs[0].image}
                      alt={blogs[0].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-orange to-orange-light text-white font-bold text-xs rounded-full shadow-md">
                      Featured Guide
                    </span>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
                    <span className="pill-tag">{blogs[0].category}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 group-hover:text-orange transition-colors leading-snug">
                      {blogs[0].title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {blogs[0].excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
                      <span className="flex items-center gap-1 font-medium text-gray-600">
                        <FiUser className="text-orange" /> {blogs[0].author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiCalendar /> {blogs[0].date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiClock /> {blogs[0].readTime}
                      </span>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://wa.me/919876543210?text=Hi%20BABA%20Solar,%20I%20want%20details%20on%20the%20PM%20Surya%20Ghar%20Subsidy%20in%20Gujarat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-orange text-xs py-2.5 px-6 inline-flex shadow-sm"
                      >
                        Ask an Expert About This <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered
              .filter((b, i) => activeCategory !== 'All' || i > 0)
              .map((b) => (
                <div key={b.id} className="modern-card overflow-hidden flex flex-col h-full bg-white border border-gray-200 group">
                  <div className="h-48 relative overflow-hidden bg-gray-100">
                    <SafeImage
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 text-orange font-bold text-[10px] rounded-full shadow-sm">
                      {b.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange transition-colors line-clamp-2">
                        {b.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {b.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 mt-auto">
                      <span className="flex items-center gap-1 font-medium text-gray-600">
                        <FiUser className="text-orange text-xs" /> {b.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock /> {b.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* ═══ SOLAR HANDBOOK DOWNLOAD BANNER ═════════════════════════════ */}
          <div className="mt-16 modern-card p-8 sm:p-12 bg-navy text-white relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="pill-tag bg-orange/20 border-orange/40 text-orange-light mb-3">
                Free Download
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Download Gujarat Rooftop Solar & Subsidy Handbook 2026
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Get a clean PDF guide containing PGVCL & GUVNL tariff calculations, required document checklists, panel brand comparison charts, and subsidy application tips.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-orange bg-white/10 p-3 rounded-2xl max-w-md border border-orange/20">
                  <FiCheckCircle className="text-xl shrink-0" />
                  <span className="text-xs font-semibold text-white">Thank you! Check your inbox for the handbook download link.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3 rounded-full text-sm outline-none focus:border-orange flex-1"
                  />
                  <button type="submit" className="btn-orange whitespace-nowrap text-xs py-3 px-6 justify-center shadow-md">
                    Get Free PDF
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  )
}
