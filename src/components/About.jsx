import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__label" data-reveal>
          <span className="eyebrow">{a.eyebrow}</span>
        </div>

        <div className="about__content">
          <h2 className="about__heading" data-reveal>
            {a.heading}
          </h2>
          <div className="about__paragraphs">
            {a.paragraphs.map((p, i) => (
              <p key={i} className="about__p" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about__inner {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: var(--space-4);
        }
        .about__heading {
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          line-height: 1.2;
          max-width: 22ch;
          margin-bottom: var(--space-3);
        }
        .about__paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          max-width: 62ch;
        }
        .about__p { color: var(--ink-soft); font-size: 1.02rem; }

        @media (max-width: 800px) {
          .about__inner { grid-template-columns: 1fr; gap: var(--space-2); }
        }
      `}</style>
    </section>
  )
}
