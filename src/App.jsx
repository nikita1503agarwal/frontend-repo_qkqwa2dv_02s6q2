import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Gallery, Contact, Socials } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-sky-50 to-violet-50 text-slate-800">
      <div className="fixed inset-0 bg-[radial-gradient(30rem_30rem_at_20%_10%,rgba(236,72,153,0.08),transparent),radial-gradient(35rem_35rem_at_90%_20%,rgba(56,189,248,0.08),transparent)] pointer-events-none" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
        <Socials />
      </main>

      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Mayank • Built with love and color
        </div>
      </footer>
    </div>
  )
}

export default App
