import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-void flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-violet-600/10 blur-3xl animate-pulse" />
      </div>

      {/* Logo mark */}
      <div className="relative mb-10">
        <div className="w-20 h-20 rounded-2xl glass-bright flex items-center justify-center border border-violet-500/30 glow-violet">
          <span className="font-display font-bold text-3xl gradient-text">VR</span>
        </div>
        {/* Orbiting dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border border-violet-500/20 border-dashed animate-spin"
               style={{ animationDuration: '4s' }}>
            <div className="w-2 h-2 rounded-full bg-cyan-400 absolute -top-1 left-1/2 -translate-x-1/2 shadow-lg"
                 style={{ boxShadow: '0 0 10px #22d3ee' }} />
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="font-display font-bold text-2xl text-white mb-1 tracking-wide">
        Veera Ragavan
      </h1>
      <p className="text-slate-400 text-sm mb-10 tracking-[0.2em] uppercase">MERN Stack Developer</p>

      {/* Progress bar */}
      <div className="w-64 h-0.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)'
          }}
        />
      </div>
      <p className="text-slate-600 text-xs mt-3 font-mono">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  )
}
