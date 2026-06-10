import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NewsletterSection from '../components/NewsletterSection'
import ContactBar from '../components/ContactBar'
import Footer from '../components/Footer'
import { ShieldCheck, FileText, Clock } from 'lucide-react'

const CONTAINER = { width: 'min(88%, 1060px)', marginLeft: 'auto', marginRight: 'auto' }
const NAVY = '#0d2543'
const PARA = { fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.75' }

function HexBackground() {
  const hexPoints = (cx, cy, r) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
    }).join(' ')

  const hexes = [
    [-55, 190, 165], [-55, 400, 112],
    [95, 55, 108], [120, 340, 120], [315, 190, 104], [445, 415, 90],
    [520, 50, 100], [660, 305, 115], [765, 148, 90],
    [950, 65, 125], [1025, 260, 140],
    [1135, 38, 100], [1185, 325, 110], [1300, 148, 135],
    [1420, 358, 112], [1475, 85, 142], [1475, 278, 98],
    [1125, 435, 92], [1385, 455, 122], [60, 450, 102],
  ]
  const dots = [
    [160, 336, 5], [1215, 295, 5.5],
    [415, 40, 4.5], [1065, 162, 5],
    [725, 425, 4.5], [1335, 40, 4.5], [300, 388, 4],
  ]

  return (
    <svg aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
      {hexes.map(([cx, cy, r], i) => (
        <polygon key={i} points={hexPoints(cx, cy, r)}
          fill="none" stroke="rgba(30,160,215,0.30)" strokeWidth="1.8" />
      ))}
      {dots.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="rgba(14,140,200,0.65)" />
      ))}
    </svg>
  )
}

