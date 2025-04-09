import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import DetailedExplanations from "./components/DetailedExplanations"
import LeaderboardSection from "./components/LeaderboardSection"
import GrowthBlueprint from "./components/GrowthBlueprint"
import PricingSection from "./components/PricingSection"
import CertificateSection from "./components/CertificateSection"
import RewardsSection from "./components/RewardsSection"
import ReferralSection from "./components/ReferralSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <DetailedExplanations />
        <LeaderboardSection />
        <GrowthBlueprint />
        <PricingSection />
        <span className="text-black font-bold text-xl sm:text-2xl text-center sm:text-left block sm:ml-72 px-4 sm:px-0">
          Earn Brag-Worthy Certificate to Showcase Your Credibility
        </span>

        <CertificateSection />
        <RewardsSection />
      </div>
      <ReferralSection />
      <Footer />
    </div>
  )
}

export default App
