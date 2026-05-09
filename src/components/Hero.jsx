import { useEffect, useRef, useState } from 'react'

const titles = [
  'MERN Stack Developer',
  'Software Developer',
  'Frontend Developer',
   'Backend Developer',
  'Full Stack Engineer',
  'UI/UX Enthusiast',
]

const floatingTechs = [
  { label: 'React', color: '#61DAFB', x: '4%', y: '22%', delay: '0s', size: 42 },
  { label: 'Node', color: '#68A063', x: '82%', y: '18%', delay: '1s', size: 38 },
  { label: 'MongoDB', color: '#4DB33D', x: '4%', y: '65%', delay: '2s', size: 36 },
  { label: 'JS', color: '#F7DF1E', x: '84%', y: '62%', delay: '0.5s', size: 34 },
  { label: 'TS', color: '#3178C6', x: '72%', y: '80%', delay: '1.5s', size: 32 },
  { label: 'Git', color: '#F05032', x: '18%', y: '82%', delay: '2.5s', size: 30 },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/vragavan539-eng',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/veera-ragavan-bb36612b0/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    label: 'Email',
    href: 'mailto:vragavan539@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  }
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const current = titles[titleIndex]
    let timeout

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTitleIndex(i => (i + 1) % titles.length)
    } else {
      const speed = isDeleting ? 50 : 80
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  useEffect(() => {
    const ps = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.5 ? '#7c3aed' : '#06b6d4',
    }))
    setParticles(ps)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-700/10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-600/8 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/5 blur-3xl" />

      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}

      {floatingTechs.map(tech => (
        <div
          key={tech.label}
          className="absolute hidden xl:flex items-center gap-2 glass rounded-xl px-3 py-2 border border-white/8 float-1 select-none"
          style={{
            left: tech.x,
            top: tech.y,
            animationDelay: tech.delay,
            animationDuration: `${5 + parseInt(tech.delay) + 2}s`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
          />
          <span className="text-xs text-slate-300 font-mono">{tech.label}</span>
        </div>
      ))}

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">

        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 border border-green-500/20 mb-6 text-xs text-green-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          Available for Opportunities
        </div>

        <h1 className="font-display font-bold leading-none tracking-tight text-white mb-4
          text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Veera{' '}
          <span className="gradient-text block sm:inline">Ragavan</span>
        </h1>

        <div className="flex items-center justify-center gap-1 mb-5 min-h-[2rem] sm:min-h-[2.5rem]">
          <span className="font-display font-semibold text-slate-300 text-base sm:text-xl md:text-2xl truncate max-w-[90vw]">
            {displayText}
          </span>
          <span className="typing-cursor text-violet-400 text-xl md:text-2xl font-thin flex-shrink-0">|</span>
        </div>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed px-2">
          Frontend & Backend Developer passionate about building{' '}
          <span className="text-violet-400">modern</span>,{' '}
          <span className="text-cyan-400">scalable</span>, and{' '}
          <span className="text-slate-200">user-friendly</span> web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 px-4">
          <a
            href="#projects"
            className="btn-primary w-full sm:w-auto px-6 py-3 rounded-xl text-white font-semibold font-display text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            View Projects
          </a>
          <a
            href="/Veera_Ragavan_Resume.pdf"
            download="Veera_Ragavan_Resume.pdf"
            className="btn-outline w-full sm:w-auto px-6 py-3 rounded-xl font-semibold font-display text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl glass border border-white/10 text-slate-200 font-semibold font-display text-sm hover:border-violet-500/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
          <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block" />
          <span className="text-slate-600 text-xs font-mono hidden sm:block">@vragavan</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-violet-500/50 to-transparent rounded-full" />
      </div>
    </section>
  )
}