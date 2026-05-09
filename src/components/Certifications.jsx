const certifications = [
  {
    title: 'Full Stack Development — 30 Days MasterClass',
    issuer: 'NoviTech R&D Pvt. Ltd.',
    date: 'Dec 2025',
    credentialId: 'NT_B52FSDE281',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Full Stack'],
    icon: '🚀',
    gradient: 'from-violet-600/20 to-purple-900/20',
    accent: '#8b5cf6',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    verify: null,
    download: '/certificates/novitech.pdf',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google — Coursera',
    date: 'Sep 2025',
    credentialId: 'NUL76M9KM11D',
    skills: ['AI Tools', 'Prompt Engineering', 'Responsible AI', 'Productivity'],
    icon: '🤖',
    gradient: 'from-cyan-600/20 to-blue-900/20',
    accent: '#22d3ee',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    verify: 'https://coursera.org/verify/specialization/NUL76M9KM11D',
    download: null,
  },
  {
    title: 'Oracle Cloud Infrastructure AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Aug 2025',
    credentialId: '102236956OCI25AICFA',
    skills: ['Cloud AI', 'OCI', 'Machine Learning', 'AI Foundations'],
    icon: '☁️',
    gradient: 'from-orange-600/20 to-red-900/20',
    accent: '#f97316',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    verify: null,
    download: '/certificates/oracle.pdf',
  },
  {
    title: 'CloudBurst: Cloud Computing Workshop',
    issuer: 'SkillShift — Powered by Tarcin',
    date: 'Jan 2025',
    credentialId: 'TARCIN-CLOUD-2025',
    skills: ['Cloud Computing', 'Live Demos', 'Real-World Applications', 'Hands-On'],
    icon: '⚡',
    gradient: 'from-yellow-600/20 to-amber-900/20',
    accent: '#f59e0b',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    verify: null,
    download: '/certificates/tarcin.jpg',
  },
]

function CertCard({ cert, index }) {
  return (
    <div
      className="reveal cert-shine relative glass-bright rounded-2xl p-5 border border-white/8 transition-all duration-300 card-hover overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${cert.accent}30`}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-50 rounded-2xl`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border border-white/10 flex-shrink-0"
              style={{ background: `${cert.accent}15` }}
            >
              {cert.icon}
            </div>
            <div>
              <h3 className="font-display font-semibold text-white text-sm leading-tight">{cert.title}</h3>
              <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-green-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-500 text-xs font-mono">Issued {cert.date}</span>
          <span className="text-slate-600 text-xs font-mono truncate max-w-[130px]">{cert.credentialId}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {cert.skills.map(skill => (
            <span key={skill} className={`text-xs px-2 py-0.5 rounded-md border ${cert.badge}`}>
              {skill}
            </span>
          ))}
        </div>

        {/* Verify or Download button */}
        {cert.verify ? (
          <a
            href={cert.verify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Verify Certificate
          </a>
        ) : (
          <a
            href={cert.download}
            download
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Certificate
          </a>
        )}
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Verified achievements</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <CertCard key={cert.credentialId} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}