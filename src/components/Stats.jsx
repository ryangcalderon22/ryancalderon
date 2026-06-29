import { FadeIn } from './FadeIn'

const stats = [
  { num: '17+', label: 'years experience', color: '#EA4335' },
  { num: '50+', label: 'projects delivered', color: '#4285F4' },
  { num: '100%', label: 'client satisfaction', color: '#34A853' },
]

export default function Stats() {
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <FadeIn key={s.label} delay={i * 100} direction="up">
          <div className="stat-item">
            <div className="stat-num" style={{ color: s.color }}>{s.num}</div>
            <div className="stat-lbl">{s.label}</div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
