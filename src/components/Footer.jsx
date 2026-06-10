import { Link } from 'react-router-dom'

const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

function LogoImg() {
  return (
    <img src="/images/logo.png" alt="revtrailMED" style={{ height: '50px', width: 'auto', display: 'block' }} />
  )
}

function FacebookIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#1877f2"/>
      <path d="M20.5 13h-2c-.6 0-1 .4-1 1v2h3l-.4 3H17.5v8h-3v-8h-2v-3h2v-2c0-2.2 1.8-4 4-4h2.5v3z" fill="#fff" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#0077b5"/>
      <path d="M11 14h3v11h-3V14zm1.5-4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM16 14h3v1.5c.4-.8 1.5-1.7 3-1.7 3 0 3.5 2 3.5 4.5V25h-3v-6c0-1.5-.5-2.5-1.7-2.5-1.5 0-2.3 1-2.3 2.5V25h-3V14z" fill="#fff" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #e5e7eb' }}>

      {/* ── Main footer row ── */}
      <div style={{ ...CONTAINER }}>
        <div className="footer-row">

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LogoImg />
          </Link>

          {/* Nav links */}
          <div className="footer-nav">
            {[
              { label: 'About Us',       to: '/about' },
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'Services',       to: '/services' },
            ].map(({ label, to }, i, arr) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center' }}>
                <Link to={to} style={{
                  fontFamily: 'sans-serif', fontSize: '14px',
                  color: '#374151', textDecoration: 'none', fontWeight: '400',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0d2543')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
                >{label}</Link>
                {i < arr.length - 1 && (
                  <span style={{ margin: '0 12px', color: '#9ca3af', fontSize: '14px' }}>|</span>
                )}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', paddingBottom: '16px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9ca3af', margin: 0 }}>
          Copyright © 2026 RevTrail — Your Premier Medical Billing Company
        </p>
      </div>
    </footer>
  )
}
