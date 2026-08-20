import { useLanguage } from '../i18n/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="section__heading">{s.heading}</h2>
        </div>

        <div className="skills__grid">
          {s.groups.map((group, i) => (
            <div
              className="skills__group card"
              key={group.title}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h3 className="skills__group-title mono">{group.title}</h3>
              <div className="skills__items">
                {group.items.map((item) => (
                  <span className="tag mono" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }
        .skills__group-title {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--ink-faint);
          margin-bottom: 0.9rem;
        }
        html[dir='rtl'] .skills__group-title { text-transform: none; }
        .skills__items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 900px) {
          .skills__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
