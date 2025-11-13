import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-300/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white/50 px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 animate-pulse" />
            Hello, I'm Mayank
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Data science student by day, aspiring influencer by night
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl">
            I explore data, tell visual stories, and craft content that blends tech and creativity. Welcome to my colorful little corner of the internet.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white px-5 py-3 shadow hover:shadow-md transition-all">
              See featured projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white/80 backdrop-blur border border-white/60 px-5 py-3 text-slate-700 hover:bg-white">
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/50 bg-white/50 backdrop-blur">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
    </section>
  )
}
