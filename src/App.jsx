import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

const VISITOR_KEY = 'salma-portfolio-visitor-count'

function VisitorPopup() {
  const [number, setNumber] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const current = Number(localStorage.getItem(VISITOR_KEY) || '0')
      const next = Math.max(1, current + 1)
      localStorage.setItem(VISITOR_KEY, String(next))
      setNumber(next)
    } catch {
      setNumber(1)
    }
    const timer = window.setTimeout(() => setVisible(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible || number === null) return null

  return (
    <aside className="visitor-popup" role="status" aria-live="polite">
      <button className="visitor-popup__close" type="button" onClick={() => setVisible(false)} aria-label="Close">×</button>
      <span className="visitor-popup__label">YOU ARE VISITOR</span>
      <strong className="visitor-popup__number">{String(number).padStart(3, '0')}</strong>
      <span className="visitor-popup__caption">welcome to my corner of the internet.</span>
    </aside>
  )
}

export default function App() {
  const containerRef = useReveal()
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'dark' } catch { return 'dark' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch {}
  }, [theme])
  return (
    <div ref={containerRef}>
      <Nav theme={theme} onToggleTheme={() => setTheme(v => v === 'dark' ? 'light' : 'dark')} />
      <main><Hero /><About /><Education /><Experience /><Journey /><Projects /><Skills /><Contact /></main>
      <Footer /><StatusBar />
      <VisitorPopup />
    </div>
  )
}