import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(c.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — ignore silently */
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card card" data-reveal>
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="contact__heading">{c.heading}</h2>
          <p className="contact__text">{c.text}</p>

          <div className="contact__row">
            <a href={`mailto:${c.email}`} className="btn btn--primary">
              {c.emailCta} ↗
            </a>
            <button type="button" className="btn btn--ghost mono" onClick={copyEmail}>
              {copied ? '✓' : c.email}
            </button>
          </div>

          <div className="contact__links">
            {c.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact__social mono">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact__card {
          padding: var(--space-4);
          text-align: center;
        }
        .contact__heading {
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          margin-block: 0.6rem 0.9rem;
        }
        .contact__text {
          color: var(--ink-soft);
          max-width: 52ch;
          margin-inline: auto;
        }
        .contact__row {
          display: flex;
          justify-content: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin-top: 1.8rem;
        }
        .contact__links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2.2rem;
          padding-top: 1.6rem;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
        }
        .contact__social {
          font-size: 0.85rem;
          color: var(--ink-soft);
          border-bottom: 1px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .contact__social:hover { color: var(--ink); border-color: var(--ink); }
      `}</style>
    </section>
  )
}
