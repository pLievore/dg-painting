import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { CoverageArea } from '@/components/CoverageArea';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Stats />
        <About />
        <Process />
        <Testimonials />
        <CoverageArea />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
