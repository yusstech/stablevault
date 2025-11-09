import BusinessHeroSection from './components/BusinessHeroSection';
import BusinessProblemSection from './components/BusinessProblemSection';
import BusinessSolutionSection from './components/BusinessSolutionSection';
import BusinessUseCasesSection from './components/BusinessUseCasesSection';
import BusinessFeaturesSection from './components/BusinessFeaturesSection';
import BusinessResultsSection from './components/BusinessResultsSection';
import BusinessSecuritySection from './components/BusinessSecuritySection';
import BusinessCTASection from './components/BusinessCTASection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Relyr for Business | Run a Global Business from Africa',
  description: 'Pay suppliers globally, collect from customers worldwide, manage payroll across borders. All from one platform built for African businesses.',
};

export default function BusinessPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <BusinessHeroSection />
      <BusinessProblemSection />
      <BusinessSolutionSection />
      <BusinessUseCasesSection />
      <BusinessFeaturesSection />
      <BusinessResultsSection />
      <BusinessSecuritySection />
      <BusinessCTASection />
      <Footer />
    </main>
  );
}
