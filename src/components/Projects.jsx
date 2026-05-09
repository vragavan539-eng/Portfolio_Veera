import { useState } from 'react'

const GITHUB = 'https://github.com/vragavan539-eng'
const LINKEDIN = 'https://www.linkedin.com/in/veera-ragavan-bb36612b0/'

const projects = [
  {
    id: 1,
    title: 'Employee Management System',
    description: 'Smart employee management with face recognition-based attendance on MERN stack. Real-time face detection, department management, payroll tracking, leave management, and HR dashboard with analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Face-API.js', 'Tailwind'],
    image: '/projects/techems.png',
    accent: '#8b5cf6', iconBg: 'from-violet-500 to-purple-700', colorFrom: '#4c1d95', colorTo: '#7c3aed',
    github: `${GITHUB}/ems-it-complete`,
    demo: 'https://ems-it-complete-gfaw-jjmpvvxqh-vragavan539-engs-projects.vercel.app/',
    featured: true,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    description: 'Full-stack e-commerce platform with product listings, cart management, secure checkout, order tracking, admin dashboard, and Razorpay payment gateway with user authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'Tailwind'],
    image: '/projects/shoplux.png',
    accent: '#22d3ee', iconBg: 'from-cyan-500 to-blue-700', colorFrom: '#164e63', colorTo: '#0e7490',
    github: GITHUB,
    demo: 'https://frontend-olive-xi-77.vercel.app/',
    featured: true,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>),
  },
  {
    id: 3,
    title: 'AI Pharmacy Management',
    description: 'AI-powered pharmacy management on MERN stack with drug interaction alerts, automated stock reordering, prescription management, expiry tracking, and AI-based demand forecasting.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'OpenAI API', 'Chart.js'],
    image: '/projects/pharmai.png',
    accent: '#10b981', iconBg: 'from-emerald-500 to-teal-700', colorFrom: '#064e3b', colorTo: '#047857',
    github: `${GITHUB}/pharmacy-management`,
    demo: 'https://pharmacy-management-007.vercel.app/',
    featured: true,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5.5-1.5H20.79"/></svg>),
  },
  {
    id: 4,
    title: 'School Management System',
    description: 'Comprehensive school management with student enrollment, attendance, grade management, timetable scheduling, parent portal, fee tracking, and teacher–student communication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind'],
    image: '/projects/edumanage.png',
    accent: '#f59e0b', iconBg: 'from-amber-500 to-yellow-700', colorFrom: '#78350f', colorTo: '#b45309',
    github: `${GITHUB}/school-management`,
    demo: null,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
  },
  {
    id: 5,
    title: 'College Management System',
    description: 'Full-featured MERN college management covering admissions, academic records, faculty management, examination scheduling, result publishing, and hostel/library management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Tailwind'],
    image: '/projects/edunexus.png',
    accent: '#ec4899', iconBg: 'from-pink-500 to-rose-700', colorFrom: '#831843', colorTo: '#be185d',
    github: GITHUB,
    demo: null,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>),
  },
  {
    id: 6,
    title: 'Bus Reservation System',
    description: 'Full-stack bus reservation with real-time seat availability, route management, booking history, fare calculation, digital ticketing, and operator admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'Tailwind'],
    image: '/projects/busgo.png',
    accent: '#f97316', iconBg: 'from-orange-500 to-amber-700', colorFrom: '#7c2d12', colorTo: '#c2410c',
    github: GITHUB,
    demo: null,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="1" y="3" width="22" height="15" rx="2"/><path d="M1 9h22"/><path d="M9 3v15"/><circle cx="6.5" cy="21" r="1.5"/><circle cx="17.5" cy="21" r="1.5"/></svg>),
  },
  {
    id: 7,
    title: 'Train Reservation System',
    description: 'MERN stack train reservation with PNR tracking, multi-class booking, coach visualization, waiting list management, cancellation/refund processing, and admin scheduling.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],
    image: '/projects/railreserve.png',
    accent: '#3b82f6', iconBg: 'from-blue-500 to-indigo-700', colorFrom: '#1e3a8a', colorTo: '#1d4ed8',
    github: GITHUB,
    demo: null,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="16" rx="2"/><path d="M4 10h16"/><path d="M10 2v16"/><circle cx="8.5" cy="21" r="1.5"/><circle cx="15.5" cy="21" r="1.5"/></svg>),
  },
  {
    id: 8,
    title: 'Flight Reservation System',
    description: 'Full-stack flight booking with real-time seat maps, multi-city search, fare comparison, check-in management, boarding pass generation, and airline admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Framer Motion'],
    image: '/projects/flightlux.png',
    accent: '#0ea5e9', iconBg: 'from-sky-500 to-cyan-700', colorFrom: '#0c4a6e', colorTo: '#0369a1',
    github: GITHUB,
    demo: null,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 2.5L8 4.4l-1.6 1.6 5.8 2.9L9.2 12H5l-1 1 4 2 2 4 1-1V14.8l2.9 5.8z"/></svg>),
  },
  {
    id: 9,
    title: 'Weather App with AI',
    description: 'AI-enhanced weather app with natural language queries, 7-day forecasts, severe weather alerts, location-based suggestions, historical data visualization, and AI-powered recommendations.',
    tags: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'OpenWeather API', 'Chart.js'],
    image: '/projects/weatherai.png',
    accent: '#14b8a6', iconBg: 'from-teal-500 to-green-700', colorFrom: '#134e4a', colorTo: '#0f766e',
    github: GITHUB,
    demo: null,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>),
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="reveal card-hover relative glass-bright rounded-2xl overflow-hidden border border-white/8"
      style={{ borderColor: hovered ? `${project.accent}50` : undefined, transform: hovered ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.3s ease', transitionDelay: `${index * 60}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-52 overflow-hidden bg-slate-900">
        {imgError ? (
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})` }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)`, backgroundSize: '24px 24px' }} />
          </div>
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700" style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }} onError={() => setImgError(true)} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" style={{ opacity: hovered ? 1 : 0.5, transition: 'opacity 0.3s' }} />
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-300" style={{ background: `radial-gradient(ellipse at center bottom, ${project.accent}25, transparent 70%)`, opacity: hovered ? 1 : 0 }} />
        <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center text-white transition-all duration-300`} style={{ boxShadow: hovered ? `0 0 20px ${project.accent}70` : 'none', transform: hovered ? 'scale(1.1)' : 'scale(1)' }}>{project.icon}</div>
        {project.featured && <div className="absolute top-3 right-3 glass border border-white/10 rounded-full px-2.5 py-0.5 text-xs text-slate-300 font-medium backdrop-blur-sm">⭐ Featured</div>}
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-white text-base mb-1.5 leading-tight">{project.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-lg glass border border-white/8 text-slate-400" style={{ borderColor: hovered ? `${project.accent}30` : undefined }}>{tag}</span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.demo ? 'flex-1' : 'w-full'} flex items-center justify-center gap-1.5 py-2 rounded-xl glass border border-white/10 text-slate-300 text-xs hover:border-violet-500/40 hover:text-white transition-all duration-300`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-white text-xs transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${project.colorTo}, ${project.accent})`, opacity: hovered ? 1 : 0.9 }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-cyan-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-violet-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">Projects</h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">A collection of projects that showcase my skills across the full stack — from UI to database.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="text-center mt-12 reveal flex items-center justify-center gap-4 flex-wrap">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-outline px-8 py-3.5 rounded-xl font-display font-semibold text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View All on GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-outline px-8 py-3.5 rounded-xl font-display font-semibold text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}