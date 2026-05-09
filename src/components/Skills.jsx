import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'violet',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 88, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '💛' },
      { name: 'HTML5', level: 95, icon: '🟧' },
      { name: 'CSS3', level: 90, icon: '🔵' },
      { name: 'Tailwind CSS', level: 87, icon: '🌊' },
    ]
  },
  {
    category: 'Backend',
    color: 'cyan',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 82, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '🚂' },
      { name: 'REST APIs', level: 85, icon: '🔗' },
      { name: 'JWT Auth', level: 78, icon: '🔐' },
    ]
  },
  {
    category: 'Database',
    color: 'green',
    icon: '🗃️',
    skills: [
      { name: 'MongoDB', level: 82, icon: '🍃' },
      { name: 'MySQL', level: 75, icon: '🐬' },
      { name: 'Mongoose ODM', level: 80, icon: '📦' },
    ]
  },
  {
    category: 'Tools & Others',
    color: 'rose',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 88, icon: '🐙' },
      { name: 'VS Code', level: 92, icon: '💙' },
      { name: 'Figma', level: 70, icon: '🎭' },
      { name: 'Postman', level: 80, icon: '📮' },
    ]
  }
]

const colorMap = {
  violet: { bar: 'from-violet-600 to-violet-400', badge: 'bg-violet-500/10 border-violet-500/20 text-violet-400', border: 'border-violet-500/20 hover:border-violet-500/40' },
  cyan: { bar: 'from-cyan-600 to-cyan-400', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400', border: 'border-cyan-500/20 hover:border-cyan-500/40' },
  green: { bar: 'from-green-600 to-green-400', badge: 'bg-green-500/10 border-green-500/20 text-green-400', border: 'border-green-500/20 hover:border-green-500/40' },
  rose: { bar: 'from-rose-600 to-rose-400', badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400', border: 'border-rose-500/20 hover:border-rose-500/40' },
}

function SkillBar({ name, level, icon, barClass, animate }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${barClass} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : '0%', transitionDelay: '0.2s' }}
        />
      </div>
    </div>
  )
}

const techBadges = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript',
  'Tailwind CSS', 'MySQL', 'Git', 'GitHub', 'VS Code',
  'Figma', 'Postman', 'REST API', 'HTML5', 'CSS3',
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-violet-700/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">
            Technical Skills
          </h2>
        </div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, gi) => {
            const colors = colorMap[group.color]
            return (
              <div
                key={group.category}
                className={`reveal glass-bright rounded-2xl p-6 border ${colors.border} transition-all duration-300 card-hover`}
                style={{ transitionDelay: `${gi * 100}ms` }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl border ${colors.badge} flex items-center justify-center text-lg`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base">{group.category}</h3>
                    <p className="text-slate-500 text-xs">{group.skills.length} technologies</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="flex flex-col gap-4">
                  {group.skills.map(skill => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      barClass={colors.bar}
                      animate={animate}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech badges cloud */}
        <div className="reveal">
          <p className="text-center text-slate-500 text-sm mb-6 font-mono">// All technologies I've worked with</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className="glass border border-white/8 rounded-xl px-4 py-2 text-slate-300 text-sm hover:border-violet-500/40 hover:text-white hover:bg-violet-500/5 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
