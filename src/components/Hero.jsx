import { useLanguage } from '../i18n/LanguageContext'
import Terminal from './Terminal'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">{h.eyebrow}</span>
          <h1 className="hero__name">{h.name}</h1>
          <p className="hero__role">{h.role}</p>
          <p className="hero__tagline">{h.tagline}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              {h.ctaPrimary}
            </a>
            <a href="#contact" className="btn btn--ghost">
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero__side">
          {/* <div className="hero__avatar">
            <img src="/salma.png" alt="Salma Ahmed" />
          </div> */}
          <Terminal lines={h.terminal} />
        </div>
      </div>

      <style>{`
        .hero {
          padding-block: calc(var(--space-6) + 2.5rem) var(--space-5);
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: var(--space-5);
          align-items: center;
        }
        .hero__copy { max-width: 46ch; }
        .hero__name {
          font-size: clamp(2.6rem, 6vw, 4.6rem);
          line-height: 1.02;
          margin-block: 0.5rem 0.15rem;
        }
        .hero__role {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          color: var(--accent-ink);
          margin-bottom: 1.1rem;
        }
        html[dir='rtl'] .hero__role { font-family: var(--font-arabic); font-weight: 700; }
        .hero__tagline {
          font-size: 1.08rem;
          color: var(--ink-soft);
          max-width: 42ch;
        }
        .hero__cta {
          display: flex;
          gap: 0.9rem;
          margin-top: 2.1rem;
          flex-wrap: wrap;
        }
        .hero__side {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .hero__avatar {
          width: 84px;
          height: 84px;
          border-radius: var(--radius-md);
          overflow: hidden;
          align-self: flex-start;
        }
        .hero__avatar img { width: 100%; height: 100%; object-fit: cover; }

        @media (max-width: 900px) {
          .hero__inner { grid-template-columns: 1fr; }
          .hero__copy { max-width: none; }
          .hero__side { order: -1; }
          .hero__avatar { display: none; }
        }
      `}</style>
    </section>
  )
}
