import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Info, Zap, Shield, Gauge } from 'lucide-react';
import HolographicPanel from '../ui/HolographicPanel';
import MARK_I from '../static/Mark I.jpeg';
import MARK_VII from '../static/Mark VII.jpg';
import HULK_BUSTER from '../static/Hulk Buster.jpg';


const vehicles = [
  {
    id: 1,
    name: 'MARK I',
    image: MARK_I,
    specs: {
      range: '450 miles',
      acceleration: '0-60 mph in 2.4s',
      topSpeed: '200 mph',
      power: '1,020 hp',
    },
    features: [
      'Advanced Autopilot',
      'J.A.R.V.I.S. Integration',
      'Holographic HUD',
      'Biometric Authentication',
    ],
  },
  {
    id: 2,
    name: 'MARK VII',
    image: MARK_VII,
    specs: {
      range: '380 miles',
      acceleration: '0-60 mph in 2.8s',
      topSpeed: '180 mph',
      power: '900 hp',
    },
    features: [
      'Falcon Wing Doors',
      'Adaptive Air Suspension',
      'Stark Shield Technology',
      'Voice Commands',
    ],
  },
  {
    id: 3,
    name: 'HULK BUSTER',
    image: HULK_BUSTER,
    specs: {
      range: '620 miles',
      acceleration: '0-60 mph in 1.9s',
      topSpeed: '250+ mph',
      power: '1,400 hp',
    },
    features: [
      'SpaceX Thrusters',
      'Removable Glass Roof',
      'Quantum Interface',
      'Autonomous Racing Mode',
    ],
  },
];

const VehicleShowcase: React.FC = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);
  const [selectedSpec, setSelectedSpec] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handlePrev = () => {
    setActiveVehicle((prev) => (prev === 0 ? vehicles.length - 1 : prev - 1));
    setSelectedSpec(null);
  };

  const handleNext = () => {
    setActiveVehicle((prev) => (prev === vehicles.length - 1 ? 0 : prev + 1));
    setSelectedSpec(null);
  };

  const vehicle = vehicles[activeVehicle];

  return (
    <section id="models" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-tech-gradient"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-stark text-4xl mb-4">
            VEHICLE <span className="text-electric-blue">SHOWCASE</span>
          </h2>
          <p className="text-reactor-white/70 max-w-2xl mx-auto">
            Explore our revolutionary electric vehicles powered by next-generation arc reactor technology.
            Each model is designed with cutting-edge features and unparalleled performance.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video max-w-2xl mx-auto">
              <div className="absolute inset-0 rounded-lg bg-electric-blue/10 filter blur-md"></div>
              <motion.img
                key={vehicle.id}
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover rounded-lg holographic shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Vehicle HUD Indicators */}
              <div className="absolute top-4 left-4 bg-dark-blue/80 px-3 py-1 rounded font-tech text-electric-blue text-sm">
                {vehicle.name}
              </div>
              
              <div className="absolute bottom-4 left-4 bg-dark-blue/80 px-3 py-1 rounded font-tech text-sm flex items-center">
                <Zap size={14} className="text-electric-blue mr-1" />
                <span className="text-reactor-white">{vehicle.specs.range}</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-dark-blue/80 px-3 py-1 rounded font-tech text-sm flex items-center">
                <Gauge size={14} className="text-electric-blue mr-1" />
                <span className="text-reactor-white">{vehicle.specs.acceleration}</span>
              </div>
              
              {/* Interaction buttons */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-dark-blue/50 rounded-full flex items-center justify-center text-reactor-white hover:bg-electric-blue/70 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-dark-blue/50 rounded-full flex items-center justify-center text-reactor-white hover:bg-electric-blue/70 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* 360 View Indicator */}
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-dark-blue/80 px-3 py-1 rounded font-tech text-xs text-reactor-white/70 flex items-center">
                <span className="mr-1">360° VIEW</span>
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="max-w-xl mx-auto">
              <h3 className="font-stark text-3xl mb-6">
                {vehicle.name} <span className="text-electric-blue">SPECIFICATIONS</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <HolographicPanel 
                  title="RANGE"
                  className={selectedSpec === 'range' ? 'border-2 border-electric-blue' : ''}
                  onClick={() => setSelectedSpec('range')}
                >
                  <div className="flex items-center">
                    <Zap className="text-electric-blue mr-2" size={18} />
                    <p className="font-tech text-xl">{vehicle.specs.range}</p>
                  </div>
                </HolographicPanel>
                
                <HolographicPanel 
                  title="ACCELERATION"
                  className={selectedSpec === 'acceleration' ? 'border-2 border-electric-blue' : ''}
                  onClick={() => setSelectedSpec('acceleration')}
                >
                  <div className="flex items-center">
                    <Gauge className="text-electric-blue mr-2" size={18} />
                    <p className="font-tech text-xl">{vehicle.specs.acceleration}</p>
                  </div>
                </HolographicPanel>
                
                <HolographicPanel 
                  title="TOP SPEED"
                  className={selectedSpec === 'topSpeed' ? 'border-2 border-electric-blue' : ''}
                  onClick={() => setSelectedSpec('topSpeed')}
                >
                  <div className="flex items-center">
                    <p className="font-tech text-xl">{vehicle.specs.topSpeed}</p>
                  </div>
                </HolographicPanel>
                
                <HolographicPanel 
                  title="POWER"
                  className={selectedSpec === 'power' ? 'border-2 border-electric-blue' : ''}
                  onClick={() => setSelectedSpec('power')}
                >
                  <div className="flex items-center">
                    <Shield className="text-electric-blue mr-2" size={18} />
                    <p className="font-tech text-xl">{vehicle.specs.power}</p>
                  </div>
                </HolographicPanel>
              </div>
              
              <div className="holographic p-6 rounded-lg">
                <h4 className="font-stark text-electric-blue mb-4 flex items-center">
                  <Info size={18} className="mr-2" />
                  KEY FEATURES
                </h4>
                <ul className="space-y-3">
                  {vehicle.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                      <span className="text-reactor-white">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <motion.button
                  className="px-6 py-3 bg-electric-blue text-reactor-white font-stark rounded-md flex-1"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 132, 255, 0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  RESERVE NOW
                </motion.button>
                
                <motion.button
                  className="px-6 py-3 holographic text-electric-blue font-stark rounded-md flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  TECHNICAL SPECS
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;