import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ContactSection } from "./components/ContactSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { DownloadSection } from "./components/DownloadSection";
import { TechnologySection } from "./components/TechnologySection";
import { HowItWorksSection } from "./components/HowItWorksSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TechnologySection />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
