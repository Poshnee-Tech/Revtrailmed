import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import MedicalBilling from './pages/MedicalBilling'
import RevenueCycleManagement from './pages/RevenueCycleManagement'
import AppointmentScheduling from './pages/AppointmentScheduling'
import AuthorizationServices from './pages/AuthorizationServices'
import ARRecoveryServices from './pages/ARRecoveryServices'
import ClinicalLabBilling from './pages/ClinicalLabBilling'
import DentalBillingCoding from './pages/DentalBillingCoding'
import VerificationOfBenefits from './pages/VerificationOfBenefits'
import PrivacyPolicy from './pages/PrivacyPolicy'
import EMRSupport from './pages/EMRSupport'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medical-billing" element={<MedicalBilling />} />
        <Route path="/revenue-cycle-management" element={<RevenueCycleManagement />} />
        <Route path="/appointment-scheduling" element={<AppointmentScheduling />} />
        <Route path="/authorization-services" element={<AuthorizationServices />} />
        <Route path="/ar-recovery-services" element={<ARRecoveryServices />} />
        <Route path="/clinical-lab-billing" element={<ClinicalLabBilling />} />
        <Route path="/dental-billing-coding" element={<DentalBillingCoding />} />
        <Route path="/verification-of-benefits" element={<VerificationOfBenefits />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/emr-ehr-support" element={<EMRSupport />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
