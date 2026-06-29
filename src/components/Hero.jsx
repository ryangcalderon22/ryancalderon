import { useEffect, useState } from 'react'
import { FadeIn } from './FadeIn'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  return (
    <section className="hero">
      {/* Geometric background */}
      <svg className="hero-geo" viewBox="0 0 700 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gr" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA4335" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#EA4335" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="gb" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4285F4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4285F4" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="gy" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBBC05" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FBBC05" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="gg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34A853" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#34A853" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon points="360,20 680,180 600,520 240,580 40,320 160,40" fill="url(#gr)" stroke="#EA4335" strokeWidth="0.5" strokeOpacity="0.22" />
        <polygon points="440,80 680,280 560,540 320,560 120,380 240,100" fill="none" stroke="#4285F4" strokeWidth="0.5" strokeOpacity="0.18" />
        <polygon points="400,160 620,300 540,500 300,520 180,360 280,180" fill="url(#gb)" stroke="#4285F4" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="570" cy="150" r="120" fill="none" stroke="#FBBC05" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="570" cy="150" r="80" fill="url(#gy)" stroke="#FBBC05" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="570" cy="150" r="22" fill="#FBBC05" fillOpacity="0.25" />
        <circle cx="320" cy="440" r="60" fill="url(#gg)" stroke="#34A853" strokeWidth="0.5" strokeOpacity="0.22" />
        <line x1="200" y1="60" x2="640" y2="540" stroke="#EA4335" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="120" y1="300" x2="680" y2="180" stroke="#4285F4" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="80" y1="500" x2="600" y2="80" stroke="#FBBC05" strokeWidth="0.4" strokeOpacity="0.08" />
        <circle cx="340" cy="310" r="4" fill="#EA4335" fillOpacity="0.55" />
        <circle cx="570" cy="380" r="3" fill="#4285F4" fillOpacity="0.45" />
        <circle cx="240" cy="180" r="3" fill="#FBBC05" fillOpacity="0.45" />
        <circle cx="480" cy="500" r="3" fill="#34A853" fillOpacity="0.4" />
        <circle cx="620" cy="280" r="2" fill="#EA4335" fillOpacity="0.3" />
      </svg>

      <div className="hero-content">
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          <div className="hero-badge">
            <span className="hero-dot" />
            Available for work
          </div>
        </div>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}
        >
          <h1>
            Building the web,<br />
            <em>one pixel</em><br />
            at a time.
          </h1>
        </div>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}
        >
          <p className="hero-sub">
            Web developer with 21+ years of experience based in the Philippines —
            specializing in frontend, WordPress, web builders, and e-commerce.
          </p>
        </div>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
          }}
        >
          <div className="hero-btns">
            <a href="#work" className="btn-primary">view my work</a>
            <a href="#contact" className="btn-outline">get in touch</a>
            <a href="/Ryan_Calderon_CV.pdf" download className="btn-outline">download CV ↓</a>
          </div>
        </div>
      </div>
    </section>
  )
}
