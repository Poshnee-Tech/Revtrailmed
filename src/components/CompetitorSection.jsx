const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default function CompetitorSection() {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      paddingTop: '90px',
      paddingBottom: '0',
    }}>

      {/* Decorative polygon — bottom left */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '220px',
        height: '270px',
        background: 'linear-gradient(135deg,#c2e8f6 0%,#daf3fb 100%)',
        clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
        opacity: 0.65,
        pointerEvents: 'none',
      }} />

      {/* Decorative polygon — top right */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '180px',
        height: '210px',
        background: 'linear-gradient(225deg,#d8f0f9 0%,#edf8fd 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        opacity: 0.55,
        pointerEvents: 'none',
      }} />

      <div style={{ ...CONTAINER, position: 'relative', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '40px',
          fontWeight: '600',
          color: '#0d1f3c',
          lineHeight: '1.25',
          marginBottom: '20px',
          letterSpacing: '-0.3px',
        }}>
          Get One Step Ahead Of Competitors
        </h2>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          color: '#374151',
          lineHeight: '1.75',
          maxWidth: '540px',
          margin: '0 auto 36px',
        }}>
          Stay ahead of the curve by partnering with RevTrail Medical Billing Company
          and taking advantage of our innovative solutions and industry-leading expertise.
        </p>

        <button
          style={{
            backgroundColor: '#0d2543',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            fontSize: '15px',
            fontWeight: '600',
            padding: '13px 34px',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#162f5a')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0d2543')}
        >
          Book a demo
        </button>
      </div>
    </section>
  )
}
