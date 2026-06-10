import { MapPin, Phone, Mail } from 'lucide-react'

const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const items = [
  {
    icon: <MapPin size={28} color="#22c55e" strokeWidth={2} />,
    label: 'Address',
    sub: '4609 Blackshear Trl. Plano, TX 75093-3392, United States',
  },
  {
    icon: <Phone size={28} color="#f97316" strokeWidth={2} />,
    label: 'Call Us',
    sub: '+1 (11) 111-111',
  },
  {
    icon: <Mail size={28} color="#ffffff" strokeWidth={2} />,
    label: 'Email Us',
    sub: 'info@revtrailmed.com',
  },
]

export default function ContactBar() {
  return (
    <section style={{ backgroundColor: '#0d2040', paddingTop: '44px', paddingBottom: '44px' }}>
      <div className="contact-grid" style={{ ...CONTAINER }}>
        {items.map(({ icon, label, sub }) => (
          <div key={label} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}>
            {icon}
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              color: '#ffffff',
            }}>
              {label}
            </span>
            {sub && (
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.80)',
              }}>
                {sub}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
