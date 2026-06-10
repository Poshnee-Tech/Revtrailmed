import { useState } from 'react'
import Navbar from '../components/Navbar'
import ContactBar from '../components/ContactBar'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const CONTAINER = { width: 'min(88%, 1060px)', marginLeft: 'auto', marginRight: 'auto' }
const NAVY = '#0d2543'
const PARA = { fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.75' }

const INPUT_BASE = {
  width: '100%',
  padding: '13px 16px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  color: '#374151',
  border: '1px solid #d1dce8',
  borderRadius: '8px',
  outline: 'none',
  backgroundColor: '#fff',
  transition: 'border-color .2s, box-shadow .2s',
}

function InfoCard({ icon, label, value, sub }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '16px',
      background: '#fff', border: '1px solid #e4edf5', borderRadius: '12px',
      padding: '22px 24px', boxShadow: '0 4px 16px rgba(13,37,67,0.07)',
    }}>
      <div style={{
        width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
        background: 'linear-gradient(135deg,#eaf6fc,#d0ecf8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>{label}</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '600', color: NAVY, margin: '0 0 2px', lineHeight: '1.4' }}>{value}</p>
        {sub && <p style={{ ...PARA, fontSize: '13px', margin: 0, color: '#6b7280' }}>{sub}</p>}
      </div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const focusStyle = e => {
    e.target.style.borderColor = '#1a78aa'
    e.target.style.boxShadow = '0 0 0 3px rgba(26,120,170,0.12)'
  }
  const blurStyle = e => {
    e.target.style.borderColor = '#d1dce8'
    e.target.style.boxShadow = 'none'
  }

  return (
    <div>
      <Navbar />

      {/* ── Page Header ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '64px', paddingBottom: '56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '220px', height: '270px', background: 'linear-gradient(135deg,#c2e8f6,#daf3fb)', clipPath: 'polygon(0 0,0 100%,100% 100%)', opacity: 0.65, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '190px', background: 'linear-gradient(225deg,#d8f0f9,#edf8fd)', clipPath: 'polygon(0 0,100% 0,100% 100%)', opacity: 0.50, pointerEvents: 'none' }} />
        <div style={{ ...CONTAINER, position: 'relative', zIndex: 1 }}>
          <h1 className="contact-h1">
            Contact Us
          </h1>
          <p style={{ ...PARA, maxWidth: '620px', lineHeight: '1.80' }}>
            Have a question or ready to get started? Our team is here to help. Reach out to us and
            we'll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* ── Main content: form + info ── */}
      <section style={{ backgroundColor: '#f8fbff', paddingTop: '64px', paddingBottom: '80px' }}>
        <div style={CONTAINER} className="contact-form-grid">

          {/* ── Contact Form ── */}
          <div className="contact-form-card">
            <h2 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '28px', fontWeight: '400', color: NAVY, marginBottom: '8px' }}>
              Send Us a Message
            </h2>
            <p style={{ ...PARA, fontSize: '14px', marginBottom: '28px', color: '#6b7280' }}>
              Fill out the form below and one of our billing specialists will contact you shortly.
            </p>

            {sent && (
              <div style={{ background: '#ecfdf5', border: '1px solid #6ee7b7', borderRadius: '8px', padding: '14px 18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px' }}>✓</span>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#065f46', margin: 0, fontWeight: '600' }}>
                  Message sent! We'll be in touch within one business day.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="contact-field-row">
                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Full Name *</label>
                  <input type="text" required placeholder="John Smith" value={form.name} onChange={set('name')}
                    style={INPUT_BASE} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Email Address *</label>
                  <input type="email" required placeholder="john@clinic.com" value={form.email} onChange={set('email')}
                    style={INPUT_BASE} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
              </div>

              <div className="contact-field-row">
                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={set('phone')}
                    style={INPUT_BASE} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Subject *</label>
                  <select required value={form.subject} onChange={set('subject')}
                    style={{ ...INPUT_BASE, cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: '36px' }}
                    onFocus={focusStyle} onBlur={blurStyle}>
                    <option value="">Select a subject</option>
                    <option>Medical Billing Services</option>
                    <option>Revenue Cycle Management</option>
                    <option>Clinical Lab Billing</option>
                    <option>Dental Billing & Coding</option>
                    <option>Verification of Benefits</option>
                    <option>Authorization Services</option>
                    <option>A/R Recovery Services</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Message *</label>
                <textarea required rows={5} placeholder="Tell us about your practice and how we can help..." value={form.message} onChange={set('message')}
                  style={{ ...INPUT_BASE, resize: 'vertical', minHeight: '130px' }}
                  onFocus={focusStyle} onBlur={blurStyle} />
              </div>

              <button type="submit" style={{
                background: 'linear-gradient(135deg, #0d2543 0%, #1a3f72 100%)',
                color: '#fff', border: 'none', borderRadius: '8px',
                fontSize: '15px', fontWeight: '600', padding: '14px 32px',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                display: 'flex', alignItems: 'center', gap: '10px',
                boxShadow: '0 4px 18px rgba(13,37,67,0.28)', width: 'fit-content',
                letterSpacing: '0.02em',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #162f5a 0%, #0d2543 100%)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #0d2543 0%, #1a3f72 100%)')}
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* ── Info cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'linear-gradient(135deg,#0d2543,#1a3f72)', borderRadius: '16px', padding: '32px 28px', marginBottom: '8px' }}>
              <h3 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '22px', fontWeight: '400', color: '#fff', marginBottom: '12px' }}>Get In Touch</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: '1.75', margin: 0 }}>
                We're available Monday through Friday to answer your questions and help you maximize your revenue.
              </p>
            </div>

            <InfoCard
              icon={<MapPin size={22} color={NAVY} strokeWidth={2} />}
              label="Our Office"
              value="4609 Blackshear Trl."
              sub="Plano, TX 75093-3392, United States"
            />
            <InfoCard
              icon={<Phone size={22} color={NAVY} strokeWidth={2} />}
              label="Call Us"
              value="+1 (111) 11-111"
              sub="Mon – Fri, 9 AM – 6 PM CST"
            />
            <InfoCard
              icon={<Mail size={22} color={NAVY} strokeWidth={2} />}
              label="Email Us"
              value="info@revtrailmed.com"
              sub="We reply within one business day"
            />
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section style={{ background: 'linear-gradient(140deg,#85cfe9 0%,#aadff4 30%,#c6ecfb 60%,#edfafe 100%)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{ ...CONTAINER, textAlign: 'center' }}>
          <h2 className="contact-cta-h2">
            Ready To Streamline Your Billing?
          </h2>
          <p style={{ ...PARA, maxWidth: '480px', margin: '0 auto 28px', color: '#4a5568' }}>
            Join hundreds of healthcare providers who trust RevTrail to handle their medical billing with precision.
          </p>
          <a href="tel:+111111111" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'linear-gradient(135deg,#0d2543,#1a3f72)',
            color: '#fff', textDecoration: 'none', borderRadius: '8px',
            fontSize: '15px', fontWeight: '600', padding: '14px 36px',
            fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 18px rgba(13,37,67,0.25)',
          }}>
            <Phone size={16} /> Call Us Now
          </a>
        </div>
      </section>

      <ContactBar />
      <Footer />
    </div>
  )
}
