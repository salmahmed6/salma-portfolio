import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const SPEED = 16
const LINE_GAP = 260

export default function Terminal({ lines }) {
  const { lang } = useLanguage()
  const [rendered, setRendered] = useState([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cancelled = false
    const timers = []

    if (prefersReduced) {
      setRendered(lines.map((l) => ({ cmd: l.cmd, out: l.out, cmdDone: true, outDone: true })))
      return
    }

    setRendered(lines.map(() => ({ cmd: '', out: '', cmdDone: false, outDone: false })))

    function typeSegment(lineIndex, field, text, onComplete) {
      let i = 0
      const id = setInterval(() => {
        i += 1
        if (cancelled) return clearInterval(id)
        setRendered((prev) => {
          const next = [...prev]
          next[lineIndex] = { ...next[lineIndex], [field]: text.slice(0, i) }
          return next
        })
        if (i >= text.length) {
          clearInterval(id)
          setRendered((prev) => {
            const next = [...prev]
            next[lineIndex] = { ...next[lineIndex], [`${field}Done`]: true }
            return next
          })
          onComplete()
        }
      }, SPEED)
      timers.push(id)
    }

    function runLine(index) {
      if (index >= lines.length || cancelled) return
      const { cmd, out } = lines[index]
      typeSegment(index, 'cmd', cmd, () => {
        const gapId = setTimeout(() => {
          typeSegment(index, 'out', out, () => {
            const nextGap = setTimeout(() => runLine(index + 1), LINE_GAP)
            timers.push(nextGap)
          })
        }, 180)
        timers.push(gapId)
      })
    }

    runLine(0)

    return () => {
      cancelled = true
      timers.forEach((id) => {
        clearInterval(id)
        clearTimeout(id)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <div className="terminal mono">
      <div className="terminal__chrome">
        <span className="terminal__dot terminal__dot--r" />
        <span className="terminal__dot terminal__dot--y" />
        <span className="terminal__dot terminal__dot--g" />
      </div>
      <div className="terminal__body">
        {rendered.map((line, i) => (
          <div className="terminal__line" key={i}>
            <span className="terminal__prompt">$</span>
            <span className="terminal__cmd">
              {line.cmd}
              {!line.cmdDone && <span className="terminal__caret" />}
            </span>
            {(line.cmdDone || line.outDone) && line.out !== '' && (
              <div className="terminal__out">
                {line.out}
                {line.cmdDone && !line.outDone && <span className="terminal__caret" />}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .terminal {
          background: var(--code-bg);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 20px 50px -25px rgba(18, 20, 26, 0.45);
        }
        .terminal__chrome {
          display: flex;
          gap: 0.4rem;
          padding: 0.7rem 0.9rem;
          border-bottom: 1px solid #23262F;
        }
        .terminal__dot { width: 9px; height: 9px; border-radius: 50%; }
        .terminal__dot--r { background: #E5544A; }
        .terminal__dot--y { background: #E5B93D; }
        .terminal__dot--g { background: #4FBF67; }
        .terminal__body {
          padding: 1.2rem 1.1rem 1.4rem;
          font-size: 0.86rem;
          line-height: 1.75;
        }
        .terminal__line { margin-bottom: 0.5rem; }
        .terminal__line:last-child { margin-bottom: 0; }
        .terminal__prompt {
          color: var(--code-status);
          margin-inline-end: 0.6em;
        }
        .terminal__cmd { color: var(--code-accent); }
        .terminal__out { color: var(--code-ink); padding-inline-start: 1.4em; }
        .terminal__caret {
          display: inline-block;
          width: 0.5em;
          height: 1em;
          margin-inline-start: 2px;
          background: var(--code-ink);
          vertical-align: text-bottom;
          animation: caret-blink 0.9s step-end infinite;
        }
        @keyframes caret-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .terminal__caret { display: none; }
        }
      `}</style>
    </div>
  )
}
