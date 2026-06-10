import { useState } from 'react'
import { Link } from 'react-router-dom'

const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const NAV_LINK = {
  fontSize: '15px',
  fontWeight: '400',
  color: '#0d2543',
  textDecoration: 'none',
  fontFamily: 'sans-serif',
  letterSpacing: '0.01em',
}

function ChevronDown({ style }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={style}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

const SERVICE_LINKS = [
  { label: 'Medical Billing',              to: '/medical-billing' },
  { label: 'Revenue Cycle Management',     to: '/revenue-cycle-management' },
  { label: 'Appointment Scheduling',       to: '/appointment-scheduling' },
  { label: 'Authorization Services',       to: '/authorization-services' },
  { label: 'A/R Recovery Services',        to: '/ar-recovery-services' },
  { label: 'Clinical Lab Billing Services',to: '/clinical-lab-billing' },
  { label: 'Dental Billing And Coding',    to: '/dental-billing-coding' },
  { label: 'Verification of Benefits',     to: '/verification-of-benefits' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false)
  const close = () => setTimeout(() => setOpen(false), 150)

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileSvcOpen(false)
  }

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}>

      {/* ── Main nav ── */}
      <nav style={{ backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(13,37,67,0.10)' }}>
        <div style={{
          ...CONTAINER,
          height: '82px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo.png" alt="revtrailMED" style={{ height: '60px', width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links-desktop">
            <Link to="/" style={{ ...NAV_LINK, fontWeight: '500' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a78aa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0d2543')}
            >Home</Link>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                style={{ ...NAV_LINK, display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1a78aa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#0d2543')}
              >
                <Link to="/services" style={{ ...NAV_LINK, textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1a78aa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#0d2543')}
                >Services</Link>
                <ChevronDown style={{ transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              {/* paddingTop bridges the gap — no marginTop so cursor stays inside wrapper */}
              <div style={{
                position: 'absolute', top: '100%', left: 0,
                paddingTop: '8px',
                width: '250px', zIndex: 100,
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transform: open ? 'translateY(0)' : 'translateY(-6px)',
                transition: 'opacity .18s ease, transform .18s ease, visibility .18s',
                pointerEvents: open ? 'auto' : 'none',
              }}>
                <div style={{
                  background: '#fff', borderRadius: '8px',
                  border: '1px solid #e5eaf2', padding: '6px 0',
                  boxShadow: '0 8px 28px rgba(13,37,67,0.13)',
                }}>
                  {SERVICE_LINKS.map(({ label, to }) => (
                    <Link key={label} to={to} style={{
                      display: 'block', padding: '10px 18px', fontSize: '14px',
                      color: '#0d2543', textDecoration: 'none',
                      fontFamily: 'sans-serif', fontWeight: '400',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f0f7fd'; e.currentTarget.style.color = '#1a78aa' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#0d2543' }}
                    >{label}</Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" style={NAV_LINK}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a78aa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0d2543')}
            >About Us</Link>

            <Link to="/contact" style={NAV_LINK}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a78aa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0d2543')}
            >Contact</Link>

            <a href="tel:+111111111" style={{
              background: 'linear-gradient(135deg, #0d2543 0%, #1a3f72 100%)',
              color: '#fff', textDecoration: 'none', borderRadius: '7px',
              fontSize: '14px', fontWeight: '600', padding: '11px 22px',
              whiteSpace: 'nowrap', fontFamily: 'sans-serif',
              display: 'inline-flex', alignItems: 'center',
              boxShadow: '0 3px 12px rgba(13,37,67,0.25)', letterSpacing: '0.02em',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #162f5a 0%, #0d2543 100%)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #0d2543 0%, #1a3f72 100%)')}
            >Call us: +1 (111) 11-111</a>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}>
          <Link to="/" className="nav-mobile-link" onClick={closeMobile}>Home</Link>

          {/* Services accordion */}
          <button
            onClick={() => setMobileSvcOpen(p => !p)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', padding: '12px 24px',
              fontFamily: 'sans-serif', fontSize: '15px', fontWeight: '400',
              color: '#0d2543', background: 'none', border: 'none',
              borderBottom: '1px solid #f3f4f6', cursor: 'pointer', textAlign: 'left',
            }}
          >
            Services
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: mobileSvcOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {mobileSvcOpen && (
            <div style={{ backgroundColor: '#f8fbff', borderBottom: '1px solid #f3f4f6' }}>
              {SERVICE_LINKS.map(({ label, to }) => (
                <Link key={label} to={to}
                  onClick={closeMobile}
                  style={{
                    display: 'block', padding: '10px 24px 10px 36px',
                    fontFamily: 'sans-serif', fontSize: '14px',
                    color: '#1a3f72', textDecoration: 'none',
                    borderBottom: '1px solid #eef2f7',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1a78aa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#1a3f72')}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/about" className="nav-mobile-link" onClick={closeMobile}>About Us</Link>
          <Link to="/contact" className="nav-mobile-link" onClick={closeMobile}>Contact</Link>
          <a href="tel:+111111111" className="nav-mobile-cta" onClick={closeMobile}>
            Call us: +1 (111) 11-111
          </a>
        </div>
      </nav>
    </header>
  )
}
