import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Projects Completed', value: 9, suffix: '+' },
  { label: 'Technologies Learned', value: 15, suffix: '+' },
  { label: 'Internship Experience', value: 2, suffix: 'x' },
]

function CountUp({ end, suffix, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let current = 0
    const step = end / 40
    const timer = setInterval(() => {
      current += step
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 40)
    return () => clearInterval(timer)
  }, [start, end])

  return (
    <span className="font-display font-bold text-4xl gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const [countStarted, setCountStarted] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountStarted(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar & Stats */}
          <div className="reveal flex flex-col items-center gap-8">
            {/* Profile card */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 blur-2xl" />
              <div className="relative w-72 h-80 rounded-3xl gradient-border overflow-hidden">
                {imgError ? (
                  <div className="w-full h-full bg-gradient-to-br from-violet-900/50 to-cyan-900/30 flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white font-display font-bold text-3xl shadow-lg glow-violet">
                      VR
                    </div>
                  </div>
                ) : (
                  <img
                    src="/profile.jpg"
                    alt="Veera Ragavan"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass border border-green-500/30 rounded-full px-4 py-1 text-xs text-green-400 flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-bright rounded-2xl p-4 text-center border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 card-hover"
                >
                  <CountUp end={stat.value} suffix={stat.suffix} start={countStarted} />
                  <p className="text-slate-500 text-xs mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio */}
          <div className="reveal flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Hello! I'm Veera Ragavan 👋
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm an enthusiastic <span className="text-violet-400 font-medium">Full Stack Developer</span> specializing
                in the MERN stack with hands-on experience building scalable web applications. I'm proficient in
                RESTful APIs, CRUD operations, and frontend-backend integration.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm passionate about developing <span className="text-cyan-400 font-medium">AI-powered solutions</span> and
                improving user experience through efficient design and performance optimization. From face-recognition
                systems to intelligent management platforms, I love tackling complex real-world problems with clean,
                scalable code.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I've completed internships as a <span className="text-slate-200 font-medium">Full-Stack Development Intern</span> at
                Novi Tech and a <span className="text-slate-200 font-medium">Front-End Developer Intern</span> at Tarcin, where I
                worked with the MERN stack in a professional team setting.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: '🎯', label: 'Full Stack Development', desc: 'React + Node + MongoDB' },
                { icon: '🤖', label: 'AI Integration', desc: 'OpenAI & Smart Automation' },
                { icon: '⚡', label: 'Performance Driven', desc: 'Optimized & Fast Apps' },
                { icon: '📚', label: 'Continuous Learner', desc: 'Always upskilling' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 glass rounded-xl p-3 border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-slate-200 text-sm font-medium">{item.label}</p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info row */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Tamil Nadu, India
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                vragavan539@gmail.com
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.79a19.79 19.79 0 01-3.07-8.67A2 2 0 011.95 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                6369396941
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}