import { useEffect, useState } from 'react'
import { useLanguage } from './i18n/LanguageContext'
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

function VisitorPopup({ number }) {
  const { t } = useLanguage()
  const v = t.visitor
  const [visible, setVisible] = useState(false)
  const [hiding, setHiding] = useState(false)
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (number === null) return
    setDisplayNumber(0)
    const duration = 1100
    const start = performance.now()
    let frame
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayNumber(Math.round(number * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    const showTimer = window.setTimeout(() => setVisible(true), 900)
    const hideTimer = window.setTimeout(() => setHiding(true), 6000)
    const removeTimer = window.setTimeout(() => setVisible(false), 6450)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(showTimer)
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [number])

  const close = () => {
    setHiding(true)
    window.setTimeout(() => setVisible(false), 450)
  }

  if (!visible || number === null) return null

  return (
    <aside className={\`visitor-popup \${hiding ? 'visitor-popup--hiding' : ''}\`} role="status" aria-live="polite">
      <button className="visitor-popup__close" type="button" onClick={close} aria-label={v.close}>×</button>
      <span className="visitor-popup__label">{v.label}</span>
      <strong className="visitor-popup__number">{String(displayNumber).padStart(3, '0')}</strong>
      <span className="visitor-popup__caption">{v.caption}</span>
    </aside>
  )
}

export default function App() {
  const containerRef = useReveal()
  const [visitorNumber, setVisitorNumber] = useState(null)
  useEffect(() => {
    fetch('/api/visitor', { credentials: 'include' })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('Visitor counter unavailable')))
      .then(({ count }) => setVisitorNumber(Number(count) || 0))
      .catch(() => setVisitorNumber(null))
  }, [])
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
      <Footer /><StatusBar visitorNumber={visitorNumber} />
      <VisitorPopup number={visitorNumber} />
    </div>
  )
}
