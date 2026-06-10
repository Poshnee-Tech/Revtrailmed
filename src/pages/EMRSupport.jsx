import Navbar from '../components/Navbar'
import NewsletterSection from '../components/NewsletterSection'
import ContactBar from '../components/ContactBar'
import Footer from '../components/Footer'

const CONTAINER = { width: 'min(88%, 1060px)', marginLeft: 'auto', marginRight: 'auto' }
const NAVY = '#0d2543'
const PARA = { fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.75' }

/* ── Inline SVG logo components ── */
function LogoTherapyNotes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="2" width="8" height="4" rx="1" fill="#f0a500" />
        <rect x="4" y="4" width="16" height="18" rx="2" stroke="#4caf50" strokeWidth="2" />
        <line x1="8" y1="11" x2="16" y2="11" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="15" x2="14" y2="15" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '17px', color: '#2e7d32' }}>TherapyNotes</span>
    </div>
  )
}

function LogoEClinicalWorks() {
  return (
    <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '400', fontSize: '20px', color: '#5b7fa6', letterSpacing: '-0.3px' }}>
      eClinicalWorks
    </span>
  )
}

function LogoSimplePractice() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#1976d2" />
        <polyline points="7 12 10 15 17 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ fontFamily: 'sans-serif', fontSize: '17px', color: '#1565c0' }}>
        <span style={{ fontWeight: '300' }}>simple</span><span style={{ fontWeight: '700' }}>practice</span>
      </div>
    </div>
  )
}

function LogoAdvancedMD() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 18 C4 18 8 4 12 4 C16 4 20 18 20 18" stroke="#e65100" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M7 14 L12 6 L17 14" stroke="#ff6d00" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '17px', color: '#bf360c' }}>AdvancedMD</span>
    </div>
  )
}

function LogoCareCloud() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M6 19a4 4 0 1 1 0-8 6 6 0 1 1 12 0 4 4 0 1 1 0 8z" stroke="#00897b" strokeWidth="1.8" fill="none" />
        <circle cx="16" cy="11" r="2.5" fill="#00897b" opacity="0.4" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '400', fontSize: '18px', color: '#00695c' }}>CareCloud</span>
    </div>
  )
}

function LogoKareo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M6 4 L6 20 M6 12 L16 4 M6 12 L16 20" stroke="#f57c00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '400', fontSize: '19px', color: '#e65100' }}>kareo</span>
    </div>
  )
}

function LogoRXNT() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="3" x2="12" y2="21" stroke="#e53935" strokeWidth="3" strokeLinecap="round" />
        <line x1="3" y1="12" x2="21" y2="12" stroke="#1565c0" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '800', fontSize: '20px', color: '#1a2a6c', letterSpacing: '0.04em' }}>RXNT</span>
    </div>
  )
}

function LogoValant() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 4 L12 20 L21 4" stroke="#e91e63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '400', fontSize: '19px', color: '#1a1a2e', letterSpacing: '0.05em' }}>vālant</span>
    </div>
  )
}

function LogoNextTech() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="#1e88e5" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="12" r="3" fill="#1e88e5" />
        <line x1="12" y1="2" x2="12" y2="9" stroke="#1e88e5" strokeWidth="1.4" />
        <line x1="22" y1="7" x2="15" y2="10.5" stroke="#1e88e5" strokeWidth="1.4" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '600', fontSize: '17px', color: '#1a237e' }}>NextTech</span>
    </div>
  )
}

function LogoAthenaHealth() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 C8 3 5 7 5 12 C5 17 8 21 12 21" stroke="#43a047" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M12 3 C16 3 19 7 19 12 C19 17 16 21 12 21" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M8 7 C10 5 14 5 16 7" stroke="#66bb6a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
      <div style={{ fontFamily: 'sans-serif', fontSize: '17px', color: '#1b5e20' }}>
        <span style={{ fontWeight: '700' }}>athena</span><span style={{ fontWeight: '300' }}>health</span>
      </div>
    </div>
  )
}

