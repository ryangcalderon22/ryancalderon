import { useState } from 'react'
import { FadeIn } from './FadeIn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/mjgqvggw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="contact-inner">
        <FadeIn direction="right">
          <div>
            <div className="section-eyebrow">get in touch</div>
            <div className="contact-tagline">
              Let's build<br />something <em>great</em><br />together.
            </div>
            <div className="contact-sub">
              Have a project in mind? I'd love to hear about it. Drop me a message
              and I'll get back to you within 24 hours.
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <span>✉</span>
                <a href="mailto:arcacalderon@gmail.com">arcacalderon@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>Philippines · remote worldwide</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={150}>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Service needed</label>
              <input
                className="form-input"
                type="text"
                placeholder="Frontend / WordPress / Web Builder / E-commerce"
                value={form.service}
                onChange={e => setForm({ ...form, service: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="form-submit" disabled={loading}>
              {loading ? 'Sending…' : sent ? '✓ Message sent!' : 'send message'}
            </button>
            {error && <p style={{ color: 'var(--red)', fontSize: '13px', marginTop: '8px' }}>{error}</p>}
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
