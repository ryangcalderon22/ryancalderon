import { FadeIn } from './FadeIn'
import { useInView } from '../hooks/useInView'

const skills = [
  { label: 'Frontend development', pct: 95, cls: 'fill-fe' },
  { label: 'WordPress', pct: 90, cls: 'fill-wp' },
  { label: 'Web builder', pct: 88, cls: 'fill-wb' },
  { label: 'E-commerce', pct: 85, cls: 'fill-ec' },
]

const facts = [
  { num: '17+', label: 'years experience', color: '#EA4335' },
  { num: '50+', label: 'projects delivered', color: '#4285F4' },
  { num: '20+', label: 'happy clients', color: '#FBBC05' },
  { num: '4', label: 'specializations', color: '#34A853' },
]

function SkillBar({ label, pct, cls }) {
  const [ref, inView] = useInView()
  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-meta">
        <span>{label}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill ${cls}`}
          style={{
            width: inView ? `${pct}%` : '0%',
            transition: 'width 1.1s cubic-bezier(0.4,0,0.2,1) 0.2s',
          }}
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <FadeIn>
        <div className="section-eyebrow">who I am</div>
        <div className="section-title">About <em>me</em></div>
      </FadeIn>
      <div className="about-inner">
        <FadeIn direction="right" delay={100}>
          <div>
            <div className="about-avatar">
              <img src="/Ryan.png" alt="Ryan Calderon" />
            </div>
            <div className="about-name">Ryan Calderon</div>
            <div className="about-role">Web Developer · Philippines</div>
            <div className="about-bio">
              I'm a passionate web developer with 17+ years of experience building
              everything from pixel-perfect frontends to full e-commerce stores. I work closely
              with clients to understand their goals and deliver clean, fast, and scalable web solutions.
              <br /><br />
              With 50+ projects under my belt, I bring deep expertise across frontend development,
              WordPress, no-code builders, and e-commerce platforms — ready to take on your next project.
            </div>
            <div className="socials">
              <a href="https://github.com/ryangcalderon22" className="social-btn" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/ryangcalderon/" className="social-btn" target="_blank">LinkedIn</a>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={200}>
          <div>
            <div className="skills-label">skill level</div>
            {skills.map(s => <SkillBar key={s.label} {...s} />)}
            <div className="facts-grid">
              {facts.map((f, i) => (
                <FadeIn key={f.label} delay={300 + i * 80} direction="up">
                  <div className="fact">
                    <div className="fact-num" style={{ color: f.color }}>{f.num}</div>
                    <div className="fact-lbl">{f.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
