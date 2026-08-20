import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Nav() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the mobile panel automatically if the viewport grows back past
  // the mobile breakpoint (e.g. rotating a tablet, resizing a browser window)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const links = [
    ['about', t.nav.about],
    ['experience', t.nav.experience],
    ['journey', t.nav.journey],
    ['projects', t.nav.projects],
    ['skills', t.nav.skills],
    ['contact', t.nav.contact],
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__mark mono" aria-label="Go to top" onClick={closeMenu}>
          Salma<span className="nav__dot">.</span>
        </a>

        <nav className="nav__links" aria-label="Main navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="nav__link">
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* mobile dropdown panel */}
      <div className="nav__panel" id="mobile-nav-panel" hidden={!menuOpen}>
        <nav className="nav__panel-links" aria-label="Mobile navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="nav__panel-link" onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          inset-inline: 0;
          z-index: 40;
          padding-block: 1.25rem;
          transition:
            padding 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
          border-bottom: 1px solid transparent;
        }

        .nav--scrolled,
        .nav--open {
          padding-block: 0.85rem;
          background: rgba(14, 16, 22, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-color: var(--border);
        }

        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-width: 0;
        }

        .nav__mark {
          flex: 0 0 auto;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          padding: 0.3em 0.6em;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .nav__mark:hover { border-color: var(--ink-soft); }
        .nav__dot { color: var(--accent-ink); }

        .nav__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.75rem;
          min-width: 0;
          flex: 1;
          font-size: 0.92rem;
        }
        .nav__link { flex: 0 0 auto; color: var(--ink-soft); transition: color 0.15s ease; }
        .nav__link:hover { color: var(--ink); }
        .nav__link:focus-visible {
          outline: 2px solid var(--accent-ink);
          outline-offset: 4px;
          border-radius: 2px;
        }

        .nav__actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex: 0 0 auto;
        }

        .nav__burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          width: 40px;
          height: 40px;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          background: var(--surface);
        }
        .nav__burger span {
          display: block;
          width: 16px;
          height: 1.5px;
          background: var(--ink);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .nav--open .nav__burger span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .nav--open .nav__burger span:nth-child(2) { opacity: 0; }
        .nav--open .nav__burger span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        .nav__panel {
          display: none;
        }

        @media (max-width: 720px) {
          .nav__links { display: none; }
          .nav__burger { display: flex; }

          .nav__panel {
            display: block;
            max-height: calc(100vh - 64px);
            overflow-y: auto;
            border-top: 1px solid var(--border);
            background: rgba(14, 16, 22, 0.97);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
          }
          .nav__panel[hidden] { display: none; }

          .nav__panel-links {
            display: flex;
            flex-direction: column;
            padding: 0.5rem 1.25rem 1.5rem;
          }
          .nav__panel-link {
            padding-block: 0.9rem;
            font-size: 1.05rem;
            color: var(--ink-soft);
            border-bottom: 1px solid var(--border);
          }
          .nav__panel-link:last-child { border-bottom: none; }
          .nav__panel-link:active { color: var(--ink); }
        }

        @media (max-width: 480px) {
          .nav__inner { gap: 0.75rem; padding-inline: 0.85rem; }
          .nav__mark { font-size: 0.9rem; padding: 0.3em 0.55em; }
        }
      `}</style>
    </header>
  )
}
