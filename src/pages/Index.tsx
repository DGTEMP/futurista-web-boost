import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import ProposalGenerator from '@/components/ProposalGenerator';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import InactivityPopup from '@/components/InactivityPopup';
import RapidScrollPopup from '@/components/RapidScrollPopup';
import DynamicBlocks from '@/components/DynamicBlocks';
import { useProtection } from '@/hooks/useProtection';

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  useProtection();

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen">
      <DynamicBlocks />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <ProposalGenerator />
      <Footer />
      <InactivityPopup />
      <RapidScrollPopup />
    </div>
  );
}
