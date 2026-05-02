import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import ImpactEPR from './pages/ImpactEPR';
import ValueChain from './pages/ValueChain';
import Partnerships from './pages/Partnerships';
import GalleryEvents from './pages/GalleryEvents';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import MassFlows from './pages/MassFlows';
import EPRModels from './pages/EPRModels';
import ScrollToTop from './components/layout/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className="flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/impact" element={<ImpactEPR />} />
          <Route path="/value-chain" element={<ValueChain />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/gallery" element={<GalleryEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mass-flows" element={<MassFlows />} />
          <Route path="/epr-models" element={<EPRModels />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
