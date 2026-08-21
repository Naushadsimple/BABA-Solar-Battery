import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiAward, FiUsers, FiZap, FiSun, FiCheckCircle, FiShield } from 'react-icons/fi'
import { FaLeaf, FaSolarPanel, FaHandshake, FaTools } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import SafeImage from '../components/SafeImage'

const team = [
  {
    name: 'Mohammed Babu',
    role: 'Founder & Principal Engineer',
    bio: '12+ years in renewable power systems. Certified solar design specialist with over 400 completed rooftop installations across Gujarat and Kutch region.',
    image: '/images/team1.jpg',
    tag: 'Leadership'
  },
  {
    name: 'Kavitha Hegde',
    role: 'Head of Project Operations',
    bio: 'Oversees engineering design, electrical safety compliance, and direct PGVCL / GUVNL net metering Liaisoning for fast project turnaround.',
    image: '/images/team2.jpg',
    tag: 'Operations'
  },
  {
    name: 'Ravi Shankar',
    role: 'Lead Inverter & Storage Tech',
    bio: 'Specialist in high-voltage lithium battery integration, hybrid inverters, and commercial power backup solutions.',
    image: '/images/team3.jpg',
    tag: 'Engineering'
  },
  {
    name: 'Vinay Kumar',
    role: 'Customer Care & AMC Lead',
    bio: 'Dedicated to scheduled maintenance visits, cleaning logistics, and 24/7 client performance monitoring support across Gandhidham & Kutch.',
    image: '/images/team4.jpg',
    tag: 'Support'
  },
]

const milestones = [
  { year: '2015', title: 'Founded in Gandhidham', desc: 'Started with residential off-grid inverters and custom solar battery setups in Kutch, Gujarat.' },
  { year: '2018', title: '100th Rooftop Milestone', desc: 'Expanded into commercial grid-tie systems across Gandhidham, Bhuj, and Rajkot.' },
  { year: '2021', title: 'ISO 9001:2015 Certified', desc: 'Formalized electrical quality controls and safety standards for industrial installations.' },
  { year: '2024', title: 'PM Surya Ghar Partner', desc: 'Empowered over 500 households with national solar rooftop subsidies in Gujarat.' },
  { year: '2026', title: '2.8 MW+ Installed Capacity', desc: 'Now leading decentralized solar and smart battery storage across Gujarat.' },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
      <PageHero
        tag="Our Legacy & Vision"
        title="Engineering Clean Energy for Gujarat"
        subtitle="For over a decade, BABA Solar & Battery has been dedicated to delivering high-yield, transparent, and durable solar power solutions across Gujarat."
        breadcrumb="About Us"
        image="/images/commercial.jpg"
      />

      {/* ═══ MISSION & VISION ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="modern-card p-8 bg-white border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-orange-pale text-orange flex items-center justify-center text-2xl mb-4 font-bold">
                <FiTarget />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To simplify and accelerate Gujarat's transition to clean renewable energy by providing honest pricing, tier-1 equipment, flawless electrical engineering, and end-to-end PGVCL subsidy support to every property owner.
              </p>
            </div>

            <div className="modern-card p-8 bg-white border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center text-2xl mb-4 font-bold">
                <FiEye />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To become Gujarat's most reliable and customer-centric solar partner by powering over 5,000 rooftops and eliminating 25,000 metric tons of carbon emissions annually by 2030.
              </p>
            </div>
          </div>

          {/* Story Narrative & Real Site Picture */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="pill-tag">Our Heritage</span>
              <h2 className="heading-section text-gray-900 font-extrabold mt-2">
                From Gandhidham Workshop to a <span className="gradient-text">Trusted Solar Brand</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                BABA Solar & Battery began in Gandhidham (Kutch) with a clear purpose: eliminating unpredictable electricity bills and recurring power cuts through dependable solar energy systems. What started as a dedicated technical service team has grown into one of Gujarat's respected solar installation contractors.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Unlike sales brokers who outsource field labor, BABA Solar manages every project in-house. Our certified electrical engineers personally conduct structural rooftop checks, wire inverters with high-grade copper cables, and oversee PGVCL grid interconnection until your meter spins backward.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <span className="text-2xl font-black text-orange">100%</span>
                  <p className="text-xs font-bold text-gray-700 mt-1">In-House Engineers (No Outsourcing)</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <span className="text-2xl font-black text-navy">25 Yrs</span>
                  <p className="text-xs font-bold text-gray-700 mt-1">Direct Manufacturer Warranty</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                <SafeImage
                  src="/images/team.jpg"
                  alt="BABA Solar Team Site Inspection"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-3">
                    <FiShield className="text-orange text-2xl shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Strict Electrical Safety Compliance</h4>
                      <p className="text-xs text-gray-500">Dual chemical earthing, Class-II surge arrestors & IP65 enclosures on every job.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE & MILESTONES ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="pill-tag mb-2">Growth Journey</span>
            <h2 className="heading-section text-gray-900 font-extrabold mt-2">
              A Decade of Continuous Innovation
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {milestones.map((m) => (
              <div key={m.year} className="modern-card p-5 bg-white border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-orange-pale text-orange rounded-full text-xs font-bold mb-3">
                    {m.year}
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{m.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-orange to-orange-light rounded-full mt-4 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP & TEAM ══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="pill-tag mb-2">Technical Leadership</span>
            <h2 className="heading-section text-gray-900 font-extrabold mt-2">
              The People Behind Your Solar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="modern-card overflow-hidden bg-white border border-gray-200 group">
                <div className="h-60 overflow-hidden bg-gray-100 relative">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 rounded-full text-[10px] font-bold text-navy shadow-sm">
                    {member.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-base mb-0.5">{member.name}</h4>
                  <p className="text-orange text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
