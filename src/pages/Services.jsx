import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NewsletterSection from '../components/NewsletterSection'
import ContactBar from '../components/ContactBar'
import Footer from '../components/Footer'
import {
  ClipboardList, FlaskConical, CircleDollarSign, CalendarDays,
  UserCheck, FileCheck2, TrendingUp, ShieldCheck, Clock, Award,
  HeartHandshake, CheckCircle2,
} from 'lucide-react'

const CONTAINER = { width: 'min(88%, 1060px)', marginLeft: 'auto', marginRight: 'auto' }
const NAVY = '#0d2543'
const PARA = { fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.75' }

/* ── shared icon SVG ── */
function ToothIcon({ size = 44, color = NAVY }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none"
      stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 6c-5 0-12 3.5-12 11 0 4.5 1.2 8 2.5 11.5L14 37c.3 2 1.2 3 2.5 3s2.2-1 2.5-3v-4c0-1.5.7-2 3-2s3 .5 3 2v4c.3 2 1.2 3 2.5 3s2.2-1 2.5-3l1.5-8.5C32.8 25 34 21.5 34 17c0-7.5-7-11-12-11z" />
    </svg>
  )
}

const ICON_PROPS = { size: 44, color: NAVY, strokeWidth: 1.6 }

const SERVICES = [
  { icon: <ClipboardList {...ICON_PROPS} />, title: 'Medical Billing Services',       desc: 'Maximize your revenue with our expert medical billing services. We handle the entire billing cycle so you can focus on patient care.',           to: '/medical-billing' },
  { icon: <FlaskConical {...ICON_PROPS} />,  title: 'Clinical Lab Billing Services',  desc: 'Streamline your lab billing process with our efficient and reliable Clinical Lab Billing services, reducing errors and increasing collections.',  to: '/clinical-lab-billing' },
  { icon: <ToothIcon />,                     title: 'Dental Billing And Coding',       desc: 'Simplify your dental billing and coding process with our accurate and cost-effective solutions tailored for dental practices.',                   to: '/dental-billing-coding' },
  { icon: <CircleDollarSign {...ICON_PROPS} />, title: 'Revenue Cycle Management',    desc: 'We handle all aspects of the revenue cycle, from insurance claims processing to patient billing and follow-up.',                                   to: '/revenue-cycle-management' },
  { icon: <CalendarDays {...ICON_PROPS} />,  title: 'Appointment Scheduling',         desc: 'We offer appointment scheduling and patient registration services to keep your practice running smoothly.',                                         to: '/appointment-scheduling' },
  { icon: <UserCheck {...ICON_PROPS} />,     title: 'Verification Of Benefits',        desc: 'We assist in verifying patient insurance coverage and benefits, ensuring accurate billing and reducing the risk of claim denials.',                 to: '/verification-of-benefits' },
  { icon: <FileCheck2 {...ICON_PROPS} />,    title: 'Authorization Services',          desc: 'We offer a whole authorization process from the beginning to approval for the procedure and services.',                                             to: '/authorization-services' },
  { icon: <TrendingUp {...ICON_PROPS} />,    title: 'A/R Recovery Services',           desc: 'Our team of experts will help you recover lost revenue by identifying and resolving outstanding claims.',                                           to: '/ar-recovery-services' },
]

const BENEFITS = [
  { icon: <ShieldCheck size={36} color={NAVY} strokeWidth={1.6} />, title: 'Accuracy Guaranteed',    desc: 'Our certified billers maintain a 99%+ claim accuracy rate, reducing denials and maximizing your reimbursements.' },
  { icon: <Clock size={36} color={NAVY} strokeWidth={1.6} />,       title: 'Faster Turnaround',       desc: 'Claims are submitted within 24 hours. Our streamlined workflow ensures you get paid as quickly as possible.' },
  { icon: <Award size={36} color={NAVY} strokeWidth={1.6} />,       title: 'Certified Experts',        desc: 'Our team holds industry certifications and stays current with the latest coding standards and payer regulations.' },
  { icon: <HeartHandshake size={36} color={NAVY} strokeWidth={1.6} />, title: 'Dedicated Support',   desc: 'You get a dedicated account manager who knows your practice and is always available to answer your questions.' },
]

const STEPS = [
  { num: '01', title: 'Patient Registration',      desc: 'We collect and verify patient demographics and insurance details upfront to prevent downstream errors.' },
  { num: '02', title: 'Insurance Verification',    desc: 'Real-time eligibility checks confirm coverage before the appointment, reducing claim denials.' },
  { num: '03', title: 'Claim Submission',           desc: 'Clean, accurate claims are submitted electronically within 24 hours of service.' },
  { num: '04', title: 'Payment & Reconciliation',  desc: 'We post payments, identify discrepancies, and follow up on underpaid or denied claims immediately.' },
]