function LogoMediFusion() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#f44336" strokeWidth="1.6" fill="none" />
        <line x1="12" y1="6" x2="12" y2="18" stroke="#f44336" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="6" y1="12" x2="18" y2="12" stroke="#f44336" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <div style={{ fontFamily: 'sans-serif', fontSize: '17px', color: '#1a2a6c' }}>
        <span style={{ fontWeight: '700' }}>Medi</span><span style={{ fontWeight: '300' }}>Fusion</span>
      </div>
    </div>
  )
}

function LogoAllscripts() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="1" fill="#e53935" />
        <rect x="9" y="2" width="5" height="5" rx="1" fill="#fb8c00" />
        <rect x="16" y="2" width="5" height="5" rx="1" fill="#43a047" />
        <rect x="2" y="9" width="5" height="5" rx="1" fill="#1e88e5" />
        <rect x="9" y="9" width="5" height="5" rx="1" fill="#8e24aa" />
        <rect x="16" y="9" width="5" height="5" rx="1" fill="#00acc1" />
        <rect x="2" y="16" width="5" height="5" rx="1" fill="#fb8c00" />
        <rect x="9" y="16" width="5" height="5" rx="1" fill="#43a047" />
        <rect x="16" y="16" width="5" height="5" rx="1" fill="#e53935" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '600', fontSize: '17px', color: '#1a237e' }}>Allscripts</span>
    </div>
  )
}

function LogoPracticeFusion() {
  return (
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
  )
}

function LogoCerner() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M19 12 A7 7 0 1 1 12 5" stroke="#43a047" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M12 5 A7 7 0 0 1 19 12" stroke="#81c784" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
      <span style={{ fontFamily: 'sans-serif', fontWeight: '600', fontSize: '19px', color: '#1b5e20' }}>Cerner</span>
    </div>
  )
}

function LogoPrognoCIS() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#ff5722" opacity="0.15" />
        <path d="M7 17 L7 10 Q7 7 10 7 Q13 7 13 10 Q13 13 10 13 L7 13" stroke="#e64a19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="16" y1="7" x2="16" y2="17" stroke="#e64a19" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div style={{ fontFamily: 'sans-serif', fontSize: '15px', color: '#bf360c' }}>
        <span style={{ fontWeight: '700' }}>progno</span><span style={{ fontWeight: '400', color: '#e64a19' }}>CIS</span>
      </div>
    </div>
  )
}

function LogoICANotes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="#2e7d32" strokeWidth="1.8" fill="none" />
        <rect x="8" y="1" width="8" height="4" rx="1" fill="#2e7d32" />
        <line x1="8" y1="10" x2="16" y2="10" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="14" x2="16" y2="14" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="18" x2="12" y2="18" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div style={{ fontFamily: 'sans-serif', fontSize: '17px', color: '#1b5e20' }}>
        <span style={{ fontWeight: '800' }}>ICA</span><span style={{ fontWeight: '400' }}>Notes</span>
        <svg style={{ display: 'inline', marginLeft: '2px', verticalAlign: 'middle' }} width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12 L10 17 L19 7" stroke="#43a047" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function LogoMedisoft() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 18 Q8 6 12 12 Q16 18 20 6" stroke="#1565c0" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
      <div style={{ fontFamily: 'sans-serif', lineHeight: '1.15' }}>
        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0d47a1' }}>medisoft</div>
        <div style={{ fontWeight: '300', fontSize: '12px', color: '#1565c0' }}>clinical</div>
      </div>
    </div>
  )
}

function LogoCollaborateMD() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="9" r="4" stroke="#26a69a" strokeWidth="1.8" fill="none" />
        <circle cx="15" cy="15" r="4" stroke="#43a047" strokeWidth="1.8" fill="none" />
        <path d="M12 6 Q15 9 12 12" stroke="#26a69a" strokeWidth="1.4" fill="none" />
      </svg>
      <div style={{ fontFamily: 'sans-serif', fontSize: '16px' }}>
        <span style={{ fontWeight: '700', color: '#00695c' }}>Collaborate</span>
        <span style={{ fontWeight: '800', color: '#43a047' }}>MD</span>
      </div>
    </div>
  )
}

