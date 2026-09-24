import { createContext, useContext, useEffect, useState } from 'react'
import en from './en'
import ar from './ar'

const translations = { en, ar }
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('portfolio-lang') || 'en' } catch { return 'en' }
  })
  const t = translations[lang] || translations.en

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try { localStorage.setItem('portfolio-lang', lang) } catch {}
  }, [lang])

  const toggleLanguage = () => setLang(v => v === 'en' ? 'ar' : 'en')
  return <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
