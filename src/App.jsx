import Nav from './components/Nav'
import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <StatusBar />
    </div>
  )
}
