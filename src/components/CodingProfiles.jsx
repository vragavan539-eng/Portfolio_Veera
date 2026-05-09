const profiles = [
  {
    platform: 'GitHub',
    handle: '@veeraagavan',
    description: 'Source code, projects & open-source contributions',
    stats: '20+ Repos',
    href: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    color: '#e5e7eb',
    bg: 'from-slate-700/20 to-slate-900/10',
    border: 'hover:border-slate-500/40',
    badgeColor: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  },
  {
    platform: 'LeetCode',
    handle: 'veeraagavan',
    description: 'Data structures, algorithms & competitive problem solving',
    stats: '150+ Problems',
    href: 'https://leetcode.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.59a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    color: '#FFA116',
    bg: 'from-amber-600/20 to-orange-900/10',
    border: 'hover:border-amber-500/40',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    platform: 'HackerRank',
    handle: 'veeraagavan',
    description: 'Skills certification in problem-solving and algorithms',
    stats: '5★ in JS',
    href: 'https://hackerrank.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.714 24 2.25 19.114 1.608 18 .963 16.886.963 7.116 1.608 6 2.25 4.886 10.715 0 12 0zm2.205 6.843h-1.05c-.1 0-.19.05-.246.13l-2.246 3.444-1.012-1.546a.29.29 0 0 0-.243-.13H8.357a.09.09 0 0 0-.077.135l1.85 2.83-1.85 2.834a.09.09 0 0 0 .077.135h1.05c.1 0 .19-.05.246-.13l1.012-1.547 1.012 1.546c.055.08.146.13.246.13h1.051a.09.09 0 0 0 .077-.135l-1.85-2.833 1.85-2.83a.09.09 0 0 0-.076-.135z"/>
      </svg>
    ),
    color: '#00EA64',
    bg: 'from-green-600/20 to-emerald-900/10',
    border: 'hover:border-green-500/40',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
  },
  {
    platform: 'CodeChef',
    handle: 'veeraagavan',
    description: 'Competitive programming & monthly coding challenges',
    stats: '3★ Coder',
    href: 'https://codechef.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M11.2571 0C5.03254 0 0 5.03254 0 11.2571C0 17.4817 5.03254 22.5142 11.2571 22.5142C17.4817 22.5142 22.5142 17.4817 22.5142 11.2571C22.5142 5.03254 17.4817 0 11.2571 0ZM11.2571 1.26C16.7932 1.26 21.2542 5.72097 21.2542 11.2571C21.2542 16.7932 16.7932 21.2542 11.2571 21.2542C5.72097 21.2542 1.26 16.7932 1.26 11.2571C1.26 5.72097 5.72097 1.26 11.2571 1.26Z"/>
      </svg>
    ),
    color: '#7B5EA7',
    bg: 'from-violet-600/20 to-purple-900/10',
    border: 'hover:border-violet-500/40',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
]

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">Find me online</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">
            Coding Profiles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((profile, i) => (
            <a
              key={profile.platform}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group glass-bright rounded-2xl p-5 border border-white/8 ${profile.border} transition-all duration-300 card-hover block`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: profile.color, background: `${profile.color}12` }}
                >
                  {profile.icon}
                </div>

                {/* Platform & handle */}
                <h3 className="font-display font-bold text-white text-base mb-0.5">{profile.platform}</h3>
                <p className="text-slate-500 text-xs font-mono mb-3">{profile.handle}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{profile.description}</p>

                {/* Stats badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${profile.badgeColor}`}>
                    {profile.stats}
                  </span>
                  {/* Arrow */}
                  <svg
                    className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
