import { useEffect, useState } from 'react'

/**
 * Reports which section id is currently in view so the navbar can highlight
 * the matching link. Falls back to the first section when at the very top.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    // Sections occupying the most of the viewport band just under the header.
    const scores = new Map<string, number>()
    const bandTop = window.innerHeight * 0.28

    const measure = () => {
      scores.clear()
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        const visibleTop = Math.max(rect.top, 0)
        const visibleBottom = Math.min(rect.bottom, window.innerHeight)
        const visible = Math.max(0, visibleBottom - visibleTop)
        // Prefer the section that has crossed the band line.
        const weight = rect.top <= bandTop ? 2 : 1
        scores.set(section.id, visible * weight)
      }

      let bestId = sections[0].id
      let bestScore = -1
      for (const [id, score] of scores) {
        if (score > bestScore) {
          bestScore = score
          bestId = id
        }
      }
      setActive(bestId)
    }

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
