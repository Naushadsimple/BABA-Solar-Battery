import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiSun, FiZap, FiShield, FiTool, FiWifi, FiTrendingUp,
  FiCheckCircle, FiArrowRight, FiPhone, FiCheck, FiX
} from 'react-icons/fi'
import { FaLeaf, FaWater, FaWhatsapp, FaBolt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SafeImage from '../components/SafeImage'

const services = [
  {
    id: 'rooftop',
    title: 'Rooftop Solar System Installation',
    tag: 'Residential & Commercial',
    image: '/images/hero.jpg',
    desc: 'Turn your idle roof into a clean power plant. We install high-yield Monocrystalline & Bi-facial solar panels with hot-dip galvanized mounting structures that withstand harsh monsoons and high winds.',
    features: [
      'Monocrystalline Half-Cut Tier-1 Panels (540W - 580W)',
      'Hot-dip galvanized structure with 150 km/h wind resistance',
      'Dual chemical earthing pits + Class-II surge arrestor',
      'PGVCL / GUVNL Net Metering liaison included',
      '25-Year performance warranty with 80%+ output guarantee'
    ],
    priceStarting: 'Starting ₹45,000 / kW (Before Subsidy)'
  },
  {
    id: 'battery',
    title: 'Solar Battery Storage Systems',
    tag: 'Lithium-Ion & Tubular',
    image: '/images/battery.jpg',
    desc: 'Uninterrupted power day and night. Custom lithium battery walls (LiFePO4) and heavy-duty tubular battery banks designed for zero-switchover during unexpected power outages.',
    features: [
      'LiFePO4 Lithium Battery Packs with 6000+ deep cycles',
      'Smart Battery Management System (BMS) with thermal protection',
      'Wall-mount compact designs or rack-mount banks',
      'Compatible with leading hybrid and off-grid inverters',
      'Up to 10-Year product warranty on lithium storage'
    ],
    priceStarting: 'Starting ₹28,000 / Unit'
  },
  {
    id: 'inverters',
    title: 'Smart Solar Inverters & Conversions',
    tag: 'On-Grid, Hybrid & Microinverters',
    image: '/images/inverter.jpg',
    desc: 'Maximum conversion efficiency with intelligent MPPT charge controllers. View your real-time generation, solar yield, and grid export on your smartphone from anywhere.',
    features: [
      'Transformerless high-efficiency inverters (98.6% efficiency)',
      'Integrated Wi-Fi / 4G cloud monitoring app',
      'Anti-islanding and rapid shutdown electrical safety',
      'IP65 / IP66 weatherproof outdoor enclosures',
      '5 to 10-Year manufacturer replacement warranty'
    ],
    priceStarting: 'Starting ₹19,500 / Unit'
  },
  {
    id: 'net-metering',
    title: 'Net Metering & Subsidy Processing',
    tag: 'PM Surya Ghar Scheme (Gujarat)',
    image: '/images/commercial.jpg',
    desc: 'We manage 100% of the bureaucratic process. From portal registration, PGVCL / GUVNL approvals, bi-directional meter testing to direct-to-bank subsidy disbursement up to ₹78,000.',
    features: [
      'National Portal PM Surya Ghar documentation & tracking',
      'PGVCL / GUVNL / DGVCL inspector coordination',
      'Fast-track bi-directional smart meter commissioning',
      'Complete safety sanction certificates',
      'Zero extra coordination stress for the customer'
    ],
    priceStarting: 'Included in All Turnkey Packages'
  },
  {
    id: 'commercial',
    title: 'Commercial & Industrial Solar Plants',
    tag: '50kW to 1MW+ Turnkey',
    image: '/images/farm.jpg',
    desc: 'Massive electricity savings for manufacturing factories, commercial complexes, shipping hubs, schools, and hospitals in Gujarat. Capitalize on 40% accelerated tax depreciation and 3-year payback.',
    features: [
      'Custom 3D shadow analysis and structural load engineering',
      'HT/LT panel synchronization with diesel generator controllers',
      'SCADA plant-level telemetry and weather station data',
      '40% Accelerated Depreciation tax benefit guidance',
      'Dedicated on-site project management engineers'
    ],
    priceStarting: 'Custom Quote / MW Basis'
  },
  {
    id: 'amc',
    title: 'Solar AMC & Maintenance Services',
    tag: 'Preventive & Emergency Care',
    image: '/images/engineer.jpg',
    desc: 'Keep your solar plant operating at peak efficiency. Dust, dirt, and desert sands can decrease generation by 20–30%. Our team provides robotic & demineralized cleaning in Kutch.',
    features: [
      'Demineralized water panel deep washing (quarterly/monthly)',
      'Thermal imaging infrared scans for hotspot detection',
      'Inverter terminal torque checks & firmware upgrades',
      'String voltage and earth resistance testing',
      '24-Hour emergency breakdown response'
    ],
    priceStarting: 'Starting ₹4,999 / Year'
  },
]

// Comparison matrix
const comparison = [
  { feature: 'Grid Connection Required', onGrid: true, offGrid: false, hybrid: true },
  { feature: 'Works During Grid Power Cuts', onGrid: false, offGrid: true, hybrid: true },
  { feature: 'Eligible for PM Surya Subsidy (Gujarat)', onGrid: true, offGrid: false, hybrid: true },
  { feature: 'Surplus Export via Net Metering', onGrid: true, offGrid: false, hybrid: true },
  { feature: 'Requires Battery Storage', onGrid: false, offGrid: true, hybrid: true },
  { feature: 'Initial Investment Cost', onGrid: 'Lowest (Fastest ROI)', offGrid: 'Moderate', hybrid: 'Higher (Maximum Autonomy)' },
]

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
      <PageHero
        tag="Engineering & Solutions"
        title="Comprehensive Solar Services"
        subtitle="From residential rooftop solar to multi-megawatt industrial installations and lithium battery integration across Gujarat."
        breadcrumb="Services"
        image="/images/hero.jpg"
      />

      {/* ═══ SERVICES DETAILED CARDS ════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="pill-tag mb-2">Our Capabilities</span>
            <h2 className="heading-section text-gray-900 font-extrabold mt-2">
              Tailored Solutions for <span className="gradient-text">Every Energy Need</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} className="modern-card overflow-hidden flex flex-col h-full bg-white border border-gray-200">
                <div className="h-52 relative overflow-hidden bg-gray-100">
                  <SafeImage
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 bg-white/95 text-orange font-bold text-xs rounded-full shadow-sm">
                    {s.tag}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">{s.desc}</p>

                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2.5">Key Inclusions:</h4>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-700">
                          <FiCheckCircle className="text-orange text-sm shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <div className="text-xs font-bold text-orange mb-3">{s.priceStarting}</div>
                    <div className="flex gap-2">
                      <Link
                        to={`/contact?service=${s.id}`}
                        className="btn-orange w-full text-xs py-2.5 justify-center shadow-sm"
                      >
                        Request Quote <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SYSTEM COMPARISON MATRIX ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="pill-tag mb-2">System Comparison</span>
            <h2 className="heading-section text-gray-900 font-extrabold mt-2">
              On-Grid vs Off-Grid vs <span className="gradient-text">Hybrid Solar</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider">
                  <th className="p-4 border-b border-white/10">Feature / Specification</th>
                  <th className="p-4 border-b border-white/10 text-center">On-Grid (Grid-Tie)</th>
                  <th className="p-4 border-b border-white/10 text-center">Off-Grid (Standalone)</th>
                  <th className="p-4 border-b border-white/10 text-center bg-orange/90">Hybrid System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.onGrid === 'boolean' ? (
                        row.onGrid ? <FiCheck className="text-orange text-lg mx-auto font-bold" /> : <FiX className="text-gray-400 text-lg mx-auto" />
                      ) : (
                        <span className="font-semibold text-xs text-navy">{row.onGrid}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.offGrid === 'boolean' ? (
                        row.offGrid ? <FiCheck className="text-orange text-lg mx-auto font-bold" /> : <FiX className="text-gray-400 text-lg mx-auto" />
                      ) : (
                        <span className="font-semibold text-xs text-navy">{row.offGrid}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-orange-pale/40 font-medium">
                      {typeof row.hybrid === 'boolean' ? (
                        row.hybrid ? <FiCheck className="text-orange text-lg mx-auto font-black" /> : <FiX className="text-gray-400 text-lg mx-auto" />
                      ) : (
                        <span className="font-bold text-xs text-orange">{row.hybrid}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ 4-STEP INSTALLATION PROCESS ═════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="pill-tag mb-2">Our Process</span>
            <h2 className="heading-section text-gray-900 font-extrabold mt-2">
              How We Get You <span className="gradient-text">Solar Powered</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Free Site Survey',
                desc: 'Our engineers conduct a 3D shadow analysis, check rooftop load-bearing capacity, and review your monthly tariff bills.'
              },
              {
                step: '02',
                title: 'Custom Engineering',
                desc: 'We draft electrical line diagrams, component placement plans, and calculate exact subsidy and payback projections.'
              },
              {
                step: '03',
                title: 'Rapid Installation',
                desc: 'Certified installers assemble GI structures, lay solar panels, wire safety surge units, and complete testing within 48 hours.'
              },
              {
                step: '04',
                title: 'Net Metering & Commissioning',
                desc: 'We liaise with PGVCL / GUVNL for bi-directional meter swap, activate mobile generation monitoring, and hand over your warranty dossier.'
              },
            ].map((st) => (
              <div key={st.step} className="modern-card p-6 bg-white border border-gray-200 relative">
                <span className="text-3xl font-black text-orange mb-3 block">{st.step}</span>
                <h4 className="text-base font-bold text-gray-900 mb-2">{st.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
