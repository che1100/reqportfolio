
import './App.css';
import Navbar from "./components/navbar";
import Home from './components/home';
import CertificateCarousel from './components/cert';
import AboutSection from './components/about';
import PortfolioItems from './components/portfolio';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
  <>
      <Navbar />
      <Home />
      <AboutSection />
      <PortfolioItems />
      <CertificateCarousel />
      <Experience />
      <Contact />
      <Footer />
    </> 
  );
}

export default App;