function ServiceCard({ icon, title, desc, to }) {
  const base = {
    background: '#fff',
    border: '1px solid #e4edf5',
    borderRadius: '12px',
    padding: '28px 20px 22px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    boxShadow: '0 4px 20px rgba(13,37,67,0.08)',
    transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease',
  }
  return (
    <div style={base}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(13,37,67,0.18)'; e.currentTarget.style.borderColor = '#1a78aa' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,37,67,0.08)'; e.currentTarget.style.borderColor = '#e4edf5' }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '700', color: NAVY, lineHeight: '1.35', margin: 0, textAlign: 'center' }}>{title}</h3>
      <p style={{ ...PARA, fontSize: '13px', margin: 0, flexGrow: 1, textAlign: 'center' }}>{desc}</p>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
        <Link to={to} style={{ backgroundColor: NAVY, color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '13px', fontWeight: '600', padding: '9px 26px', fontFamily: 'Inter, sans-serif', display: 'inline-block' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#162f5a')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = NAVY)}
        >Explore</Link>
      </div>
    </div>
  )
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e4edf5',
      borderRadius: '14px',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '14px',
      boxShadow: '0 4px 20px rgba(13,37,67,0.07)',
      transition: 'transform .22s ease, box-shadow .22s ease',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(13,37,67,0.14)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,37,67,0.07)' }}
    >
      <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg,#eaf6fc,#d0ecf8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '17px', fontWeight: '600', color: NAVY, margin: 0 }}>{title}</h3>
      <p style={{ ...PARA, fontSize: '14px', margin: 0 }}>{desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <div>
      <Navbar />

      {/* ── Page Header ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '64px', paddingBottom: '56px', position: 'relative', overflow: 'hidden' }}>
        {/* decorative triangle — bottom left */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '220px', height: '270px', background: 'linear-gradient(135deg,#c2e8f6 0%,#daf3fb 100%)', clipPath: 'polygon(0 0,0 100%,100% 100%)', opacity: 0.65, pointerEvents: 'none' }} />
        {/* decorative triangle — top right */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '190px', background: 'linear-gradient(225deg,#d8f0f9 0%,#edf8fd 100%)', clipPath: 'polygon(0 0,100% 0,100% 100%)', opacity: 0.50, pointerEvents: 'none' }} />

        <div style={{ ...CONTAINER, position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '50px', fontWeight: '300', color: '#0d1f3c', lineHeight: '1.18', marginBottom: '22px', letterSpacing: '-0.5px' }}>
            Services
          </h1>
          <p style={{ ...PARA, lineHeight: '1.80', maxWidth: '720px' }}>
            Revtrail Medical Billing Company provides a comprehensive set of services to help healthcare providers
            streamline their billing process, increase revenue, and improve patient care. We work with advanced
            technology and experienced team of experts to provide the best possible service to our clients.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '20px', paddingBottom: '80px', position: 'relative' }}>
        <div style={CONTAINER}>
          <div className="services-grid">
            {SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '260px', height: '300px', background: 'linear-gradient(135deg,#c2e8f6,#daf3fb)', clipPath: 'polygon(0 0,0 100%,100% 100%)', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '240px', background: 'linear-gradient(225deg,#d8f0f9,#edf8fd)', clipPath: 'polygon(0 0,100% 0,100% 100%)', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ ...CONTAINER, position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '36px', fontWeight: '300', color: NAVY, marginBottom: '14px' }}>
              Why Choose RevTrail?
            </h2>
            <p style={{ ...PARA, maxWidth: '460px', margin: '0 auto' }}>
              We combine certified expertise with cutting-edge technology to deliver results that move your practice forward.
            </p>
          </div>
          <div className="services-grid">
            {BENEFITS.map(b => <BenefitCard key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: 'linear-gradient(140deg,#85cfe9 0%,#aadff4 25%,#c6ecfb 52%,#daf4fd 76%,#edfafe 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={CONTAINER}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '36px', fontWeight: '300', color: NAVY, marginBottom: '14px' }}>
              How It Works
            </h2>
            <p style={{ ...PARA, maxWidth: '440px', margin: '0 auto' }}>
              Our proven 4-step process ensures seamless billing from start to finish.
            </p>
          </div>
          <div className="services-grid">
            {STEPS.map((step, i) => (
              <div key={step.num} style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.9)', borderRadius: '14px', padding: '32px 22px', textAlign: 'center', boxShadow: '0 4px 20px rgba(13,37,67,0.09)' }}>
                <div style={{ fontFamily: '"Georgia", sans-serif', fontSize: '42px', fontWeight: '300', color: '#1a78aa', lineHeight: 1, marginBottom: '16px', opacity: 0.85 }}>{step.num}</div>
                <h3 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '17px', fontWeight: '600', color: NAVY, marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ ...PARA, fontSize: '14px', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: NAVY, paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={{ ...CONTAINER, textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '38px', fontWeight: '300', color: '#fff', marginBottom: '16px', letterSpacing: '-0.3px' }}>
            Ready To Maximize Your Revenue?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.80)', lineHeight: '1.75', maxWidth: '480px', margin: '0 auto 36px' }}>
            Join hundreds of healthcare providers who trust RevTrail to handle their billing so they can focus on patient care.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: 'linear-gradient(135deg,#1a78aa,#1a9cc8)', color: '#fff', border: 'none', borderRadius: '50px', fontSize: '15px', fontWeight: '600', padding: '14px 38px', cursor: 'pointer', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 18px rgba(26,120,170,0.40)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg,#1568a0,#1a78aa)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg,#1a78aa,#1a9cc8)')}
            >Get Started Today</button>
            <button style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.55)', borderRadius: '50px', fontSize: '15px', fontWeight: '600', padding: '14px 38px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)')}
            >Book a Demo</button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <ContactBar />
      <Footer />
    </div>
  )
}