const SOFTWARES = [
  { name: 'eClinicalWorks',   logo: <LogoEClinicalWorks /> },
  { name: 'CollaborateMD',    logo: <LogoCollaborateMD /> },
  { name: 'TherapyNotes',     logo: <LogoTherapyNotes /> },
  { name: 'AdvancedMD',       logo: <LogoAdvancedMD /> },
  { name: 'CareCloud',        logo: <LogoCareCloud /> },
  { name: 'SimplePractice',   logo: <LogoSimplePractice /> },
  { name: 'kareo',            logo: <LogoKareo /> },
  { name: 'RXNT',             logo: <LogoRXNT /> },
  { name: 'välant',           logo: <LogoValant /> },
  { name: 'NextTech',         logo: <LogoNextTech /> },
  { name: 'athenahealth',     logo: <LogoAthenaHealth /> },
  { name: 'MediFusion',       logo: <LogoMediFusion /> },
  { name: 'Allscripts',       logo: <LogoAllscripts /> },
  { name: 'practicefusion',   logo: <LogoPracticeFusion /> },
  { name: 'Cerner',           logo: <LogoCerner /> },
  { name: 'prognoCIS',        logo: <LogoPrognoCIS /> },
  { name: 'ICANotes',         logo: <LogoICANotes /> },
  { name: 'medisoft',         logo: <LogoMedisoft /> },
]

export default function EMRSupport() {
  return (
    <div>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(120deg, #ede8e3 0%, #f2ebe5 30%, #f7ede8 60%, #fdf0ec 100%)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}>
        <div style={CONTAINER}>
          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '48px',
            fontWeight: '700',
            color: NAVY,
            marginBottom: '20px',
            lineHeight: '1.15',
            letterSpacing: '-0.5px',
          }}>
            EMR/EHR Support
          </h1>
          <p style={{ ...PARA, maxWidth: '520px', fontSize: '16px', lineHeight: '1.80', color: '#4b5563' }}>
            RevtrailMed medical billing experts are proficient at using all EHRs
            to help you improve the revenue cycle process.
          </p>
        </div>
      </section>

      {/* ── Software Grid ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '72px', paddingBottom: '80px' }}>
        <div style={CONTAINER}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{
              fontFamily: '"Georgia", sans-serif',
              fontSize: '36px',
              fontWeight: '300',
              color: NAVY,
              marginBottom: '14px',
              letterSpacing: '-0.3px',
            }}>
              EHR & Practice Management Systems We Support
            </h2>
            <p style={{ ...PARA, maxWidth: '520px', margin: '0 auto', color: '#6b7280' }}>
              Our team is trained and experienced across all major electronic health record
              platforms used in modern medical practices.
            </p>
          </div>

          <div className="svc-compat-grid" style={{ marginBottom: '0' }}>
            {SOFTWARES.map(({ name, logo }) => (
              <div key={name} style={{
                background: '#f5f6f8',
                border: '1px solid #e5e8ed',
                borderRadius: '14px',
                padding: '44px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '130px',
                transition: 'border-color .2s, box-shadow .2s, background .2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#c2d4e8'
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(13,37,67,0.11)'
                  e.currentTarget.style.background = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e8ed'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = '#f5f6f8'
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(140deg,#85cfe9 0%,#aadff4 25%,#c6ecfb 52%,#daf4fd 76%,#edfafe 100%)',
        paddingTop: '72px',
        paddingBottom: '72px',
      }}>
        <div style={{ ...CONTAINER, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: '"Georgia", sans-serif',
            fontSize: '36px',
            fontWeight: '300',
            color: NAVY,
            marginBottom: '16px',
          }}>
            We Work With Your Existing EHR System
          </h2>
          <p style={{ ...PARA, maxWidth: '480px', margin: '0 auto 32px', color: '#4a5568' }}>
            No need to switch software. Our billing experts adapt to your current EHR platform
            and handle the billing workflow end-to-end.
          </p>
          <a href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg,#0d2543,#1a3f72)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '15px',
            fontWeight: '600',
            padding: '14px 38px',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 4px 18px rgba(13,37,67,0.25)',
          }}>
            Get Started Today
          </a>
        </div>
      </section>

      <NewsletterSection />
      <ContactBar />
      <Footer />
    </div>
  )
}
