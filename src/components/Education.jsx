const education = [
  {
    degree: 'Bachelor of Vocation (B.Voc)',
    field: 'Software Development',
    institution: 'Syed Ammal Arts and Science College',
    location: 'Tamil Nadu, India',
    period: '2023 – 2026',
    grade: 'Pursuing',
    status: 'Pursuing',
    courses: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Web Technologies', 'Software Engineering'],
    icon: '🎓',
    color: 'violet',
  },
  {
    degree: 'Higher Secondary (XII)',
    field: 'Computer Science',
    institution: 'Government HR Sec Model School',
    location: 'Tamil Nadu, India',
    period: '2020 – 2022',
    grade: 'Completed',
    status: 'Completed',
    courses: ['Mathematics', 'Physics', 'Computer Science', 'Chemistry'],
    icon: '🏫',
    color: 'cyan',
  }
]

const colorMap = {
  violet: {
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    tag: 'bg-violet-500/10 text-violet-300',
    border: 'hover:border-violet-500/30',
    dot: 'bg-violet-500',
    grade: 'text-violet-400',
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    tag: 'bg-cyan-500/10 text-cyan-300',
    border: 'hover:border-cyan-500/30',
    dot: 'bg-cyan-500',
    grade: 'text-cyan-400',
  }
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">My background</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => {
            const c = colorMap[edu.color]
            return (
              <div
                key={edu.degree}
                className={`reveal glass-bright rounded-2xl p-6 md:p-8 border border-white/8 ${c.border} transition-all duration-300 card-hover`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon column */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-2xl">
                      {edu.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-white text-xl">{edu.degree}</h3>
                        <p className={`font-medium text-sm mt-0.5 ${c.grade}`}>{edu.field}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-xs px-3 py-1 rounded-full border font-medium ${c.badge}`}>
                          {edu.status}
                        </span>
                        <span className="text-slate-500 text-xs font-mono">{edu.period}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {edu.location}
                      </div>
                      <div className={`font-mono font-bold text-sm ${c.grade}`}>
                        📊 {edu.grade}
                      </div>
                    </div>

                    {/* Relevant courses */}
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-mono">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map(course => (
                          <span key={course} className={`text-xs px-2.5 py-1 rounded-lg ${c.tag} font-medium`}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}