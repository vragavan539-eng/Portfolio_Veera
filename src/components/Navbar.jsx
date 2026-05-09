import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass border-b border-white/5 py-3' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white font-display font-bold text-sm border border-violet-500/30 group-hover:glow-violet transition-all duration-300">
            VR
          </div>
          <span className="font-display font-semibold text-white text-sm tracking-wide hidden sm:block">
            Veera Ragavan
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group rounded-lg ${
                active === link.href.slice(1)
                  ? 'text-violet-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-300 ${
                active === link.href.slice(1) ? 'w-4/5' : 'w-0 group-hover:w-4/5'
              }`} />
            </a>
          ))}

          {/* Resume Download Button */}
          <a
            href="/Veera_Ragavan_Resume.pdf"
            download="Veera_Ragavan_Resume.pdf"
            className="ml-2 px-4 py-2 rounded-xl glass border border-violet-500/30 text-violet-300 text-sm font-medium font-display hover:border-violet-400 hover:text-violet-200 transition-all duration-300 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>

          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-xl btn-primary text-white text-sm font-medium font-display"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'text-violet-400 bg-violet-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* Mobile Resume Download */}
          <a
            href="/Veera_Ragavan_Resume.pdf"
            download="Veera_Ragavan_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="py-3 px-4 rounded-xl text-sm font-medium text-violet-300 bg-violet-500/10 flex items-center gap-2 transition-all duration-200 hover:bg-violet-500/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 text-center rounded-xl btn-primary text-white text-sm font-medium font-display"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}