export default function AuthorizationServices() {
  return (
    <div>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(140deg, #85cfe9 0%, #aadff4 25%, #c6ecfb 52%, #daf4fd 76%, #edfafe 100%)',
      }}>
        <HexBackground />
        <div style={{ ...CONTAINER, position: 'relative', zIndex: 10, paddingTop: '48px', paddingBottom: '64px' }}>

          <h1 className="svc-page-title">
            Prior And Retro Authorization Services
          </h1>

          <div className="svc-hero-row">
            <div className="svc-hero-text">
              <h2 className="svc-hero-heading">
                To Avoid The Inconvenience Of Dealing With Payer
              </h2>
              <p style={{ ...PARA, color: '#4a5568', marginBottom: '32px', maxWidth: '420px' }}>
                A specialized pre-authorization staff means fewer cracks and a more streamlined
                billing system – meaning that your practice is better off.
              </p>
              <button
                style={{
                  background: 'linear-gradient(135deg, #0d2543 0%, #1a3f72 100%)',
                  color: '#fff', border: 'none', borderRadius: '50px',
                  fontSize: '15px', fontWeight: '600', padding: '14px 38px',
                  cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 18px rgba(13,37,67,0.28)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg,#162f5a,#0d2543)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg,#0d2543,#1a3f72)')}
              >
                Get Started
              </button>
            </div>

            <div className="svc-hero-img-wrap">
              <img src="/images/77.png" alt="Prior Authorization Services" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Section ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={CONTAINER} className="svc-info-row">

          <div className="svc-info-img-wrap">
            <img src="/images/11.png" alt="Authorization Services Dashboard" />
          </div>

          {/* Right: heading + paragraph + bullet list */}
          <div className="svc-info-text">
            <h2 style={{
              fontFamily: '"Georgia", sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              color: NAVY,
              lineHeight: '1.4',
              marginBottom: '16px',
            }}>
              Authorization Services Helps To Streamline Your Billing.
            </h2>
            <p style={{ ...PARA, marginBottom: '20px' }}>
              RevtrailMED offer authorization services assist hospitals, outpatient institutions,
              and physician practices in the following ways:
            </p>

            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'The entire pre-authorization procedure',
                'Obtain authorization from your insurance company for procedures and services that require prior approval.',
                'Any monitoring, for example, if further information is required for pre-certification from the physician.',
                'Requests for refusals if relevant.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ marginTop: '6px', width: '7px', height: '7px', borderRadius: '50%', background: NAVY, flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.75' }}>{item}</span>
                </li>
              ))}
            </ul>

            <button
              style={{
                backgroundColor: NAVY,
                color: '#fff', border: 'none', borderRadius: '50px',
                fontSize: '15px', fontWeight: '600', padding: '13px 36px',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 16px rgba(13,37,67,0.25)',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#162f5a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = NAVY)}
            >
              Request Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ── Key Features (3 cards) ── */}
      <section style={{ backgroundColor: '#f0f4f9', paddingTop: '80px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '240px', height: '300px', background: 'linear-gradient(135deg,#c8dff0,#daeaf8)', clipPath: 'polygon(0 0,0 100%,100% 100%)', opacity: 0.55, pointerEvents: 'none' }} />

        <div style={{ ...CONTAINER, position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 className="svc-section-heading">
              Key Features
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.75', maxWidth: '540px', margin: '0 auto' }}>
              Improve patient satisfaction through proactive communication and personalized appointment management.
            </p>
          </div>

          <div className="svc-features-grid">
            {[
              {
                icon: <ShieldCheck size={46} color={NAVY} strokeWidth={1.4} />,
                title: 'Hippaa-Compliant',
                desc: 'Our safe and HIPAA-compliant site provides regular updates.',
              },
              {
                icon: <FileText size={46} color={NAVY} strokeWidth={1.4} />,
                title: 'Streamlined Billing System',
                desc: 'System – meaning that your practice is better off.',
              },
              {
                icon: <Clock size={46} color={NAVY} strokeWidth={1.4} />,
                title: 'Save Time & Money',
                desc: 'Increases provider satisfaction through realtime-determinations and auto approvals.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: '#fff',
                borderRadius: '14px',
                padding: '36px 28px 32px',
                boxShadow: '0 4px 24px rgba(13,37,67,0.09)',
                border: '1px solid #e2eaf3',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'transform .22s ease, box-shadow .22s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 42px rgba(13,37,67,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(13,37,67,0.09)' }}
              >
                <div>{icon}</div>
                <h3 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '18px', fontWeight: '600', color: NAVY, lineHeight: '1.3', margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#374151', lineHeight: '1.70', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compatible Software ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={CONTAINER}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="svc-compat-heading">
              Compatible With Leading EHR Software
            </h2>
            <p style={{ ...PARA, maxWidth: '500px', margin: '0 auto', color: '#6b7280' }}>
              Our billing team is experienced with all major EHR and practice management systems
            </p>
          </div>

          <div className="svc-compat-grid">
            {[
              {
                name: 'TherapyNotes',
                logo: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <rect x="8" y="2" width="8" height="4" rx="1" fill="#f0a500" />
                      <rect x="4" y="4" width="16" height="18" rx="2" stroke="#4caf50" strokeWidth="2" />
                      <line x1="8" y1="11" x2="16" y2="11" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="8" y1="15" x2="14" y2="15" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '17px', color: '#2e7d32' }}>TherapyNotes</span>
                  </div>
                ),
              },
              {
                name: 'eClinicalWorks',
                logo: (
                  <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '400', fontSize: '20px', color: '#5b7fa6', letterSpacing: '-0.3px' }}>
                    eClinicalWorks
                  </span>
                ),
              },
              {
                name: 'SimplePractice',
                logo: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#1976d2" />
                      <polyline points="7 12 10 15 17 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div style={{ fontFamily: 'sans-serif', fontSize: '17px', color: '#1565c0' }}>
                      <span style={{ fontWeight: '300' }}>simple</span><span style={{ fontWeight: '700' }}>practice</span>
                    </div>
                  </div>
                ),
              },
              {
                name: 'Valant',
                logo: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M3 4 L12 20 L21 4" stroke="#e91e63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span style={{ fontFamily: 'sans-serif', fontWeight: '400', fontSize: '19px', color: '#1a1a2e', letterSpacing: '0.05em' }}>vālant</span>
                  </div>
                ),
              },
              {
                name: 'RXNT',
                logo: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <line x1="12" y1="3" x2="12" y2="21" stroke="#e53935" strokeWidth="3" strokeLinecap="round" />
                      <line x1="3" y1="12" x2="21" y2="12" stroke="#1565c0" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontFamily: 'sans-serif', fontWeight: '800', fontSize: '20px', color: '#1a2a6c', letterSpacing: '0.04em' }}>RXNT</span>
                  </div>
                ),
              },
              {
                name: 'Practice Fusion',
                logo: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="9" height="9" rx="2" fill="#1a78aa" />
                      <rect x="13" y="2" width="9" height="9" rx="2" fill="#0d2543" opacity="0.6" />
                      <rect x="2" y="13" width="9" height="9" rx="2" fill="#0d2543" opacity="0.6" />
                      <rect x="13" y="13" width="9" height="9" rx="2" fill="#1a78aa" opacity="0.4" />
                    </svg>
                    <div style={{ fontFamily: 'sans-serif', fontSize: '15px', color: '#1a2a6c', lineHeight: '1.2' }}>
                      <span style={{ fontWeight: '700' }}>practice</span>
                      <span style={{ fontWeight: '300', fontStyle: 'italic', fontSize: '14px' }}>fusion</span>
                      <span style={{ fontSize: '9px', verticalAlign: 'super', color: '#6b7280' }}>™</span>
                    </div>
                  </div>
                ),
              },
            ].map(({ name, logo }) => (
              <div key={name} style={{
                background: '#f5f6f8',
                border: '1px solid #e5e8ed',
                borderRadius: '12px',
                padding: '40px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '130px',
                transition: 'border-color .2s, box-shadow .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c2d4e8'; e.currentTarget.style.boxShadow = '0 6px 22px rgba(13,37,67,0.09)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e8ed'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Explore button */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/emr-ehr-support" style={{
              display: 'inline-block',
              background: 'transparent',
              color: NAVY,
              border: '1.5px solid #c0cedd',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: '600',
              padding: '12px 48px',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              transition: 'border-color .2s, background .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.background = '#f0f4f9' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#c0cedd'; e.currentTarget.style.background = 'transparent' }}
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '64px', paddingBottom: '64px', borderTop: '1px solid #eef2f7', borderBottom: '1px solid #eef2f7' }}>
        <div style={CONTAINER}>
          <div className="svc-stats-grid">

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                <path d="M4 38 C4 34 8 30 13 30 L22 30 L26 26 L33 30 L40 26 L44 30 L53 30 C58 30 62 34 62 38 L62 46 C62 52 57 56 51 56 L15 56 C9 56 4 52 4 46 Z"
                  stroke={NAVY} strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
                <path d="M26 26 L33 22 L40 26" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="48" cy="16" r="11" stroke={NAVY} strokeWidth="2" fill="white"/>
                <polyline points="43 16 46.5 20 53 13" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{ fontFamily: '"Georgia", sans-serif', fontSize: '34px', fontWeight: '700', color: NAVY, lineHeight: 1 }}>95%</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>First-Pass Acceptance Rate</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                <ellipse cx="28" cy="52" rx="18" ry="6" stroke={NAVY} strokeWidth="2"/>
                <path d="M10 52 L10 46" stroke={NAVY} strokeWidth="2"/>
                <path d="M46 52 L46 46" stroke={NAVY} strokeWidth="2"/>
                <ellipse cx="28" cy="46" rx="18" ry="6" stroke={NAVY} strokeWidth="2"/>
                <path d="M10 46 L10 40" stroke={NAVY} strokeWidth="2"/>
                <path d="M46 46 L46 40" stroke={NAVY} strokeWidth="2"/>
                <ellipse cx="28" cy="40" rx="18" ry="6" stroke={NAVY} strokeWidth="2"/>
                <path d="M28 36 L28 44 M24 38 C26 36 30 36 30 39 C30 42 24 42 24 45 C24 48 28 48 30 46" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M50 34 L50 10" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M42 18 L50 10 L58 18" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{ fontFamily: '"Georgia", sans-serif', fontSize: '34px', fontWeight: '700', color: NAVY, lineHeight: 1 }}>5-10%</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>Revenue Improvement</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                <line x1="33" y1="8" x2="33" y2="60" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M33 17 C29 11 19 11 18 17 C22 19 29 17 33 19" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M33 17 C37 11 47 11 48 17 C44 19 37 17 33 19" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M33 21 C25 25 24 31 33 33 C42 35 41 41 33 45 C26 48 25 54 30 57" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M33 21 C41 25 42 31 33 33 C24 35 25 41 33 45 C40 48 41 54 36 57" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </svg>
              <div style={{ fontFamily: '"Georgia", sans-serif', fontSize: '34px', fontWeight: '700', color: NAVY, lineHeight: 1 }}>100%</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>HIPAA Compliance</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                <circle cx="33" cy="14" r="7" stroke={NAVY} strokeWidth="2"/>
                <path d="M21 30 C21 22 27 20 33 20 C39 20 45 22 45 30" stroke={NAVY} strokeWidth="2" strokeLinecap="round" fill="none"/>
                <rect x="10" y="38" width="46" height="14" rx="7" stroke={NAVY} strokeWidth="2" fill="none"/>
                <line x1="33" y1="30" x2="33" y2="38" stroke={NAVY} strokeWidth="2"/>
                <path d="M17 28 C11 22 8 26 9 32" stroke={NAVY} strokeWidth="2" strokeLinecap="round" fill="none"/>
                <polyline points="9 32 13 27 15 33" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49 28 C55 22 58 26 57 32" stroke={NAVY} strokeWidth="2" strokeLinecap="round" fill="none"/>
                <polyline points="57 32 53 27 51 33" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{ fontFamily: '"Georgia", sans-serif', fontSize: '34px', fontWeight: '700', color: NAVY, lineHeight: 1 }}>99%</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>Customer Retention</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: NAVY, paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={{ ...CONTAINER, textAlign: 'center' }}>
          <h2 className="svc-cta-heading">
            Ready To Simplify Your Authorization Process?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.80)', lineHeight: '1.75', maxWidth: '460px', margin: '0 auto 36px' }}>
            Let RevTrail manage your prior and retro authorizations so your team can focus on delivering excellent patient care.
          </p>
          <div className="svc-cta-btns">
            <button style={{ background: 'linear-gradient(135deg,#1a78aa,#1a9cc8)', color: '#fff', border: 'none', borderRadius: '50px', fontSize: '15px', fontWeight: '600', padding: '14px 38px', cursor: 'pointer', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 18px rgba(26,120,170,0.40)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg,#1568a0,#1a78aa)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg,#1a78aa,#1a9cc8)')}
            >Get a Free Consultation</button>
            <button style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.55)', borderRadius: '50px', fontSize: '15px', fontWeight: '600', padding: '14px 38px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)')}
            >Learn More</button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <ContactBar />
      <Footer />
    </div>
  )
}
