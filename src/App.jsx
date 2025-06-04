import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import Services    from './components/Services';
import Projects    from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer      from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
