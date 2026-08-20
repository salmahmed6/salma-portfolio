import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to every [data-reveal] element inside
 * the returned ref and adds "is-visible" once it enters the viewport.
 * Respects prefers-reduced-motion by doing nothing (CSS already shows
 * reveal elements at full opacity in that case).
 */
export function useReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !containerRef.current) return

    const els = containerRef.current.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return containerRef
}
