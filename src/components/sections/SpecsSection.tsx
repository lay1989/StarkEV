import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Battery, Gauge, Thermometer, AreaChart } from 'lucide-react';
import HolographicPanel from '../ui/HolographicPanel';

const SpecsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const specs = {
    performance: [
      { label: 'Acceleration (0-60 mph)', value: '2.4 seconds' },
      { label: 'Top Speed', value: '200 mph' },
      { label: 'Peak Power', value: '1,020 hp' },
      { label: 'Torque', value: '1,050 lb-ft' },
      { label: 'Quarter Mile', value: '9.23 seconds' },
      { label: 'Braking (60-0 mph)', value: '100 ft' },
    ],
    battery: [
      { label: 'Battery Capacity', value: '150 kWh' },
      { label: 'Arc Reactor Output', value: '350 kW' },
      { label: 'Maximum Range', value: '450 miles' },
      { label: 'Fast Charge Rate', value: '250 kW' },
      { label: 'Charging Time (10-80%)', value: '15 minutes' },
      { label: 'Battery Lifespan', value: '1,000,000 miles' },
    ],
    dimensions: [
      { label: 'Length', value: '196 inches' },
      { label: 'Width', value: '78 inches' },
      { label: 'Height', value: '56 inches' },
      { label: 'Wheelbase', value: '118 inches' },
      { label: 'Weight', value: '4,560 lbs' },
      { label: 'Cargo Capacity', value: '28 cubic ft' },
    ],
    technology: [
      { label: 'Processing Power', value: '15 TFLOPS' },
      { label: 'Display Resolution', value: '8K Holographic' },
      { label: 'Connectivity', value: 'Stark Satellite Network' },
      { label: 'Sensors', value: '22 Advanced Sensors' },
      { label: 'J.A.R.V.I.S. Version', value: '9.3.4' },
      { label: 'Software Updates', value: 'Over-the-air weekly' },
    ],
  };

  const tabIcons = {
    performance: <Gauge size={20} />,
    battery: <Battery size={20} />,
    dimensions: <AreaChart size={20} />,
    technology: <Thermometer size={20} />,
  };

  return (
    <section id="specs" className="py-24 relative" ref={ref}>
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
            TECHNICAL <span className="text-electric-blue">SPECIFICATIONS</span>
          </h2>
          <p className="text-reactor-white/70 max-w-2xl mx-auto">
            Explore the detailed specifications of our Stark Industries MARK I electric vehicle,
            featuring next-generation technology derived from advanced research.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Spec Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {Object.keys(specs).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-stark text-sm flex items-center ${
                  activeTab === tab 
                    ? 'bg-electric-blue text-reactor-white'
                    : 'holographic text-electric-blue'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{tabIcons[tab as keyof typeof tabIcons]}</span>
                {tab.toUpperCase()}
              </motion.button>
            ))}
          </div>
          
          {/* Active Spec Panel */}
          <HolographicPanel className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center mr-3">
                {tabIcons[activeTab as keyof typeof tabIcons]}
              </div>
              <h3 className="font-stark text-electric-blue text-xl">
                {activeTab.toUpperCase()} SPECIFICATIONS
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {specs[activeTab as keyof typeof specs].map((spec, index) => (
                <motion.div 
                  key={index}
                  className="flex justify-between items-center border-b border-electric-blue/20 pb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-reactor-white/80">{spec.label}</span>
                  <span className="font-tech text-electric-blue">{spec.value}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-dark-blue/50 rounded-full">
                <Zap size={16} className="text-electric-blue mr-2" />
                <span className="text-xs text-reactor-white/70">
                  All specifications based on latest Stark Industries testing
                </span>
              </div>
            </div>
          </HolographicPanel>
          
          {/* Arc Reactor Banner */}
          <motion.div 
            className="mt-16 relative holographic p-8 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-electric-blue/10 filter blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h3 className="font-stark text-electric-blue text-2xl mb-4">
                  POWERED BY ARC REACTOR TECHNOLOGY
                </h3>
                <p className="text-reactor-white/80 mb-4">
                  The heart of every Stark EV is our revolutionary miniaturized Arc Reactor,
                  delivering clean, sustainable energy with unparalleled power density.
                </p>
                <div className="font-tech text-xs space-y-1 text-reactor-white/70">
                  <div className="flex items-center">
                    <span className="text-electric-blue mr-2">{'>'}</span>
                    <span>100% clean energy production</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-electric-blue mr-2">{'>'}</span>
                    <span>150kWh capacity with rapid charging</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-electric-blue mr-2">{'>'}</span>
                    <span>Self-maintaining power system</span>
                  </div>
                </div>
                
                <motion.button
                  className="mt-6 px-6 py-2 holographic text-electric-blue font-stark rounded-md text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEARN MORE
                </motion.button>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full bg-electric-blue/30 animate-pulse-glow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-dark-blue border-4 border-electric-blue flex items-center justify-center relative">
                      <div className="w-12 h-12 rounded-full bg-electric-blue/80 animate-pulse-glow flex items-center justify-center">
                        <Zap size={24} className="text-reactor-white" />
                      </div>
                      <div className="absolute inset-0 border-2 border-electric-blue/50 rounded-full animate-spin-slow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;