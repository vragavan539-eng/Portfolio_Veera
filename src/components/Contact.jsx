import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'veeraagavan@email.com',
    href: 'mailto:veeraagavan@email.com',
    color: 'violet',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
    color: 'cyan',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/veeraagavan',
    href: 'https://linkedin.com',
    color: 'blue',
  },
]

const colorMap = {
  violet: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1800))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-violet-900/8 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Let's work together</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white section-heading">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Have a project in mind or want to hire me? I'm always open to discussing exciting opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 reveal flex flex-col gap-5">
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-2">Let's Connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently open to full-time positions, internships, and freelance projects. If you have a great opportunity, let's talk!
              </p>
            </div>

            {contactInfo.map(info => (
              <div key={info.label} className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorMap[info.color]}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-slate-200 text-sm hover:text-violet-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div className="glass-bright rounded-2xl p-4 border border-green-500/20 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium text-sm">Currently Available</span>
              </div>
              <p className="text-slate-400 text-xs">Open to full-time roles, internships & freelance work. Response time: within 24 hours.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal">
            <div className="glass-bright rounded-2xl p-6 md:p-8 border border-white/8">
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Message Sent! 🎉</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Veera Ragavan"
                        className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="hello@example.com"
                        className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Project Inquiry"
                      className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full py-4 rounded-xl text-white font-display font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 12a9 9 0 11-6.219-8.56"/>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
