import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Nav({ theme = 'dark', onToggleTheme = () => {} }) {
  const { t } = useLanguage()
  const [scrolled,setScrolled]=useState(false), [menuOpen,setMenuOpen]=useState(false)
  useEffect(()=>{const f=()=>setScrolled(scrollY>12);addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
  useEffect(()=>{document.body.style.overflow=menuOpen?'hidden':'';return()=>{document.body.style.overflow=''}},[menuOpen])
  const links=[['about',t.nav.about],['education',t.nav.education],['experience',t.nav.experience],['journey',t.nav.journey],['projects',t.nav.projects],['skills',t.nav.skills],['contact',t.nav.contact]]
  return <header className={`nav ${scrolled?'nav--scrolled':''} ${menuOpen?'nav--open':''}`}>
    <div className="container nav__inner">
      <a href="#top" className="nav__mark mono" onClick={()=>setMenuOpen(false)}>Salma<span className="nav__dot">.</span></a>
      <nav className="nav__links" aria-label="Main navigation">{links.map(([id,label])=><a key={id} href={`#${id}`} className="nav__link">{label}</a>)}</nav>
      <div className="nav__actions">
        <button type="button" className="theme-toggle mono" onClick={onToggleTheme} aria-label="Toggle theme">{theme==='dark'?'☼':'☾'} <span>{theme==='dark'?'light':'dark'}</span></button>
        <button type="button" className="nav__burger" onClick={()=>setMenuOpen(v=>!v)} aria-label="Toggle menu" aria-expanded={menuOpen}><span/><span/><span/></button>
      </div>
    </div>
    <div className="nav__panel" hidden={!menuOpen}><nav className="nav__panel-links">{links.map(([id,label])=><a key={id} href={`#${id}`} className="nav__panel-link" onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav></div>
    <style>{`.nav{position:fixed;top:0;inset-inline:0;z-index:40;padding-block:1.25rem;border-bottom:1px solid transparent;transition:.25s ease}.nav--scrolled,.nav--open{padding-block:.85rem;background:color-mix(in srgb,var(--bg) 90%,transparent);backdrop-filter:blur(14px);border-color:var(--border)}.nav__inner{display:flex;align-items:center;justify-content:space-between;gap:1rem}.nav__mark{font-size:1rem;font-weight:600;border:1px solid var(--border-strong);border-radius:var(--radius-sm);padding:.3em .6em}.nav__dot{color:var(--accent-ink)}.nav__links{display:flex;justify-content:center;gap:1.4rem;flex:1;font-size:.86rem}.nav__link{color:var(--ink-soft)}.nav__link:hover{color:var(--ink)}.nav__actions{display:flex;align-items:center;gap:.6rem}.theme-toggle{min-height:36px;padding:.4rem .7rem;border:1px solid var(--border-strong);border-radius:999px;background:var(--surface);color:var(--ink-soft);font-size:.74rem}.theme-toggle:hover{border-color:var(--accent-ink);color:var(--ink)}.nav__burger{display:none;width:40px;height:40px;border:1px solid var(--border-strong);border-radius:var(--radius-sm);background:var(--surface)}.nav__burger span{display:block;width:16px;height:2px;margin:3px auto;background:var(--ink)}.nav__panel{display:none}@media(max-width:720px){.nav__links{display:none}.nav__burger{display:block}.nav__panel{display:block;border-top:1px solid var(--border);background:var(--bg)}.nav__panel[hidden]{display:none}.nav__panel-links{display:flex;flex-direction:column;padding:.5rem 1rem 1.5rem}.nav__panel-link{padding:.9rem 0;border-bottom:1px solid var(--border);color:var(--ink-soft)}}@media(max-width:480px){.theme-toggle span{display:none}}`}</style>
  </header>
}
