import Navbar            from '../components/Navbar'
import HeroSection       from '../components/HeroSection'
import ServicesSection   from '../components/ServicesSection'
import CompetitorSection from '../components/CompetitorSection'
import PartnersSection   from '../components/PartnersSection'
import NewsletterSection from '../components/NewsletterSection'
import ContactBar        from '../components/ContactBar'
import Footer            from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CompetitorSection />
        <PartnersSection />
      </main>
      <NewsletterSection />
      <ContactBar />
      <Footer />
    </div>
  )
}
