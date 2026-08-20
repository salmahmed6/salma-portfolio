import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="text-faint mono footer__text">{t.footer.text}</span>
        <a href="#top" className="text-faint mono footer__top">
          {t.footer.backToTop} ↑
        </a>
      </div>

      <style>{`
        .footer {
          padding-block: var(--space-3);
          margin-bottom: 2.8rem; /* keep clear of fixed status bar */
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.78rem;
          flex-wrap: wrap;
        }
        .footer__top:hover { color: var(--ink); }
      `}</style>
    </footer>
  )
}
