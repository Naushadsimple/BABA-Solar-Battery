import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle,
  FiChevronDown, FiChevronUp, FiShield, FiCalendar
} from 'react-icons/fi'
import { FaWhatsapp, FaShieldAlt } from 'react-icons/fa'
import PageHero from '../components/PageHero'

const faqs = [
  {
    q: 'How much subsidy can I claim under PM Surya Ghar Muft Bijli Yojana in Gujarat?',
    a: 'For residential rooftops in Gujarat (PGVCL/GUVNL): You get ₹30,000 for a 1kW system, ₹60,000 for a 2kW system, and a maximum of ₹78,000 for 3kW and larger systems. The subsidy is deposited directly into your bank account after PGVCL inspection and net meter synchronization.'
  },
  {
    q: 'How long does the installation and net-metering process take in Gandhidham & Kutch?',
    a: 'The physical rooftop installation of panels, GI structure, and inverter takes only 24–48 hours. The complete PGVCL net-metering liaison, meter testing, and government subsidy documentation typically take 10–18 working days.'
  },
  {
    q: 'What warranties are provided with BABA Solar installations?',
    a: 'We provide a 25-Year Linear Performance Warranty on all Tier-1 solar panels (guaranteeing 80%+ efficiency at year 25), a 5-to-10 Year Replacement Warranty on inverters, and up to 10 Years on Lithium battery banks.'
  },
  {
    q: 'Will my solar system work during a grid power cut?',
    a: 'Standard On-Grid (Grid-Tie) systems automatically shut down during grid outages for linemen safety (anti-islanding). If you require continuous power during load shedding, we install Hybrid or Off-Grid systems with Lithium battery storage.'
  },
  {
    q: 'How much roof space do I need for solar panels?',
    a: 'As a rule of thumb, every 1 kW of solar capacity requires approximately 80 to 100 square feet of shadow-free rooftop area. For a typical 3kW home setup in Gujarat, around 250–300 sq.ft is ideal.'
  }
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Gandhidham',
    service: 'rooftop',
    monthlyBill: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  // Prepopulate form if redirected from calculator or service cards
  useEffect(() => {
    const billParam = searchParams.get('bill')
    const serviceParam = searchParams.get('service')
    if (billParam || serviceParam) {
      setFormData(prev => ({
        ...prev,
        monthlyBill: billParam ? `₹${billParam}/mo` : prev.monthlyBill,
        service: serviceParam || prev.service,
        message: billParam ? `I'm looking for a solar system. My monthly bill is approx ₹${billParam}. Please send me an exact proposal.` : prev.message
      }))
    }
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
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
        tag="Reach Our Engineers"
        title="Contact BABA Solar & Battery"
        subtitle="Schedule a free rooftop site inspection in Gandhidham, Kutch or anywhere across Gujarat."
        breadcrumb="Contact Us"
        image="/images/engineer.jpg"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ═══ CONTACT INFO BOXES ═════════════════════════════════════════ */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-orange-pale text-orange flex items-center justify-center text-xl mb-4 font-bold">
                <FiPhone />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Direct Phone</h3>
              <p className="text-gray-500 text-xs mb-3">Mon–Sat from 9am to 7pm</p>
              <a href="tel:+919876543210" className="text-sm font-bold text-orange hover:text-orange-dark block">
                +91 98765 43210
              </a>
              <a href="tel:+918765432109" className="text-xs font-medium text-gray-600 hover:text-navy block mt-0.5">
                +91 87654 32109
              </a>
            </div>

            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-green/10 text-green flex items-center justify-center text-2xl mb-4">
                <FaWhatsapp />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">WhatsApp Quick Desk</h3>
              <p className="text-gray-500 text-xs mb-3">Fast response within 15 minutes</p>
              <a
                href="https://wa.me/919876543210?text=Hi%20BABA%20Solar,%20I%20want%20information%20on%20rooftop%20solar%20in%20Gandhidham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-green hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </div>

            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-navy/10 text-navy flex items-center justify-center text-xl mb-4 font-bold">
                <FiMail />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Email Inquiries</h3>
              <p className="text-gray-500 text-xs mb-3">Send project drawings & RFPs</p>
              <a href="mailto:info@babasolar.in" className="text-sm font-bold text-navy hover:text-orange block">
                info@babasolar.in
              </a>
              <a href="mailto:support@babasolar.in" className="text-xs font-medium text-gray-600 block mt-0.5">
                support@babasolar.in
              </a>
            </div>

            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-orange-pale text-orange flex items-center justify-center text-xl mb-4 font-bold">
                <FiMapPin />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Office & Showroom</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Office No.51, Plot No.57, Sector 8, Tagore Road, Near Maharashtra Mandal, Gandhidham (Kutch), Gujarat – 370201
              </p>
            </div>
          </div>

          {/* ═══ FORM & MAP SECTION ═════════════════════════════════════════ */}
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Consultation Form */}
            <div className="lg:col-span-7">
              <div className="modern-card p-8 sm:p-10 bg-white border border-gray-200 shadow-md">
                <div className="mb-6">
                  <span className="pill-tag mb-2">Free Rooftop Feasibility</span>
                  <h3 className="text-2xl font-black text-gray-900">Request Custom Quotation</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Fill in your property details and our Gujarat solar engineer will contact you with an exact proposal.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-orange-pale/60 rounded-3xl border border-orange/20 my-8"
                  >
                    <FiCheckCircle className="text-orange text-5xl mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Proposal Request Received!</h4>
                    <p className="text-gray-600 text-sm max-w-md mx-auto mb-4">
                      Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our senior solar technician will review your details and call you on <strong className="text-orange">{formData.phone}</strong> within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-glass text-xs py-2 px-5"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Patel"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-orange focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-orange focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-orange focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">Location / City in Gujarat</label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-orange focus:bg-white transition-colors cursor-pointer"
                        >
                          <option value="Gandhidham">Gandhidham (Kutch)</option>
                          <option value="Bhuj">Bhuj (Kutch)</option>
                          <option value="Anjar">Anjar (Kutch)</option>
                          <option value="Kandla">Kandla / Mundra</option>
                          <option value="Rajkot">Rajkot</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Other">Other Gujarat District</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">Required Solution</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-orange focus:bg-white transition-colors cursor-pointer"
                        >
                          <option value="rooftop">On-Grid Rooftop Solar (Home / Business)</option>
                          <option value="battery">Solar + Battery Storage System</option>
                          <option value="commercial">Industrial / Port / Warehouse Solar</option>
                          <option value="amc">Solar AMC, Cleaning & Servicing</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">Avg Monthly Electricity Bill</label>
                        <input
                          type="text"
                          placeholder="e.g. ₹4,500/month"
                          value={formData.monthlyBill}
                          onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-orange focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1.5">Additional Notes / Roof Type</label>
                      <textarea
                        rows={3}
                        placeholder="Mention roof type (flat concrete / sheet metal / industrial shed) or specific backup requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-orange focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-orange w-full justify-center text-sm py-3.5 shadow-lg"
                      >
                        {loading ? 'Processing...' : (
                          <span className="flex items-center gap-2">
                            <FiSend /> Send Request for Free Site Survey
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Google Maps Embed (Exact User Embed URL) & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="modern-card overflow-hidden bg-white border border-gray-200 shadow-md">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-orange" />
                    <span className="font-bold text-sm text-gray-900">Gandhidham Office Location</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-orange-pale text-orange text-[11px] font-bold rounded-full">
                    Open Mon–Sat
                  </span>
                </div>
                
                {/* User's Exact Google Maps Embed URL */}
                <div className="h-80 w-full bg-gray-100">
                  <iframe
                    title="BABA Solar Gandhidham Kutch Gujarat Location"
                    src="https://www.google.com/maps?q=Office+No.51+Plot+No.57+sector+8,Tagore+Road+Near+Mahastra+Mandal,Gandhidham(Kutch),Gujarat,+370201.+&t&z=13&ie=UTF8&iwloc&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 bg-gray-50 text-xs text-gray-600">
                  <p className="font-bold text-gray-800 mb-1">Office Address:</p>
                  <p>Office No.51, Plot No.57, Sector 8, Tagore Road, Near Maharashtra Mandal, Gandhidham (Kutch), Gujarat – 370201</p>
                </div>
              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="modern-card p-6 bg-gradient-to-br from-orange-pale via-white to-orange-pale/40 border border-orange/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange text-white flex items-center justify-center text-2xl shrink-0 shadow-md">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Need a Fast Estimate on WhatsApp?</h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Send a photo of your PGVCL electricity bill on WhatsApp to get a 10-minute estimate.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="https://wa.me/919876543210?text=Hi%20BABA%20Solar,%20here%20is%20my%20electricity%20bill%20for%20a%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orange text-xs py-2.5 px-5 w-full justify-center shadow-sm"
                  >
                    Share Bill on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ═══ FAQ ACCORDION ══════════════════════════════════════════════ */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="pill-tag mb-2">Frequently Asked Questions</span>
              <h2 className="heading-section text-gray-900 font-extrabold mt-2">
                Got Questions? We Have <span className="gradient-text">Clear Answers</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={faq.q}
                    className="modern-card overflow-hidden bg-white border border-gray-200 transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                      <span className="text-orange text-lg shrink-0">
                        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  )
}
