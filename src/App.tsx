import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import VehicleShowcase from './components/sections/VehicleShowcase';
import FeaturesSection from './components/sections/FeaturesSection';
import SpecsSection from './components/sections/SpecsSection';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import { BootSequenceProvider } from './context/BootSequenceContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate boot sequence loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BootSequenceProvider>
      <div className="min-h-screen bg-space-black text-reactor-white overflow-hidden relative">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
            <Header />
            <main>
              <HeroSection />
              <VehicleShowcase />
              <FeaturesSection />
              <SpecsSection />
            </main>
            <Footer />
          </>
        )}
      </div>
    </BootSequenceProvider>
  );
}

export default App;