import FreelancerHeroSection from './components/FreelancerHeroSection';
import FreelancerProblemSection from './components/FreelancerProblemSection';
import FreelancerSolutionSection from './components/FreelancerSolutionSection';
import FreelancerHowItWorksSection from './components/FreelancerHowItWorksSection';
import FreelancerUseCasesSection from './components/FreelancerUseCasesSection';
import FreelancerFeaturesSection from './components/FreelancerFeaturesSection';
import FreelancerTestimonialsSection from './components/FreelancerTestimonialsSection';
import FreelancerComparisonSection from './components/FreelancerComparisonSection';
import FreelancerFAQSection from './components/FreelancerFAQSection';
import FreelancerCTASection from './components/FreelancerCTASection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Relyr for Freelancers | Get Paid Instantly from Anywhere',
  description: 'Stop waiting for international payments. Get paid by clients anywhere in the world in under 5 minutes. No PayPal restrictions, no hidden fees, no frustration.',
};

export default function FreelancersPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <FreelancerHeroSection />
      <FreelancerProblemSection />
      <FreelancerSolutionSection />
      <FreelancerHowItWorksSection />
      <FreelancerUseCasesSection />
      <FreelancerFeaturesSection />
      <FreelancerTestimonialsSection />
      <FreelancerComparisonSection />
      <FreelancerFAQSection />
      <FreelancerCTASection />
      <Footer />
    </main>
  );
}
