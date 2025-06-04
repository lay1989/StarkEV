import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HolographicPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const HolographicPanel: React.FC<HolographicPanelProps> = ({ 
  title, 
  children,
  className = '',
}) => {
  return (
    <motion.div 
      className={`holographic rounded-md p-4 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        boxShadow: '0 0 15px rgba(0, 132, 255, 0.5), inset 0 0 10px rgba(0, 132, 255, 0.5)' 
      }}
    >
      {title && (
        <div className="mb-2 font-tech text-xs text-electric-blue flex items-center">
          <span className="mr-2">[ {title} ]</span>
          <div className="flex-grow h-px bg-electric-blue/30"></div>
        </div>
      )}
      <div className="text-reactor-white">
        {children}
      </div>
    </motion.div>
  );
};

export default HolographicPanel;