import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StepsSection from '@/components/steps-section';
import PricingSection from '@/components/pricing-section';
import UploadForm from '@/components/upload-form';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';
import TaxInfoCard from '@/components/tax-info-card';
import CookieBanner from '@/components/cookie-banner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StepsSection />
        <PricingSection />
        <TaxInfoCard />
        <UploadForm />
        <FaqSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
