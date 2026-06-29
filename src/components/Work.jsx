import { FadeIn } from './FadeIn'

const projects = [
  {
    title: 'Carlie Talk',
    desc: 'Project management SPA with real-time updates, drag-and-drop boards, and REST API integration.',
    cat: 'Frontend', catClass: 'cat-fe',
    tags: ['React', 'Tailwind CSS', 'Mantine UI', 'REST API'],
    url: 'https://charlie-talk-frontend.vercel.app/',
    bg: '#0d0d1a',
    thumb: (
      <img src='./portfolio/ctalk.png' alt="Carlie Talk" />
    ),
  },
  {
    title: 'Aldenmoor University',
    desc: 'Custom WordPress theme from Figma, custom post types, and WP Meta Box.',
    cat: 'WordPress', catClass: 'cat-wp',
    tags: ['WordPress', 'PHP', 'Figma to WP'],
    url: 'https://aldenmoor.ryancalderon.me/',
    bg: '#0a150a',
    thumb: (
      <img src='./portfolio/aldenmoor.png' alt="Aldenmoor" />
    ),
  },
  {
    title: 'Eastern University',
    desc: 'Custom WordPress theme from PSD, custom post types, advanced custom field, live search, and WP Rest API.',
    cat: 'WordPress', catClass: 'cat-wp',
    tags: ['WordPress', 'PHP', 'WP Rest API'],
    url: 'https://eastern-university.ryancalderon.me/',
    bg: '#0a150a',
    thumb: (
      <img src='./portfolio/eastern.png' alt="Eastern" />
    ),
  },
  {
    title: 'Melee Express',
    desc: 'Opencart store with custom theme, product filters, upsell logic, and checkout optimization.',
    cat: 'E-commerce', catClass: 'cat-ec',
    tags: ['Opencart', 'PHP', 'JavaScript'],
    url: 'https://melee-express.com',
    bg: '#150a0a',
    thumb: (
      <img src='./portfolio/melee.png' alt="Melee Express" />
    ),
  },
  {
    title: 'Serenade At Park Central',
    desc: 'High-converting agency landing page in Duda Web Builder with scroll animations and lead capture.',
    cat: 'Web Builder', catClass: 'cat-wb',
    tags: ['Duda', 'CMS', 'Animation'],
    url: 'https://www.serenadeabq.com/',
    bg: '#141008',
    thumb: (
      <img src='./portfolio/serenade.png' alt="Serenade At Park Central" />
    ),
  },
  {
    title: 'Art In The Park',
    desc: 'Custom WordPress theme from psd, custom post types',
    cat: 'WordPress', catClass: 'cat-wp',
    tags: ['WordPress', 'PHP'],
    url: 'https://artinthepark.ph/',
    bg: '#0a150a',
    thumb: (
      <img src='./portfolio/art-in-the-park.png' alt="Art In The Park" />
    ),
  },
  {
    title: 'RC Hospitality',
    desc: 'Custom Framer design, interactive website, custom animations',
    cat: 'Web Builder', catClass: 'cat-wb',
    tags: ['Framer', 'Animation'],
    url: 'https://exhilarated-wonders-550182.framer.app/',
    bg: '#0a150a',
    thumb: (
      <img src='./portfolio/rc.png' alt="RC Hospitality" />
    ),
  },
  {
    title: 'RC Hospitality',
    desc: 'Custom Framer design, interactive website, custom animations',
    cat: 'Web Builder', catClass: 'cat-wb',
    tags: ['Webflow', 'Animation'],
    url: 'https://ryans-webflow-website.webflow.io/',
    bg: '#0a150a',
    thumb: (
      <img src='./portfolio/webflow.png' alt="Webflow" />
    ),
  },
]

export default function Work() {
  return (
    <section id="work" className="section">
      <FadeIn>
        <div className="work-header">
          <div>
            <div className="section-eyebrow">portfolio</div>
            <div className="section-title" style={{ marginBottom: 0 }}>Selected <em>work</em></div>
          </div>
        </div>
      </FadeIn>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 80} direction="up">
            <div className="pcard">
              <div className="pcard-thumb" style={{ background: p.bg }}>
                {p.thumb}
                <span className={`pcard-cat ${p.catClass}`}>{p.cat}</span>
              </div>
              <div className="pcard-body">
                <div className="pcard-title">{p.title}</div>
                <div className="pcard-desc">{p.desc}</div>
                <div className="pcard-footer">
                  <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="pcard-link">↗</a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
