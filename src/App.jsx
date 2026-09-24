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
    </div>
  )
}