import { useState } from 'react'

const CONTAINER = {
  width: 'min(88%, 1060px)',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const LOGOS = [
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/1-1-1.webp',         alt: 'CareCloud' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/7-1.webp',           alt: 'SimplePractice' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/software-icons-9.webp', alt: 'Kareo' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/12-1.webp',          alt: 'Valant' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/11-1.webp',          alt: 'Partner' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/software-icons-2.webp', alt: 'Partner' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/4-1.webp',           alt: 'Partner' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/5-1-1.webp',         alt: 'Partner' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/6-1-1-1.webp',       alt: 'Partner' },
  { src: 'https://revtrailmed.com/wp-content/uploads/2023/07/software-icons-11.webp', alt: 'Partner' },
]

const PER_PAGE = 3

function ArrowBtn({ dir, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        border: '1px solid #d1d5db',
        background: disabled ? '#f9fafb' : '#fff',
        color: disabled ? '#d1d5db' : '#374151',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'default' : 'pointer',
        flexShrink: 0,
        transition: 'all .2s',
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.borderColor = '#0d2543' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db' }}
    >
      {dir === 'prev'
        ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
      }
    </button>
  )
}

export default function PartnersSection() {
  const [idx, setIdx] = useState(0)
  const canPrev = idx > 0
  const canNext = idx < LOGOS.length - PER_PAGE
  const visible = LOGOS.slice(idx, idx + PER_PAGE)

  return (
    <section style={{ backgroundColor: '#fff', paddingTop: '24px', paddingBottom: '28px' }}>
      <div style={{
        ...CONTAINER,
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}>
        <ArrowBtn dir="prev" onClick={() => setIdx(i => i - 1)} disabled={!canPrev} />

        <div className="partners-logo-grid">
          {visible.map((logo, i) => (
            <div key={idx + i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 12px',
              height: '260px',
            }}>
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: '240px',
                  width: '100%',
                  objectFit: 'contain',
                  opacity: 1,
                }}
              />
            </div>
          ))}
        </div>

        <ArrowBtn dir="next" onClick={() => setIdx(i => i + 1)} disabled={!canNext} />
      </div>
    </section>
  )
}
