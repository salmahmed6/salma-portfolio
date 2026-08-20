import { useLanguage } from '../i18n/LanguageContext'

function ProjectCard({ item, index }) {
  return (
    <article
      className={`pcard${item.featured ? ' pcard--featured' : ''}`}
      data-reveal
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="pcard__inner">
        <span className="tag mono pcard__route">{item.tag}</span>
        <h3 className="pcard__title">{item.title}</h3>
        <p className="pcard__desc">{item.description}</p>

        <div className="pcard__stack">
          {item.stack.map((s) => (
            <span className="tag mono" key={s}>{s}</span>
          ))}
        </div>

        {(item.link || item.link2) && (
          <div className="pcard__links">
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer" className="pcard__link">
                {item.linkLabel} ↗
              </a>
            )}
            {item.link2 && (
              <a href={item.link2} target="_blank" rel="noreferrer" className="pcard__link">
                {item.link2Label} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="eyebrow">{p.eyebrow}</span>
          <h2 className="section__heading">{p.heading}</h2>
        </div>

        <div className="projects__grid">
          {p.items.map((item, i) => (
            <ProjectCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
        }

        /* Featured card spans full width */
        .pcard--featured {
          grid-column: 1 / -1;
        }

        .pcard {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: border-color 0.2s ease, transform 0.2s ease;
          overflow: hidden;
        }
        .pcard::before {
          content: '';
          display: block;
          height: 0;
          background: var(--accent);
          transition: height 0.2s ease;
        }
        .pcard:hover {
          border-color: var(--border-strong);
          transform: translateY(-3px);
        }
        .pcard:hover::before {
          height: 2px;
        }
        .pcard--featured::before {
          height: 2px;
          background: var(--accent);
        }
        .pcard--featured:hover::before {
          height: 2px;
        }

        .pcard__inner {
          padding: var(--space-3);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .pcard__route {
          align-self: flex-start;
          margin-bottom: 0.85rem;
        }

        .pcard__title {
          font-size: 1.18rem;
          margin-bottom: 0.65rem;
          line-height: 1.3;
        }
        .pcard--featured .pcard__title {
          font-size: 1.4rem;
        }

        .pcard__desc {
          color: var(--ink-soft);
          font-size: 0.96rem;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.1rem;
        }

        .pcard__stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.1rem;
        }

        .pcard__links {
          display: flex;
          gap: 1.2rem;
          margin-top: auto;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border);
        }

        .pcard__link {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent-ink);
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .pcard__link:hover {
          border-color: var(--accent-ink);
        }

        @media (max-width: 800px) {
          .projects__grid { grid-template-columns: 1fr; }
          .pcard--featured { grid-column: auto; }
        }
      `}</style>
    </section>
  )
}
