import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import PiCalculator from "./components/PiCalculator";
import PiMemorization from "./components/PiMemorization";
import VisualDemonstrations from "./components/VisualDemonstrations";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pi-calculator" element={<PiCalculator />} />
          <Route path="/pi-memorization" element={<PiMemorization />} />
          <Route path="/visual-demonstrations" element={<VisualDemonstrations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
