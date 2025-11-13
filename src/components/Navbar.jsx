import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-white/40 shadow-sm p-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-400 to-sky-400 text-white shadow">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold text-slate-800">Mayank</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#socials" className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white px-4 py-2 shadow hover:shadow-md transition-shadow">
              Socials
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-xl bg-white/80 border border-white/60" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-2xl bg-white/90 backdrop-blur border border-white/60 shadow p-3 flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#socials" className="px-3 py-3 rounded-xl text-white bg-gradient-to-r from-fuchsia-500 to-sky-500" onClick={() => setOpen(false)}>
              Socials
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
