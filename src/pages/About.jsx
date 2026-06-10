import Navbar from '../components/Navbar'
import NewsletterSection from '../components/NewsletterSection'
import ContactBar from '../components/ContactBar'
import Footer from '../components/Footer'

const CONTAINER = { width: 'min(88%, 1060px)', marginLeft: 'auto', marginRight: 'auto' }
const NAVY = '#0d2543'
const PARA = { fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.75' }

const FEATURES = [
  {
    dark: false,
    title: 'Qualified Staff',
    text: 'Our team consists of experienced and knowledgeable billing specialists who are well-versed in the complex world of medical billing. Our specialists have a deep understanding of the billing codes, insurance requirements, and payment processes that are critical to your practice\'s financial success. With our in-depth expertise, we are able to accurately manage your revenue cycle and maximize your collections.',
    img: '/images/2.jpg',
  },
  {
    dark: true,
    title: 'Patient Statements',
    text: 'We understand the importance of timely and effective communication with patients. That\'s why we utilize the latest technology and strategies to produce clear, concise, and customized patient statements that help increase patient payments. Our patient statements include detailed information about the services provided, insurance coverage, and patient responsibility, so patients have a clear understanding of their financial obligations.',
    img: '/images/3.jpg',
  },
  {
    dark: false,
    title: 'Eligibility Check',
    text: 'Our team of experts will verify insurance eligibility and coverage for each patient prior to their appointment, ensuring that you are fully reimbursed for the services you provide. By checking insurance eligibility in advance, we can avoid costly billing errors and ensure that your claims are processed quickly and accurately.',
    img: '/images/4.jpg',
  },
  {
    dark: true,
    title: 'Claim Scrubbing',
    text: 'Our claim scrubbing process thoroughly checks each claim for accuracy, completeness, and compliance with insurance requirements, reducing the risk of denied or delayed claims. Our experienced billing specialists review each claim for any potential errors, such as incorrect codes or missing information, and make the necessary corrections before submitting the claim to the insurance provider. This helps to speed up the claims process and increase the chances of timely payment.',
    img: '/images/5.jpg',
  },
  {
    dark: false,
    title: 'Data Privacy',
    text: 'We understand the importance of protecting sensitive patient information. That\'s why we implement strict data privacy measures and adhere to industry standards to ensure the security of your data. Our secure systems and procedures protect patient information from unauthorized access, theft, or loss, and we are committed to maintaining the confidentiality and privacy of your data.',
    img: '/images/6.jpg',
  },
]

function FeatureRow({ title, text, img, dark }) {
  const bg = dark ? NAVY : '#fff'
  const titleColor = dark ? '#fff' : NAVY
  const textColor = dark ? 'rgba(255,255,255,0.85)' : '#374151'

  return (
    <div style={{ backgroundColor: bg, paddingTop: '48px', paddingBottom: '48px' }}>
      <div style={CONTAINER} className="about-feature-row">
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{
            fontFamily: '"Georgia", sans-serif',
            fontSize: '28px',
            fontWeight: '400',
            color: titleColor,
            marginBottom: '16px',
            lineHeight: '1.3',
          }}>{title}</h2>
          <p style={{ ...PARA, color: textColor, margin: 0 }}>{text}</p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <img src={img} alt={title} className="about-feature-img" />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <Navbar />

      {/* ── Page Header — same style as Services ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '64px', paddingBottom: '56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '220px', height: '270px', background: 'linear-gradient(135deg,#c2e8f6,#daf3fb)', clipPath: 'polygon(0 0,0 100%,100% 100%)', opacity: 0.65, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '190px', background: 'linear-gradient(225deg,#d8f0f9,#edf8fd)', clipPath: 'polygon(0 0,100% 0,100% 100%)', opacity: 0.50, pointerEvents: 'none' }} />
        <div style={{ ...CONTAINER, position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '50px', fontWeight: '300', color: '#0d1f3c', lineHeight: '1.18', marginBottom: '22px', letterSpacing: '-0.5px' }}>
            About Us
          </h1>
          <p style={{ ...PARA, maxWidth: '720px', lineHeight: '1.80' }}>
            RevTrail Medical Billing Company is dedicated to providing top-notch revenue cycle management
            services to healthcare providers. Our team of experts has extensive experience in the healthcare
            industry and a deep understanding of the complex regulations and billing processes that can make
            managing revenue a challenge.
          </p>
        </div>
      </section>

      {/* ── Intro paragraphs ── */}
      <section style={{ backgroundColor: '#fff', paddingBottom: '56px' }}>
        <div style={CONTAINER}>
          <p style={{ ...PARA, marginBottom: '18px' }}>
            We offer a wide range of services, including claims management, insurance follow-up, and patient billing.
            Our goal is to help our clients maximize their revenue and reduce the burden of administrative tasks,
            so they can focus on providing the best possible care to their patients.
          </p>
          <p style={{ ...PARA }}>
            We pride ourselves on our commitment to customer service and our ability to work closely with our clients
            to understand their unique needs. Whether you're a small practice or a large hospital, we have the
            expertise and resources to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* ── Why Choose Us + Mission ── */}
      <section style={{ backgroundColor: '#fff', paddingBottom: '64px' }}>
        <div style={CONTAINER}>
          <div className="about-why-grid" style={{ gap: '0', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(13,37,67,0.10)' }}>
            {/* Left — Why Choose Us */}
            <div style={{ backgroundColor: '#eaf6fc', padding: '36px 32px' }}>
              <h3 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '22px', fontWeight: '600', color: NAVY, marginBottom: '16px' }}>
                Why Choose Us
              </h3>
              <p style={{ ...PARA, margin: 0 }}>
                At RevTrail Medical Billing Company, we are dedicated to providing comprehensive revenue cycle
                management, AR recovery services, and practice management solutions to medical practices.
                Below are a few reasons why you should choose us for your medical billing needs:
              </p>
            </div>
            {/* Right — Mission */}
            <div style={{ backgroundColor: NAVY, padding: '36px 32px' }}>
              <h3 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '22px', fontWeight: '600', color: '#fff', marginBottom: '16px' }}>
                Mission
              </h3>
              <p style={{ ...PARA, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                At RevTrail, we understand that managing revenue is essential to the success of any healthcare
                organization. That's why we're dedicated to providing the best possible service to our clients,
                and helping them navigate the ever-changing healthcare landscape. Contact us today to learn more
                about how we can help your organization succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature rows ── */}
      {FEATURES.map(f => <FeatureRow key={f.title} {...f} />)}

      <NewsletterSection />
      <ContactBar />
      <Footer />
    </div>
  )
}
