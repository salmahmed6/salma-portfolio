import { createContext, useContext, useEffect } from 'react'
import { content } from './content'

const LanguageContext = createContext(null)

// Arabic is disabled for now (English-only site). The full Arabic content
// still lives in ./content.js so it can be switched back on later --
// this just locks the app to English and ignores any stale language
// choice a visitor's browser may have saved from earlier testing.
const LOCKED_LANG = 'en'

export function LanguageProvider({ children }) {
  const t = content[LOCKED_LANG]

  useEffect(() => {
    document.documentElement.lang = LOCKED_LANG
    document.documentElement.dir = 'ltr'
    // clear any old saved language choice so it can never silently
    // switch the site to Arabic again
    try {
      localStorage.removeItem('portfolio-lang')
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang: LOCKED_LANG, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
