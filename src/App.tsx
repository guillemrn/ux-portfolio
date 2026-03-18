import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Scroll to top on route change
const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div data-theme="light" className="min-h-screen bg-white text-brand-dark font-sans font-normal selection:bg-brand-accent selection:text-brand-dark flex flex-col">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-110 focus:bg-brand-dark focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-sans focus:font-bold focus:outline-none focus:ring-2 focus:ring-brand-accent">
            Saltar al contenido principal
          </a>
          <CustomCursor />
          <Header />
          <main id="main-content" className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </MotionConfig>
    </Router>
  );
}

export default App;
