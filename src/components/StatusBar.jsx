import { useLanguage } from '../i18n/LanguageContext'
import { useClock } from '../hooks/useClock'

export default function StatusBar() {
  const { t } = useLanguage()
  const time = useClock()

  return (
    <div className="statusbar mono" role="status" aria-live="off">
      <div className="container statusbar__inner">
        <span className="statusbar__group">
          <span className="statusbar__dot" />
          {t.statusBar.prompt} {t.statusBar.status}
        </span>
        <span className="statusbar__group statusbar__group--right">
          <span>{t.statusBar.locationLabel}</span>
          <span className="statusbar__sep">·</span>
          <span className="statusbar__time">
            {time}
            <span className="statusbar__cursor">_</span>
          </span>
        </span>
      </div>

      <style>{`
        .statusbar {
          position: fixed;
          bottom: 0;
          inset-inline: 0;
          z-index: 40;
          background: var(--code-bg);
          color: var(--code-ink);
          font-size: 0.78rem;
          border-top: 1px solid #23262F;
        }
        .statusbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-block: 0.55rem;
          white-space: nowrap;
          overflow-x: auto;
        }
        .statusbar__group {
          display: inline-flex;
          align-items: center;
          gap: 0.5em;
          color: var(--code-status);
        }
        .statusbar__group--right {
          color: var(--code-faint);
        }
        .statusbar__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--code-status);
          box-shadow: 0 0 0 3px rgba(111, 221, 160, 0.15);
          flex: none;
        }
        .statusbar__sep { color: #3A4152; }
        .statusbar__time { color: var(--code-accent); letter-spacing: 0.02em; }
        .statusbar__cursor {
          display: inline-block;
          margin-inline-start: 2px;
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .statusbar__cursor { animation: none; }
        }
        @media (max-width: 560px) {
          .statusbar__inner { font-size: 0.72rem; }
        }
      `}</style>
    </div>
  )
}
