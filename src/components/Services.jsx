import { useEffect } from 'react'
import { FadeIn } from './FadeIn'

const services = [
  {
    icon: '⌨', iconClass: 'icon-fe', title: 'Frontend development',
    desc: 'Modern, responsive web apps with clean and maintainable code and great UX.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Mantine UI', 'REST API', 'GIT'],
  },
  {
    icon: 'W', iconClass: 'icon-wp', title: 'WordPress',
    desc: 'Custom themes from scratch, Figma to frontend, CPT, REST API, migrations and deployment, PHP, Woocommerce.',
    tags: ['Custom theme', 'PSD/Figma to WP', 'WP REST API', 'CPT', 'ACF', 'Migration & deployment', 'PHP', 'WooCommerce', 'Elementor'],
  },
  {
    icon: '⊞', iconClass: 'icon-wb', title: 'Web builder',
    desc: 'Fast, polished landing pages and full sites with leading no-code platforms.',
    tags: ['Elementor', 'Webflow', 'Duda', 'Framer'],
  },
  {
    icon: '🛒', iconClass: 'icon-ec', title: 'E-commerce',
    desc: 'Online stores built to convert, from setup to custom features and payment integrations.',
    tags: ['Shopify', 'WooCommerce', 'OpenCart'],
  },
]

export default function Services() {
  useEffect(() => {
    const equalize = () => {
      const cards = document.querySelectorAll('.scard')
      cards.forEach(c => { c.style.height = 'auto' })
      const maxH = Math.max(...Array.from(cards).map(c => c.offsetHeight))
      cards.forEach(c => { c.style.height = `${maxH}px` })
    }
    // Run after animations settle
    const t = setTimeout(equalize, 100)
    window.addEventListener('resize', equalize)
    return () => { clearTimeout(t); window.removeEventListener('resize', equalize) }
  }, [])

  return (
    <section id="services" className="section section-alt">
      <FadeIn>
        <div className="section-eyebrow">what I do</div>
        <div className="section-title">My <em>specializations</em></div>
      </FadeIn>
      <div className="services-grid">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 100} direction="up">
            <div className="scard">
              <div className='scard-header'>
                <div className={`scard-icon ${s.iconClass}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="tags">
                {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
