import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Cpu, Battery, Globe, Lock } from 'lucide-react';
import HolographicPanel from '../ui/HolographicPanel';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="holographic rounded-lg p-6"
    >
      <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center mb-4 arc-reactor-glow">
        {icon}
      </div>
      <h3 className="font-stark text-electric-blue text-xl mb-2">{title}</h3>
      <p className="text-reactor-white/80 text-sm">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const features = [
    {
      icon: <Zap className="text-electric-blue" size={24} />,
      title: 'ARC REACTOR POWER',
      description: 'Advanced clean energy technology delivering unprecedented range and performance with zero emissions.',
    },
    {
      icon: <Shield className="text-electric-blue" size={24} />,
      title: 'STARK SHIELD',
      description: 'Revolutionary safety systems with predictive collision avoidance and reinforced exoskeleton structure.',
    },
    {
      icon: <Cpu className="text-electric-blue" size={24} />,
      title: 'J.A.R.V.I.S. AI',
      description: 'Integrated artificial intelligence assistant with natural language processing and vehicle control.',
    },
    {
      icon: <Battery className="text-electric-blue" size={24} />,
      title: 'RAPID CHARGING',
      description: '0-80% charge in under 15 minutes with our proprietary Repulsor Charging technology.',
    },
    {
      icon: <Globe className="text-electric-blue" size={24} />,
      title: 'GLOBAL NETWORK',
      description: 'Access to exclusive Stark charging stations worldwide with premium amenities.',
    },
    {
      icon: <Lock className="text-electric-blue" size={24} />,
      title: 'BIOMETRIC SECURITY',
      description: 'Advanced biometric authentication systems ensuring only authorized access to your vehicle.',
    },
  ];

  return (
    <section id="features" className="py-24 relative" ref={ref}>
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
            ADVANCED <span className="text-electric-blue">FEATURES</span>
          </h2>
          <p className="text-reactor-white/70 max-w-2xl mx-auto">
            Our vehicles incorporate technology derived from the most advanced research at Stark Industries,
            delivering unprecedented performance, safety, and intelligence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12">
                <div className="w-full h-full border-t-2 border-l-2 border-electric-blue"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12">
                <div className="w-full h-full border-b-2 border-r-2 border-electric-blue"></div>
              </div>
              
              <HolographicPanel className="p-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 className="font-stark text-electric-blue text-2xl mb-4">
                      STARK AR VISUALIZER
                    </h3>
                    <p className="text-reactor-white/80 mb-6">
                      Experience your STARK EV before it's built. Our augmented reality system allows you to 
                      visualize your vehicle with different configurations in your own environment.
                    </p>
                    <div className="font-tech text-sm space-y-2 text-reactor-white/70">
                      <div className="flex items-center">
                        <span className="text-electric-blue mr-2">{'>'}</span>
                        <span>Real-time customization</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-electric-blue mr-2">{'>'}</span>
                        <span>Interactive feature exploration</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-electric-blue mr-2">{'>'}</span>
                        <span>J.A.R.V.I.S. guided tour</span>
                      </div>
                    </div>
                    
                    <motion.button
                      className="mt-8 px-6 py-3 bg-electric-blue text-reactor-white font-stark rounded-md"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 132, 255, 0.7)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LAUNCH AR EXPERIENCE
                    </motion.button>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="relative aspect-square max-w-sm mx-auto">
                      <div className="absolute inset-0 rounded-full bg-electric-blue/10 filter blur-md"></div>
                      <img 
                        src="StarkEV/src/components/static/AR Visualization.jpeg" 
                        alt="AR Visualization" 
                        className="w-full h-full object-cover rounded-lg holographic shadow-lg"
                      />
                      
                      {/* HUD Overlay */}
                      <div className="absolute inset-0 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="none"
                            stroke="#0084FF"
                            strokeWidth="0.5"
                            strokeDasharray="1,3"
                            className="animate-spin-slow"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#0084FF"
                            strokeWidth="0.2"
                          />
                        </svg>
                      </div>
                      
                      <div className="absolute top-4 left-4 bg-dark-blue/80 px-2 py-1 rounded font-tech text-xs text-electric-blue">
                        AR MODE
                      </div>
                    </div>
                  </div>
                </div>
              </HolographicPanel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;