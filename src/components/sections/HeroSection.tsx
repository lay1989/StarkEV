import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Shield } from 'lucide-react';
import HolographicPanel from '../ui/HolographicPanel';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const welcomeText = "Welcome to the future of electric vehicles. Powered by Stark Industries.";
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && currentIndex < welcomeText.length) {
      const typingTimer = setTimeout(() => {
        setTypedText(welcomeText.substring(0, currentIndex + 1));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);
      
      return () => clearTimeout(typingTimer);
    }
  }, [inView, currentIndex, welcomeText]);

  const handleScrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12" ref={sectionRef}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tech-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between h-[80vh] min-h-[600px]">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg"
            >
              <h1 className="font-stark text-4xl md:text-6xl text-reactor-white mb-4">
                STARK<span className="text-electric-blue">EV</span>
              </h1>
              
              <div className="h-16 mb-6">
                <p className="font-tech text-reactor-white/90 text-lg">
                  {typedText}
                  <span className="inline-block w-2 h-5 bg-electric-blue animate-pulse ml-1"></span>
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <HolographicPanel title="CLEAN ENERGY">
                  <div className="flex items-center">
                    <Zap className="text-electric-blue mr-2" size={18} />
                    <p className="text-sm">100% sustainable, powered by arc reactor technology</p>
                  </div>
                </HolographicPanel>
                
                <HolographicPanel title="RANGE">
                  <div className="flex items-center">
                    <div className="text-electric-blue mr-2 font-tech">450+</div>
                    <p className="text-sm">Miles on a single charge</p>
                  </div>
                </HolographicPanel>
                
                <HolographicPanel title="SAFETY">
                  <div className="flex items-center">
                    <Shield className="text-electric-blue mr-2" size={18} />
                    <p className="text-sm">Advanced protective systems with J.A.R.V.I.S. assistance</p>
                  </div>
                </HolographicPanel>
              </div>
              
              <div className="flex space-x-4">
                <motion.button
                  className="px-8 py-3 bg-electric-blue text-reactor-white font-stark rounded-md"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 132, 255, 0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  RESERVE NOW
                </motion.button>
                
                <motion.button
                  className="px-8 py-3 holographic text-electric-blue font-stark rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EXPLORE
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Placeholder for 3D Model - in real implementation, this would be a Three.js component */}
              <div className="absolute inset-0 rounded bg-electric-blue/10 animate-pulse-glow"></div>
              <motion.img 
                src="StarkEV/src/components/static/new.jpg" 
                alt="Electric Vehicle" 
                className="rounded-xl object-cover w-full h-full"
                initial={{ opacity: 0, rotateY: -20 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              />
              
              {/* HUD-style overlay elements */}
              
              <div className="absolute bottom-1/4 -right-12 hud-element">
                <div className="bg-dark-blue/80 p-2 rounded">
                  <p className="text-electric-blue font-tech text-xs">ACCELERATION</p>
                  <p className="text-reactor-white text-xs">0-60 in 2.4s</p>
                </div>
                <div className="absolute top-1/2 -right-6 w-6 h-px bg-electric-blue"></div>
                <div className="bg-dark-blue/80 p-2 rounded mt-2">
                  <p className="text-electric-blue font-tech text-xs">AERODYNAMICS</p>
                  <p className="text-reactor-white text-xs">0.21 Cd</p>
                </div>
                <div className="absolute top-1/2 -left-6 w-6 h-px bg-electric-blue"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.button
            onClick={handleScrollToStats}
            className="flex flex-col items-center text-electric-blue"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm mb-1">SCROLL</span>
            <ChevronDown size={24} />
          </motion.button>
        </div>
      </div>
      
      {/* Key Stats Section */}
      <div ref={statsRef} className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="holographic p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-stark text-electric-blue mb-2">POWER OUTPUT</h3>
            <p className="font-tech text-4xl text-reactor-white">1,020 <span className="text-sm">HP</span></p>
            <p className="text-sm text-reactor-white/70 mt-2">Dual motor all-wheel drive</p>
          </motion.div>
          
          <motion.div 
            className="holographic p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-stark text-electric-blue mb-2">TOP SPEED</h3>
            <p className="font-tech text-4xl text-reactor-white">200 <span className="text-sm">MPH</span></p>
            <p className="text-sm text-reactor-white/70 mt-2">With advanced stabilization</p>
          </motion.div>
          
          <motion.div 
            className="holographic p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-stark text-electric-blue mb-2">BATTERY</h3>
            <p className="font-tech text-4xl text-reactor-white">150 <span className="text-sm">kWh</span></p>
            <p className="text-sm text-reactor-white/70 mt-2">Next-gen arc reactor technology</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;