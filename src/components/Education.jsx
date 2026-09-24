import { useLanguage } from '../i18n/LanguageContext'

export default function Education() {
  const { t } = useLanguage()
  const e = t.education
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section__head" data-reveal><span className="eyebrow">{e.eyebrow}</span><h2 className="section__heading">{e.heading}</h2></div>
        <div className="education__grid">
          {e.items.map((item,i)=><article className="education__card" key={item.institution} data-reveal style={{transitionDelay:i*90+'ms'}}>
            <div className="education__year mono">{item.period}</div>
            <div className="education__body">
              <div className="education__top"><div><span className="education__type mono">{item.type}</span><h3>{item.degree}</h3><p className="education__institution">{item.institution}</p></div><span className="education__grade tag tag--accent">{item.grade}</span></div>
              <p className="education__details">{item.details}</p>
              <div className="education__tags">{item.highlights.map(x=><span className="tag mono" key={x}>{x}</span>)}</div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  )
}