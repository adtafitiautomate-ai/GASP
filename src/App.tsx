import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
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
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import ScrollToTop from './components/layout/ScrollToTop';
import SEO from './components/seo/SEO';

const StudioPage = lazy(() => import('./pages/StudioPage'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className="flex-grow bg-background"
      >
        <Routes location={location}>
          <Route
            path="/studio/*"
            element={
              <Suspense fallback={<div className="grid min-h-screen place-items-center bg-white text-primary">Loading Studio...</div>}>
                <StudioPage />
              </Suspense>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/impact" element={<ImpactEPR />} />
          <Route path="/value-chain" element={<ValueChain />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/gallery" element={<GalleryEvents />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
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

function AppShell() {
  const location = useLocation();
  const isStudio = location.pathname.startsWith('/studio');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SEO />
      {!isStudio && <Navbar />}
      {!isStudio && <ScrollToTop />}
      <AnimatedRoutes />
      {!isStudio && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;

