import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, ExternalLink, Star, Image as ImageIcon } from 'lucide-react'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-fuchsia-200/40 blur-2xl" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="rounded-3xl bg-white/70 backdrop-blur border border-white/60 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I'm Mayank — a data science student who loves turning messy datasets into meaningful stories. When I'm not wrangling models, I'm experimenting with content, trends, and visuals to build a friendly tech-forward presence online.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Data Viz', 'A/B Testing', 'Content Strategy', 'Video Editing']
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fade} className="text-2xl sm:text-3xl font-bold text-slate-900">Skills</motion.h2>
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.05 }} className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((s) => (
            <div key={s} className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 px-4 py-3 text-center text-slate-700 shadow-sm">
              {s}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    { title: 'TrendSense', desc: 'Predicting social trend lift using historical engagement', tag: 'ML' },
    { title: 'CreatorDash', desc: 'Content performance dashboard with cohort drill-downs', tag: 'Analytics' },
    { title: 'ReelsRanker', desc: 'Ranking short-form videos with lightweight features', tag: 'Ranking' },
    { title: 'VibeViz', desc: 'Colorful visual storytelling for datasets', tag: 'Viz' },
    { title: 'ShopLift', desc: 'A/B testing toolkit for product drops', tag: 'Experimentation' },
    { title: 'CaptionCraft', desc: 'NLP powered caption ideation', tag: 'NLP' }
  ]

  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-sky-200/40 blur-2xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <Star size={16} /> Propose a collab
          </a>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a key={p.title} {...fade} transition={{ duration: 0.5, delay: i * 0.05 }} href="#" className="group rounded-3xl border border-white/60 bg-white/70 backdrop-blur p-5 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-fuchsia-200/60 to-sky-200/60 flex items-center justify-center text-slate-500">
                <ExternalLink className="opacity-70" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white text-xs px-2 py-1">
                  {p.tag}
                </span>
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
              </div>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  const items = new Array(8).fill(0)
  return (
    <section id="gallery" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fade} className="text-2xl sm:text-3xl font-bold text-slate-900">Gallery</motion.h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((_, i) => (
            <motion.div key={i} {...fade} transition={{ duration: 0.5, delay: i * 0.03 }} className="aspect-square rounded-2xl border border-white/60 bg-white/70 backdrop-blur flex items-center justify-center text-slate-500">
              <ImageIcon />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="rounded-3xl bg-white/70 backdrop-blur border border-white/60 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">Open for internships, collaborations, and creator partnerships.</p>
          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-300" placeholder="Your name" />
            <input className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-300" placeholder="Email" />
            <textarea className="sm:col-span-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 h-32 outline-none focus:ring-2 focus:ring-fuchsia-300" placeholder="Say hello..." />
            <button type="button" className="sm:col-span-2 inline-flex justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white px-5 py-3 shadow hover:shadow-md transition-all">Send</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export function Socials() {
  const socials = [
    { icon: <Instagram />, label: 'Instagram', href: 'https://instagram.com/' },
    { icon: <Linkedin />, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: <Github />, label: 'GitHub', href: 'https://github.com/' },
    { icon: <Mail />, label: 'Email', href: 'mailto:hello@example.com' },
  ]
  return (
    <section id="socials" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fade} className="text-2xl sm:text-3xl font-bold text-slate-900">Socials</motion.h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socials.map((s, i) => (
            <motion.a key={s.label} {...fade} transition={{ duration: 0.5, delay: i * 0.05 }} href={s.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-5 hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-fuchsia-200/60 to-sky-200/60 flex items-center justify-center text-slate-600 group-hover:text-slate-800">
                {s.icon}
              </div>
              <div className="mt-3 font-medium text-slate-800">{s.label}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
