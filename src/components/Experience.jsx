import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="eyebrow">{e.eyebrow}</span>
          <h2 className="section__heading">{e.heading}</h2>
        </div>

        <ol className="timeline">
          {e.items.map((item, i) => (
            <li
              className="timeline__item"
              key={item.company}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="timeline__marker">
                <span className="timeline__index mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="timeline__line" aria-hidden="true" />
              </div>

              <div className="timeline__body">
                <div className="timeline__top">
                  <h3 className="timeline__role">{item.role}</h3>
                  <span className="timeline__period mono">{item.period}</span>
                </div>
                <div className="timeline__meta text-soft">
                  {item.company} · {item.location}
                </div>
                <ul className="timeline__points">
                  {item.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .section__head { margin-bottom: var(--space-4); }
        .section__heading {
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          margin-top: 0.5rem;
          max-width: 26ch;
        }

        .timeline {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .timeline__item {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: var(--space-3);
        }
        .timeline__marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline__index {
          font-size: 0.78rem;
          color: var(--ink-faint);
          background: var(--surface);
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
        }
        .timeline__line {
          flex: 1;
          width: 1px;
          background: var(--border);
          margin-block: 0.5rem;
        }
        .timeline__item:last-child .timeline__line { display: none; }

        .timeline__body { padding-bottom: var(--space-4); }
        .timeline__top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .timeline__role { font-size: 1.2rem; }
        .timeline__period { color: var(--ink-faint); font-size: 0.82rem; white-space: nowrap; }
        .timeline__meta { margin-block: 0.35rem 0.85rem; font-size: 0.95rem; }
        .timeline__points {
          margin: 0;
          padding-inline-start: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          color: var(--ink-soft);
        }
        .timeline__points li { font-size: 0.97rem; }

        @media (max-width: 640px) {
          .timeline__item { grid-template-columns: 34px 1fr; gap: var(--space-2); }
        }
      `}</style>
    </section>
  )
}
