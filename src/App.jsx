import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const cursorDot = useRef(null)
  const cursorRing = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e
      if (cursorDot.current) {
        cursorDot.current.style.left = x + 'px'
        cursorDot.current.style.top = y + 'px'
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = x + 'px'
        cursorRing.current.style.top = y + 'px'
      }
    }

    const addHover = () => cursorRing.current?.classList.add('hovering')
    const removeHover = () => cursorRing.current?.classList.remove('hovering')

    document.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [loading])

  // Scroll reveal
  useEffect(() => {
    if (loading) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [loading])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative bg-void min-h-screen font-body">
      {/* Custom cursor */}
      <div ref={cursorDot} className="cursor-dot hidden md:block" />
      <div ref={cursorRing} className="cursor-ring hidden md:block" />

      {/* Global mesh background */}
      <div className="fixed inset-0 mesh-bg grid-pattern pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
