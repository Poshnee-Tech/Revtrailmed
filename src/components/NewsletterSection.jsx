import { useState } from 'react'
import { Mail } from 'lucide-react'

const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default function NewsletterSection() {
  const [name, setName]   = useState('')
  const [email, setEmail] = useState('')

  const inputStyle = {
    border: 'none',
    borderRadius: '50px',
    padding: '11px 20px',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    color: '#374151',
    outline: 'none',
    width: '100%',
    backgroundColor: '#fff',
  }

  return (
    <section style={{
      background: 'linear-gradient(120deg,#35b5ce 0%,#5ec8de 45%,#8dd8ea 100%)',
      paddingTop: '52px',
      paddingBottom: '52px',
    }}>
      <div style={{
        ...CONTAINER,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        flexWrap: 'wrap',
      }}>

        {/* ── Left: icon + text ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 340px' }}>
          {/* Icon circle */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#0d2543',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Mail size={26} color="#fff" strokeWidth={1.8} />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '6px',
            }}>
              Subscribe To Our Newsletter
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: '1.6',
              margin: 0,
            }}>
              Stay in touch with us to get latest news and special offers.
            </p>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div style={{ flex: '1 1 340px' }}>
          <div className="newsletter-form-row">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button
            style={{
              backgroundColor: '#0d2543',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: '600',
              padding: '11px 30px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#162f5a')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0d2543')}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}
