import { useLanguage } from '../i18n/LanguageContext'

export default function Journey() {
  const { t } = useLanguage()
  const j = t.journey

  const statusClass = (s) => {
    if (s === 'completed') return 'journey__entry--done'
    if (s === 'ongoing') return 'journey__entry--ongoing'
    return 'journey__entry--horizon'
  }

  const tagClass = (s) => {
    if (s === 'completed') return 'tag tag--status'
    if (s === 'ongoing') return 'tag tag--signal'
    return 'tag journey__tag--explore'
  }

  return (
    <section id="journey" className="section journey">
      <div className="container journey__inner">
        <div className="journey__copy">
          <div data-reveal>
            <span className="eyebrow">{j.eyebrow}</span>
            <h2 className="journey__heading">{j.heading}</h2>
          </div>

          {j.sections.map((section, si) => (
            <div
              key={si}
              className="journey__section"
              data-reveal
              style={{ transitionDelay: `${si * 80}ms` }}
            >
              {section.label && (
                <span className="journey__section-label mono">{section.label}</span>
              )}
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="journey__p">{p}</p>
              ))}
            </div>
          ))}

          <p className="journey__closing mono" data-reveal>
            {j.closing}
          </p>
        </div>

        <aside className="journey__sidebar" data-reveal style={{ transitionDelay: '120ms' }}>
          <ul className="journey__log">
            {j.log.map((entry, i) => (
              <li className={`journey__entry ${statusClass(entry.status)}`} key={i}>
                <span className="journey__dot" aria-hidden="true" />
                <div className="journey__entry-body">
                  <span className={tagClass(entry.status)}>{entry.label}</span>
                  <p className="journey__text">{entry.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <style>{`
        .journey__inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: var(--space-5);
          align-items: start;
        }
        .journey__heading {
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          margin-block: 0.6rem var(--space-3);
          max-width: 22ch;
        }

        .journey__section {
          margin-bottom: 1.5rem;
        }
        .journey__section-label {
          display: block;
          font-size: 0.73rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent);
          margin-bottom: 0.6rem;
          opacity: 0.85;
        }
        html[dir='rtl'] .journey__section-label { text-transform: none; letter-spacing: 0; }

        .journey__p {
          color: var(--ink-soft);
          font-size: 1rem;
          max-width: 58ch;
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .journey__p:last-child { margin-bottom: 0; }

        .journey__closing {
          display: inline-block;
          margin-top: 0.6rem;
          padding: 0.65em 0.9em;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--ink);
        }

        /* Sidebar / log */
        .journey__sidebar {
          position: sticky;
          top: 5rem;
        }
        .journey__log {
          list-style: none;
          margin: 0;
          padding: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: var(--space-3);
        }
        .journey__entry {
          display: grid;
          grid-template-columns: 10px 1fr;
          gap: 0.85rem;
          padding-block: 0.9rem;
          border-bottom: 1px solid var(--border);
          align-items: start;
        }
        .journey__entry:first-child { padding-top: 0.2rem; }
        .journey__entry:last-child { border-bottom: none; padding-bottom: 0.2rem; }

        .journey__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 0.4rem;
          flex: none;
        }
        .journey__entry--done .journey__dot    { background: var(--status); }
        .journey__entry--ongoing .journey__dot { background: var(--signal); }
        .journey__entry--horizon .journey__dot {
          background: transparent;
          border: 1.5px solid var(--border-strong);
        }

        .journey__entry-body { display: flex; flex-direction: column; gap: 0.4rem; }

        .journey__tag--explore {
          display: inline-flex;
          align-items: center;
          padding: 0.3em 0.75em;
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          background: transparent;
          color: var(--ink-faint);
          border: 1px solid var(--border-strong);
        }

        .journey__text {
          font-size: 0.88rem;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.55;
        }
        .journey__entry--done .journey__text { color: var(--ink); }

        @media (max-width: 900px) {
          .journey__inner { grid-template-columns: 1fr; }
          .journey__sidebar { position: static; }
        }
      `}</style>
    </section>
  )
}
