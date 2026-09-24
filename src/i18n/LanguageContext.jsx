import { createContext, useContext, useEffect, useState } from 'react'
import { content, languages } from './content'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('portfolio-lang') || 'en' } catch { return 'en' }
  })
  const t = content[lang] || content.en

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.meta.dir
    try { localStorage.setItem('portfolio-lang', lang) } catch {}
  }, [lang, t.meta.dir])

  const toggleLanguage = () => setLang(current => languages[(languages.indexOf(current) + 1) % languages.length])

  return <LanguageContext.Provider value={{ lang, t, setLang, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
