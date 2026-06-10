import Navbar from '../components/Navbar'
import ContactBar from '../components/ContactBar'
import Footer from '../components/Footer'

const CONTAINER = { width: 'min(88%, 1060px)', marginLeft: 'auto', marginRight: 'auto' }
const NAVY = '#0d2543'
const PARA = { fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: '1.85' }
const H2 = {
  fontFamily: '"Georgia", sans-serif',
  fontSize: '22px',
  fontWeight: '400',
  color: NAVY,
  marginBottom: '12px',
  marginTop: '0',
  lineHeight: '1.3',
}
const H3 = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  fontWeight: '700',
  color: NAVY,
  marginBottom: '8px',
  marginTop: '0',
}

function Section({ title, children }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e4edf5',
      borderRadius: '12px',
      padding: '32px 36px',
      boxShadow: '0 2px 12px rgba(13,37,67,0.06)',
    }}>
      <h2 style={H2}>{title}</h2>
      {children}
    </div>
  )
}

function P({ children, style }) {
  return <p style={{ ...PARA, margin: '0 0 14px', ...style }}>{children}</p>
}

function Ul({ items }) {
  return (
    <ul style={{ paddingLeft: '22px', margin: '0 0 14px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ ...PARA, marginBottom: '8px' }}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />

      {/* ── Page Header ── */}
      <section style={{ backgroundColor: '#fff', paddingTop: '64px', paddingBottom: '56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '220px', height: '270px', background: 'linear-gradient(135deg,#c2e8f6,#daf3fb)', clipPath: 'polygon(0 0,0 100%,100% 100%)', opacity: 0.65, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '190px', background: 'linear-gradient(225deg,#d8f0f9,#edf8fd)', clipPath: 'polygon(0 0,100% 0,100% 100%)', opacity: 0.50, pointerEvents: 'none' }} />
        <div style={{ ...CONTAINER, position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: '"Georgia", sans-serif', fontSize: '50px', fontWeight: '300', color: '#0d1f3c', lineHeight: '1.18', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            Privacy Policy
          </h1>
          <p style={{ ...PARA, color: '#6b7280', margin: 0 }}>
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: June 1, 2026
          </p>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section style={{ background: 'linear-gradient(135deg,#eaf6fc,#f0f9fd)', borderTop: '1px solid #d8eef8', borderBottom: '1px solid #d8eef8', paddingTop: '28px', paddingBottom: '28px' }}>
        <div style={CONTAINER}>
          <p style={{ ...PARA, margin: 0, maxWidth: '800px' }}>
            RevTrail Medical Billing Company ("RevTrail," "we," "our," or "us") is committed to protecting the privacy and
            confidentiality of the information you share with us. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or engage our medical billing services. Please read this
            policy carefully. By using our services or website, you agree to the practices described below.
          </p>
        </div>
      </section>

      {/* ── Policy sections ── */}
      <section style={{ backgroundColor: '#f8fbff', paddingTop: '60px', paddingBottom: '80px' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <Section title="1. Information We Collect">
            <P>We collect information in the following categories in order to provide our medical billing and revenue cycle management services:</P>
            <h3 style={H3}>a. Information You Provide Directly</h3>
            <Ul items={[
              'Contact details: name, email address, phone number, and mailing address.',
              'Practice information: healthcare provider name, specialty, National Provider Identifier (NPI), Tax ID, and insurance contracts.',
              'Patient billing data: patient demographics, insurance information, diagnosis and procedure codes, dates of service, and claim details.',
              'Communications: messages, inquiries, or feedback you send through our website contact form or email.',
            ]} />
            <h3 style={H3}>b. Information Collected Automatically</h3>
            <Ul items={[
              'Log and usage data: IP address, browser type, operating system, referring URLs, pages visited, and time spent on our website.',
              'Cookies and similar technologies: session cookies used to maintain your browsing session and preference cookies to remember your settings.',
              'Device information: device type, screen resolution, and unique device identifiers.',
            ]} />
            <h3 style={H3}>c. Information from Third Parties</h3>
            <Ul items={[
              'Information from insurance payers and clearinghouses necessary to process and adjudicate claims on your behalf.',
              'Publicly available information, such as NPI registry data, used to verify provider credentials.',
            ]} />
          </Section>

          <Section title="2. How We Use Your Information">
            <P>RevTrail uses the information we collect for the following purposes:</P>
            <Ul items={[
              'To provide, operate, and improve our medical billing and revenue cycle management services.',
              'To submit, track, and follow up on insurance claims and prior authorization requests on behalf of our clients.',
              'To communicate with you regarding your account, billing inquiries, service updates, or support requests.',
              'To comply with applicable federal and state laws, including the Health Insurance Portability and Accountability Act (HIPAA) and related regulations.',
              'To detect, prevent, and address fraudulent claims, security incidents, or other prohibited activities.',
              'To analyze website usage trends and improve the functionality and user experience of our website.',
              'To send you relevant information about our services where you have consented to receive such communications.',
            ]} />
            <P style={{ marginBottom: 0 }}>We do not sell your personal information or Protected Health Information (PHI) to third parties for marketing purposes.</P>
          </Section>

          <Section title="3. HIPAA Compliance and Protected Health Information">
            <P>
              RevTrail operates as a Business Associate under HIPAA when providing billing and revenue cycle services to Covered Entities
              (healthcare providers, health plans, and healthcare clearinghouses). As required by HIPAA:
            </P>
            <Ul items={[
              'We enter into a Business Associate Agreement (BAA) with every Covered Entity client prior to accessing any Protected Health Information (PHI).',
              'We implement appropriate administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of PHI.',
              'We use and disclose PHI only as permitted by HIPAA and the terms of our Business Associate Agreement.',
              'We maintain policies and procedures for breach notification and will notify affected Covered Entities of any breach of unsecured PHI in accordance with HIPAA requirements.',
              'We train our workforce on HIPAA privacy and security rules and enforce compliance through our internal policies.',
            ]} />
            <P style={{ marginBottom: 0 }}>
              Patient health information is never used for any purpose unrelated to the healthcare treatment, payment, or operations activities we perform on your behalf.
            </P>
          </Section>

          <Section title="4. How We Share Your Information">
            <P>We may share your information with the following categories of recipients, strictly as required to deliver our services:</P>
            <Ul items={[
              'Insurance payers and clearinghouses: to submit claims, verify eligibility, and process payments.',
              'Service providers: vendors and subcontractors who assist in operating our billing platform, data storage, IT infrastructure, and communications — all bound by confidentiality agreements.',
              'Regulatory and government authorities: when required by law, legal process, or government request, including reporting to the Office of Inspector General (OIG) or Centers for Medicare and Medicaid Services (CMS).',
              'Successor entities: in the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity subject to equivalent privacy protections.',
              'With your consent: for any other purpose where you have provided explicit written authorization.',
            ]} />
            <P style={{ marginBottom: 0 }}>We do not share, sell, rent, or trade your personal information or PHI with advertisers, data brokers, or unrelated third parties.</P>
          </Section>

          <Section title="5. Data Security">
            <P>
              We take the security of your information seriously. RevTrail employs industry-standard administrative, physical, and technical
              safeguards designed to protect your information against unauthorized access, disclosure, alteration, and destruction:
            </P>
            <Ul items={[
              'Data encryption in transit (TLS/SSL) and at rest using AES-256 encryption.',
              'Role-based access controls ensuring employees can only access data necessary for their job functions.',
              'Multi-factor authentication for all internal systems handling client or patient data.',
              'Regular security risk assessments and penetration testing.',
              'Audit logging of all access to systems containing PHI or sensitive client data.',
              'Employee training and background checks for all staff handling protected information.',
            ]} />
            <P style={{ marginBottom: 0 }}>
              While we implement robust security measures, no method of electronic transmission or storage is 100% secure.
              We encourage you to contact us immediately if you suspect any unauthorized access to your information.
            </P>
          </Section>

          <Section title="6. Data Retention">
            <P>
              We retain personal information and PHI for as long as necessary to fulfill the purposes described in this Privacy Policy,
              comply with our legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:
            </P>
            <Ul items={[
              'Medical billing records and PHI: retained for a minimum of 7 years from the date of service, or longer where required by state law or payer contracts.',
              'Business records and communications: retained for 6 years in accordance with HIPAA requirements.',
              'Website usage data: retained for up to 24 months for analytics and security purposes.',
            ]} />
            <P style={{ marginBottom: 0 }}>
              When information is no longer needed, we securely destroy or de-identify it in accordance with applicable law and our data destruction policies.
            </P>
          </Section>

          <Section title="7. Cookies and Tracking Technologies">
            <P>Our website uses the following types of cookies:</P>
            <Ul items={[
              'Strictly necessary cookies: required for the website to function and cannot be switched off. They are set in response to actions you take, such as filling in forms.',
              'Analytics cookies: help us understand how visitors interact with our website so we can improve the user experience. These cookies collect aggregated, anonymous data.',
              'Preference cookies: allow the website to remember choices you make (such as language or region) to provide a more personalized experience.',
            ]} />
            <P style={{ marginBottom: 0 }}>
              You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.
              We do not use cookies to serve targeted advertising.
            </P>
          </Section>

          <Section title="8. Your Rights and Choices">
            <P>Depending on your location and applicable law, you may have the following rights regarding your personal information:</P>
            <Ul items={[
              'Right of Access: request a copy of the personal information we hold about you.',
              'Right to Correction: request that we correct any inaccurate or incomplete information.',
              'Right to Deletion: request that we delete your personal information, subject to our legal retention obligations.',
              'Right to Restrict Processing: request that we limit how we use your information.',
              'Right to Data Portability: request that we provide your information in a structured, machine-readable format.',
              'Right to Opt Out: opt out of any marketing communications by clicking "unsubscribe" in any email or contacting us directly.',
            ]} />
            <P>
              For patients whose PHI we process, requests related to access, amendment, or accounting of disclosures should be directed
              to the Covered Entity (your healthcare provider). RevTrail will cooperate with such requests as required by HIPAA.
            </P>
            <P style={{ marginBottom: 0 }}>
              To exercise any of the rights above, please contact us using the details in the "Contact Us" section below.
              We will respond to verifiable requests within 30 days.
            </P>
          </Section>

          <Section title="9. Children's Privacy">
            <P style={{ marginBottom: 0 }}>
              Our website and services are not directed to individuals under the age of 18, and we do not knowingly collect personal
              information from children. If you believe a child has provided us with personal information, please contact us immediately
              and we will take steps to delete such information from our records.
            </P>
          </Section>

          <Section title="10. Third-Party Links">
            <P style={{ marginBottom: 0 }}>
              Our website may contain links to third-party websites, including payer portals, government resources, and partner platforms.
              RevTrail is not responsible for the privacy practices or content of those external sites. We encourage you to review the
              privacy policies of any third-party websites you visit.
            </P>
          </Section>

          <Section title="11. Changes to This Privacy Policy">
            <P style={{ marginBottom: 0 }}>
              We reserve the right to update this Privacy Policy at any time to reflect changes in our practices, legal requirements, or
              service offerings. When we make material changes, we will update the "Last Updated" date at the top of this page and, where
              appropriate, notify clients directly via email. Your continued use of our website or services after any changes constitutes
              your acceptance of the updated policy.
            </P>
          </Section>

          <Section title="12. Contact Us">
            <P>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact our Privacy Officer at:
            </P>
            <div style={{ background: '#f0f7fd', border: '1px solid #d0e8f5', borderRadius: '10px', padding: '24px 28px', display: 'inline-block' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '700', color: NAVY, margin: '0 0 8px' }}>RevTrail Medical Billing Company</p>
              <p style={{ ...PARA, margin: '0 0 4px' }}>4609 Blackshear Trl., Plano, TX 75093-3392</p>
              <p style={{ ...PARA, margin: '0 0 4px' }}>Email: <a href="mailto:info@revtrailmed.com" style={{ color: '#1a78aa', textDecoration: 'none' }}>info@revtrailmed.com</a></p>
              <p style={{ ...PARA, margin: 0 }}>Phone: <a href="tel:+111111111" style={{ color: '#1a78aa', textDecoration: 'none' }}>+1 (111) 11-111</a></p>
            </div>
          </Section>

        </div>
      </section>

      <ContactBar />
      <Footer />
    </div>
  )
}
