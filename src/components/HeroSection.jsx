const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

function HexBackground() {
  const hexPoints = (cx, cy, r) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
    }).join(' ')

  const hexes = [
    [-55, 190, 165], [-55, 400, 112],
    [95,  55, 108],  [120, 340, 120], [315, 190, 104], [445, 415, 90],
    [520, 50, 100],  [660, 305, 115], [765, 148, 90],
    [950, 65, 125],  [1025, 260, 140],
    [1135, 38, 100], [1185, 325, 110], [1300, 148, 135],
    [1420, 358, 112],[1475, 85, 142],  [1475, 278, 98],
    [1125, 435, 92], [1385, 455, 122], [60, 450, 102],
  ]
  const dots = [
    [160, 336, 5],  [1215, 295, 5.5],
    [415, 40, 4.5], [1065, 162, 5],
    [725, 425, 4.5],[1335, 40, 4.5], [300, 388, 4],
  ]

  return (
    <svg aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMid slice"
    >
      {hexes.map(([cx, cy, r], i) => (
        <polygon key={i} points={hexPoints(cx, cy, r)}
          fill="none" stroke="rgba(30,160,215,0.32)" strokeWidth="1.8" />
      ))}
      {dots.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="rgba(14,140,200,0.70)" />
      ))}
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(140deg, #85cfe9 0%, #aadff4 25%, #c6ecfb 52%, #daf4fd 76%, #edfafe 100%)',
    }}>
      <HexBackground />

      <div className="hero-row" style={{ ...CONTAINER, position: 'relative', zIndex: 10 }}>

        {/* ── Left: copy ── */}
        <div className="hero-left">
          <h1 className="hero-h1">
            Maximize Your Revenue With Our Proven Medical Billing Solutions
          </h1>

          <p className="hero-para">
            Our team of experienced medical billing experts utilizes cutting-edge
            technology to ensure maximum reimbursement and minimal denied claims
            for our clients.
          </p>

          <button
            style={{
              background: 'linear-gradient(135deg, #0d2543 0%, #1a3f72 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '15px',
              fontWeight: '600',
              padding: '14px 38px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 18px rgba(13,37,67,0.28)',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #162f5a 0%, #0d2543 100%)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #0d2543 0%, #1a3f72 100%)')}
          >
            Get Started
          </button>
        </div>

        {/* ── Right: doctor image ── */}
        <div className="hero-img-wrap">
          <img src="/images/hero1.webp" alt="Medical professional" />
        </div>
      </div>
    </section>
  )
}
