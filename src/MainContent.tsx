import { About } from './sections/about/About';
import { Contact } from './sections/contact/Contact';
import { FunFacts } from './sections/faqs/FunFacts';
import { FloatingNav } from './sections/floating-nav/FloatingNav';
import { Footer } from './sections/footer/Footer';
import { Header } from './sections/header/Header';
import { Navbar } from './sections/navbar/Navbar';
import { Portfolio } from './sections/projects/Projects';
import { Services } from './sections/services/Services';
import { Testimonials } from './sections/testimonials/Testimonials';

export const MainContent = () => (
  <main>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
    <FunFacts />
    <Contact />
    <Footer />
    <FloatingNav />
  </main>
);
