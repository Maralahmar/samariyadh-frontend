import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HeroIntroSection } from './components/HeroIntroSection'
import { ExperienceSection } from './components/ExperienceSection'
import { DiscoverSection } from './components/DiscoverSection'
import { Footer } from './components/Footer'
import { WhatsAppFab } from './components/WhatsAppFab'
import { MobileDock } from './components/MobileDock'
import { LegalDocumentPage } from './pages/LegalDocumentPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-28 md:pb-0">
        <HeroIntroSection />
        <ExperienceSection />
        <DiscoverSection />
        <Footer />
      </main>
      <WhatsAppFab />
      <MobileDock />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<LegalDocumentPage variant="privacy" />} />
        <Route path="/policies" element={<LegalDocumentPage variant="policies" />} />
      </Routes>
    </BrowserRouter>
  )
}
