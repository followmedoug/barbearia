import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SectionDivider } from "./components/SectionDivider";

function App() {
  return (
    <div className="bg-[#121414] text-[#e2e2e2] min-h-screen selection:bg-[#d4af37] selection:text-[#3c2f00]">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Barbers />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
