import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icons'
import { BOOKING_ANCHOR } from '@/data/navigation'
import './FloatingCTA.css'

/**
 * A discreet persistent "Book a Class" affordance. It appears once the hero is
 * behind you and steps aside entirely while the booking form is on screen, so
 * the CTA is always available without ever getting in the way.
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const booking = document.getElementById(BOOKING_ANCHOR)

    const update = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85
      let bookingOnScreen = false

      if (booking) {
        const rect = booking.getBoundingClientRect()
        bookingOnScreen = rect.top < window.innerHeight * 0.9 && rect.bottom > 0
      }

      setVisible(pastHero && !bookingOnScreen)
    }

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <a
      href={`#${BOOKING_ANCHOR}`}
      className={`floating-cta ${visible ? 'is-visible' : ''}`.trim()}
      aria-label="Book a Class"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="lotus" size={19} strokeWidth={1.6} />
      <span>Book a Class</span>
    </a>
  )
}

export default FloatingCTA
