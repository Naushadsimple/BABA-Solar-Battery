import { motion } from 'framer-motion'
import { FiAlertTriangle, FiAlertOctagon, FiClock, FiShield, FiLock } from 'react-icons/fi'

export default function SiteStopped() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A0F1D] text-white">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 rounded-[32px] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] text-center overflow-hidden"
      >
        {/* Subtle top edge highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>Status: Development Suspended</span>
        </div>

        {/* Central Stop Icon with Glow */}
        <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
          <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-red-500/20 to-amber-500/10 border border-red-500/40 backdrop-blur-md flex items-center justify-center text-red-400 text-4xl sm:text-5xl shadow-inner">
            <FiAlertOctagon />
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
          This Site Development is Stopped.
        </h1>

        <p className="text-base sm:text-lg text-white/80 font-medium mb-8">
          Please contact the developer for information.
        </p>

        {/* Descriptive Note Box (Glass) */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 text-left text-xs sm:text-sm text-white/70 leading-relaxed">
          <div className="flex items-start gap-3">
            <FiLock className="text-amber-400 text-lg shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white/90 mb-1">Notice of Project Hold</p>
              <p>
                All ongoing front-end, back-end development, hosting deployment, and feature updates for this application have been officially put on hold. Normal site operations and public access are presently unavailable.
              </p>
            </div>
          </div>
        </div>

        {/* Prominent Warning Box at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative bg-gradient-to-r from-red-950/60 via-amber-950/40 to-red-950/60 border-2 border-red-500/50 rounded-2xl p-4 sm:p-5 text-left shadow-lg overflow-hidden"
        >
          {/* Pulsing warning indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-red-500 animate-pulse" />

          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-amber-400 text-2xl shrink-0">
              <FiAlertTriangle className="animate-bounce" style={{ animationDuration: '2s' }} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black tracking-widest text-red-400 uppercase bg-red-500/20 px-2 py-0.5 rounded">
                  ⚠️ Critical Warning
                </span>
                <span className="text-[11px] text-white/50 flex items-center gap-1 font-semibold">
                  <FiClock className="text-amber-400" /> 30 Days Notice
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-amber-200 leading-snug">
                If no action is taken, this site will be permanently closed and removed in 30 days.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Meta */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/40">
          <span>Reference ID: REF-DEV-HOLD-30D</span>
          <span>System Status: Pending Owner Resolution</span>
        </div>
      </motion.div>
    </div>
  )
}
