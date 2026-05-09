const experiences = [
  {
    role: 'Full-Stack Development Intern',
    company: 'Novi Tech',
    period: 'Aug 2025 – Sep 2025',
    type: 'Internship',
    color: 'violet',
    icon: '🏢',
    description: 'Completed a one-month Full-Stack Development internship with hands-on project experience. Trained in the MERN stack through a structured program and participated in real-world software development workflows.',
    highlights: [
      'Completed a one-month Full-Stack Development internship with hands-on project experience',
      'Trained in MERN stack (MongoDB, Express.js, React, Node.js) through a structured program',
      'Participated in testing, debugging, and version control of software projects',
      'Applied professional software development practices and team collaboration',
    ]
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Tarcin',
    period: 'Oct 2025 – Nov 2025',
    type: 'Internship',
    color: 'cyan',
    icon: '💻',
    description: 'Assisted in designing and developing user interfaces for web applications. Implemented interactive and dynamic features while improving overall website usability and responsiveness.',
    highlights: [
      'Assisted in designing and developing user interfaces for web applications',
      'Implemented interactive and dynamic features using HTML, CSS, and JavaScript',
      'Improved website usability, responsiveness, and overall user experience',
      'Worked closely with the development team to deliver polished UI components',
    ]
  },
  {
    role: 'Personal Projects Developer',
    company: 'Open Source & Side Projects',
    period: '2023 – Present',
    type: 'Projects',
    color: 'green',
    icon: '🚀',
    description: 'Continuously building full-stack and AI-powered projects to deepen expertise in MERN stack development, explore emerging technologies, and solve real-world problems.',
    highlights: [
      'Developed 9+ projects including reservation systems, management platforms, and AI-powered apps',
      'Built face recognition-based Employee Management System using Face-API.js',
      'Integrated OpenAI API for AI-powered pharmacy management and weather applications',
      'Deployed and maintained full-stack apps with MongoDB, Express, React, and Node.js',
    ]
  }
]

const colorMap = {
  violet: {
    dot: 'bg-violet-500 shadow-violet-500/50',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    line: 'border-violet-500/40',
    card: 'hover:border-violet-500/30',
    bullet: 'bg-violet-500',
  },
  cyan: {
    dot: 'bg-cyan-500 shadow-cyan-500/50',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    line: 'border-cyan-500/40',
    card: 'hover:border-cyan-500/30',
    bullet: 'bg-cyan-500',
  },
  green: {
    dot: 'bg-green-500 shadow-green-500/50',
    badge: 'bg-green-500/10 text-green-400 border-green-500/20',
    line: 'border-green-500/40',
    card: 'hover:border-green-500/30',
    bullet: 'bg-green-500',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-violet-700/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">My journey</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/50 via-cyan-600/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color]
              const isRight = i % 2 !== 0

              return (
                <div
                  key={exp.role}
                  className={`reveal relative flex flex-col md:flex-row gap-6 ${isRight ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${c.dot} shadow-md ring-2 ring-void ring-offset-0`} />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className={`flex-1 glass-bright rounded-2xl p-6 border border-white/8 ${c.card} transition-all duration-300 card-hover`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{exp.icon}</span>
                        <div>
                          <h3 className="font-display font-bold text-white text-lg leading-tight">{exp.role}</h3>
                          <p className="text-slate-400 text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-xs px-3 py-1 rounded-full border font-medium ${c.badge}`}>
                          {exp.type}
                        </span>
                        <span className="text-slate-500 text-xs font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-col gap-2">
                      {exp.highlights.map(h => (
                        <div key={h} className="flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${c.bullet} mt-1.5 flex-shrink-0`} />
                          <p className="text-slate-300 text-sm">{h}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}