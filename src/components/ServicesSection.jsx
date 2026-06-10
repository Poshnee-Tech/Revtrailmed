import { Link } from 'react-router-dom'
import {
  ClipboardList, FlaskConical, CircleDollarSign,
  CalendarDays, UserCheck, FileCheck2, TrendingUp,
} from 'lucide-react'

const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const NAVY = '#0d2543'
const ICON_SIZE = 44
const ICON_PROPS = { size: ICON_SIZE, color: NAVY, strokeWidth: 1.6 }

function ToothIcon({ size = 44, color = NAVY }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44"
      fill="none" stroke={color} strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 6c-5 0-12 3.5-12 11 0 4.5 1.2 8 2.5 11.5L14 37c.3 2 1.2 3 2.5 3s2.2-1 2.5-3v-4c0-1.5.7-2 3-2s3 .5 3 2v4c.3 2 1.2 3 2.5 3s2.2-1 2.5-3l1.5-8.5C32.8 25 34 21.5 34 17c0-7.5-7-11-12-11z" />
    </svg>
  )
}

const SERVICES = [
  {
    icon: <ClipboardList {...ICON_PROPS} />,
    title: 'Medical Billing Services',
    desc: 'Maximize your revenue with our expert medical billing services.',
    to: '/medical-billing',
  },
  {
    icon: <FlaskConical {...ICON_PROPS} />,
    title: 'Clinical Lab Billing Services',
    desc: 'Streamline your lab billing process with our efficient and reliable Clinical Lab Billing services.',
    to: '/clinical-lab-billing',
  },
  {
    icon: <ToothIcon />,
    title: 'Dental Billing And Coding',
    desc: 'Simplify your dental billing and coding process with our accurate and cost-effective solutions.',
    to: '/dental-billing-coding',
  },
  {
    icon: <CircleDollarSign {...ICON_PROPS} />,
    title: 'Revenue Cycle Management',
    desc: 'We handle all aspects of the revenue cycle, from insurance claims processing to patient billing and follow-up.',
    to: '/revenue-cycle-management',
  },
  {
    icon: <CalendarDays {...ICON_PROPS} />,
    title: 'Appointment Scheduling',
    desc: 'We offer appointment scheduling, and patient registration.',
    to: '/appointment-scheduling',
  },
  {
    icon: <UserCheck {...ICON_PROPS} />,
    title: 'Verification Of Benefits',
    desc: 'We assist in verifying patient insurance coverage and benefits, ensuring accurate billing and reducing the risk of claim-denials.',
    to: '/verification-of-benefits',
  },
  {
    icon: <FileCheck2 {...ICON_PROPS} />,
    title: 'Authorization Services',
    desc: 'We offer a whole authorization process from the beginning to approval for the procedure and services.',
    to: '/authorization-services',
  },
  {
    icon: <TrendingUp {...ICON_PROPS} />,
    title: 'A/R Recovery Services',
    desc: 'Our team of experts will help you recover lost revenue by identifying and resolving outstanding claims.',
    to: '/ar-recovery-services',
  },
]

function ServiceCard({ icon, title, desc, to }) {
  const base = {
    background: '#fff',
    border: '1px solid #e4edf5',
    borderRadius: '12px',
    padding: '24px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    boxShadow: '0 4px 20px rgba(13, 37, 67, 0.08)',
    transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease',
    cursor: 'default',
  }
  return (
    <div
      style={base}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(13,37,67,0.18)'
        e.currentTarget.style.borderColor = '#1a78aa'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,37,67,0.08)'
        e.currentTarget.style.borderColor = '#d9e4ed'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <h3 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: '700',
        color: NAVY,
        lineHeight: '1.35',
        margin: 0,
        textAlign: 'center',
      }}>{title}</h3>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: '#374151',
        lineHeight: '1.65',
        margin: 0,
        flexGrow: 1,
        textAlign: 'center',
      }}>{desc}</p>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
        <Link to={to} style={{
          backgroundColor: NAVY,
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '50px',
          fontSize: '13px',
          fontWeight: '600',
          padding: '9px 26px',
          fontFamily: 'Inter, sans-serif',
          display: 'inline-block',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#162f5a')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = NAVY)}
        >
          Explore
        </Link>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#fff',
      overflow: 'hidden',
      paddingTop: '72px',
      paddingBottom: '80px',
    }}>
      {/* Decorative blob */}
      <div style={{
        position: 'absolute',
        left: '-90px', bottom: '-70px',
        width: '310px', height: '310px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 60%,#aad7ee,#d0ecf7)',
        opacity: 0.38,
        pointerEvents: 'none',
      }} />

      <div style={{ ...CONTAINER, position: 'relative' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '36px',
            fontWeight: '600',
            color: '#1a1a2e',
            letterSpacing: '-0.3px',
            marginBottom: '16px',
          }}>
            Our Services
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#374151',
            lineHeight: '1.75',
            maxWidth: '463px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            Revtrail Medical Billing Company is dedicated to helping healthcare
            providers streamline their billing process and increase revenue. Our
            services include:
          </p>
        </div>

        {/* 4-column card grid */}
        <div className="services-grid">
          {SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  )
}
