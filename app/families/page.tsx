import FamiliesHeroSection from './components/FamiliesHeroSection';
import FamiliesProblemSection from './components/FamiliesProblemSection';
import FamiliesSolutionSection from './components/FamiliesSolutionSection';
import FamiliesHowItWorksSection from './components/FamiliesHowItWorksSection';
import FamiliesStoriesSection from './components/FamiliesStoriesSection';
import FamiliesUseCasesSection from './components/FamiliesUseCasesSection';
import FamiliesSavingsSection from './components/FamiliesSavingsSection';
import FamiliesCTASection from './components/FamiliesCTASection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Relyr for Families | Send Money Home Instantly and Safely',
  description: 'Send money home as easily as sending a text. Your family sees it in minutes. Save up to 85% on fees vs traditional methods.',
};

export default function FamiliesPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <FamiliesHeroSection />
      <FamiliesProblemSection />
      <FamiliesSolutionSection />
      <FamiliesHowItWorksSection />
      <FamiliesStoriesSection />
      <FamiliesUseCasesSection />
      <FamiliesSavingsSection />
      <FamiliesCTASection />
      <Footer />
    </main>
  );
}
