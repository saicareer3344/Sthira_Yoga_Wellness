import { Icon } from '@/components/ui/Icons'
import Img from '@/components/ui/Img'
import Reveal from '@/components/ui/Reveal'
import { founder } from '@/data/trainers'
import './Founder.css'

export function Founder() {
  return (
    <section id="founder" className="section founder" aria-labelledby="founder-title">
      <span className="founder__ring founder__ring--a" aria-hidden="true" />
      <span className="founder__ring founder__ring--b" aria-hidden="true" />

      <div className="container founder__grid">
        <Reveal className="founder__media">
          <div className="founder__frame">
            <Img
              className="founder__img"
              src={founder.image}
              alt={founder.imageAlt}
              width={760}
              height={900}
            />
          </div>
          <span className="founder__badge" aria-hidden="true">
            <Icon name="sparkle" size={16} strokeWidth={1.5} />
            Founder
          </span>
        </Reveal>

        <div className="founder__body">
          <Reveal>
            <span className="eyebrow eyebrow--light">Meet Our Founder</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 id="founder-title" className="founder__name">
              {founder.name}
            </h2>
            <p className="founder__role">{founder.role}</p>
          </Reveal>

          <Reveal delay={160}>
            <p className="founder__intro">{founder.intro}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="founder__paras">
              {founder.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {founder.learnMoreLabel ? (
            <Reveal delay={320}>
              <a href={founder.learnMoreHref} className="founder__link">
                {founder.learnMoreLabel}
                <Icon name="arrow-right" size={17} strokeWidth={1.8} />
              </a>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Founder
